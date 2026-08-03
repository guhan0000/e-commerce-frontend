import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const savedUser = useContext(AuthContext);
  const [user, setUser] = useState({ userName: "", email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Register</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Name"
                      name="userName"
                      onChange={handleChange}
                      required
                      value={user.userName}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      onChange={handleChange}
                      required
                      value={user.email}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      name="password"
                      onChange={handleChange}
                      required
                      value={user.password}
                      className="form-control"
                    />
                  </div>
                  {/* <input type="submit" value="Register" /> */}
                  <button className="btn btn-primary">Register</button>
                  {/* <button
                    onClick={() => {
                      setUser({ userName: "", email: "", password: "" });
                    }}
                    className="btn btn-secondary ms-2"
                    type="reset"
                  >
                    Reset
                  </button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
