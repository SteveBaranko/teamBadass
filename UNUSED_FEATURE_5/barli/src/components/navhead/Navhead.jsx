import React from "react";
import { Link, Routes, Route} from "react-router-dom";
import Users from "../Users"
import CommentPage from "../CommentPage";
import Components from "../Components";
import { getUserId } from "../../services/AuthService";


//This will be the header for the website (always on top)
const Navhead = () => {
  const userId = getUserId();
  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-white text-3xl font-bold">Barli</h1>
        <h2 className="text-gray-300">Components</h2>
        <nav className="mt-4">
          <Link
            to={`/users/${userId}/home`}
            className="mr-4 text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to={`/users/{$userId}/CommentPage`}
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
        <Routes>
          <Route path={`/users/${userId}/home`} element={<Components />} />
          <Route path={`/users/${userId}/CommentPage`} element={<CommentPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Navhead;