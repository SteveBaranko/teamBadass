import React from "react";
import { Link } from "react-router-dom";

const Navhead = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-3xl font-bold">Barli</h1>
        <h2 className="text-gray-300">Components</h2>
        <nav className="mt-4">
          <Link
            to="/"
            className="mr-4 text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/CommentPage"
            className="mr-4 text-white hover:text-gray-300 transition duration-300"
          >
            CommentPage
          </Link>
          <Link
            to="/about"
            className="mr-4 text-white hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navhead;