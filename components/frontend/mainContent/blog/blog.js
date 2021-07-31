// react
import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import
import BlogHeader from "./blogHeader";
import BlogItem from "./blogItem";

const useStyles = makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
}));

function Blog(props) {
  const classes = useStyles();
  const { blogItems } = props;
  return (
    <React.Fragment>
      <BlogHeader />
      <Grid container className={classes.grid} spacing={2}>
        {blogItems.map((item) => (
          <Grid item key={item._id}>
            <BlogItem item={item} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default Blog;
