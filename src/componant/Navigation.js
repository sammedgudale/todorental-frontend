import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { logout } from "../Actions/UserActions";

import "../App.css";

const Navigation = (props) => {
  const dispatch = useDispatch();
  const userSignin = useSelector((store) => store.userSignin);
  const { loading, error, response } = userSignin;

  const [url, setUrl] = useState("");

  const onLgout = () => {
    dispatch(logout());
  };

  useEffect(() => {
;
    if (response && response.role == "ADMIN") {
      setUrl("/adminprofile");
    } else if (response && response.role === "OWNER") {
      setUrl("/ownerprofile");
    } else if (response && response.role == "SEEKER") {
      setUrl("/seekerprofile");
    } else if (response && response.status == "error") {
      alert(response.error);
    } else if (error) {
      alert(error);
    }
  }, [loading, error, response]);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Accomodation
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link type="button" class="btn btn-outline-primary mr-3" to="/login">
          Login
        </Link>
        <Link
          type="button"
          class="btn btn-outline-primary mr-5"
          to="/registration"
        >
          Registration
        </Link>
      </nav>
    </div>
  );
};

export default Navigation;
