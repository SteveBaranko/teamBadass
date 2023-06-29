import React from "react";
import { useState } from "react";

const CommentForm = ({ onChange, onClick }) => {
  return (
    <div className="mt-4">
      <hr className="mb-4" />
      <form>
        <input
          className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
          type="text"
          onChange={onChange}
        />
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          type="submit"
          onClick={onClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default CommentForm;

