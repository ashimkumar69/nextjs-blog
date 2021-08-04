// react
import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";
// import
import { customTheme } from "theme/customTheme";
import colorToRgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  box: {
    position: "absolute",
    top: "50%",
    left: "4px",
    right: "4px",
    transform: "translateY(-50%)",
  },
  action: {
    textAlign: "center",
  },
  heading: {
    textTransform: "capitalize",
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.only("xs")]: {
      fontSize: theme.spacing(3.25),
      marginBottom: theme.spacing(3),
    },
  },
  subHeading: {
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
    marginBottom: theme.spacing(6),
    [theme.breakpoints.only("xs")]: {
      marginBottom: theme.spacing(3),
      fontSize: theme.spacing(2.5),
    },
  },
  signUpBtn: {
    marginRight: theme.spacing(1),
    borderRadius: theme.spacing(2.25),
    padding: theme.spacing(0.25),
    width: theme.spacing(15),
    border: `${theme.spacing(0.25)}px solid  ${colorToRgba(
      customTheme.palette.textWhite.primaryTextColor,
      0.5
    )}`,
    textTransform: "capitalize",
    color: customTheme.palette.textWhite.primaryTextColor,
    transition: "all 300ms ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: customTheme.palette.textWhite.primaryTextColor,
    },
  },
}));

function HeroBanner() {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item sm={11} md={8} lg={6}>
          <Typography
            variant="h3"
            component="h2"
            className={classes.heading}
            align="center"
          >
            Hi, welcome toGlostars.
          </Typography>
          <Typography
            variant="h5"
            component="h5"
            className={classes.subHeading}
            align="center"
          >
            Place of creativity, community &#38; challenge. Free. For everyone
          </Typography>
          <div className={classes.action}>
            <Button
              className={classes.signUpBtn}
              disableElevation
              disableRipple
            >
              Join Now
            </Button>
            <Button
              className={classes.signUpBtn}
              disableElevation
              disableRipple
            >
              Install App
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default HeroBanner;
