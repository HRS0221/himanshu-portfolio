// Complete corrected code for: src/app/work/page.tsx

import {
  Column,
  Meta,
  Schema,
  Heading,
  Text,
  RevealFx,
  // ✅ FIX: Added 'Flex' to the import list
  Flex,
} from "@once-ui-system/core";
import { baseURL, person, work } from "@/resources";
import { getAllProjects } from "@/utils/utils";
import FeaturedProjectCard from "@/components/work/FeaturedProjectCard";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default async function Work() {
  const allProjects = getAllProjects();

  return (
    <Column maxWidth="m" gap="40" paddingY="64">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Page Header */}
      <RevealFx>
        {/* This Flex container's only job is to center the column inside it. */}
        <Flex fillWidth horizontal="center">
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h1" variant="display-strong-l" align="center">
              My Work & Projects
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              Here are some of the projects I've worked on. Each one represents a challenge I was excited to solve.
            </Text>
          </Column>
        </Flex>
      </RevealFx>

      {/* The new project list */}
      <Column gap="48">
        {allProjects.map((project, index) => (
          <FeaturedProjectCard key={project.slug} project={project} index={index} />
        ))}
      </Column>
    </Column>
  );
}
