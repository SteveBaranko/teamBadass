import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams} from "react-router-dom";

import AuthModule from "./auth/Auth";
import AuthRegister from "./auth/AuthRegister";
import AuthLogin from "./auth/AuthLogin";
import LoginGood from "./auth/LoginGood";
import Components from "./Components";
import Home from "./Users";
import About from "./About";
import CommentPage from "./CommentPage";
import Users from "./Users";

const MainAuth = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthModule />} />
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/*" element={<Users />} />
      </Routes>
    </Router>
  );
};
export default MainAuth;
