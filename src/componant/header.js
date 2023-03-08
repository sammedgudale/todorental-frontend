import React from "react";
import logo from "../assets/logo.png";
function header() {
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src={logo} alt="" width="200" height="100%" />
            </a>
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
                  <a class="nav-link active" aria-current="page" href="/home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    View Property
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form class="d-flex">
                <a href="login">
                  <button type="button" class="btn btn-secondary">
                    Login
                  </button>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="register">
                  <button class="btn btn-outline-success" type="button">
                    Register
                  </button>
                </a>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default header;
