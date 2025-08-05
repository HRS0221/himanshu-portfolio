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
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: MdxContent;
  index: number;
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  if (!dateString || isNaN(new Date(dateString).getTime())) {
    return "Date not available";
  }
  return new Date(dateString).toLocaleDateString("en-US", options);
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <RevealFx translateY={50} delay={index * 0.05}>
      <div className={styles.card}>
        {/* Content Section - No Image */}
        <div className={styles.contentWrapper}>
          {/* Category Tag */}
          {project.metadata.tag && (
            <Flex style={{ marginBottom: '12px' }}>
              <Tag 
                label={project.metadata.tag} 
                variant="brand" 
                size="s"
                style={{
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  color: "rgb(59, 130, 246)",
                  border: "1px solid rgba(59, 130, 246, 0.3)",
                }}
              />
            </Flex>
          )}

          {/* Project Title */}
          <Heading as="h3" variant="heading-strong-s" className={styles.projectTitle}>
            {project.metadata.title}
          </Heading>

          {/* Project Description */}
          <div className={styles.projectDescription}>
            {Array.isArray(project.metadata.summary) 
              ? project.metadata.summary.map((point: string, index: number) => (
                  <div key={index} style={{ marginBottom: '8px', fontSize: '14px', lineHeight: '1.5' }}>
                    • {point}
                  </div>
                ))
              : project.metadata.summary || ""
            }
          </div>

          {/* Tech Stack Tags */}
          {project.metadata.techStack &&
            project.metadata.techStack.length > 0 && (
              <Flex className={styles.techStack} wrap gap="8">
                {project.metadata.techStack.map((tech) => (
                  <Tag key={tech} label={tech} variant="brand" size="s" />
                ))}
              </Flex>
            )}

          {/* Bottom Row: Date and View Project Link */}
          <Flex className={styles.bottomRow} vertical="center" horizontal="space-between">
            <Text className={styles.projectDate}>
              {formatDate(project.metadata.publishedAt)}
            </Text>
            <Button
              href={`/work/${project.slug}`}
              variant="secondary"
              size="s"
              className={styles.viewProjectButton}
            >
              View Project →
            </Button>
          </Flex>
        </div>
      </div>
    </RevealFx>
  );
} 