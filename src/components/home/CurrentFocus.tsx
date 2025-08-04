import { Column, Heading, Text, RevealFx, Flex, Icon } from "@once-ui-system/core";
import styles from "./CurrentFocus.module.scss";
import { useMemo } from "react";
import { type FocusItem } from "../../utils/currentFocus";

interface CurrentFocusProps {
  focusItems: FocusItem[];
}

export default function CurrentFocus({ focusItems }: CurrentFocusProps) {
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