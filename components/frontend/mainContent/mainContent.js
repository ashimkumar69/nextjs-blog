// react
import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid } from "@material-ui/core";

// import
import colorToRgba from "color-to-rgba";
import { customTheme } from "theme/customTheme";
import Blog from "./blog/blog";
import NavMenu from "./navMenu";

const useStyles = makeStyles((theme) => ({
  blogWrapper: {
    width: "100%",
    maxHeight: "75vh",
    overflowY: "auto",
    overflowX: "hidden",
    scrollBehavior: "smooth",
    overscrollBehavior: "auto contain",
    marginBottom: "100px",

    "&::-webkit-scrollbar": {
      width: theme.spacing(1),
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: `inset 0 0 8px ${colorToRgba(
        theme.palette.common.white,
        0.3
      )}`,
      borderRadius: theme.spacing(1),
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: theme.spacing(1),
      background: `linear-gradient(transparent, ${customTheme.palette.blueDarkColor})`,
      minHeight: theme.spacing(10),
    },
  },
  navMenuWrapper: {
    width: "100%",
    height: "75vh",
    display: "flex",
    alignItems: "center",
  },
  navMenuGrid: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function MainContent(props) {
  const classes = useStyles();
  return (
    <div className={classes.mainContentWrapper}>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item md={2} className={classes.navMenuGrid}>
            <div className={classes.navMenuWrapper}>
              <NavMenu />
            </div>
          </Grid>
          <Grid item xs={12} md={10}>
            <div className={classes.blogWrapper}>
              <Blog {...props} />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainContent;
