import React, { createContext, useState } from "react";
import { Children } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("isLoggedIN") === "true",
  );
  const login = () => {
    localStorage.setItem("isLoggedIN", "true");
    setLoggedIn(true);
    navigate("/");
  };
  const logout = () => {
    localStorage.removeItem("isLoggedIN");
    setLoggedIn(false);
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
