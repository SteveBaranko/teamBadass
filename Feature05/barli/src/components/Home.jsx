import React from "react";
import Post from "./post/Post";
import Navhead from "./navhead/Navhead";
import { checkUser } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

//our home page
function Home() {
  const navigate = useNavigate();
  if( !checkUser() ){

    navigate("/auth")
  }
  return (
    <section>
        <Navhead />
        <Post />
    </section>
  );
}
export default Home;