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
              <Flex gap="8" vertical="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                View Code
              </Flex>
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
              <Flex gap="8" vertical="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="m6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
                View Output
              </Flex>
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
