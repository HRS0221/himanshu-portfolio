import { baseURL, person, articles, sameAs } from "../../resources";
import ArticleListClient from "./ArticleListClient";
import { Meta, Schema } from "@once-ui-system/core";

export async function generateMetadata() {
  return Meta.generate({
    title: articles.title,
    description:
      "Explore 50+ thought-provoking articles on AI, machine learning, and data, written by Himanshu Salunke.",
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: "/article",
  });
}

export default function ArticlePage() {
  return (
    <>
      <Schema
        as="article"
        baseURL={baseURL}
        path="/article"
        title={articles.title}
        description="Explore 50+ thought-provoking articles on AI, machine learning, and data, written by Himanshu Salunke."
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
        sameAs={Object.values(sameAs).filter((url): url is string => typeof url === 'string' && url !== "")}
      />
      <ArticleListClient />
    </>
  );
}