import React from 'react'
import homeimg from '../assets/h1.png'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { logout } from "../Actions/UserActions";
import Header from "./header"

const Home = () => {
  const dispatch = useDispatch();
    const [url, setUrl] = useState("");
    const userSignin = useSelector((store) => store.userSignin);
    const { loading, error, response } = userSignin;
  
    const onLgout = () => {
      dispatch(logout());
    };
  
    useEffect(() => {
      if (response && response.role === "ADMIN") {
        setUrl("/adminprofile");
      } else if (response && response.role === "OWNER") {
        setUrl("/owenerprofile");
      } else if (response && response.role === "SEEKER") {
        setUrl("/seekerprofile");
      } else if (response && response.status === "error") {
        alert(response.error);
      } else if (error) {
        alert(error);
      }
    }, [loading, error, response]);
  return (

<div class="container col-xxl-9  py-5 pt-0">
  <Header/>

    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={homeimg} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <Link to={url}><button>Profile</button></Link>
        <h1 class="display-5 fw-bold lh-1 mb-3">TODO Rental mobile-first sites with Bootstrap</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">View Our Property</button>
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default Home


