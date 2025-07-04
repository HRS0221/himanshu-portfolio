// src/app/page.tsx

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

import { home, about, person, newsletter, baseURL } from "../resources";
import { Mailchimp } from "../components";
import RecentArticles from "../components/home/RecentArticles";
import QuickStats from "../components/home/QuickStats";
import CurrentFocus from "../components/home/CurrentFocus";
import { getMostRecentProject } from "../utils/utils";
import styles from "../components/about/about.module.scss";

export default function Home() {
  // Get the most recent project
  const mostRecentProject = getMostRecentProject();
  
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
        image="/images/og/home.jpg" // ✅ FIX: Using static OG image
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Enhanced Hero Section */}
      <Column fillWidth paddingY="32" gap="40" horizontal="start" className="hero-section">
        {home.featured.display && mostRecentProject && (
          <RevealFx>
            <Badge
              background="brand-alpha-weak"
              paddingX="12"
              paddingY="8"
              border="brand-alpha-medium"
              href={featuredHref}
              arrow
              style={{
                backdropFilter: "blur(8px)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
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
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {featuredTitle}
              </Row>
            </Badge>
          </RevealFx>
        )}

        {/* Enhanced Text Content */}
        <Column maxWidth="s" gap="24">
          <RevealFx delay={0.1}>
            <Heading wrap="balance" variant="display-strong-l" style={{ lineHeight: "1.2" }}>
              {home.headline}
            </Heading>
          </RevealFx>

          <RevealFx delay={0.2}>
            <Text onBackground="neutral-weak" variant="heading-default-xl" style={{ lineHeight: "1.6" }}>
              {home.subline}
            </Text>
          </RevealFx>
        </Column>

        {/* Enhanced CTA Button */}
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

      {/* Quick Stats Section */}
      <QuickStats />

      {/* Recent Articles Section */}
      <RecentArticles />

      {/* Current Focus Section */}
      <CurrentFocus />

      {/* Enhanced Newsletter Section */}
      {newsletter.display && (
        <div style={{ 
          background: "rgba(var(--color-surface-rgb), 0.3)",
          borderRadius: "16px",
          padding: "32px",
          border: "1px solid rgba(var(--color-border-neutral-alpha-weak-rgb), 0.2)",
          marginTop: "32px"
        }}>
          <Mailchimp newsletter={newsletter} />
        </div>
      )}
    </Column>
  );
}