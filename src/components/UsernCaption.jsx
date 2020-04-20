import React from "react";

const UsernCaption = props => {
  const { posts } = props;

  return (
    <>
      {posts.map(post => (
        <div key={post._id} className="oneLineDiv">
          <div className="userName">{post.username}</div>
          <div className="userCaption">{post.caption}</div>
        </div>
      ))}
    </>
  );
};

export default UsernCaption;
