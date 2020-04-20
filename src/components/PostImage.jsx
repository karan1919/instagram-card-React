import React from "react";

const PostImage = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <img key={post._id} src={post.img} alt="tags" />
      ))}
    </>
  );
};

export default PostImage;
