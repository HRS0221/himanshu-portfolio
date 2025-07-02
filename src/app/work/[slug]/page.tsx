import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "../../../utils/utils";
import { Column, Heading, Text, Meta, Schema } from "@once-ui-system/core";
import { baseURL, person } from "../../../resources";
import { CustomMDX } from "../../../components/mdx";
import React, { Suspense } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {};
  }
  return Meta.generate({
    title: project.metadata.title,
    description: project.metadata.summary || "A project by " + person.name,
    baseURL: baseURL,
    image: project.metadata.images?.[0] || "",
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Column maxWidth="m" paddingY="64">
      <Schema
        as="article"
        baseURL={baseURL}
        path={`/work/${project.slug}`}
        title={project.metadata.title}
        description={project.metadata.summary || ""}
        image={project.metadata.images?.[0] || ""}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
        }}
      />

      <Column gap="16" paddingBottom="40">
        <Heading as="h1" variant="display-strong-l">
          {project.metadata.title}
        </Heading>
        {project.metadata.summary && (
          <Text variant="heading-default-l" onBackground="neutral-weak">
            {project.metadata.summary}
          </Text>
        )}
      </Column>
      <article className="prose">
        <Suspense fallback={<p>Loading content...</p>}>
          <CustomMDX source={project.content} />
        </Suspense>
      </article>
    </Column>
  );
}
