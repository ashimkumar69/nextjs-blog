// react
import React from "react";
// next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Card, Chip, Icon, IconButton, Typography } from "@material-ui/core";

// import
import colorToRgba from "color-to-rgba";
import { customTheme } from "theme/customTheme";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    "& > div": {
      display: "block !important",
    },
    "& $img": {
      transition: "all 300ms ease-in-out",
    },
    "&:hover": {
      "& $img": {
        transform: "scale(1.1)",
      },
    },
  },
  img: {
    //
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: colorToRgba(theme.palette.common.black, 0.1),
  },
  content: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
  },

  cardBody: {
    position: "absolute",
    left: theme.spacing(1),
    right: theme.spacing(1),
    bottom: theme.spacing(2),
  },
  action: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },

  title: {
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
    lineHeight: 1.25,
    marginBottom: theme.spacing(1),
    maxWidth: "100%",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  body: {
    color: customTheme.palette.textWhite.primaryTextColor,
    lineHeight: 1.25,
    maxWidth: "100%",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
  titleAnchorLink: {
    textDecoration: "none",
    color: customTheme.palette.textWhite.primaryTextColor,
    transition: "all 300ms ease-in-out",
    "&:hover": {
      textDecoration: "2px solid underline",
    },
  },
  anchorLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },

  iconBtn: {
    backgroundColor: colorToRgba(customTheme.palette.greyColor, 0.7),
    transition: "all 300ms ease-in-out",
    "&:hover": {
      backgroundColor: customTheme.palette.greyColor,
    },
  },
  icon: {
    fontSize: theme.spacing(2),
  },
  categoryChip: (props) => ({
    color: customTheme.palette.textWhite.primaryTextColor,
    backgroundColor: props.setCategoryColor,
    borderRadius: theme.spacing(0.5),
    "&:hover": {
      backgroundColor: props.setCategoryColor,
    },
  }),

  img: {
    display: "block !important",
  },
}));

let imageWH = {
  width: 320,
  height: 240,
};

function BlogItem(props) {
  const styleProps = {
    setCategoryColor: props.setcategorycolor,
  };
  const classes = useStyles(styleProps);
  const router = useRouter();

  return (
    <Card elevation={0} className={classes.card}>
      <Image
        src={props.item.image}
        alt="Logo"
        width={imageWH.width}
        height={imageWH.height}
        layout="intrinsic"
        className={classes.img}
      />

      <div className={classes.overlay}>
        <div className={classes.content}>
          <Chip
            label={props.item.category}
            size="small"
            className={classes.categoryChip}
            onClick={() => router.push("/")}
          />

          <div className={classes.cardBody}>
            <Typography
              variant="subtitle1"
              component="h5"
              className={classes.title}
            >
              <Link href="/">
                <a className={classes.titleAnchorLink}>{props.item.title}</a>
              </Link>
            </Typography>

            <Typography variant="body2" component="p" className={classes.body}>
              {props.item.short_description}
            </Typography>
          </div>

          <div className={classes.action}>
            <IconButton
              size="small"
              className={classes.iconBtn}
              onClick={() => router.push("/")}
            >
              <Icon className={clsx(classes.icon, "fas fa-chevron-right")} />
            </IconButton>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default BlogItem;
