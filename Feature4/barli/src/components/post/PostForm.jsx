import React from "react";

const PostForm = ({ onChange, onClick }) => {
  return (
    <div>
      <hr />
      <form>
        <input type="text" onChange={onChange} />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;