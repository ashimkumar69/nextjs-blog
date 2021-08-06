// react
import React from "react";
// next
import Link from "next/link";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// import
import { customTheme } from "theme/customTheme";

const useStyles = makeStyles((theme) => ({
  navMenuWrapper: {
    width: "100%",
    height: "70vh",
    display: "flex",
    alignItems: "center",
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
}));

function NavMenu() {
  const classes = useStyles();
  return (
    <ul className={classes.list}>
      <li>
        <Link href="/about">
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
        <Link href="/faqs">
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
  );
}

export default NavMenu;
