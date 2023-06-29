import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../services/Post.jsx";
import PostList from "./PostList";
import Home from "./Home/Home.js";
import About from "./About/About.js";
import Footer from "./Footer/Footer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
     <Router>
      
    <div>
      <h1 className="text-2z1">Barli</h1>
      <PostList posts={posts} />
    </div>
   
    <div>
      {/* <Home /> */}
      <Route path="/" exact component={Home} />
      {/* <About /> */}
      <Route path="/about" component={About} />
    </div>
    <Footer />
  </Router>
);
  
};

export default Post;