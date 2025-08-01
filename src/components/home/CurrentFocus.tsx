"use client";

import { Column, Heading, Text, RevealFx, Flex, Icon } from "@once-ui-system/core";
import styles from "./CurrentFocus.module.scss";
import { useMemo } from "react";

export default function CurrentFocus() {
  // Use only the default focusItems array
  const focusItems = [
    {
      icon: "📚",
      title: "GATE 2026 Preparation",
      description: "Intensive preparation for Graduate Aptitude Test in Engineering 2026, focusing on Data Science and Artificial Intelligence paper.",
      status: "Active"
    },
    {
      icon: "👁️",
      title: "Computer Vision Projects",
      description: "Developing real-time object detection and image processing solutions using YOLO and deep learning frameworks.",
      status: "Ongoing"
    },
    {
      icon: "☁️",
      title: "Cloud Data Engineering",
      description: "Building scalable data pipelines and analytics solutions using AWS services and modern data engineering practices.",
      status: "Learning"
    },
    {
      icon: "✍️",
      title: "Technical Writing",
      description: "Creating educational content on machine learning and data science concepts through LinkedIn articles and documentation.",
      status: "Active"
    }
  ];

  // Memoize the focus items to prevent unnecessary re-renders
  const memoizedFocusItems = useMemo(() => focusItems, [focusItems]);

  return (
    <section className={styles.currentFocus}>
      <div className={styles.headingSection}>
        <RevealFx>
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h2" variant="display-strong-m" align="center">
              Currently Working On
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              My current focus areas and ongoing projects
            </Text>
          </Column>
        </RevealFx>
      </div>

      <div className={styles.focusGrid}>
        {memoizedFocusItems.map((item, index) => (
          <RevealFx key={`focus-${index}-${item.title}`} delay={0.1 * (index + 1)}>
            <div className={styles.focusCard}>
              <div className={styles.iconContainer}>
                <span style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </span>
              </div>
              <Column gap="12" flex={1}>
                <Flex horizontal="space-between" vertical="center">
                  <Text variant="heading-strong-s" className={styles.focusTitle}>
                    {item.title}
                  </Text>
                  <span className={`${styles.status} ${styles[item.status.toLowerCase()]}`}>
                    {item.status}
                  </span>
                </Flex>
                <Text onBackground="neutral-weak" className={styles.focusDescription}>
                  {item.description}
                </Text>
              </Column>
            </div>
          </RevealFx>
        ))}
      </div>
    </section>
  );
} 