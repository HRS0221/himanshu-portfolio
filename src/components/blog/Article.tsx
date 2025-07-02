// Complete updated code for: src/components/blog/Article.tsx

"use client";

import {
  Column,
  Flex,
  Heading,
  Media,
  SmartLink,
  Tag,
  Text,
} from "@once-ui-system/core";
import styles from "./Posts.module.scss";
import { formatDate } from "../../utils/formatDate";
import { MdxContent } from "../../utils/utils"; // It's good practice to import the specific type

interface ArticleProps {
  article: MdxContent; // Use the specific MdxContent type for better type safety
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Article({
  article,
  thumbnail,
  direction,
}: ArticleProps) {
  // A check to ensure we have a link before rendering
  if (!article.metadata.link) {
    return null; // Or render a non-clickable version
  }

  return (
    // ✅ The SmartLink is now corrected
    <SmartLink
      fillWidth
      unstyled
      style={{ borderRadius: "var(--radius-l)" }}
      key={article.slug}
      // FIX 1: Use the correct external link from your data
      href={article.metadata.link}
      // FIX 2: Add these props to open the link in a new tab
      target="_blank"
      rel="noopener noreferrer"
    >
      <Flex
        position="relative"
        transition="micro-medium"
        direction={direction}
        radius="l"
        className={styles.hover}
        mobileDirection="column"
        fillWidth
      >
        {article.metadata.image && thumbnail && (
          <Media
            priority
            className={styles.image}
            sizes="(max-width: 768px) 100vw, 640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="l"
            src={article.metadata.image}
            alt={"Thumbnail of " + article.metadata.title}
            aspectRatio="16 / 9"
          />
        )}
        <Column
          position="relative"
          fillWidth
          gap="4"
          padding="24"
          vertical="center"
        >
          <Heading as="h2" variant="heading-strong-l" wrap="balance">
            {article.metadata.title}
          </Heading>
          <Text variant="label-default-s" onBackground="neutral-weak">
            {formatDate(article.metadata.publishedAt, false)}
          </Text>
          {article.metadata.tag && (
            <Tag
              className="mt-12"
              label={article.metadata.tag}
              variant="neutral"
            />
          )}
        </Column>
      </Flex>
    </SmartLink>
  );
}
