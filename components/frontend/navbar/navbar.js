// react
import React from "react";
// next
import Image from "next/image";
import Link from "next/link";

// material
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Button, Toolbar, AppBar, Container } from "@material-ui/core";

// import
import navbarLogo from "public/images/logo/1.png";
import { customTheme } from "theme/customTheme";
import colorToRgba from "color-to-rgba";
import NavMenuSwipeableDrawer from "../navMenuSwipeableDrawer/navMenuSwipeableDrawer";

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.only("xs")]: {
      padding: theme.spacing(2),
    },
  },
  grid: {
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  loginBtn: {
    marginRight: theme.spacing(1),
    textTransform: "capitalize",
    color: customTheme.palette.textWhite.primaryTextColor,
    "&:hover": {
      backgroundColor: "transparent",
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

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar
      component="div"
      position="static"
      color="transparent"
      elevation={0}
      className={classes.appBar}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container className={classes.grid} spacing={3}>
            <Grid item>
              <Link href="/">
                <a>
                  <Image src={navbarLogo} alt="Logo" width={140} height={16} />
                </a>
              </Link>
            </Grid>
            <Grid item>
              <Button
                className={classes.loginBtn}
                disableElevation
                disableRipple
              >
                Login
              </Button>
              <Button
                className={classes.signUpBtn}
                disableElevation
                disableRipple
              >
                Sign Up
              </Button>
     
              <NavMenuSwipeableDrawer />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
