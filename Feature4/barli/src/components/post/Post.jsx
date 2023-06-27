import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../services/Post.jsx";
import PostList from "./PostList";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2z1">Barli</h1>
      <PostList posts={posts} />
    </div>
  );
};

export default Post;