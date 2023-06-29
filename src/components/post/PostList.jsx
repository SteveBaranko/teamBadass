import React from "react";
import LikeButton from "./LikeButton";
import DislikeButton from "./DislikeButton";
import CommentOn from "./CommentOn";

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
      <div>
        {posts.length > 0 && (
        <ul>
          {posts.map((the_post) => (
            <li key={the_post.id}>
              {" "}
              <h3>{the_post.title}</h3>
              <p>{the_post.content}</p>
              <LikeButton data="like" onClick={() => alert("Liked!")} />
              <DislikeButton data="dislike" onClick={() => window.confirm("Are you sure?")} />
              <CommentOn data="Comment" onClick={() => prompt("Enter your comment")} />
            </li>
          ))}
        </ul>
        )}
      </div>{" "}
    </div>
  );
};

export default PostList;