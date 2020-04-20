import React, { useState, useEffect } from "react";
import { getComments } from "../services/testService";
import Comments from "./Comments";

const ViewCommentsBtn = () => {
  const [comments, setComments] = useState([]);
  const [commentsVisible, setcommentsVisible] = useState(false);

  useEffect(() => {
    setComments(getComments());
  }, []);

  const commentCount = () => {
    let count = comments.length;
    return count === 0
      ? `No comments`
      : count === 1
      ? `View ${count} comment`
      : `View all ${count} comments`;
  };

  return (
    <>
      <button onClick={() => setcommentsVisible(!commentsVisible)}>
        <span className="viewCommentsButton">{`${commentCount()}`}</span>
      </button>
      <div>
        <Comments comments={comments} isVisible={commentsVisible} />
      </div>
    </>
  );
};

export default ViewCommentsBtn;
