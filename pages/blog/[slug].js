// react
import React from "react";
// next
import path from "path";
import fs from "fs";
import { useRouter } from "next/router";
// import
import slugify from "slugify";
import Loader from "components/ui/loader";

function BlogItemSlug(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div>
      Blog Item : <pre>{JSON.stringify(props.blogItem, null, 4)}</pre>
    </div>
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

export default BlogItemSlug;
