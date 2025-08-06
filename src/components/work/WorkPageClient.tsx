"use client";

import {
  Column,
  Schema,
  Heading,
  Text,
  RevealFx,
  Flex,
  Line,
} from "@once-ui-system/core";
import { baseURL, person, work, sameAs } from "../../resources";
import type { MdxContent } from "../../utils/utils";

import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectGridCard from "./ProjectGridCard";

import styles from "../../app/work/WorkPage.module.scss";

interface WorkPageClientProps {
  featuredProjects: MdxContent[];
  otherProjects: MdxContent[];
}

export default function WorkPageClient({ 
  featuredProjects, 
  otherProjects 
}: WorkPageClientProps) {
  return (
    <Column maxWidth="m" gap="40" paddingY="32">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image="/images/og/home.jpg"
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
        sameAs={Object.values(sameAs).filter((url): url is string => typeof url === 'string' && url !== "")}
      />
      <RevealFx>
        <Flex fillWidth horizontal="center">
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h1" variant="display-strong-l" align="center">
              🚀 My Innovation Lab
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              🚀 Crafting intelligent solutions through code, data, and innovation. 
              Each project represents a unique journey of problem-solving and growth.
            </Text>
          </Column>
        </Flex>
      </RevealFx>
      
      {featuredProjects.length > 0 && (
        <Column gap="40">
          <RevealFx>
            <Flex vertical="center" gap="20" fillWidth>
                <Line fillWidth />
                <Heading as="h2" variant="heading-strong-m" wrap="nowrap">
                    Featured Projects
                </Heading>
                <Line fillWidth />
            </Flex>
          </RevealFx>
          
          <Flex wrap gap="24" className={styles.gridContainer}>
            {featuredProjects.map((project, index) => (
              <div key={project.slug} id={`project-${project.slug}`} className={styles.gridItem}>
                <FeaturedProjectCard
                    project={project}
                    index={index}
                />
              </div>
            ))}
          </Flex>
        </Column>
      )}

      {otherProjects.length > 0 && (
        <Column gap="40" paddingY="32">
          <RevealFx>
            <Flex vertical="center" gap="20" fillWidth>
              <Line fillWidth />
              <Heading as="h2" variant="heading-strong-m" wrap="nowrap">
                Other Projects
              </Heading>
              <Line fillWidth />
            </Flex>
          </RevealFx>

          <Flex wrap gap="24" className={styles.gridContainer}>
            {otherProjects.map((project, index) => (
              <div key={project.slug} id={`project-${project.slug}`} className={styles.gridItem}>
                <ProjectGridCard
                  project={project}
                  index={index}
                />
              </div>
            ))}
          </Flex>
        </Column>
      )}
    </Column>
  );
} 