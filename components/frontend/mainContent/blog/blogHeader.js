// react
import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// import
import { customTheme } from "theme/customTheme";

const useStyles = makeStyles((theme) => ({
  heading: {
    textTransform: "capitalize",
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
    marginBottom: theme.spacing(6),
  },
  subHeading: {
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
    marginBottom: theme.spacing(2),
  },
}));

function BlogHeader() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h2" component="h2" className={classes.heading}>
        Blogs
      </Typography>
      <Typography variant="h4" component="h5" className={classes.subHeading}>
        Photography News, Tips &#38; Stories
      </Typography>
    </React.Fragment>
  );
}

export default BlogHeader;
