const express = require("express");
const cors = require("cors");
require("dotenv").config();
var jwt = require("jsonwebtoken");
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

//genaral server 

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.listen(port, () => {
  console.log(`Server is running...on ${port}`);
});

//database

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@474.79d3jxt.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

const run = async () => {
  try {
    const userCollections = client.db("AirCNC").collection("users");

    app.put("/users/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const fiter = { email: email };
      const options = { upsert: true };
      const uptadedoc = {
        $set: { user }
      };

      const result = await userCollections.updateOne(fiter, uptadedoc, options);

      //genaret  Tokens
      const token = jwt.sign(user, process.env.SECRET_TOKEN, {
        expiresIn: "1h"
      });
      res.send({ result, token });
    });
  } finally {
  }
};
run().catch((err) => console.log(err));

