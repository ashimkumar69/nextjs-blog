// react
import React from "react";

// next
import Image from "next/image";
import Link from "next/link";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";

// import
import { customTheme } from "theme/customTheme";

const socialIcons = [
  {
    id: 0,
    icon: "/images/footer-icons/google-play.svg",
    width: "115",
    height: "45",
  },
  {
    id: 1,
    icon: "/images/footer-icons/facebook_svg_icon.svg",
    width: "30",
    height: "30",
  },
  {
    id: 2,
    icon: "/images/footer-icons/instagram_svg_icon.svg",
    width: "30",
    height: "30",
  },
  {
    id: 3,
    icon: "/images/footer-icons/twitter_svg_icon.svg",
    width: "30",
    height: "30",
  },
  {
    id: 4,
    icon: "/images/footer-icons/linkedin_svg_icon.svg",
    width: "30",
    height: "30",
  },
  {
    id: 5,
    icon: "/images/footer-icons/pinterest_svg_icon.svg",
    width: "30",
    height: "30",
  },
];

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "fixed",
    width: "100%",
    left: 0,
    bottom: 0,
    padding: theme.spacing(1, 0),
    [theme.breakpoints.only("xs")]: {
      position: "relative",
    },
  },
  grid: {
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  orderFirst: {
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
  orderSecond: {
    [theme.breakpoints.down("sm")]: {
      order: 0,
    },
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  listItem: {
    display: "inline-block",
    marginRight: theme.spacing(2),
    padding: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0.5),
    },
    verticalAlign: "middle",
    "&:last-child": {
      marginRight: 0,
    },
  },

  primaryTextColor: {
    color: customTheme.palette.textWhite.primaryTextColor,
  },
  socialIcon: {
    opacity: 0.7,
    transition: "all 300ms ease-in-out",
    "&:hover": {
      opacity: 1,
    },
  },
  anchorLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Container maxWidth="xl">
        <Grid container className={classes.grid}>
          <Grid item className={classes.orderFirst}>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Typography
                  variant="caption"
                  component="span"
                  className={classes.primaryTextColor}
                >
                  &copy; {new Date().getFullYear()} Glostars Oy
                </Typography>
              </li>
              <li className={classes.listItem}>
                <Link href="/">
                  <a className={classes.anchorLink}>
                    <Typography
                      variant="caption"
                      component="span"
                      className={classes.primaryTextColor}
                    >
                      Privacy Policy
                    </Typography>
                  </a>
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link href="/">
                  <a className={classes.anchorLink}>
                    <Typography
                      variant="caption"
                      component="span"
                      className={classes.primaryTextColor}
                    >
                      Terms
                    </Typography>
                  </a>
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item className={classes.orderSecond}>
            <ul className={classes.list}>
              {socialIcons.map((item) => (
                <li key={item.id} className={classes.listItem}>
                  <Link href="/">
                    <a>
                      <Image
                        src={item.icon}
                        alt="Logo"
                        width={item.width}
                        height={item.height}
                        className={classes.socialIcon}
                      />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
