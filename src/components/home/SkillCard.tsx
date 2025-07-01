// Complete code for the NEW file: src/components/home/SkillCard.tsx

import { Column, Flex, Heading, Text, Button } from "@once-ui-system/core";
import Link from "next/link";
import styles from "./SkillCard.module.scss"; // We will create this file next

// Define the shape of the data this component will receive
export interface Skill {
  name: string;
  description: string;
  projectSlug: string; // The URL slug for the related project
}

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className={styles.skillCard}>
      <Column gap="16">
        <Heading as="h3" variant="heading-strong-l">
          {skill.name}
        </Heading>
        <Text onBackground="neutral-weak">{skill.description}</Text>
      </Column>
      <Link
        href={`/work/${skill.projectSlug}`}
        className={styles.viewProjectLink}
      >
        View Project →
      </Link>
    </div>
  );
}
