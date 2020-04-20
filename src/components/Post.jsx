import React, { Component } from "react";
import PostImage from "./PostImage";
import Like from "./Like";
import ViewCommentsBtn from "./ViewCommentsBtn";
import UsernCaption from "./UsernCaption";
import { getPostData } from "../services/testService";

class Post extends Component {
  state = { posts: [] };

  componentDidMount() {
    this.setState({ posts: getPostData() });
  }

  render() {
    const { length: count } = this.state.posts;
    if (count === 0) return <p>The user hasn't posted yet.</p>;

    const { posts } = this.state;

    return (
      <>
        <div className="card">
          <span>
            <PostImage posts={posts} />
            <br />
            <Like />
            <UsernCaption posts={posts} />
            <hr />
            <ViewCommentsBtn />
          </span>
        </div>
      </>
    );
  }
}

export default Post;
