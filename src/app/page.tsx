// Complete final code for: src/app/page.tsx

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

import { home, about, person, newsletter, baseURL } from "@/resources";
import { Mailchimp } from "@/components";
import SkillsSection from "@/components/home/SkillsSection";
// We are no longer using the custom stylesheet
// import styles from '@/components/home/HomepageIntro.module.scss'; 

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* --- ✅ RESTORED INTRO SECTION --- */}
      {/* This structure uses the UI library's components for clean, left-aligned layout */}
      <Column fillWidth paddingY="24" gap="32" horizontal="start">
          
        {home.featured.display && (
          <RevealFx>
            <Badge
              background="neutral-alpha-weak"
              paddingX="12"
              paddingY="8"
              border="neutral-strong"
              href={home.featured.href}
              arrow
            >
              <Row paddingY="2" gap="8" vertical="center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                {home.featured.title}
              </Row>
            </Badge>
          </RevealFx>
        )}
        
        {/* This Column keeps the text nicely formatted */}
        <Column maxWidth="s" gap="24">
            <RevealFx delay={0.1}>
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </RevealFx>

            <RevealFx delay={0.2}>
              <Text onBackground="neutral-weak" variant="heading-default-xl">
                {home.subline}
              </Text>
            </RevealFx>
        </Column>

        {/* ✅ START: BUTTON CODE RESTORED TO ORIGINAL */}
        <RevealFx delay={0.3}>
          <Button id="about" data-border="rounded" href={about.path} variant="secondary" size="m" weight="default" arrowIcon>
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
        {/* ✅ END: BUTTON CODE RESTORED */}

      </Column>

      {/* --- SKILLS IN ACTION SECTION --- */}
      <SkillsSection />

      {/* --- NEWSLETTER SECTION --- */}
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
