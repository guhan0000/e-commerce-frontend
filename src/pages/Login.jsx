import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate("/");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    console.log(loginData);

    console.log(loginData.email);
    console.log(user.email);

    console.log(loginData.email === user.email);

    if (
      loginData &&
      loginData.email === user.email &&
      loginData.password === user.password
    ) {
      console.log("login successful");
      localStorage.setItem("isLoggedIN", true);
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <div className="container mt-5 pt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      className="form-control"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <button className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
