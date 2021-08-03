// react
import React from "react";

// next
import Link from "next/link";
import Image from "next/image";

// material
import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  SwipeableDrawer,
  Button,
  IconButton,
  Icon,
  Box,
} from "@material-ui/core";

// import
import { customTheme } from "theme/customTheme";
import menuImage from "public/images/navbar/menu/1.png";

const useStyles = makeStyles((theme) => ({
  menuBtn: {
    minWidth: theme.spacing(1),
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  listWrapper: {
    padding: theme.spacing(1),
    backgroundColor: customTheme.palette.blackColor,
    width: 250,
    height: "100%",
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    width: "100%",
  },
  listItemLink: {
    textDecoration: "none",
    display: "block",
    padding: theme.spacing(1.25, 1),
    transition: "all 300ms ease-in-out",
    "&:hover": {
      backgroundColor: customTheme.palette.yellowColor,
    },
  },
  navMenuTypography: {
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
  },
  navMenuTypography: {
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
  },
  drawerCloseBtn: {
    color: customTheme.palette.textWhite.primaryTextColor,

    "&:hover": {
      backgroundColor: customTheme.palette.redDeepColor,
    },
  },
}));

function NavMenuSwipeableDrawer() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleDrawer(value) {
    setIsOpen((preState) => (preState = value));
  }

  const list = () => (
    <div
      className={classes.listWrapper}
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <Box my={3} textAlign="right">
        <IconButton
          className={classes.drawerCloseBtn}
          onClick={() => toggleDrawer(false)}
        >
          <Icon className="fas fa-times-circle" fontSize="small" />
        </IconButton>
      </Box>

      <ul className={classes.list}>
        <li>
          <Link href="/">
            <a className={classes.listItemLink}>
              <Typography
                variant="h6"
                component="span"
                className={classes.navMenuTypography}
              >
                About
              </Typography>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className={classes.listItemLink}>
              <Typography
                variant="h6"
                component="span"
                className={classes.navMenuTypography}
              >
                Blog
              </Typography>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={classes.listItemLink}>
              <Typography
                variant="h6"
                component="span"
                className={classes.navMenuTypography}
              >
                Faqs
              </Typography>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <React.Fragment>
      <Button
        onClick={() => toggleDrawer(true)}
        className={classes.menuBtn}
        disableElevation
        disableRipple
      >
        <Image src={menuImage} alt="Menu" width={7} height={26} />
      </Button>

      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </React.Fragment>
  );
}

export default NavMenuSwipeableDrawer;
