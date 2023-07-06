//make a react component with a checkbox
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

const AuthLogin = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  useEffect(() => {
    if (checkUser()) {
      alert("You are already logged in");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <LoginForm />
    </div>
  );
};
export default AuthLogin;
  