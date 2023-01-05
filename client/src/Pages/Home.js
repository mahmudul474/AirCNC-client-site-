import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SearchForm from "../Components/Form/SearchForm";
import ExpCard  from ".././Components/Card/ExpCard"
import { Link } from "react-router-dom";
 import HomeCard from ".././Components/Card/HomeCard"

const Home = () => {


const  [allexp,setAllExp]=useState([])


  useEffect(()=>{
     fetch("expdata.json")
     .then((response) => response.json())
     .then(data=>{
      console.log(data)
      setAllExp(data)
      
     })
  },[])



  return (
    <>
      <div className="grid grid-cols-12">
        <div className="lg:col-span-4">
          <SearchForm></SearchForm>
        </div>
        <div className="flex flex-col lg:col-span-7">
          <div>
            <div className=" flex justify-between">
              <h2 className="text-xl capitalize font-bold">Home</h2>
              <Link className="" to="">
                <p>see all</p>
              </Link>
            </div>
            <div className="grid  md:grid-col-2 grid-cols-1 lg:grid-cols-3 gap-5">
              {[...Array(10)].map((exp) => (
                <HomeCard></HomeCard>
              ))}
            </div>
          </div>

          <div>
            <div className=" flex justify-between">
              <h2 className="text-xl capitalize font-bold">Experiens</h2>
              <Link className="" to="">
                <p>see all</p>
              </Link>
            </div>
            <div className="grid  md:grid-col-2 grid-cols-1 lg:grid-cols-4 gap-5">
              {allexp.map((exp) => (
                <ExpCard exp={exp} key={exp._id}></ExpCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
