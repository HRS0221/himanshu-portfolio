// File: src/components/blog/Articles.tsx
// CRITICAL: Ensure the line "use client"; is NOT at the top of this file.

import { getPosts } from '@/utils/utils';
import { Grid } from '@once-ui-system/core';
import Article from './Article';

interface ArticlesProps {
    range?: [number] | [number, number];
    columns?: '1' | '2' | '3';
    thumbnail?: boolean;
    direction?: 'row' | 'column';
}

export function Articles({
    range,
    columns = '1',
    thumbnail = false,
    direction
}: ArticlesProps) {
    // This function uses 'fs' and MUST run on the server.
    let allArticles = getPosts(['src', 'app', 'articles']);

    const sortedArticles = allArticles.sort((a, b) => {
        if (!a.metadata.publishedAt || !b.metadata.publishedAt) return 0;
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedArticles = range
        ? sortedArticles.slice(
              range[0] - 1,
              range.length === 2 ? range[1] : sortedArticles.length
          )
        : sortedArticles;

    return (
        <>
            {displayedArticles.length > 0 && (
                <Grid
                    columns={columns} mobileColumns="1"
                    fillWidth marginBottom="40" gap="12">
                    {displayedArticles.map((article) => (
                        <Article
                            key={article.slug}
                            article={article}
                            thumbnail={thumbnail}
                            direction={direction}
                        />
                    ))}
                </Grid>
            )}
        </>
    );
}