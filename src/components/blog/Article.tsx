// File: src/components/blog/Article.tsx

"use client";

import { Column, Flex, Heading, Media, SmartLink, Tag, Text } from '@once-ui-system/core';
// We can reuse the same stylesheet
import styles from './Posts.module.scss';
import { formatDate } from '@/utils/formatDate';

// 1. Rename the interface
interface ArticleProps {
    // 2. Rename the prop to 'article'
    article: any; 
    thumbnail: boolean;
    direction?: "row" | "column";
}

// 3. Rename the component to 'Article'
export default function Article({ article, thumbnail, direction }: ArticleProps) {
    return (
        <SmartLink
            fillWidth
            unstyled
            style={{ borderRadius: 'var(--radius-l)' }}
            key={article.slug}
            // 4. IMPORTANT: Change the link to point to '/articles/'
            href={`/articles/${article.slug}`}>
            <Flex
                position="relative"
                transition="micro-medium"
                direction={direction}
                radius="l"
                className={styles.hover}
                mobileDirection="column"
                fillWidth>
                {/* 5. Update all 'post' references to 'article' */}
                {article.metadata.image && thumbnail && (
                    <Media
                        priority
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 640px"
                        border="neutral-alpha-weak"
                        cursor="interactive"
                        radius="l"
                        src={article.metadata.image}
                        alt={'Thumbnail of ' + article.metadata.title}
                        aspectRatio="16 / 9"
                    />
                )}
                <Column
                    position="relative"
                    fillWidth gap="4"
                    padding="24"
                    vertical="center">
                    <Heading
                        as="h2"
                        variant="heading-strong-l"
                        wrap="balance">
                        {article.metadata.title}
                    </Heading>
                    <Text
                        variant="label-default-s"
                        onBackground="neutral-weak">
                        {formatDate(article.metadata.publishedAt, false)}
                    </Text>
                    { article.metadata.tag &&
                        <Tag
                            className="mt-12"
                            label={article.metadata.tag}
                            variant="neutral" />
                    }
                </Column>
            </Flex>
        </SmartLink>
    );
}