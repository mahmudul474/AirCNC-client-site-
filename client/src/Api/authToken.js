export const getauthToken = (user) => {
  const curentuser = {
    user: user.email
  };


    fetch(`http://localhost:5000/users/${user.email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(curentuser)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('AircncToken', data.token);
      });

};
