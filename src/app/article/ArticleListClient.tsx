"use client";

import { Column, Card, Heading, Text, RevealFx } from "@once-ui-system/core";
import { articles } from "../../resources";

export default function ArticleListClient() {
  const filteredArticles = articles.items.filter(
    (article) => article.title && article.image && article.link
  );

  return (
    <Column maxWidth="xl" paddingTop="32" paddingBottom="64" gap="40">
      <RevealFx translateY="8" delay={0.1} fillWidth horizontal="center">
        <Heading variant="display-strong-l" align="center">
          {articles.title}
        </Heading>
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
                    </Column>
                  </Card>
                </a>
              </RevealFx>
            ))}
          </div>
        </div>
      </RevealFx>
    </Column>
  );
}
