'use client';

import {
  Column,
  Row,
  Card,
  Heading,
  Text,
  Media,
  RevealFx,
} from "@once-ui-system/core";
import { articles } from "@/resources/content";

export default function BlogListClient() {
  const filteredArticles = articles.items.filter(
    (article) => article.title && article.image && article.link
  );

  return (
    <Column maxWidth="m" paddingTop="32" paddingBottom="64" gap="40">
      <RevealFx translateY="8" delay={0.1} fillWidth horizontal="center">
        <Heading variant="display-strong-l" align="center">
          {articles.title}
        </Heading>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2}>
        <Row wrap gap="40" horizontal="center">
          {filteredArticles.map((article, index) => (
            <RevealFx key={index} translateY="12" delay={index * 0.05}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card
                  radius="xl"
                  padding="0"
                  background="neutral-alpha-weak"
                  border="neutral-strong"
                  style={{
                    width: 360,
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                    transition: "transform 0.3s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <Media
                    src={article.image}
                    alt={article.title}
                    height={220}
                    width={360}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                  <Column align="center" gap="12" padding="20">
                    <Text variant="heading-strong-m" align="center">
                      {article.title}
                    </Text>
                  </Column>
                </Card>
              </a>
            </RevealFx>
          ))}
        </Row>
      </RevealFx>
    </Column>
  );
}
