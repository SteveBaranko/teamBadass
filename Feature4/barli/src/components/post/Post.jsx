import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../services/PostMethods.jsx";
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
      <PostList posts={posts} />
    </div>
  );
};

export default Post;