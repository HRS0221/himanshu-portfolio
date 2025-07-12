"use client";

import { Column, Card, Heading, Text, RevealFx, SmartLink, Flex, Media, Tag } from "@once-ui-system/core";
import type { MdxContent } from "../../utils/utils";
import styles from "./Posts.module.scss";
import { formatDate } from "../../utils/formatDate";

interface ArticleProps {
  article: MdxContent;
  thumbnail: boolean;
  direction?: "row" | "column";
}

export default function Article({
  article,
  thumbnail,
  direction,
}: ArticleProps) {
  if (!article.metadata.link) {
    return null;
  }

  return (
    <SmartLink
      fillWidth
      unstyled
      style={{ borderRadius: "var(--radius-l)" }}
      key={article.slug}
      href={article.metadata.link}
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

          {/* ✅ FIX: Added suppressHydrationWarning to the Text component that formats the date */}
          <Text
            suppressHydrationWarning={true}
            variant="label-default-s"
            onBackground="neutral-weak"
          >
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
