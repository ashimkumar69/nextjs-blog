// react
import React from "react";
// next
import Image from "next/image";
import Link from "next/link";

// material
import { makeStyles } from "@material-ui/core/styles";

import { Grid, Toolbar, AppBar, Container } from "@material-ui/core";

// import
import navbarLogo from "public/images/logo/1.png";
import { customTheme } from "theme/customTheme";
import NavMenuSwipeableDrawer from "../navMenuSwipeableDrawer/navMenuSwipeableDrawer";
import SignUp from "./signUpForm";
import LogIn from "./logInForm";

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
              <LogIn />
              <SignUp />

              <NavMenuSwipeableDrawer />
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
