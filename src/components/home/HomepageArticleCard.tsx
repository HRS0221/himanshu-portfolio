// Complete code for the NEW file: src/components/home/HomepageArticleCard.tsx
"use client";

import { Column, Card, Heading, Text } from "@once-ui-system/core";
import type { MdxContent } from "@/utils/utils";
import styles from './CallToActionCard.module.scss'; // We can reuse the same styles!

interface HomepageArticleCardProps {
  article: MdxContent;
}

export default function HomepageArticleCard({ article }: HomepageArticleCardProps) {
  return (
    <a
      href={article.metadata.link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.ctaCard} // Reusing the style from the other card
    >
      <Column fillHeight gap="16">
        <Text size="s" onBackground="neutral-weak">ARTICLE</Text>
        <Heading as="h3" variant="heading-strong-m">
          {article.metadata.title}
        </Heading>
      </Column>
    </a>
  );
}