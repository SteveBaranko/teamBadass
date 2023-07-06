import React from "react";
import { Link } from "react-router-dom";

const AuthModule = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="flex space-x-4">
        <Link to="/register">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AuthModule;