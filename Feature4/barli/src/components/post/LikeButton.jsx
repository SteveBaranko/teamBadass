import React from "react";

/*
Like button component
It is a stateless component
It will have a thumbs up icon when we use tailwind
*/

export default function LikeButton({ data, onClick }) {
  return (
    <div className="LikeButton">
      <button onClick={onClick}>{data}</button>
    </div>
  );
}

// not in use
