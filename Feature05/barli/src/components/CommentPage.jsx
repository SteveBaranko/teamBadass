//same as home but with comments 

import React from "react";
import Comment from "./comment/Comment";
import Navhead from "./navhead/Navhead";

export default function CommentPage() {
  return (
    <section>
        <Navhead />
        <Comment />
    </section>
  );
}