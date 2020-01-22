// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  console.log("props", props)
  // Add state for the comments
  const [comment,setComment] = useState(props.comments)

  return (
    <div>
      {props.comments.map(words => (
        <Comment
        comment={words}
        key={words.text}
        />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
