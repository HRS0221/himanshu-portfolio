// COMMENTED OUT: Complex AccessibleProjectCard - replaced with simple unified ProjectCard
// This component was part of the complex Google-style implementation with WCAG compliance
// Now using a simple unified ProjectCard component for all projects

/*
import {
  Column,
  Flex,
  Heading,
  Tag,
  Button,
  RevealFx,
  Text,
} from "@once-ui-system/core";
import type { MdxContent } from "../../utils/utils";
import styles from "./AccessibleProjectCard.module.scss";
import ProjectImageCarousel from "./ProjectImageCarousel";

interface AccessibleProjectCardProps {
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

export default function AccessibleProjectCard({
  project,
  index,
}: AccessibleProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.href = `/work/${project.slug}`;
    }
  };

  const projectId = `project-${project.slug}`;
  const titleId = `project-title-${project.slug}`;
  const descriptionId = `project-description-${project.slug}`;

  return (
    <RevealFx translateY={50} delay={index * 0.05}>
      <article
        className={styles.card}
        role="article"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        id={projectId}
      >
        <div className={styles.imageContainer}>
          <ProjectImageCarousel
            images={project.metadata.images || []}
            title={project.metadata.title}
            projectIndex={index}
          />
        </div>

        <Column className={styles.contentWrapper} gap="16">
          <Flex gap="8" vertical="center" wrap>
            <Tag 
              label={project.metadata.tag || "Project"} 
              variant="neutral" 
              size="s" 
              aria-label={`Project category: ${project.metadata.tag || "Project"}`}
            />
            <Text size="s" onBackground="neutral-medium" aria-hidden="true">•</Text>
            <Text size="s" onBackground="neutral-medium">
              {formatDate(project.metadata.publishedAt)}
            </Text>
          </Flex>

          <Heading as="h3" variant="heading-strong-s" id={titleId}>
            {project.metadata.title}
          </Heading>

          <div id={descriptionId} className={styles.description}>
            {project.metadata.summary && Array.isArray(project.metadata.summary) ? (
              <Column
                as="ul"
                className={styles.summaryList}
                style={{ paddingLeft: '20px' }}
                role="list"
              >
                {project.metadata.summary.map((point, i) => (
                  <Text
                    as="li"
                    key={i}
                    onBackground="neutral-weak"
                    size="s"
                    className={styles.summaryListItem}
                    dangerouslySetInnerHTML={{ __html: point }}
                    role="listitem"
                  />
                ))}
              </Column>
            ) : (
              <Text
                onBackground="neutral-weak"
                size="s"
                dangerouslySetInnerHTML={{ __html: project.metadata.summary || "" }}
              />
            )}
          </div>

          {project.metadata.techStack &&
            project.metadata.techStack.length > 0 && (
              <div role="group" aria-label="Technologies used">
                <Flex className={styles.techStack} wrap gap="8">
                  {project.metadata.techStack.map((tech) => (
                    <Tag 
                      key={tech} 
                      label={tech} 
                      variant="brand"
                      aria-label={`Technology: ${tech}`}
                    />
                  ))}
                </Flex>
              </div>
            )}
        </Column>

        <Flex className={styles.buttonWrapper} gap="12">
          <Button
            href={`/work/${project.slug}`}
            variant="primary"
            size="m"
            arrowIcon
            className={styles.projectButton}
            aria-describedby={`${titleId} ${descriptionId}`}
          >
            Explore Project
          </Button>
        </Flex>
      </article>
    </RevealFx>
  );
}
*/ 