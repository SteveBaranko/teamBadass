import React from "react";
import LikeButton from "./LikeButton.jsx";
import DislikeButton from "./DislikeButton.jsx";
import CommentOn from "./CommentOn.jsx";

const PostList = ({ posts }) => {
  /*
  This is the never-ending list of posts.
  This is a stateless component
  It will map to the post table of our database
  */
  return (
    <div>
      <hr />
      This is the stateless child component with list
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <LikeButton data="like" onClick={() => alert("Liked!")} />
            <DislikeButton data="dislike" onClick={() => window.confirm("Are you sure?")} />
            <CommentOn data="Comment" onClick={() => prompt("Enter your comment")} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;