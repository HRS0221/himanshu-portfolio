import { Column, Heading, Text, RevealFx, Flex, Icon } from "@once-ui-system/core";
import styles from "./CurrentFocus.module.scss";

export default function CurrentFocus() {
  const focusItems = [
    {
      icon: "school",
      title: "GATE 2026 Preparation",
      description: "Intensive preparation for Graduate Aptitude Test in Engineering 2026, focusing on Computer Science and Information Technology subjects.",
      status: "Active"
    },
    {
      icon: "visibility",
      title: "Computer Vision Projects",
      description: "Developing real-time object detection and image processing solutions using YOLO and deep learning frameworks.",
      status: "Ongoing"
    },
    {
      icon: "cloud",
      title: "Cloud Data Engineering",
      description: "Building scalable data pipelines and analytics solutions using AWS services and modern data engineering practices.",
      status: "Learning"
    },
    {
      icon: "edit",
      title: "Technical Writing",
      description: "Creating educational content on machine learning and data science concepts through LinkedIn articles and documentation.",
      status: "Active"
    }
  ];

  return (
    <section className={styles.currentFocus}>
      <RevealFx>
        <Flex fillWidth horizontal="center" marginBottom="32">
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h2" variant="display-strong-m" align="center">
              Currently Working On
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              My current focus areas and ongoing projects
            </Text>
          </Column>
        </Flex>
      </RevealFx>

      <div className={styles.focusGrid}>
        {focusItems.map((item, index) => (
          <RevealFx key={index} delay={0.1 * (index + 1)}>
            <div className={styles.focusCard}>
              <div className={styles.iconContainer}>
                <Icon name={item.icon} size="l" />
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