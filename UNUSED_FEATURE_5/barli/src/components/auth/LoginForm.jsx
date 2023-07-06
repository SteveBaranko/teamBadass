import React, { useState, } from "react";
import ProtectedRoute from "../../common/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { checkUserCredentials, getUserId } from "../../services/AuthService";
import { useParams } from "react-router-dom";
import { getCurrentUser } from "../../services/AuthService";

const LoginForm = () => {
  const { userId } = getUserId();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const buttonHandler = async () => {
    try {
      const authenticated = await checkUserCredentials(username, password);
      if (authenticated) {
        navigate("/user/" + userId + "/home");
      } else {
        alert("You are not authenticated!");
      }
    } catch (error) {
      console.error("Error while logging in:", error);
      alert("An error occurred while logging in.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="max-w-md w-full bg-white shadow p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={buttonHandler}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;