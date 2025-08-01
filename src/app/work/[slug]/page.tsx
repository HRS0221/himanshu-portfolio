import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "../../../utils/utils";
import { Column, Heading, Text, Meta, Schema, Flex, Button, Tag } from "@once-ui-system/core";
import { baseURL, person } from "../../../resources";
import { CustomMDX } from "../../../components/mdx";
import React, { Suspense } from "react";
import Link from "next/link";
import styles from "../../../components/work/ProjectGridCard.module.scss";

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
        description={project.metadata.summary || ""}
        image={project.metadata.images?.[0] || ""}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
        }}
      />

      <Column gap="16" paddingBottom="40">
        <Flex gap="12" style={{ marginTop: 16 }}>
          {project.metadata.link && (
            <Button
              href={project.metadata.link}
              target="_blank"
              variant="primary"
              size="m"
              arrowIcon
              className={styles.projectButton}
            >
              View Code
            </Button>
          )}
          {project.metadata.outputLink && (
            <Button
              href={project.metadata.outputLink}
              target="_blank"
              variant="secondary"
              size="m"
              arrowIcon
              className={styles.projectButton}
            >
              View Output
            </Button>
          )}
        </Flex>
        
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
