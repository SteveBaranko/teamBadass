import React from "react";
import Post from "./post/Post";
import Navhead from "./navhead/Navhead";
import { checkUser } from "../services/AuthService";


//our home page
function Home() {
  if( !checkUser() ){
    window.location.href = "/auth";
  }
  return (
    <section>
        <Navhead />
        <Post />
    </section>
  );
}
export default Home;