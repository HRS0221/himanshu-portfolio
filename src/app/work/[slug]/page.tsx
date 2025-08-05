import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "../../../utils/utils";
import { Column, Heading, Text, Meta, Schema, Flex, Button, Tag } from "@once-ui-system/core";
import { baseURL, person, sameAs } from "../../../resources";
import { CustomMDX } from "../../../components/mdx";
import React, { Suspense } from "react";
import Link from "next/link";
import ProjectPageButtons from "../../../components/work/ProjectPageButtons";

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
  
  // Handle summary which can be string or string[]
  const description = Array.isArray(project.metadata.summary) 
    ? project.metadata.summary[0] || "A project by " + person.name
    : project.metadata.summary || "A project by " + person.name;
    
  return Meta.generate({
    title: project.metadata.title,
    description: description,
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
      <div style={{ marginTop: '40px', marginBottom: '16px' }}>
        <Link href="/work">
          <Button variant="secondary" size="s" arrowIcon>
            ← Back
          </Button>
        </Link>
      </div>
      <Heading as="h1" variant="display-strong-l" style={{ marginBottom: '32px' }}>
        {project.metadata.title}
      </Heading>
      <Schema
        as="article"
        baseURL={baseURL}
        path={`/work/${project.slug}`}
        title={project.metadata.title}
        description={Array.isArray(project.metadata.summary) 
          ? project.metadata.summary[0] || ""
          : project.metadata.summary || ""}
        image={project.metadata.images?.[0] || ""}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
        }}
        sameAs={Object.values(sameAs).filter((url: string) => url !== "")}
      />

             <Column gap="16" paddingBottom="40">
         <ProjectPageButtons project={project} />
        
        {project.metadata.techStack && project.metadata.techStack.length > 0 && (
          <Column gap="12" style={{ marginTop: 24 }}>
            <Heading as="h3" variant="heading-strong-s">
              Tech Stack
            </Heading>
            <Flex gap="8" wrap>
              {project.metadata.techStack.map((tech) => (
                <Tag key={tech} label={tech} variant="brand" />
              ))}
            </Flex>
          </Column>
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
