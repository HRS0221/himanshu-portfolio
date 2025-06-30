// Complete code for the NEW file: src/components/home/SkillsSection.tsx

import { Column, Heading, RevealFx } from "@once-ui-system/core";
import { skills } from "@/resources/content";
import SkillCard from "./SkillCard";
import styles from './SkillsSection.module.scss';

export default function SkillsSection() {
  return (
    <section className={styles.skillsSection}>
      <RevealFx>
        <Heading as="h2" variant="display-strong-m" align="center">
          Core Competencies
        </Heading>
      </RevealFx>

      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <RevealFx key={index} delay={0.1 * (index + 1)}>
            <SkillCard skill={skill} />
          </RevealFx>
        ))}
      </div>
    </section>
  );
}