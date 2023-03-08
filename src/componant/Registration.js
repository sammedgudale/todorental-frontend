import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../action/UserActions";
import r from '../assets/register.jpg';

const Registration = (props) => {
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [contact_number, setContactNo] = useState("");
    const [role, setRole] = useState("");

  const dispatch = useDispatch();

  const userSignup = useSelector((store) => store.userSignup);

  const { loading, response, error } = userSignup;

  const onSignup = () => {
    dispatch(
      signup( first_name,
        last_name,
        email,
        password,
        contact_number,
        role)
    );
  };

  const Alert = () => {
    alert("Thank You For Registration !!!!");
  };

  useEffect(() => {
    if (response && response.status == "success") {
      props.history.push("/login");
    } else if (error) {
      // there is an error while making the API call
      console.log(error);
      alert("error while making API call");
    }
  }, [loading, response, error]);

  const Role = (e) => {
    setRole(e.target.value);
  };
  return (
<>
<section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card-white text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4" novalidate >
                

                <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                        <select onChange={Role} class="form-control">
                        <option>Choose..</option>
                        <option>ADMIN</option>
              <option>OWNER</option>
              <option>SEEKER</option>
                        </select>
                     
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control"  onChange={(e) => {
                  setFirst_name(e.target.value);
                }} />
                      <label class="form-label" for="form3Example1c" >First Name</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control"  onChange={(e) => {
                  setLast_name(e.target.value);
                }} />
                      <label class="form-label" for="form3Example1c">Last Name</label>
                    </div>
                  </div>
                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control"  onChange={(e) => {
                  setEmail(e.target.value);
                }} />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" onChange={(e) => {
                  setPassword(e.target.value);
                }} class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="number" id="form3Example4c" onChange={(e) => {
                  setContactNo(e.target.value);
                }} class="form-control" />
                      <label class="form-label" for="form3Example4c">Contact No</label>
                    </div>
                  </div>

                  {/* <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div> */}

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

              
                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Link to="/login">
                    <button type="submit" onClick={(Alert, onSignup)} class="btn btn-primary btn-lg">Register</button>
                    </Link>
                    
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={r}
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> 
<br/><br/>
      </>
  )
}

export default Registration

