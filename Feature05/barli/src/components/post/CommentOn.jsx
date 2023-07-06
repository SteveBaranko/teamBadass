import React from "react";

/*
Button to prompt the user to make a comment
will have a comment icon when we use tailwind
*/
export default function CommentOn({ data, onClick }) {
  return (
    <div className="CommentOn">
      <button onClick={onClick}>{data}</button>
    </div>
  );
}
//not in use