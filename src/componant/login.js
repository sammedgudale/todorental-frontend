import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


import { signin } from "../action/UserActions";

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
    <div className=" container col-sm-10 text-center mt-5">
      <div className="container col-sm-6 bg-light mt-5 border border-dark border-5">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <Link
            to="/"
            onClick={OnSignin}
            type="submit"
            className="btn btn-primary float-left"
          >
            Login
          </Link>

          <Link
            type="button"
            className="btn btn-outline-primary float-left ml-4"
            to="/forgotpass"
          >
            Forgot Password
          </Link>

          <p className="col-sm-auto float-left ml-2 ">New User?</p>

          <Link
            type="button"
            className="btn btn-outline-primary float-right"
            to="/registration"
          >
            Register Here
          </Link>
          <br></br>
          <br></br>
        </form>
      </div>
    </div>
   </>
  )
}

export default Login
