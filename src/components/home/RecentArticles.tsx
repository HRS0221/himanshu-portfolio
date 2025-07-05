import { Column, Heading, Text, RevealFx, Flex, Button } from "@once-ui-system/core";
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

      <div className={styles.articlesGrid}>
        {recentArticles.map((article, index) => (
          <RevealFx key={index} delay={0.1 * (index + 1)}>
            <article className={styles.articleCard}>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.articleLink}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className={styles.articleImage}
                  />
                </div>
                <Column gap="12" padding="20">
                  <Text variant="heading-strong-s" className={styles.articleTitle}>
                    {article.title}
                  </Text>
                  <Text size="s" onBackground="neutral-weak" className={styles.articleDate}>
                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </Text>
                </Column>
              </a>
            </article>
          </RevealFx>
        ))}
      </div>

      <RevealFx delay={0.4}>
        <Flex fillWidth horizontal="center" marginTop="32">
          <Button
            href="/blog"
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