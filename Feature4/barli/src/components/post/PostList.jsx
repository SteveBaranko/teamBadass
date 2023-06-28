import React, { useEffect, useState } from "react";
import { getAllPosts, createPost, deletePost } from "../../services/PostMethods.jsx";
import PostForm from "./PostForm";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  useEffect(() => {
    getAllPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  useEffect(() => {
    if (add && content) {

      const the_post = { content: content };
      createPost(the_post)
        .then((data) => {
          console.log("Post created:", data);
          setPosts([...posts, data]);
        }
        )
      setAdd(false);
    }
    if (remove.length > 0) {
      const newPosts = posts.filter((post) => post.id !== remove);
      setPosts(newPosts);
      deletePost(remove)
        .then(() => {
          console.log("Post deleted:", remove);
        })
        .catch((error) => {
          console.log("Error deleting post:", error);
        });
      setRemove("");
    }
  }, [add, remove, content, posts]);


  const onClick = (event) => {
    event.preventDefault();
    setAdd(true);
  };

  const onChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  return (
    <div>
      <hr />
      This is the PostList component.
      <div>
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => (
              <div key={post.id}>
                <span>
                  <li>{post.get("content")}</li>
                  <button onClick={() => setRemove(post.id)}>Delete</button>
                </span>
              </div>
            ))}
          </ul>
        )}
      </div>
      <div>
        <p>Post by ID</p>
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.id}</li>
            ))}
          </ul>
        )}
      </div>
      <PostForm onClick={onClick} onChange={onChange} />
    </div>
  );
};

export default PostList;