import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../services/PostMethods.jsx";
import PostList from "./PostList";
/*
This is the stateful parent component for the PostList component.
*/
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
