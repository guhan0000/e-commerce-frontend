import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-primary">
        <div className="container">
          {/* <a className="navbar-brand" href="#">
            E-Shop
          </a> */}
          <Link className="navbar-brand" to="#">
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
              <li className="nav-item">
                <Link className="nav-link" to="">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Favourites</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
