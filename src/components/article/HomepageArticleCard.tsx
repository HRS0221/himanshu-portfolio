"use client"; // This marks the component as interactive and safe for event handlers

import { Column, Card, Heading, Text, RevealFx } from "@once-ui-system/core";
import type { MdxContent } from "../../utils/utils"; // Import the type

// Define props for this specific component
interface HomepageArticleCardProps {
  article: MdxContent;
  index: number;
}

export default function HomepageArticleCard({
  article,
  index,
}: HomepageArticleCardProps) {
  return (
    <RevealFx key={article.slug} translateY="12" delay={index * 0.05}>
      <a
        href={article.metadata.link}
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
          // These event handlers are now safely inside a Client Component
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img
            src={article.metadata.image}
            alt={article.metadata.title}
            style={{
              height: "180px",
              width: "100%",
              objectFit: "cover",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          <Column align="center" gap="12" padding="20">
            <Text variant="heading-strong-s" align="center">
              {article.metadata.title}
            </Text>
          </Column>
        </Card>
      </a>
    </RevealFx>
  );
}
