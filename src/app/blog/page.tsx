import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
// import { baseURL, articles, person } from "@/resources";
import { baseURL, person } from "@/resources";
import { articles } from "@/resources/content";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata() {
  return Meta.generate({
    title: articles.title,
    description: "Explore 50+ thought-provoking articles on AI, machine learning, and data, written by Himanshu Salunke.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(articles.title)}`,
    path: "/blog",
  });
}

export default function BlogPage() {
  return (
    <Column maxWidth="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={articles.title}
        description="Explore 50+ thought-provoking articles on AI, machine learning, and data, written by Himanshu Salunke."
        path="/blog"
        image={`/api/og/generate?title=${encodeURIComponent(articles.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s" align="center">
        {articles.title}
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {articles.items.map((article, idx) => (
          <Link
            key={idx}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 bg-white"
          >
            <div className="relative w-full h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center text-base font-semibold">
              {article.title}
            </div>
          </Link>
        ))}
      </div>
    </Column>
  );
}
