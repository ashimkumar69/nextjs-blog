// react
import React from "react";

// next
import Head from "next/head";
import path from "path";
import fs from "fs";
// import
import Navbar from "components/frontend/navbar/navbar";
import BgRapper from "components/frontend/bgRapper/bgRapper";
import Footer from "components/frontend/footer/footer";
import MainContent from "components/frontend/mainContent/mainContent";
import Blog from "components/frontend/mainContent/blog/blog";

function BlogPage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Blog</title>
      </Head>
      <BgRapper>
        <header>
          <Navbar />
        </header>
        <main>
          <MainContent>
            <Blog {...props} />
          </MainContent>
        </main>
        <footer>
          <Footer />
        </footer>
      </BgRapper>
    </React.Fragment>
  );
}

export async function getStaticProps(context) {
  const dataFilePath = path.join(
    process.cwd(),
    "jsonFiles",
    "../data-db/blogs.json"
  );

  const fileContents = fs.readFileSync(dataFilePath, "utf8");
  const data = JSON.parse(fileContents);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogItems: data,
    },
    revalidate: 10,
  };
}

export default BlogPage;
