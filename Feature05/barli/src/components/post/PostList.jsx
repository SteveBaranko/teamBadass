import React, { useEffect, useState } from "react";
import { getAllPosts, createPost, deletePost } from "../../services/PostMethods";
import PostForm from "./PostForm";

/*
This is a stateful list component for the Post
*/
//as demonstrated by prof. Wicks
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
        })
        .catch((error) => {
          console.log("Error creating post:", error);
        });
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
      setContent("");
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
    <div className="bg-gray-100 p-4 rounded">
      <hr className="mb-4" />
      <h2 className="text-xl font-bold mb-2">Post List</h2>
      <div>
        {posts.length > 0 && (
          <ul className="space-y-2">
            {posts.map((post) => (
              <div key={post.id} className="bg-white p-2 rounded">
                <span className="text-gray-800">{post.get("content")}</span>
                <button
                  className="ml-2 text-sm text-red-500 hover:text-red-700"
                  onClick={() => setRemove(post.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </ul>
        )}
      </div>
      <PostForm onClick={onClick} onChange={onChange} />
    </div>
  );
};

export default PostList;