// react
import React from "react";

// material
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bgRapper: {
    backgroundImage: 'url("/images/background/1.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    backgroundClip: "border-box",
    backgroundAttachment: "fixed",
    objectFit: "cover",
    width: "100%",
    minHeight: "100vh",
  },
}));

function BgRapper(props) {
  const classes = useStyles();
  return <div className={classes.bgRapper}>{props.children}</div>;
}

export default BgRapper;
