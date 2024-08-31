"use client";
// components/Post.js
import React, { useState } from "react";

const Post = ({ content }) => {
  // State for the like counter
  const [likes, setLikes] = useState(0);

  // Function to handle the like button click

  const handleLike = () => {
    setLikes(likes + 1);
  };

  // Function to handle the dislike button click
  const handleDislike = () => {
    setLikes(likes > 0 ? likes - 1 : 0); // Prevent negative values
  };

  return (
    <div className="post">
      <div className="content">
        <p>{content}</p>
      </div>
      {/* Render footer on client side */}
      <footer>
        <button type="button" class="btn btn-primary" onClick={handleLike}>
          {" "}
          Like
        </button>
        <span className="p-3">{likes}</span>
        <button type="button" class="btn btn-primary" onClick={handleDislike}>
          {" "}
          Dislike
        </button>
      </footer>
    </div>
  );
};

export default Post;
