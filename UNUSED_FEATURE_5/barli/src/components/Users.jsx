import React from "react";
import Post from "./post/Post";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Navhead from "./navhead/Navhead";
//our home page

export default function Users() {
  return (
    <div>
      <Navhead />
      <Post />
    </div>
  );
}
