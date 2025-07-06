"use client";

import { Column, Heading, Text, RevealFx, Flex } from "@once-ui-system/core";
import styles from "./QuickStats.module.scss";
import { calculateStatsFromData } from "../../utils/utils";
import { useState, useEffect, useMemo } from "react";

// Component for animated counting
const AnimatedNumber = ({ value, suffix = "" }: { value: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Extract numeric part from value (e.g., "50+" -> 50)
    const numericValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/\d/g, ''); // Get the suffix (e.g., "+")
    
    if (numericValue && !isAnimating) {
      setIsAnimating(true);
      
      // Animate from 0 to target value
      let current = 0;
      const increment = Math.ceil(numericValue / 30); // 30 steps for smooth animation
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
          setIsAnimating(false);
        }
        setDisplayValue(`${current}${suffix}`);
      }, 50); // 50ms per step = 1.5s total for most numbers
      
      return () => clearInterval(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, isAnimating]);

  return <span className={styles.animatedNumber}>{displayValue}</span>;
};

export default function QuickStats() {
  const [stats, setStats] = useState([
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
    {
      number: "7+",
      label: "Projects Completed",
      description: "AI, ML & Data Science"
    },
  ]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Only load stats once when component mounts
    if (!isLoaded) {
      const loadStats = async () => {
        try {
          // Automatically calculate stats from About section data
          const calculatedStats = await calculateStatsFromData();
          setStats(calculatedStats);
          setIsLoaded(true);
        } catch (error) {
          console.error('Error loading stats:', error);
          // Keep the default stats if there's an error
          setIsLoaded(true);
        }
      };

      loadStats();
    }
  }, [isLoaded]); // Only depend on isLoaded to prevent re-runs

  // Memoize the stats to prevent unnecessary re-renders
  const memoizedStats = useMemo(() => stats, [stats]);

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
        {memoizedStats.map((stat, index) => (
          <RevealFx key={`stat-${index}-${stat.number}`} delay={0.1 * (index + 1)}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>
                <AnimatedNumber value={stat.number} />
              </div>
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