import React from "react";
import { Routes, Route,useParams } from "react-router-dom";
import Navhead from "./navhead/Navhead";
import Home from "./Users";
import About from "./About";
import CommentPage from "./CommentPage";
import Post from "./post/Post";


function Components() {
  let { userId } = useParams();
  return (
    <div>
      <Navhead />
      <Post />
    </div>
  );
}

export default Components;