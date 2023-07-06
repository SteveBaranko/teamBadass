import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({ user, isLogin, onChange, onSubmit }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <form onSubmit={onSubmit} autoComplete="off">
          {!isLogin && (
            <div>
              <div className="form-group">
                <label className="text-gray-800">First Name</label>
                <br />
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={user.firstName}
                  onChange={onChange}
                  name="firstName"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="text-gray-800">Last Name</label>
                <br />
                <input
                  type="text"
                  className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
                  value={user.lastName}
                  onChange={onChange}
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
          )}
          <div className="form-group">
            <label className="text-gray-800">Email</label>
            <br />
            <input
              type="email"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
              value={user.email}
              onChange={onChange}
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label className="text-gray-800">Password</label>
            <br />
            <input
              type="password"
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-green-500 focus:border-green-500"
              value={user.password}
              onChange={onChange}
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;