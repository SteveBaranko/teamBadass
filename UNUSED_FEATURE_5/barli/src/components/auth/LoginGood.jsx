import React from "react";
import { Link } from "react-router-dom";
import { Home } from "../Users";

// You must make sure to check this protected route even when manually typing in url
// or you can easily bypass the auth
const LoginGood = () => {
  return (
    <div>
      <h1>
        I hate that react router dom v5 ever existed
  
      </h1>
      <button>
        <Link to="/home">Go back.</Link>
      </button>
    </div>
  );
};

export default LoginGood;
