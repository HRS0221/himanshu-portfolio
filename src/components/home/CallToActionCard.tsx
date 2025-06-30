// Complete code for the NEW file: src/components/home/CallToActionCard.tsx

"use client";

import { Column, Flex, Heading, Text } from "@once-ui-system/core";
import Link from 'next/link';
import styles from './CallToActionCard.module.scss'; // We will create this file next

interface CallToActionCardProps {
  title: string;
  description: string;
  href: string;
}

export default function CallToActionCard({ title, description, href }: CallToActionCardProps) {
  return (
    <Link href={href} passHref legacyBehavior>
      <a className={styles.ctaCard}>
        <Column gap="16" horizontal="center" vertical="center" fillHeight>
          <Heading as="h3" variant="heading-strong-m" align="center">
            {title}
          </Heading>
          <Text onBackground="neutral-weak" align="center">
            {description}
          </Text>
        </Column>
      </a>
    </Link>
  );
}