import React, { useEffect, useState } from "react";
import { getAllComments, createComment, deleteComment } from "../../services/CommentMethods";
import CommentForm from "./CommentForm";


/*
  Same functionality as PostList.jsx, but with comments instead of posts.

*/
//TODO, Actually add relation to posts (this thing will die)
const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState("");
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState("");

  useEffect(() => {
    getAllComments().then((data) => {
      setComments(data);
    });
  }, []);

  useEffect(() => {
    if (add && content) {
      const the_comment = { content: content };
      createComment(the_comment)
        .then((data) => {
          console.log("Comment created:", data);
          setComments([...comments, data]);
        })
        .catch((error) => {
          console.log("Error creating comment:", error);
        });
      setAdd(false);
    }
    if (remove.length > 0) {
      const newComments = comments.filter((comment) => comment.id !== remove);
      setComments(newComments);
      deleteComment(remove)
        .then(() => {
          console.log("Comment deleted:", remove);
        })
        .catch((error) => {
          console.log("Error deleting comment:", error);
        });
      setRemove("");
      setContent("");
    }
  }, [add, remove, content, comments]);

  const onClick = (event) => {
    event.preventDefault();
    setAdd(true);
  };

  const onChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 rounded">
      <hr className="mb-4" />
      <h2 className="text-xl font-bold mb-2">Comment List</h2>
      <div>
        {comments.length > 0 && (
          <ul className="space-y-2">
            {comments.map((comment) => (
              <li key={comment.id} className="bg-white p-2 rounded">
                <span className="text-gray-800">{comment.get("content")}</span>
                <button
                  className="ml-2 text-sm text-red-500 hover:text-red-700"
                  onClick={() => setRemove(comment.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <CommentForm onClick={onClick} onChange={onChange} />
    </div>
  );
};

export default CommentList;