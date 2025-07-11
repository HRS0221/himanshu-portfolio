'use client';

import React from "react";
import {
  Column,
  Row,
  Heading,
  Text,
  Button,
  RevealFx,
  Badge,
} from "@once-ui-system/core";
import styles from "./FeaturedProjects.module.scss";
import { MdxContent } from "../../utils/server-utils";

interface FeaturedProjectsProps {
  projects: MdxContent[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featuredProjects = projects;

  return (
    <Column fillWidth gap="40">
      <RevealFx>
        <Column gap="16" horizontal="center">
          <Heading variant="heading-default-xl">Featured Projects</Heading>
          <Text onBackground="neutral-weak" variant="heading-default-l">
            Showcasing my best work in data science, machine learning, and software development
          </Text>
        </Column>
      </RevealFx>

      <Column gap="32">
        {featuredProjects.map((project, index) => (
          <RevealFx key={project.slug} delay={index * 0.1}>
            <Row
              gap="32"
              vertical="center"
              className={styles["project-card"]}
              style={{
                padding: "24px",
                borderRadius: "12px",
                border: "1px solid var(--color-border-neutral-weak)",
                backgroundColor: "var(--color-background-neutral-weak)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onClick={() => window.location.href = `/work#project-${project.slug}`}
            >
              <Column flex="1" gap="16">
                <Row gap="12" vertical="center">
                  <Badge
                    background="brand-alpha-weak"
                    paddingX="12"
                    paddingY="8"
                    border="brand-alpha-medium"
                  >
                    {project.metadata.category}
                  </Badge>
                  {project.metadata.status && (
                    <Badge
                      background={
                        project.metadata.status === "completed"
                          ? "success-alpha-weak"
                          : project.metadata.status === "ongoing"
                          ? "warning-alpha-weak"
                          : "info-alpha-weak"
                      }
                      paddingX="12"
                      paddingY="8"
                      border={
                        project.metadata.status === "completed"
                          ? "success-alpha-medium"
                          : project.metadata.status === "ongoing"
                          ? "warning-alpha-medium"
                          : "info-alpha-medium"
                      }
                      className={
                        project.metadata.status === "completed"
                          ? "completed"
                          : project.metadata.status === "ongoing"
                          ? "ongoing"
                          : "learning"
                      }
                    >
                      {project.metadata.status}
                    </Badge>
                  )}
                </Row>

                <Column gap="12">
                  <Heading variant="heading-default-xl">
                    {project.metadata.title}
                  </Heading>
                  <Text onBackground="neutral-weak" variant="body-default-l">
                    {project.metadata.summary?.[0] || "A comprehensive project showcasing technical skills and problem-solving abilities."}
                  </Text>
                </Column>

                <Row gap="8">
                  {project.metadata.techStack?.slice(0, 4).map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      background="neutral-alpha-weak"
                      paddingX="8"
                      paddingY="4"
                      border="neutral-alpha-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.metadata.techStack && project.metadata.techStack.length > 4 && (
                    <Badge
                      background="neutral-alpha-weak"
                      paddingX="8"
                      paddingY="4"
                      border="neutral-alpha-medium"
                    >
                      +{project.metadata.techStack.length - 4} more
                    </Badge>
                  )}
                </Row>
              </Column>

              <Button
                variant="secondary"
                size="s"
                arrowIcon
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  window.location.href = `/work#project-${project.slug}`;
                }}
              >
                View Project
              </Button>
            </Row>
          </RevealFx>
        ))}
      </Column>

      <RevealFx>
        <Column horizontal="center">
          <Button
            href="/work"
            variant="primary"
            size="m"
            arrowIcon
          >
            View All Projects
          </Button>
        </Column>
      </RevealFx>
    </Column>
  );
} 