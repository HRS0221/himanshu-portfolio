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
import styles from "./ProjectGridCard.module.scss";
import ProjectImageCarousel from "./ProjectImageCarousel";

interface ProjectGridCardProps {
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
        <div className={styles.imageContainer}>
          <ProjectImageCarousel
            images={project.metadata.images || []}
            title={project.metadata.title}
            projectIndex={index}
          />
        </div>

        <Column className={styles.contentWrapper} gap="16">
          <Flex gap="8" vertical="center" wrap>
            <Tag label={project.metadata.tag || "Project"} variant="neutral" size="s" />
            <Text size="s" onBackground="neutral-medium">•</Text>
            <Text size="s" onBackground="neutral-medium">
              {formatDate(project.metadata.publishedAt)}
            </Text>
          </Flex>

          <Heading as="h4" variant="heading-strong-s">
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
                  size="s"
                  className={styles.summaryListItem}
                  dangerouslySetInnerHTML={{ __html: point }}
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
            <Button
            href={`/work/${project.slug}`}
              variant="primary"
              size="m"
              arrowIcon
              className={styles.projectButton}
            >
            Explore
            </Button>
        </Flex>
      </Column>
    </RevealFx>
  );
}