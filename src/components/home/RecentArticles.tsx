"use client";

import { Column, Heading, Text, RevealFx, Flex, Button, Card } from "@once-ui-system/core";
import { articles } from "../../resources";
import styles from "./RecentArticles.module.scss";

export default function RecentArticles() {
  // Get the 3 most recent articles (last 3 from the array)
  const recentArticles = articles.items
    .filter(article => article.title && article.image && article.link)
    .slice(-3); // Take the last 3 articles instead of first 3

  return (
    <section className={styles.recentArticles}>
      <RevealFx>
        <Flex fillWidth horizontal="center" marginBottom="32">
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h2" variant="display-strong-m" align="center">
              Latest Articles
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              Recent insights on AI, machine learning, and data science
            </Text>
          </Column>
        </Flex>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, 320px)",
              gap: "24px",
              justifyContent: "center",
              maxWidth: "1024px",
              width: "100%",
            }}
          >
            {recentArticles.map((article, index) => (
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
                      width: "320px",
                      maxWidth: "100%",
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
                    <img
                      src={article.image}
                      alt={article.title}
                      style={{
                        height: "180px",
                        width: "100%",
                        objectFit: "cover",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                      onError={(e) => {
                        console.error("Image failed to load:", article.image);
                        e.currentTarget.style.display = "none";
                      }}
                      onLoad={() => {
                        console.log(
                          "Image loaded successfully:",
                          article.image
                        );
                      }}
                    />
                    <Column align="center" gap="12" padding="20">
                      <Text variant="heading-strong-s" align="center">
                        {article.title}
                      </Text>
                      <Text 
                        size="s" 
                        onBackground="neutral-weak" 
                        align="center"
                        suppressHydrationWarning={true}
                      >
                        {new Date(article.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </Text>
                    </Column>
                  </Card>
                </a>
              </RevealFx>
            ))}
          </div>
        </div>
      </RevealFx>

      <RevealFx delay={0.4}>
        <Flex fillWidth horizontal="center" marginTop="48">
          <Button
            href="/article"
            variant="secondary"
            size="m"
            arrowIcon
          >
            View All Articles
          </Button>
        </Flex>
      </RevealFx>
    </section>
  );
} 