import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkUser } from "../../services/AuthService";

const AuthModule = () => {
  const navigate = useNavigate();

  // redirect already authenticated users back to home
  
  useEffect(() => {
    
    if (checkUser()) {
      alert("You are already logged in");
      window.location.href = "/";
    }
  }, []);
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <div className="flex space-x-4">
          <Link to="/auth/register">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Register
            </button>
          </Link>
          <Link to="/auth/login">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Login
            </button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default AuthModule;
