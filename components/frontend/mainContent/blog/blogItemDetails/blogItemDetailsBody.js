// react
import React from "react";
// material
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Typography } from "@material-ui/core";
// import
import { customTheme } from "theme/customTheme";
import StickyBack from "./stickyBack";

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: customTheme.palette.whiteColor,
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(2),
  },

  title: {
    fontWeight: theme.typography.fontWeightBold,
    color: customTheme.palette.textWhite.primaryTextColor,
  },
}));

function BlogItemDetailsBody(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <StickyBack />
      <Box pb={{ xs: 2, sm: 13, lg: 10 }}>
        <Container>
          <Grid container justifyContent="center">
            <Grid item sm={10}>
              <div className={classes.box}>
                <Typography variant="body1" component="div" gutterBottom>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  obcaecati atque aperiam magni corporis ducimus quasi! Dolorem
                  molestiae reiciendis recusandae eos, sapiente ipsum
                  voluptatibus laudantium corrupti quo deleniti molestias
                  provident, nulla temporibus accusamus reprehenderit nisi
                  perferendis. Officiis aperiam dolore optio sequi expedita nemo
                  nesciunt, inventore dignissimos necessitatibus debitis
                  tenetur, exercitationem obcaecati quis nisi minima voluptate
                  distinctio quasi corrupti numquam iste quam eius voluptas,
                  error porro! Odio odit voluptatum reiciendis corporis
                  asperiores recusandae facilis, eveniet inventore rerum
                  quibusdam, corrupti dolores eaque. Delectus iste tempora
                  culpa, nam veniam quos minus dolorem ea harum earum excepturi
                  vero! Quidem ducimus autem atque quia modi!
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  obcaecati atque aperiam magni corporis ducimus quasi! Dolorem
                  molestiae reiciendis recusandae eos, sapiente ipsum
                  voluptatibus laudantium corrupti quo deleniti molestias
                  provident, nulla temporibus accusamus reprehenderit nisi
                  perferendis. Officiis aperiam dolore optio sequi expedita nemo
                  nesciunt, inventore dignissimos necessitatibus debitis
                  tenetur, exercitationem obcaecati quis nisi minima voluptate
                  distinctio quasi corrupti numquam iste quam eius voluptas,
                  error porro! Odio odit voluptatum reiciendis corporis
                  asperiores recusandae facilis, eveniet inventore rerum
                  quibusdam, corrupti dolores eaque. Delectus iste tempora
                  culpa, nam veniam quos minus dolorem ea harum earum excepturi
                  vero! Quidem ducimus autem atque quia modi!
                </Typography>
                <Typography variant="body1" component="div" gutterBottom>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  obcaecati atque aperiam magni corporis ducimus quasi! Dolorem
                  molestiae reiciendis recusandae eos, sapiente ipsum
                  voluptatibus laudantium corrupti quo deleniti molestias
                  provident, nulla temporibus accusamus reprehenderit nisi
                  perferendis. Officiis aperiam dolore optio sequi expedita nemo
                  nesciunt, inventore dignissimos necessitatibus debitis
                  tenetur, exercitationem obcaecati quis nisi minima voluptate
                  distinctio quasi corrupti numquam iste quam eius voluptas,
                  error porro! Odio odit voluptatum reiciendis corporis
                  asperiores recusandae facilis, eveniet inventore rerum
                  quibusdam, corrupti dolores eaque. Delectus iste tempora
                  culpa, nam veniam quos minus dolorem ea harum earum excepturi
                  vero! Quidem ducimus autem atque quia modi!
                </Typography>
                <Typography variant="body1" component="div">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  obcaecati atque aperiam magni corporis ducimus quasi! Dolorem
                  molestiae reiciendis recusandae eos, sapiente ipsum
                  voluptatibus laudantium corrupti quo deleniti molestias
                  provident, nulla temporibus accusamus reprehenderit nisi
                  perferendis. Officiis aperiam dolore optio sequi expedita nemo
                  nesciunt, inventore dignissimos necessitatibus debitis
                  tenetur, exercitationem obcaecati quis nisi minima voluptate
                  distinctio quasi corrupti numquam iste quam eius voluptas,
                  error porro! Odio odit voluptatum reiciendis corporis
                  asperiores recusandae facilis, eveniet inventore rerum
                  quibusdam, corrupti dolores eaque. Delectus iste tempora
                  culpa, nam veniam quos minus dolorem ea harum earum excepturi
                  vero! Quidem ducimus autem atque quia modi!
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default BlogItemDetailsBody;
