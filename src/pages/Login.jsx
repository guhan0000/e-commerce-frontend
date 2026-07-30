import React, { useState } from "react";

const Login = () => {
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
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          required
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
