// react
import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Backdrop, CircularProgress } from "@material-ui/core";

// import
import { customTheme } from "theme/customTheme";
import colorToRgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: customTheme.palette.whiteColor,
    backgroundColor: colorToRgba(customTheme.palette.blackColor, 0.9),
  },
}));

export default function Loader(props) {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={props.isloading}>
      <CircularProgress size={100} color="inherit" />
    </Backdrop>
  );
}
