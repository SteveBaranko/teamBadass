import React from "react";
import deletePost from "../../services/PostMethods";

export default function DeletePost({ data, onClick }) {
    return (
        <div className="DeletePost">
        <button onClick={onClick}>{data}</button>
        </div>
    );
}
    