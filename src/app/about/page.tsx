import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Tag,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "../../resources";
import TableOfContents from "../../components/about/TableOfContents";
import styles from "../../components/about/about.module.scss";
import React from "react";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";

// Type Definitions
interface Institution {
  institution: string;
  degree: string;
  timeframe: string;
  cgpa: string;
}
interface Skill {
  title: string;
  description: React.ReactNode;
  images: any[];
}
interface Credential {
  name: string;
  issuer: string;
  date: string;
  link: string;
}
interface Achievement {
  title: string;
  description: string;
}
interface SocialLink {
  name: string;
  icon?: string;
  link?: string;
  customIcon?: string;
}
interface WorkExperience {
  company: string;
  timeframe: string;
  role: string;
  achievements: React.ReactNode[];
  images: any[];
}

// Helper Components
const ListItem = ({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) => (
  <Column gap="4">
    {" "}
    <Text variant="heading-strong-s" onBackground="neutral-strong">
      {title}
    </Text>{" "}
    <Text onBackground="neutral-weak">{description}</Text>{" "}
  </Column>
);
const CredentialItem = ({
  name,
  issuer,
  date,
  link,
}: {
  name: string;
  issuer: string;
  date: string;
  link: string;
}) => (
  <Flex
    horizontal="space-between"
    vertical="center"
    paddingY="16"
    borderBottom="neutral-alpha-weak"
  >
    {" "}
    <Column>
      {" "}
      <Text variant="heading-default-s" onBackground="neutral-strong">
        {name}
      </Text>{" "}
      <Text size="s" onBackground="neutral-medium">
        {issuer} • {date}
      </Text>{" "}
    </Column>{" "}
    <Button
      href={link}
      target="_blank"
      variant="secondary"
      size="s"
      label="View"
      arrowIcon
    />{" "}
  </Flex>
);

// ✅ FIX: Explicitly define the type for our lookup map
const customIcons: { [key: string]: IconType } = {
  CodeChef: SiCodechef,
  LeetCode: SiLeetcode,
};

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map(
        (experience: WorkExperience) => experience.company
      ),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map(
        (institution: Institution) => institution.institution
      ),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill: Skill) => skill.title),
    },
    {
      title: about.credentials.title,
      display: about.credentials.display,
      items: [],
    },
    {
      title: about.achievements.title,
      display: about.achievements.display,
      items: [],
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={about.path}
        title={about.title}
        description={about.description}
        author={{ name: person.name, url: `${baseURL}${about.path}` }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        <Column
          className={styles.avatar}
          position="sticky"
          minWidth="160"
          paddingX="l"
          paddingBottom="xl"
          gap="m"
          flex={3}
          horizontal="center"
        >
          <Avatar src={person.avatar} size="xl" />
          <Flex gap="8" vertical="center">
            <Icon onBackground="accent-weak" name="globe" />
            {person.location}
          </Flex>
          {person.languages.length > 0 && (
            <Flex wrap gap="8">
              {person.languages.map((language: string) => (
                <Tag key={language} size="l">
                  {language}
                </Tag>
              ))}
            </Flex>
          )}
        </Column>
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{ backdropFilter: "blur(var(--static-space-1))" }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                {" "}
                <Icon
                  paddingLeft="12"
                  name="calendar"
                  onBackground="brand-weak"
                />{" "}
                <Flex paddingX="8">Schedule a call</Flex>{" "}
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />{" "}
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            <Flex
              className={styles.blockAlign}
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              wrap
              horizontal="center"
              fitWidth
            >
              {social.map((item) => {
                if (!item.link) return null;
                if (item.name in customIcons) {
                  const IconComponent = customIcons[item.name];
                  return (
                    <React.Fragment key={item.name}>
                      <Button
                        className="s-flex-hide"
                        href={item.link}
                        target="_blank"
                        size="s"
                        weight="default"
                        variant="secondary"
                      >
                        <Flex as="span" vertical="center" gap="8">
                          <IconComponent size={16} />
                          {item.name}
                        </Flex>
                      </Button>
                      <IconButton
                        className="s-flex-show"
                        href={item.link}
                        target="_blank"
                        tooltip={item.name}
                        size="l"
                        variant="secondary"
                      >
                        <IconComponent size={24} />
                      </IconButton>
                    </React.Fragment>
                  );
                }
                if (item.icon) {
                  return (
                    <React.Fragment key={item.name}>
                      <Button
                        className="s-flex-hide"
                        href={item.link}
                        target="_blank"
                        prefixIcon={item.icon}
                        label={item.name}
                        size="s"
                        weight="default"
                        variant="secondary"
                      />
                      <IconButton
                        className="s-flex-show"
                        size="l"
                        key={`${item.name}-icon`}
                        href={item.link}
                        target="_blank"
                        icon={item.icon}
                        variant="secondary"
                      />
                    </React.Fragment>
                  );
                }
                return null;
              })}
            </Flex>
          </Column>
          {about.intro.display && (
            <section>
              {" "}
              <Heading
                as="h2"
                id={about.intro.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.intro.title}
              </Heading>{" "}
              <Column fillWidth gap="m" marginBottom="xl">
                {" "}
                <Text
                  onBackground="neutral-weak"
                  variant="body-default-l"
                  style={{ lineHeight: "1.7" }}
                >
                  {about.intro.description}
                </Text>{" "}
              </Column>{" "}
            </section>
          )}
          {about.work.display && (
            <section>
              {" "}
              <Heading
                as="h2"
                id={about.work.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.work.title}
              </Heading>{" "}
              <Column fillWidth gap="l" marginBottom="40">
                {" "}
                {about.work.experiences.map(
                  (experience: WorkExperience, index: number) => (
                    <Column key={`${experience.company}-${index}`} fillWidth>
                      {" "}
                      <Flex
                        fillWidth
                        horizontal="space-between"
                        vertical="end"
                        marginBottom="4"
                      >
                        {" "}
                        <Text
                          id={experience.company}
                          variant="heading-strong-l"
                        >
                          {experience.company}
                        </Text>{" "}
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {experience.timeframe}
                        </Text>{" "}
                      </Flex>{" "}
                      <Text
                        variant="body-default-s"
                        onBackground="brand-weak"
                        marginBottom="m"
                      >
                        {experience.role}
                      </Text>{" "}
                      <Column
                        as="ul"
                        gap="16"
                        style={{ listStyleType: "disc", paddingLeft: "20px" }}
                      >
                        {" "}
                        {experience.achievements.map(
                          (achievement: React.ReactNode, achIndex: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-ach-${achIndex}`}
                            >
                              {achievement}
                            </Text>
                          )
                        )}{" "}
                      </Column>{" "}
                    </Column>
                  )
                )}{" "}
              </Column>{" "}
            </section>
          )}
          {about.studies.display && (
            <section>
              {" "}
              <Heading
                as="h2"
                id={about.studies.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.studies.title}
              </Heading>{" "}
              <Column fillWidth gap="l" marginBottom="40">
                {" "}
                {about.studies.institutions.map(
                  (institution: Institution, index: number) => (
                    <ListItem
                      key={index}
                      title={institution.institution}
                      description={`${institution.degree} • ${institution.timeframe} (${institution.cgpa})`}
                    />
                  )
                )}{" "}
              </Column>{" "}
            </section>
          )}
          {about.technical.display && (
            <section>
              {" "}
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.technical.title}
              </Heading>{" "}
              <Column fillWidth gap="l" marginBottom="40">
                {" "}
                {about.technical.skills.map((skill: Skill, index: number) => (
                  <ListItem
                    key={index}
                    title={skill.title}
                    description={skill.description}
                  />
                ))}{" "}
              </Column>{" "}
            </section>
          )}
          {about.credentials.display && (
            <section>
              {" "}
              <Heading
                as="h2"
                id={about.credentials.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.credentials.title}
              </Heading>{" "}
              <Column fillWidth marginBottom="40">
                {" "}
                {about.credentials.items.map(
                  (cred: Credential, index: number) => (
                    <CredentialItem key={index} {...cred} />
                  )
                )}{" "}
              </Column>{" "}
            </section>
          )}
          {about.achievements.display && (
            <section>
              {" "}
              <Heading
                as="h2"
                id={about.achievements.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.achievements.title}
              </Heading>{" "}
              <Column fillWidth gap="l" marginBottom="40">
                {" "}
                {about.achievements.items.map(
                  (ach: Achievement, index: number) => (
                    <ListItem
                      key={index}
                      title={ach.title}
                      description={ach.description}
                    />
                  )
                )}{" "}
              </Column>{" "}
            </section>
          )}
        </Column>
      </Flex>
    </Column>
  );
}
