import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FavContext } from "../context/FavContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { loggedIn, savedUser, login, logout, register } =
    useContext(AuthContext);
  const { favourites } = useContext(FavContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
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
                    <Link
                      className="nav-link position-relative"
                      to="/favourites"
                    >
                      Favourites
                      <i className="bi bi-heart-fill"></i>
                      {favourites.length > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {favourites.length}
                        </span>
                      )}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link position-relative" to="/cart">
                       Cart

                      {cartCount > 0 && (
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                          {cartCount}
                        </span>
                      )}
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    {/* <Link className="btn nav-link" onClick={handleLogout}>
                      Logout
                    </Link> */}
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {savedUser?.userName + " !"}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </Link>
                      </li>
                    </ul>
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
