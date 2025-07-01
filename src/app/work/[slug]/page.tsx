// Complete corrected code for: src/app/work/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/utils/utils';
// ✅ FIX: Added 'Flex' and 'Media' to the import list
import { Column, Heading, Text, Meta, Schema, AvatarGroup, Button, Flex, Media } from '@once-ui-system/core';
import { baseURL, person, about } from '@/resources';
import { CustomMDX } from '@/components/mdx';
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash } from "@/components";
import React from 'react';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) { return {}; }
  return Meta.generate({
    title: project.metadata.title,
    description: project.metadata.summary || 'A project by ' + person.name,
    baseURL: baseURL,
    image: project.metadata.images?.[0] || '',
    path: `/work/${project.slug}`,
  });
}

export default function ProjectPage({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const avatars =
    project.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`/work/${project.slug}`}
        title={project.metadata.title}
        description={project.metadata.summary || ''}
        image={project.metadata.images?.[0] || ''}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
        }}
        datePublished={project.metadata.publishedAt}
      />
      <Column maxWidth="xs" gap="16">
        <Button data-border="rounded" href="/work" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
          Projects
        </Button>
        <Heading variant="display-strong-s">{project.metadata.title}</Heading>
      </Column>
      {project.metadata.images && project.metadata.images.length > 0 && (
        <Media
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={project.metadata.title || "Project image"}
          src={project.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {project.metadata.team && <AvatarGroup reverse avatars={avatars} size="m" />}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {project.metadata.publishedAt && formatDate(project.metadata.publishedAt)}
          </Text>
        </Flex>
        {/* ✅ FIX: Added a fallback to prevent type errors */}
        <CustomMDX source={project.content || ''} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
