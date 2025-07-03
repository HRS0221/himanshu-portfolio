// src/components/work/ProjectGridCard.tsx

import {
  Column,
  Flex,
  Heading,
  Media,
  Tag,
  Button,
  RevealFx,
  Text,
} from "@once-ui-system/core";
import type { MdxContent } from "../../utils/utils";
import styles from "./ProjectGridCard.module.scss";

interface ProjectGridCardProps {
  project: MdxContent;
  index: number;
}

export default function ProjectGridCard({
  project,
  index,
}: ProjectGridCardProps) {
  return (
    <RevealFx translateY={50} delay={index * 0.05}>
      <Column
        className={styles.card}
        background="neutral-weak"
        border="neutral-alpha-weak"
        radius="l"
      >
        <a
          href={project.metadata.outputLink || project.metadata.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Media
            className={styles.projectImage}
            src={
              project.metadata.images?.[0] ||
              "/images/projects/placeholder.jpg"
            }
            alt={project.metadata.title}
            aspectRatio="16 / 10"
          />
        </a>

        {/* ✅ FIX: Removed the invalid 'flexGrow' prop. The stylesheet handles this. */}
        <Column className={styles.contentWrapper} gap="16">
          {project.metadata.tag && (
            <Tag label={project.metadata.tag} variant="neutral" />
          )}

          <Heading as="h4" variant="heading-strong-s">
            {project.metadata.title}
          </Heading>

          {project.metadata.summary && (
            <Text onBackground="neutral-weak" size="s">
              {project.metadata.summary}
            </Text>
          )}

          {project.metadata.techStack &&
            project.metadata.techStack.length > 0 && (
              <Flex wrap gap="8">
                {project.metadata.techStack.map((tech) => (
                  <Tag key={tech} label={tech} variant="brand" />
                ))}
              </Flex>
            )}
        </Column>

        <Flex className={styles.buttonWrapper} gap="12">
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
          {project.metadata.outputLink && (
            <Button
              href={project.metadata.outputLink}
              target="_blank"
              variant="secondary"
              size="m"
              arrowIcon
            >
              View Output
            </Button>
          )}
        </Flex>
      </Column>
    </RevealFx>
  );
}