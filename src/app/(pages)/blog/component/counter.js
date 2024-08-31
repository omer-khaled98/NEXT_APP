"use client";
// components/Post.js
import React, { useState } from "react";

const Post = ({ content }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setLikes(likes > 0 ? likes - 1 : 0);
  };

  return (
    <div className="post">
      <div className="content">
        <p>{content}</p>
      </div>

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
