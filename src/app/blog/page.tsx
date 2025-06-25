import {
  Column,
  Row,
  Card,
  Heading,
  Text,
  Media,
  Button,
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
        <Row wrap gap="32" horizontal="center">
          {filteredArticles.map((article, index) => (
            <RevealFx key={index} translateY="12" delay={index * 0.05}>
              <Card
                radius="l"
                padding="16"
                background="neutral-alpha-weak"
                border="neutral-strong"
                style={{ width: 320 }}
              >
                <Media
                  radius="m"
                  src={article.image}
                  alt={article.title}
                  height={180}
                  width={320}
                  style={{ objectFit: 'cover' }}
                />
                <Column gap="8" paddingTop="12">
                  <Text variant="heading-strong-s">{article.title}</Text>
                  <Button
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="s"
                    arrowIcon
                    data-border="rounded"
                  >
                    Read More
                  </Button>
                </Column>
              </Card>
            </RevealFx>
          ))}
        </Row>
      </RevealFx>
    </Column>
  );
}
