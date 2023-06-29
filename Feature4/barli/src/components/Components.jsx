import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navhead from "./navhead/Navhead";
import Post from "./post/Post";
import Comment from "./comment/Comment";
import About from "./About";
import Home from "./Home";
import CommentPage from "./CommentPage";

function Components() {
  return (
    <div>
      <Router>
        <Navhead />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/CommentPage" element={<CommentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Components;