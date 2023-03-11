import React from 'react';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { signin } from "../Actions/UserActions";

import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((store) => store.userSignin);
  const { loading, error, response } = userSignin;

  const dispatch = useDispatch();

  const OnSignin = () => {
    dispatch(signin(email, password));
  };
  return (
   <>
    <div>
      <section class="vh-100 mb-900">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>
        <form> 
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg"   onChange={(e) => {
                setEmail(e.target.value);
              }} />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg"    onChange={(e) => {
                setPassword(e.target.value);
              }} />
            <label class="form-label" for="form1Example23">Password</label>
          </div>
          <div class="form-outline mb-4">
          <a href="#!">Forgot password?</a>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            
          </div>
          <Link to={"/home"}> <button type="submit"  onClick={OnSignin} class="btn btn-primary btn-lg btn-block">Sign in</button></Link>     
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
   </>
  )
}

export default Login
