// react
import React from "react";
// next
import Head from "next/head";
import path from "path";
import fs from "fs";
import { useRouter } from "next/router";
// material
import { makeStyles } from "@material-ui/core/styles";
// import
import Navbar from "components/frontend/navbar/navbar";
import BgRapper from "components/frontend/bgRapper/bgRapper";
import Footer from "components/frontend/footer/footer";
import slugify from "slugify";
import Loader from "components/ui/loader";
import BlogItemDetails from "components/frontend/mainContent/blog/blogItemDetails/blogItemDetails";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
  },
}));

function BlogItemDetailsPage(props) {
  const classes = useStyles();
  const router = useRouter();
  if (router.isFallback) {
    return <Loader isloading={router.isFallback} />;
  }
  return (
    <React.Fragment>
      <Head>
        <title>{props.blogItem.title}</title>
      </Head>
      <BgRapper>
        <div className={classes.root}>
          <main>
            <BlogItemDetails {...props}>
              <header>
                <Navbar />
              </header>
            </BlogItemDetails>
          </main>
          <footer>
            <Footer bgcolor={true} />
          </footer>
        </div>
      </BgRapper>
    </React.Fragment>
  );
}

export async function getStaticProps(ctx) {
  const slug = ctx.params.slug;

  const dataFilePath = path.join(
    process.cwd(),
    "jsonFiles",
    "../data-db/blogs.json"
  );

  const fileContents = fs.readFileSync(dataFilePath, "utf8");
  const data = JSON.parse(fileContents);

  const blogItem = data.find(
    (item) => slugify(item.title, { strict: true }) === slug
  );

  if (!blogItem) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogItem: blogItem,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const dataFilePath = path.join(
    process.cwd(),
    "jsonFiles",
    "../data-db/blogs.json"
  );

  const fileContents = fs.readFileSync(dataFilePath, "utf8");
  const data = JSON.parse(fileContents);

  const paths = data.slice(0, 2).map((item) => ({
    params: { slug: slugify(item.title, { strict: true }) },
  }));

  return { paths, fallback: true };
}

export default BlogItemDetailsPage;
