import { Column, Heading, Text, RevealFx, Flex, Button, Tag } from "@once-ui-system/core";
import { MdxContent } from "../../utils/utils";
import styles from "./ProjectGridCard.module.scss";

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

// Helper function to get status color variant
function getStatusVariant(status: string) {
  switch (status?.toLowerCase()) {
    case 'completed':
      return 'success';
    case 'in-progress':
      return 'warning';
    case 'planned':
      return 'neutral';
    case 'on-hold':
      return 'danger';
    default:
      return 'neutral';
  }
}

export default function ProjectGridCard({
  project,
  index,
}: ProjectGridCardProps) {
  return (
    <RevealFx translateY={25} delay={index * 0.03}>
      <Column
        className={styles.card}
        background="brand-alpha-weak"
        border="brand-strong"
        radius="l"
        style={{
          background: `rgba(var(--color-surface-rgb), 0.5)`,
          border: `1px solid rgba(var(--color-border-neutral-alpha-weak-rgb), 0.2)`,
          boxShadow: `0 4px 12px rgba(59, 130, 246, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05)`,
        }}
      >
        <Column className={styles.contentWrapper} gap="12">
          <Flex gap="8" vertical="center" wrap>
            <Tag 
              label={project.metadata.tag || "Project"} 
              variant="brand" 
              size="s"
            />
            <Text size="s" onBackground="neutral-medium">•</Text>
            <Text size="s" onBackground="neutral-medium">
              {formatDate(project.metadata.publishedAt)}
            </Text>
            {project.metadata.status && (
              <>
                <Text size="s" onBackground="neutral-medium">•</Text>
                <Tag 
                  label={project.metadata.status} 
                  variant={getStatusVariant(project.metadata.status)}
                  size="s"
                />
              </>
            )}
          </Flex>

          <Heading as="h4" variant="heading-strong-s">
            {project.metadata.title}
          </Heading>

          {project.metadata.summary && Array.isArray(project.metadata.summary) ? (
            <Column
              as="ul"
              className={styles.summaryList}
              style={{ paddingLeft: '16px' }}
            >
              {project.metadata.summary.slice(0, 3).map((point, i) => (
                <Text
                  as="li"
                  key={i}
                  onBackground="neutral-strong"
                  size="s"
                  className={styles.summaryListItem}
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              ))}
            </Column>
          ) : (
            <Text
              onBackground="neutral-strong"
              size="s"
              style={{ 
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
              dangerouslySetInnerHTML={{ __html: project.metadata.summary || "" }}
            />
          )}

          {project.metadata.techStack &&
            project.metadata.techStack.length > 0 && (
              <Flex wrap gap="8">
                {project.metadata.techStack.slice(0, 3).map((tech) => (
                  <Tag key={tech} label={tech} variant="brand" size="s" />
                ))}
                {project.metadata.techStack.length > 3 && (
                  <Tag label={`+${project.metadata.techStack.length - 3}`} variant="brand" size="s" />
                )}
              </Flex>
            )}
        </Column>

        <Flex className={styles.buttonWrapper} gap="8">
          <Button
            href={`/work/${project.slug}`}
            variant="primary"
            size="s"
            arrowIcon
            className={styles.projectButton}
          >
            Explore
          </Button>
          {project.metadata.link && (
            <Button
              href={project.metadata.link}
              target="_blank"
              variant="secondary"
              size="s"
              className={styles.projectButton}
              style={{
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                color: "rgb(59, 130, 246)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
              }}
            >
              <Flex gap="xs" vertical="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Code
              </Flex>
            </Button>
          )}
          {project.metadata.outputLink && (
            <Button
              href={project.metadata.outputLink}
              target="_blank"
              variant="secondary"
              size="s"
              className={styles.projectButton}
              style={{
                backgroundColor: "rgba(147, 51, 234, 0.1)",
                color: "rgb(147, 51, 234)",
                border: "1px solid rgba(147, 51, 234, 0.3)",
              }}
            >
              <Flex gap="xs" vertical="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
                Output
              </Flex>
            </Button>
          )}
        </Flex>
      </Column>
    </RevealFx>
  );
}