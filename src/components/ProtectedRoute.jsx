import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext);

  return loggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
