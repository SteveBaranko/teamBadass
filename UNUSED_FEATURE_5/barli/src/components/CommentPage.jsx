import React from "react";
import Comment from "./comment/Comment";
import Navhead from "./navhead/Navhead";

const CommentPage = () => {
  return (
    <section>
      <Navhead />
      <Comment />
    </section>
  );
};

export default CommentPage;