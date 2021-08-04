// react
import React from "react";
import BlogItemDetailsBody from "./blogItemDetailsBody";

// import
import BlogItemDetailsHead from "./blogItemDetailsHead";

function BlogItemDetails(props) {
  return (
    <React.Fragment>
      <BlogItemDetailsHead {...props}>{props.children}</BlogItemDetailsHead>
      <BlogItemDetailsBody />
    </React.Fragment>
  );
}

export default BlogItemDetails;
