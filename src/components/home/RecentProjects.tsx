"use client";

import { Column, Heading, Text, RevealFx, Flex, Button, Card, Tag } from "@once-ui-system/core";
import { MdxContent } from "../../utils/utils";
import styles from "./RecentProjects.module.scss";
import ProjectImageCarousel from "../work/ProjectImageCarousel";

interface RecentProjectsProps {
  projects: MdxContent[];
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
                <Card
                  radius="xl"
                  padding="0"
                  background="neutral-alpha-weak"
                  border="neutral-strong"
                  style={{
                    width: "100%",
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
                                         {/* Project Image Carousel */}
                     <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                       <ProjectImageCarousel
                         images={project.metadata.images || [project.metadata.image || "/images/projects/cover-01.jpg"]}
                         title={project.metadata.title}
                         projectIndex={index}
                         layout="grid"
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
                             onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                               const target = e.currentTarget as HTMLElement;
                               target.style.boxShadow = "0 0 10px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.2)";
                               target.style.transform = "scale(1.05)";
                             }}
                             onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
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

                      {/* Date and Status */}
                      <Flex gap="8" vertical="center" wrap style={{ marginTop: "auto" }}>
                        <Text 
                          size="s" 
                          onBackground="neutral-medium"
                          suppressHydrationWarning={true}
                        >
                          {new Date(project.metadata.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
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

                                             {/* Project Buttons */}
                       <Flex gap="8" wrap style={{ marginTop: "16px" }}>
                         <Button
                           href={`/work/${project.slug}`}
                           variant="primary"
                           size="s"
                           arrowIcon
                           style={{
                             flex: "1",
                             minWidth: "fit-content",
                             transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                           }}
                           onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                             const target = e.currentTarget as HTMLElement;
                             target.style.transform = "translateY(-2px) scale(1.02)";
                             target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.25), 0 4px 12px rgba(59, 130, 246, 0.15)";
                           }}
                           onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                             const target = e.currentTarget as HTMLElement;
                             target.style.transform = "translateY(0) scale(1)";
                             target.style.boxShadow = "none";
                           }}
                         >
                           Explore
                         </Button>
                         {project.metadata.link && (
                           <Button
                             href={project.metadata.link}
                             target="_blank"
                             variant="secondary"
                             size="s"
                             style={{
                               flex: "1",
                               minWidth: "fit-content",
                               transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                               backgroundColor: "rgba(59, 130, 246, 0.1)",
                               color: "rgb(59, 130, 246)",
                               border: "1px solid rgba(59, 130, 246, 0.3)",
                             }}
                             onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                               const target = e.currentTarget as HTMLElement;
                               target.style.transform = "translateY(-2px) scale(1.02)";
                               target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)";
                             }}
                             onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                               const target = e.currentTarget as HTMLElement;
                               target.style.transform = "translateY(0) scale(1)";
                               target.style.boxShadow = "none";
                             }}
                           >
                             <Flex gap="xs" vertical="center">
                               <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="14"
                                 height="14"
                                 fill="currentColor"
                                 viewBox="0 0 16 16"
                                 style={{
                                   transition: "transform 0.3s ease",
                                 }}
                                 onMouseEnter={(e) => {
                                   e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
                                 }}
                                 onMouseLeave={(e) => {
                                   e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                                 }}
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
                             style={{
                               flex: "1",
                               minWidth: "fit-content",
                               transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                               backgroundColor: "rgba(34, 197, 94, 0.1)",
                               color: "rgb(34, 197, 94)",
                               border: "1px solid rgba(34, 197, 94, 0.3)",
                             }}
                             onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                               const target = e.currentTarget as HTMLElement;
                               target.style.transform = "translateY(-2px) scale(1.02)";
                               target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)";
                             }}
                             onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                               const target = e.currentTarget as HTMLElement;
                               target.style.transform = "translateY(0) scale(1)";
                               target.style.boxShadow = "none";
                             }}
                           >
                             <Flex gap="xs" vertical="center">
                               <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="14"
                                 height="14"
                                 fill="currentColor"
                                 viewBox="0 0 16 16"
                                 style={{
                                   transition: "transform 0.3s ease",
                                 }}
                                 onMouseEnter={(e) => {
                                   e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
                                 }}
                                 onMouseLeave={(e) => {
                                   e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                                 }}
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
                   </Card>
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