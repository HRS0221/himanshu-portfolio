// Complete corrected code for: src/app/work/[slug]/page.tsx

import { notFound } from 'next/navigation';
// ✅ FIX: Import the type from 'utils' and the component from 'components'
import { getAllProjects, getProjectBySlug, type MdxContent } from '@/utils/utils'; 
import { Column, Heading, Text, Meta, Schema } from '@once-ui-system/core';
import { baseURL, person } from '@/resources';
import { MdxRenderer } from '@/components/MdxRenderer'; // We will create this component next

// Define the type for the page parameters
interface PageProps {
  params: {
    slug: string;
  };
}

// This function tells Next.js which project pages to build
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// This function generates the metadata for the page <head>
export async function generateMetadata({ params }: PageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {};
  }
  return Meta.generate({
    title: project.metadata.title,
    description: project.metadata.summary || 'A project by ' + person.name,
    baseURL: baseURL,
    image: project.metadata.images?.[0] || '',
    path: `/work/${project.slug}`,
  });
}

// This is the main page component
export default function ProjectPage({ params }: PageProps) { // ✅ FIX: Corrected typo from PagePageProps
  const project = getProjectBySlug(params.slug);

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
        description={project.metadata.summary || ''}
        image={project.metadata.images?.[0] || ''}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
        }}
        // ✅ FIX: Removed the 'publishedAt' prop, which is not valid for this component
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

      {/* This renders the main body of your .mdx file */}
      <article className="prose">
        <MdxRenderer content={project.content || ''} />
      </article>

    </Column>
  );
}