// react
import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
// import
import BlogHeader from "./blogHeader";
import BlogItem from "./blogItem";
import { customTheme } from "theme/customTheme";

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

  function setCategoryColor(i) {
    const categoryColor = [
      `${customTheme.palette.blueColor}`,
      `${customTheme.palette.tealColor}`,
      `${customTheme.palette.redDeepColor}`,
    ];

    let color = categoryColor[i % categoryColor.length];

    return color;
  }

  return (
    <React.Fragment>
      <BlogHeader />
      <Grid container className={classes.grid} spacing={2}>
        {blogItems.map((item, index) => (
          <React.Fragment key={item._id}>
            <Grid item>
              <BlogItem
                setcategorycolor={setCategoryColor(index)}
                item={item}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </React.Fragment>
  );
}

export default Blog;
