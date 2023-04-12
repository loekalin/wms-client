import React from "react";
import { Navigate } from "react-router-dom";
import { authStore } from "@/Lib/authStore";

const AuthMiddleware = ({ children }) => {
  const isLoggeddIn = authStore((state) => state.isLoggedIn);
    console.log(isLoggeddIn)
  return isLoggeddIn ?  children  : <Navigate to="/" />;
};

export default AuthMiddleware;
