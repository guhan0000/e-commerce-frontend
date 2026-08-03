import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  let { loggedIn, login, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  function handleLogout() {
    console.log("Logout clicked");
    logout();
  }
  // function handleLogout() {
  //   console.log("logout clicked");

  //   localStorage.removeItem("loggedIn");
  //   navigate("/login");
  // }
  // localStorage.getItem("isLoggedIN") &&
  //   localStorage.getItem("isLoggedIN") === true &&
  //   console.log("user logged in");
  // console.log(Boolean(localStorage.getItem("isLoggedIN")) === "true");

  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary">
        <div className="container">
          {/* <a className="navbar-brand" href="#">
            E-Shop
          </a> */}
          <Link className="navbar-brand" to="/">
            E-Shop
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {loggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/favourites">
                      Favourites
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      Cart
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="btn nav-link" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
              {!loggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
