import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
} from "@once-ui-system/core";

import { home, about, person, newsletter, baseURL, sameAs } from "../resources";
import NewsletterCard from "../components/NewsletterCard";
import RecentArticles from "../components/home/RecentArticles";
import RecentProjects from "../components/home/RecentProjects";
import QuickStats from "../components/home/QuickStats";
import CurrentFocus from "../components/home/CurrentFocus";
import AnimatedSubline from "../components/AnimatedSubline";
import AnimatedHeadline from "../components/AnimatedHeadline";
import { getMostRecentProject, getAllProjects, calculateStatsFromData } from "../utils/utils";
import { getCurrentFocus } from "../utils/currentFocus";
import styles from "../components/about/about.module.scss";

// Make the page async so you can use await for server-side data fetching
export default async function Home() {
  // Fetch data server-side
  const mostRecentProject = await getMostRecentProject();
  const allProjects = await getAllProjects() || [];
  const stats = await calculateStatsFromData();
  const currentFocusData = await getCurrentFocus();


  
  // Create the featured project title
  const featuredTitle = mostRecentProject ? (
    <>
      Recent project:{" "}
      <strong className="ml-4">
        {mostRecentProject.metadata.title}
      </strong>
    </>
  ) : home.featured.title;

  // Create the featured project link
  const featuredHref = mostRecentProject 
    ? `/work#project-${mostRecentProject.slug}`
    : home.featured.href;

  return (
    <Column maxWidth="m" gap="s" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image="/api/og"
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
        sameAs={Object.values(sameAs).filter((url): url is string => typeof url === 'string' && url !== "")}
      />

      {/* Hero Section */}
      <Column fillWidth paddingY="32" gap="40" horizontal="start" className="hero-section">
        {home.featured.display && (
          <RevealFx>
            <a
              href="/api/download-resume"
              style={{ textDecoration: "none" }}
              className="resume-button-link"
            >
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="8"
              border="brand-alpha-medium"
              arrow
              className="resume-button-badge"
              style={{
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease"
              }}
            >
              <Row paddingY="2" gap="8" vertical="center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: '-4px' }}
                >
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                </svg>
                  Get My Resume
              </Row>
            </Badge>
            </a>
          </RevealFx>
        )}
        <Column maxWidth="s" gap="24">
          <RevealFx delay={0.1}>
            <Heading wrap="balance" variant="display-strong-l" style={{ lineHeight: "1.2" }}>
              <AnimatedHeadline />
            </Heading>
          </RevealFx>
          <RevealFx delay={0.2}>
            <div style={{ lineHeight: "1.6" }}>
              <Text onBackground="neutral-weak" variant="heading-default-xl" style={{ marginBottom: "8px", fontWeight: "500" }}>
                Preparing for GATE - 2026 while building AI that matters. Aspiring Data Scientist passionate about building intelligent solutions with Python, Machine Learning, and AI. Currently building innovative AI projects and learning new technologies.
              </Text>
              <AnimatedSubline />
            </div>
          </RevealFx>
        </Column>
                  <RevealFx delay={0.3}>
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
      </Column>

      {/* Current Focus Section */}
      <CurrentFocus focusItems={currentFocusData.focusItems} />

      {/* Recent Projects Section */}
      <RecentProjects projects={allProjects} />

      {/* Recent Articles Section */}
      <RecentArticles />

      {/* Quick Stats Section */}
      <QuickStats stats={stats} />

      {/* Newsletter Section */}
      {newsletter.display && (
        <NewsletterCard
          title={newsletter.title}
          description={newsletter.description}
          imagePath={newsletter.imagePath}
          subscribeLink={newsletter.subscribeLink}
        />
      )}
    </Column>
  );
}