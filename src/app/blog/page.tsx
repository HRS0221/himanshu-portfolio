import {
  Column,
  Row,
  Card,
  Heading,
  Text,
  Media,
  Meta,
  Schema,
  RevealFx,
} from "@once-ui-system/core";

import { baseURL, person } from "@/resources";
import { articles } from "@/resources/content";

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
  const filteredArticles = articles.items.filter((article) => article.title && article.image && article.link);

  return (
    <Column maxWidth="m" paddingTop="32" paddingBottom="64" gap="40">
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

      <RevealFx translateY="8" delay={0.1} fillWidth horizontal="center">
        <Heading variant="display-strong-l" align="center">
          {articles.title}
        </Heading>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2}>
        <Row wrap gap="40" horizontal="center">
          {filteredArticles.map((article, index) => (
            <RevealFx key={index} translateY="12" delay={index * 0.05}>
              <Card
              radius="xl"
              padding="0"
              background="neutral-alpha-weak"
              border="neutral-strong"
              style={{
                width: 380,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <Media
                  src={article.image}
                  alt={article.title}
                  height={220}
                  width={380}
                  style={{
                    objectFit: "cover",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
                <Column align="center" gap="12" padding="20">
                  <Text variant="heading-strong-m" align="center">
                    {article.title}
                  </Text>
                </Column>
              </a>
            </Card>

            </RevealFx>
          ))}
        </Row>
      </RevealFx>
    </Column>
  );
}
