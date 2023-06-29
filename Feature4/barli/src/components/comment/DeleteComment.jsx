import React from "react";
import Post from "./post/Post";
import Comment from "./comment/Comment";

const DeleteComment = (data, onClick) => {
  return (
    <div className="DeleteComment">
      <button onClick={onClick}>{data}</button>
    </div>
  );
}

