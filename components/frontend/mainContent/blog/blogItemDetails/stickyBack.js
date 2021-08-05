// react
import React from "react";
// next
import Link from "next/link";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Icon, Slide } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import
import { customTheme } from "theme/customTheme";
import clsx from "clsx";
import colorToRgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  root: {
    position: (props) => (props.isSticky ? "fixed" : "static"),
    [theme.breakpoints.only("xs")]: {
      position: "static !important",
    },
    padding: theme.spacing(3, 2),
    top: theme.spacing(0),
    left: theme.spacing(0),
  },
  stickyBack: {
    display: "inline-block",
    textDecoration: "none",
    textTransform: "capitalize",
    color: customTheme.palette.textWhite.primaryTextColor,
    backgroundColor: colorToRgba(customTheme.palette.blackColor, 0.2),
    borderRadius: theme.spacing(3),
    padding: theme.spacing(1, 2),
  },
  stickyBackIcon: {
    fontSize: theme.typography.caption.fontSize,
    marginRight: theme.spacing(0.5),
  },
}));

function StickyBack(props) {
  const trigger = useScrollTrigger({
    target: props.window ? props.window() : undefined,
    disableHysteresis: true,
    threshold: 440,
  });
  const styleProps = {
    isSticky: trigger,
  };
  const classes = useStyles(styleProps);
  return (
    <div className={classes.root}>
      <Link href="/blog">
        <a className={classes.stickyBack}>
          <Icon
            className={clsx(classes.stickyBackIcon, "fas fa-chevron-left")}
          />
          <span>Back To Blog</span>
        </a>
      </Link>
    </div>
  );
}
export default StickyBack;
