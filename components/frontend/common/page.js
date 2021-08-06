// react
import React from "react";
// material

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// import
import { customTheme } from "theme/customTheme";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: "capitalize",
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
    marginBottom: theme.spacing(6),
  },
}));

function Page(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography
        variant="h3"
        component="h2"
        className={classes.title}
        align="center"
      >
        {props.title}
      </Typography>
    </React.Fragment>
  );
}

export default Page;
