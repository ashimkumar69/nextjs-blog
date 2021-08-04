// react
import React from "react";

// material
import { makeStyles } from "@material-ui/core/styles";
import { customTheme } from "theme/customTheme";
import colorToRgba from "color-to-rgba";
import {  Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundImage: (props) => `url(${props.bgImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
    objectFit: "contain",
    width: "100%",
    minHeight: "70vh",
    backgroundColor: colorToRgba(customTheme.palette.blueColor, 0.5),
    backgroundBlendMode: "color",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "4px",
    right: "4px",
    transform: "translateY(-50%)",
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
  },
}));

function BlogItemDetailsHeader(props) {
  const styleProps = {
    bgImage: props.blogItem.image,
  };
  const classes = useStyles(styleProps);
  return (
    <div className={classes.root}>
      {props.children}

      <div className={classes.box}>
        <Grid container justifyContent="center" alignItems="center" spacing={1}>
          <Grid item sm={11} md={8} lg={6}>
            <Typography
              variant="h4"
              component="h2"
              align="center"
              className={classes.title}
            >
              {props.blogItem.title}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default BlogItemDetailsHeader;
