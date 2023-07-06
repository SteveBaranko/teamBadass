import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navhead from "./navhead/Navhead";
import Home from "./Home";
import CommentPage from "./CommentPage";
import AuthModule from "./auth/Auth";
import AuthRegister from "./auth/AuthRegister";
import AuthLogin from "./auth/AuthLogin";
import ProtectedRoute from "../common/ProtectedRoute";
import About from "./About";

/*
This is the main component that will be rendered in the index.js file.
*/
function Components() {
  return (
    <div>
      <Router>
        <Routes> 
          <Route path="/auth" element={<AuthModule />} />
          <Route path="/auth/register" element={<AuthRegister />} />
          <Route path="/auth/login" element={<AuthLogin />} />
          <Route path="/" element={<ProtectedRoute element={Home} />} />
          <Route path="/CommentPage" element={<ProtectedRoute element={CommentPage} />} />
          <Route path="/about" element={<ProtectedRoute element={About} />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Components;