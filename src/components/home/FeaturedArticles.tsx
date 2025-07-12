'use client';

import React from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Button,
  RevealFx,
  Badge,
} from "@once-ui-system/core";
import styles from "./FeaturedProjects.module.scss";

// Sample featured articles data - you can replace this with your actual LinkedIn articles
const featuredArticles = [
  {
    title: "Understanding Deep Learning Fundamentals",
    description: "A comprehensive guide to neural networks, backpropagation, and gradient descent algorithms.",
    category: "Deep Learning",
    date: "2024-03-15",
    image: "/images/articles/Deep Learning.jpg",
    link: "https://linkedin.com/posts/your-article-1"
  },
  {
    title: "Machine Learning Algorithms Explained",
    description: "Deep dive into classification, regression, and clustering algorithms with practical examples.",
    category: "Machine Learning",
    date: "2024-03-10",
    image: "/images/articles/Machine-Learning.jpg",
    link: "https://linkedin.com/posts/your-article-2"
  },
  {
    title: "Computer Vision with OpenCV",
    description: "Building computer vision applications using OpenCV and Python for real-world problems.",
    category: "Computer Vision",
    date: "2024-03-05",
    image: "/images/articles/Convolution Network.jpg",
    link: "https://linkedin.com/posts/your-article-3"
  },
  {
    title: "Data Engineering Best Practices",
    description: "Essential practices for building scalable data pipelines and ETL processes.",
    category: "Data Engineering",
    date: "2024-02-28",
    image: "/images/articles/Linear Regression.jpg",
    link: "https://linkedin.com/posts/your-article-4"
  }
];

export default function FeaturedArticles() {
  return (
    <Column fillWidth gap="40">
      <RevealFx>
        <Column gap="16" horizontal="center">
          <Heading variant="heading-default-xl">Latest Articles</Heading>
          <Text onBackground="neutral-weak" variant="heading-default-l">
            Technical insights and tutorials on data science, machine learning, and AI
          </Text>
        </Column>
      </RevealFx>

      <Column gap="32">
        {featuredArticles.map((article, index) => (
          <RevealFx key={index} delay={index * 0.1}>
            <Row
              gap="24"
              vertical="center"
              className={styles["article-card"]}
              style={{
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid var(--color-border-neutral-weak)",
                backgroundColor: "var(--color-background-neutral-weak)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => window.open(article.link, '_blank')}
            >
              <div
                style={{
                  width: "120px",
                  height: "80px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundImage: `url(${article.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <Column flex="1" gap="12">
                <Row gap="12" vertical="center">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="12"
                    paddingY="8"
                    border="brand-alpha-medium"
                  >
                    {article.category}
                  </Badge>
                  <Text onBackground="neutral-weak" variant="body-default-s">
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </Text>
                </Row>

                <Column gap="8">
                  <Heading variant="heading-default-l">
                    {article.title}
                  </Heading>
                  <Text onBackground="neutral-weak" variant="body-default-m">
                    {article.description}
                  </Text>
                </Column>
              </Column>

              <Button
                variant="secondary"
                size="s"
                arrowIcon
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  window.open(article.link, '_blank');
                }}
              >
                Read Article
              </Button>
            </Row>
          </RevealFx>
        ))}
      </Column>

      <RevealFx>
        <Column horizontal="center">
          <Button
            href="/article"
            variant="primary"
            size="m"
            arrowIcon
          >
            View All Articles
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
} 