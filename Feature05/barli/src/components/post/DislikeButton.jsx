import React from "react";

/*
Dislike button component
It is a stateless component
It will have a thumbs down icon when we use tailwind
It receives a confirm onClick event for now
*/

export default function DislikeButton({ data, onClick }) {
  return (
    <div className="DislikeButton">
      <button onClick={onClick}>{data}</button>
    </div>
  );
}
//not in use
