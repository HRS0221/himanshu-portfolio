import {
  Column,
  Meta,
  Schema,
  Heading,
  Text,
  RevealFx,
  Flex,
  Line,
} from "@once-ui-system/core";
import { baseURL, person, work } from "../../resources";
import { getAllProjects } from "../../utils/utils";

import FeaturedProjectCard from "../../components/work/FeaturedProjectCard";
import ProjectGridCard from "../../components/work/ProjectGridCard";

import styles from "./WorkPage.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: "/images/og/home.jpg",
    path: work.path,
  });
}

export default async function Work() {
  const allProjects = getAllProjects();
  
  // ✅ START: NEW LOGIC FOR FILTERING AND RANKING
  // Filter projects into two groups based on the 'featured' flag
  const featuredProjects = allProjects
    .filter((p) => p.metadata.featured)
    .sort((a, b) => a.metadata.order! - b.metadata.order!);

  const otherProjects = allProjects
    .filter((p) => !p.metadata.featured)
    .sort((a, b) => a.metadata.order! - b.metadata.order!);
  // ✅ END: NEW LOGIC FOR FILTERING AND RANKING

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
      />
      <RevealFx>
        <Flex fillWidth horizontal="center">
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h1" variant="display-strong-l" align="center">
              My Work & Projects
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              Here are some of the projects I've worked on. Each one represents
              a challenge I was excited to solve.
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
          {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
              key={project.slug}
              project={project}
              index={index}
          />
          ))}
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
              <div key={project.slug} className={styles.gridItem}>
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