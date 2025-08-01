"use client";

import { Column, Heading, Text, RevealFx, Flex, Button, Card, Tag } from "@once-ui-system/core";
import { MdxContent } from "../../utils/utils";
import styles from "./RecentProjects.module.scss";

interface RecentProjectsProps {
  projects: MdxContent[];
}

export default function RecentProjects({ projects }: RecentProjectsProps) {
  // Safety check: if projects is undefined or empty, return empty array
  if (!projects || !Array.isArray(projects)) {
    return null;
  }
  
  // Take the first 3 projects (already sorted by date from parent)
  const recentProjects = projects.slice(0, 3);

  return (
    <section className={styles.recentProjects}>
      <RevealFx>
        <Flex fillWidth horizontal="center" marginBottom="32">
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h2" variant="display-strong-m" align="center">
              Recent Projects
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              Latest work in AI, machine learning, and data science
            </Text>
          </Column>
        </Flex>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div className={styles.gridContainer}>
            {recentProjects.map((project, index) => (
              <RevealFx key={project.slug} translateY="12" delay={index * 0.05}>
                <a
                  href={`/work/${project.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card
                    radius="xl"
                    padding="0"
                    background="neutral-alpha-weak"
                    border="neutral-strong"
                    style={{
                      width: "100%",
                      maxWidth: "360px",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 8px 24px rgba(59, 130, 246, 0.15), 0 4px 12px rgba(59, 130, 246, 0.1), 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05)";
                    }}
                  >
                    {/* Project Image */}
                    <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                      <img
                        src={project.metadata.images?.[0] || project.metadata.image || "/images/projects/cover-01.jpg"}
                        alt={project.metadata.title}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                        onError={(e) => {
                          e.currentTarget.src = "/images/projects/cover-01.jpg";
                        }}
                      />
                      {/* Gradient Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "60px",
                          background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                        }}
                      />

                      
                                              {/* Tag */}
                        {project.metadata.tag && (
                          <div
                            style={{
                              position: "absolute",
                              top: "16px",
                              left: "16px",
                              zIndex: 2,
                            }}
                          >
                          <Tag
                            label={project.metadata.tag}
                            variant="brand"
                            size="s"
                            style={{
                              backdropFilter: "blur(8px)",
                              backgroundColor: "rgba(0,0,0,0.8)",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              const target = e.currentTarget as HTMLElement;
                              target.style.boxShadow = "0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)";
                              target.style.transform = "scale(1.05)";
                            }}
                            onMouseLeave={(e) => {
                              const target = e.currentTarget as HTMLElement;
                              target.style.boxShadow = "none";
                              target.style.transform = "scale(1)";
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <Column gap="16" padding="24" style={{ flex: 1 }}>
                      {/* Title */}
                      <Heading 
                        as="h3" 
                        variant="heading-strong-s" 
                        style={{ 
                          lineHeight: "1.3",
                          transition: "text-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.textShadow = "0 0 8px rgba(59, 130, 246, 0.3), 0 0 16px rgba(59, 130, 246, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          const target = e.currentTarget as HTMLElement;
                          target.style.textShadow = "none";
                        }}
                      >
                        {project.metadata.title}
                      </Heading>

                      {/* Summary */}
                      {project.metadata.summary && (
                        <Text 
                          size="s" 
                          onBackground="neutral-weak"
                          style={{ 
                            lineHeight: "1.5",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {Array.isArray(project.metadata.summary) 
                            ? project.metadata.summary[0] 
                            : project.metadata.summary}
                        </Text>
                      )}

                      {/* Tech Stack */}
                      {project.metadata.techStack && project.metadata.techStack.length > 0 && (
                        <Flex gap="s" wrap style={{ marginTop: "8px" }}>
                          {project.metadata.techStack.slice(0, 3).map((tech, techIndex) => (
                            <Tag
                              key={techIndex}
                              label={tech}
                              variant="brand"
                              size="s"
                              style={{
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.boxShadow = "0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)";
                                target.style.transform = "scale(1.05)";
                              }}
                              onMouseLeave={(e) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.boxShadow = "none";
                                target.style.transform = "scale(1)";
                              }}
                            />
                          ))}
                          {project.metadata.techStack.length > 3 && (
                            <Tag
                              label={`+${project.metadata.techStack.length - 3}`}
                              variant="brand"
                              size="s"
                              style={{
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.boxShadow = "0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)";
                                target.style.transform = "scale(1.05)";
                              }}
                              onMouseLeave={(e) => {
                                const target = e.currentTarget as HTMLElement;
                                target.style.boxShadow = "none";
                                target.style.transform = "scale(1)";
                              }}
                            />
                          )}
                        </Flex>
                      )}

                      {/* Date */}
                      <Text 
                        size="s" 
                        onBackground="neutral-medium"
                        style={{ marginTop: "auto" }}
                        suppressHydrationWarning={true}
                      >
                        {new Date(project.metadata.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </Text>
                    </Column>
                  </Card>
                </a>
              </RevealFx>
            ))}
          </div>
        </div>
      </RevealFx>

      <RevealFx delay={0.4}>
        <Flex fillWidth horizontal="center" marginTop="48">
          <Button
            href="/work"
            variant="primary"
            size="m"
            arrowIcon
            className="glowing-button"
          >
            View All Projects
          </Button>
        </Flex>
      </RevealFx>
    </section>
  );
} 