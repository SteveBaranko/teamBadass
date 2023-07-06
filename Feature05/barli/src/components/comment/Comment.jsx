import React, { useEffect, useState } from "react";
import { getAllComments } from "../../services/CommentMethods.jsx";
import CommentList from "./CommentList";


const Comment = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getAllComments().then((data) => {
      setComments(data);
    });
  }, []);

  return (
    <div>
      <CommentList comments={comments} />
    </div>
  );
}
export default Comment;
  

