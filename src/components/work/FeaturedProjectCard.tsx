// src/components/work/FeaturedProjectCard.tsx

import {
  Column,
  Flex,
  Heading,
  Tag,
  Text,
  Button,
  RevealFx,
} from "@once-ui-system/core";
import type { MdxContent } from "../../utils/utils";
import styles from "./FeaturedProjectCard.module.scss";
import ProjectImageCarousel from "./ProjectImageCarousel";

interface FeaturedProjectCardProps {
  project: MdxContent;
  index: number;
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  if (!dateString || isNaN(new Date(dateString).getTime())) {
    return "Date not available";
  }
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export default function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  const isReversed = index % 2 !== 0;

  return (
    <RevealFx translateY={50} delay={index * 0.1}>
      <div
        className={`${styles.cardContainer} ${
          isReversed ? styles.reversed : ""
        }`}
      >
        {/* --- IMAGE SIDE --- */}
        <div className={styles.imageWrapper}>
          <ProjectImageCarousel
            images={project.metadata.images || []}
            title={project.metadata.title}
            projectIndex={index}
            layout="featured"
          />
        </div>

        {/* --- TEXT SIDE --- */}
        <Column className={styles.textWrapper} gap="24">
          <Flex gap="8" vertical="center">
            <Tag label={project.metadata.tag || "Project"} variant="neutral" />
            <Text size="s" onBackground="neutral-medium">•</Text>
            <Text size="s" onBackground="neutral-medium">
              {formatDate(project.metadata.publishedAt)}
            </Text>
          </Flex>
          
          <Heading as="h3" variant="heading-strong-l">
            {project.metadata.title}
          </Heading>

          {project.metadata.summary && Array.isArray(project.metadata.summary) ? (
            <Column
              as="ul"
              className={styles.summaryList}
              style={{ paddingLeft: '20px' }}
            >
              {project.metadata.summary.map((point, i) => (
                <Text
                  as="li"
                  key={i}
                  onBackground="neutral-weak"
                  className={styles.summaryListItem}
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              ))}
            </Column>
          ) : (
            <Text 
              onBackground="neutral-weak"
              dangerouslySetInnerHTML={{ __html: project.metadata.summary || "" }}
            />
          )}

          {project.metadata.techStack &&
            project.metadata.techStack.length > 0 && (
              <Flex gap="8" wrap>
                {project.metadata.techStack.map((tech) => (
                  <Tag key={tech} label={tech} variant="brand" />
                ))}
              </Flex>
            )}

          <Flex gap="12">
            {project.metadata.link && (
              <Button
                href={project.metadata.link}
                target="_blank"
                variant="primary"
                size="m"
                arrowIcon
                className={styles.projectButton}
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
                className={styles.projectButton}
              >
                View Output
              </Button>
            )}
          </Flex>
        </Column>
      </div>
    </RevealFx>
  );
}