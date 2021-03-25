import React from "react";
import { BlogWrapper } from "./BlogElements";

const Blog = () => {
  return (
    <BlogWrapper id="Blog">
      <iframe
        src="https://cdbutle.medium.com/"
        frameBorder="0"
        height="100%"
        width="100%"
        title="Iframe Example"
      ></iframe>
    </BlogWrapper>
  );
};

export default Blog;
