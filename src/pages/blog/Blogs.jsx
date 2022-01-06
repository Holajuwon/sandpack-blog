import React from "react";
import blogs from "./index";
import { Link, Route } from "react-router-dom";

const Blogs = (props) => {
  return (
    <>
      <h2>Posts</h2>
      {blogs.map((article, index) => {
        let Blog = article.default;
        let { title, file } = article.meta;

        return (
          <Link to={`${file}`} key={file}>
            <h2>{title}</h2>
          </Link>
        );
      })}
    </>
  );
};

export default Blogs;
