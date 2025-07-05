import { Column, Heading, Text, RevealFx, Flex } from "@once-ui-system/core";
import styles from "./QuickStats.module.scss";

export default function QuickStats() {
  const stats = [
    {
      number: "50+",
      label: "Articles Published",
      description: "AI & ML insights on LinkedIn"
    },
    {
      number: "2",
      label: "National Hackathons",
      description: "SIH 2022, SUNHACKS 2022"
    },
    {
      number: "5+",
      label: "Certifications",
      description: "DataCamp, Google"
    },
  ];

  return (
    <section className={styles.quickStats}>
      <RevealFx>
        <Flex fillWidth horizontal="center" marginBottom="32">
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h2" variant="display-strong-m" align="center">
              By the Numbers
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              A quick overview of my journey and achievements
            </Text>
          </Column>
        </Flex>
      </RevealFx>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <RevealFx key={index} delay={0.1 * (index + 1)}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <Text variant="heading-strong-s" className={styles.statLabel}>
                {stat.label}
              </Text>
              <Text size="s" onBackground="neutral-weak" className={styles.statDescription}>
                {stat.description}
              </Text>
            </div>
          </RevealFx>
        ))}
      </div>
    </section>
  );
} 