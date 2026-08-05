import React, { createContext, useState } from "react";
import { Children } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // console.log(localStorage.getItem("user"));
  // console.log(JSON.parse(localStorage.getItem("user")));

  // const savedUser = JSON.parse(localStorage.getItem("user"));
  // console.log(savedUser);

  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIN") === "true",
  );
  const [savedUser, setSavedUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user") || null);
  });

  const login = () => {
    localStorage.setItem("isLoggedIN", "true");
    setLoggedIn(true);
    setSavedUser(JSON.parse(localStorage.getItem("user")));
    navigate("/");
  };
  const logout = () => {
    localStorage.removeItem("isLoggedIN");
    setLoggedIn(false);
    navigate("/login");
    setSavedUser({});
  };
  return (
    <AuthContext.Provider value={{ loggedIn, savedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
