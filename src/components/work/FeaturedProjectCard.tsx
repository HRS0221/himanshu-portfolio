// Complete code for: src/components/work/FeaturedProjectCard.tsx

import { Column, Flex, Heading, Media, Tag, Text, Button, RevealFx } from "@once-ui-system/core";
import type { MdxContent } from "@/utils/utils";
import styles from './FeaturedProjectCard.module.scss';

interface FeaturedProjectCardProps {
  project: MdxContent;
  index: number;
}

export default function FeaturedProjectCard({ project, index }: FeaturedProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <RevealFx translateY={50} delay={index * 0.1}>
      <div className={`${styles.cardContainer} ${isReversed ? styles.reversed : ''}`}>
        {/* --- IMAGE SIDE --- */}
        <div className={styles.imageWrapper}>
          <a href={project.metadata.link || '#'} target="_blank" rel="noopener noreferrer">
            <Media
              priority={index < 2}
              className={styles.projectImage}
              src={project.metadata.images?.[0] || '/images/projects/placeholder.jpg'}
              alt={project.metadata.title}
              aspectRatio="16 / 10"
              radius="l"
            />
          </a>
        </div>

        {/* --- TEXT SIDE --- */}
        <Column className={styles.textWrapper} gap="24">
          <Tag label={project.metadata.tag || 'Project'} variant="neutral" />
          <Heading as="h3" variant="heading-strong-l">
            {project.metadata.title}
          </Heading>
          <Text onBackground="neutral-weak">
            {project.metadata.summary || ''}
          </Text>

          {project.metadata.techStack && project.metadata.techStack.length > 0 && (
            <Flex gap="8">
              {project.metadata.techStack.map((tech) => (
                <Tag key={tech} label={tech} variant="brand" />
              ))}
            </Flex>
          )}

          {/* ✅ START: UPDATED BUTTONS SECTION */}
          <Flex gap="12">
            {/* View Code Button */}
            {project.metadata.link && (
              <Button
                href={project.metadata.link}
                target="_blank"
                variant="primary"
                size="m"
                arrowIcon
              >
                View Code
              </Button>
            )}

            {/* View Output Button - This will only appear if outputLink exists */}
            {project.metadata.outputLink && (
              <Button
                href={project.metadata.outputLink}
                target="_blank"
                variant="secondary" // Using a different style to distinguish it
                size="m"
                arrowIcon
              >
                View Output
              </Button>
            )}
          </Flex>
          {/* ✅ END: UPDATED BUTTONS SECTION */}

        </Column>
      </div>
    </RevealFx>
  );
}