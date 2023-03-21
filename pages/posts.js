import React from "react";
import { useSelector } from "react-redux";

const Posts = () => {
  const postsArray = useSelector((state) => state.posts.posts);
  return (
    <div>
      {postsArray.slice(0, 5).map((post) => {
        return (
          <div
            style={{ background: "grey", margin: "10px 10px", padding: "15px" }}
            key={post.id}
          >
            <h3 style={{ color: "#f2f2f2" }}>{post.title}</h3>
            <p style={{ color: "#f2f2f2" }}>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
