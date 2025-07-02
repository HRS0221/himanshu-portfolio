import { baseURL, person } from "@/resources";
import { articles } from "@/resources";
import BlogListClient from "./BlogListClient";
import { Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: articles.title,
    description:
      "Explore 50+ thought-provoking articles on AI, machine learning, and data, written by Himanshu Salunke.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(articles.title)}`,
    path: "/blog",
  });
}

export default function BlogPage() {
  return (
    <>
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path="/blog"
        title={articles.title}
        description="Explore 50+ thought-provoking articles on AI, machine learning, and data, written by Himanshu Salunke."
        image="/images/articles/Machine-Learning.png"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <BlogListClient />
    </>
  );
}
