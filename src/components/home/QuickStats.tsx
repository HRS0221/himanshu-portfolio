import { Column, Heading, Text, RevealFx, Flex } from "@once-ui-system/core";
import styles from "./QuickStats.module.scss";
import { calculateStatsFromData, getProjectsCount } from "../../utils/utils";

export default function QuickStats() {
  // Get the actual projects count from the server
  const projectsCount = getProjectsCount();
  
  // Automatically calculate stats from About section data
  const stats = calculateStatsFromData(projectsCount);

  return (
    <section className={styles.quickStats}>
      <div className={styles.headingSection}>
        <RevealFx>
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h2" variant="display-strong-m" align="center">
              By the Numbers
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              A quick overview of my journey and achievements
            </Text>
          </Column>
        </RevealFx>
      </div>

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