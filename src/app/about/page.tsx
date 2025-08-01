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
interface SkillItem {
  title: string;
  description: string;
}

interface SkillCategory {
  title: string;
  description: string;
  items: SkillItem[];
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
}) => {
  // Define symbols for different types of achievements
  const getAchievementSymbol = (title: string) => {
    const lowerTitle = title.toLowerCase();
    
    if (lowerTitle.includes('hackathon') || lowerTitle.includes('competition')) {
      return '🏆';
    } else if (lowerTitle.includes('lead') || lowerTitle.includes('coordinator')) {
      return '👑';
    } else if (lowerTitle.includes('finalist') || lowerTitle.includes('winner')) {
      return '🥇';
    } else if (lowerTitle.includes('team') || lowerTitle.includes('collaboration')) {
      return '🤝';
    } else if (lowerTitle.includes('innovation') || lowerTitle.includes('creative')) {
      return '💡';
    } else if (lowerTitle.includes('national') || lowerTitle.includes('international')) {
      return '🌍';
    } else {
      return '⭐';
    }
  };

  return (
    <Flex
      className={styles.achievementCard}
      fillWidth
      padding="l"
      radius="l"
    >
      <div className={styles.achievementIcon}>
        <span style={{ fontSize: '24px' }}>{getAchievementSymbol(title)}</span>
      </div>
      <Column gap="4" flex={1}>
    <Text variant="heading-strong-s" onBackground="neutral-strong">
      {title}
        </Text>
        <Text onBackground="neutral-weak">{description}</Text>
  </Column>
    </Flex>
);
};
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
    className={styles.credentialCard}
    fillWidth
    horizontal="space-between"
    vertical="center"
    padding="l"
    radius="l"
  >
    <Column>
      <Text variant="heading-default-s" onBackground="neutral-strong">
        {name}
      </Text>
      <Text size="s" onBackground="neutral-medium">
        {issuer} • {date}
      </Text>
    </Column>
    <Button
      href={link}
      target="_blank"
      variant="secondary"
      size="s"
      label="Verify"
      arrowIcon
      className={styles.verifyButton}
    />
  </Flex>
);

const customIcons: { [key: string]: IconType } = {
  CodeChef: SiCodechef,
  LeetCode: SiLeetcode,
};

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: "/images/og/home.jpg", // ✅ FIX: Using static OG image
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
      items: about.technical.categories.map((category: SkillCategory) => category.title),
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
      <Flex fillWidth mobileDirection="column" horizontal="center" vertical="center">
        {/* Hero Card */}
        <Flex
          className={styles.heroCard}
          fillWidth
          mobileDirection="column"
          horizontal="center"
          vertical="center"
          padding="l"
          marginBottom="xl"
        >
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="m"
            gap="m"
            flex={3}
            horizontal="center"
            vertical="center"
          >
            <Avatar src={person.avatar} size="xl" />
            {person.languages.length > 0 && (
              <Flex gap="8" horizontal="center">
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
          </Column>
        </Flex>
      </Flex>
      
      {/* Content Sections Below Hero Card */}
      <Column className={styles.blockAlign}>
        {/* Journey and Education Cards Row - Exactly Half Hero Card */}
        <Flex
          fillWidth
          mobileDirection="column"
          horizontal="center"
          gap="l"
          marginBottom="xl"
        >
          {/* Journey Card */}
          {about.intro.display && (
            <Flex
              className={styles.journeyCard}
              fillWidth
              mobileDirection="column"
              horizontal="center"
              padding="l"
              radius="l"
              flex={1}
            >
              <Column
                fillWidth
                minHeight="160"
                vertical="center"
                marginBottom="32"
                maxWidth={100}
              >
                <Heading
                  as="h2"
                  id={about.intro.title}
                  variant="display-strong-s"
                  marginBottom="m"
                  className={styles.textAlign}
                >
                  {about.intro.title}
                </Heading>
                <Text
                  onBackground="neutral-weak"
                  variant="body-default-m"
                  style={{ lineHeight: "1.4", maxWidth: "100%" }}
                >
                  {about.intro.description}
                </Text>
              </Column>
            </Flex>
          )}

          {/* Education Card */}
          {about.studies.display && (
            <Flex
              className={styles.educationCard}
              fillWidth
              mobileDirection="column"
              horizontal="center"
              padding="l"
              radius="l"
              flex={1}
            >
              <Column
                fillWidth
                minHeight="160"
                marginBottom="32"
                maxWidth={100}
              >
                <Heading
                  as="h2"
                  id={about.studies.title}
                  variant="display-strong-s"
                  marginBottom="m"
                  className={styles.textAlign}
                >
                  {about.studies.title}
                </Heading>
                <div className={styles.educationTimeline}>
                  {about.studies.institutions.map(
                    (institution: Institution, index: number) => (
                      <div key={`${institution.institution}-${index}`} className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        {index < about.studies.institutions.length - 1 && (
                          <div className={styles.timelineLine}></div>
                        )}
                        <div className={styles.timelineContent}>
                          <Column fillWidth gap="4">
                        <Text
                          variant="heading-strong-m"
                          onBackground="neutral-strong"
                        >
                          {institution.institution}
                        </Text>
                        <Text
                          variant="body-default-m"
                          onBackground="brand-weak"
                        >
                          {institution.degree}
                        </Text>
                        <Text
                          variant="body-default-s"
                          onBackground="neutral-weak"
                        >
                          {institution.timeframe} • {institution.cgpa}
                        </Text>
                      </Column>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </Column>
            </Flex>
          )}
        </Flex>
        {about.work.display && (
          <section>
            <Column fillWidth gap="l" marginBottom="40">
              {/* Work Experience Header Card */}
              <Flex
                className={styles.workHeaderCard}
                fillWidth
                padding="l"
                radius="l"
                horizontal="center"
                vertical="center"
              >
                <Heading
                  as="h2"
                  id={about.work.title}
                  variant="display-strong-s"
                  className={styles.textAlign}
                >
                  {about.work.title}
                </Heading>
              </Flex>
              
              {/* Work Experience Timeline */}
              <div className={styles.workTimeline}>
              {about.work.experiences.map(
                (experience: WorkExperience, index: number) => (
                    <div key={`${experience.company}-${index}`} className={styles.workTimelineItem}>
                      <div className={styles.workTimelineDot}></div>
                      {index < about.work.experiences.length - 1 && (
                        <div className={styles.workTimelineLine}></div>
                      )}
                      <div className={styles.workTimelineContent}>
                    <Column fillWidth>
                      <Flex
                        fillWidth
                        horizontal="space-between"
                        vertical="end"
                        marginBottom="4"
                      >
                        <Text
                          id={experience.company}
                          variant="heading-strong-l"
                        >
                          {experience.company}
                        </Text>
                        <Text
                          variant="heading-default-xs"
                          onBackground="neutral-weak"
                        >
                          {experience.timeframe}
                        </Text>
                      </Flex>
                      <Text
                        variant="body-default-s"
                        onBackground="brand-weak"
                        marginBottom="m"
                      >
                        {experience.role}
                      </Text>
                      <Column
                        as="ul"
                        gap="16"
                        style={{ listStyleType: "disc", paddingLeft: "20px" }}
                      >
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
                        )}
                      </Column>
                    </Column>
                      </div>
                    </div>
                )
              )}
              </div>
            </Column>
          </section>
        )}
        {about.technical.display && (
          <section className={styles.skillsSection}>
            {/* Tech Stack Header Card */}
            <Flex
              className={styles.techStackHeaderCard}
              fillWidth
              padding="l"
              radius="l"
              horizontal="center"
              vertical="center"
              marginBottom="l"
            >
            <Heading
              as="h2"
              id={about.technical.title}
              variant="display-strong-s"
                className={styles.textAlign}
            >
              {about.technical.title}
              </Heading>
            </Flex>
            <div className={styles.skillsSection}>
              {about.technical.categories.map((category: SkillCategory, index: number) => {
                // Define symbols for each skill category
                const getSkillSymbol = (title: string) => {
                  switch (title.toLowerCase()) {
                    case 'my ai universe':
                      return '🚀';
                    case 'code arsenal':
                      return '⚔️';
                    case 'cloud & infrastructure':
                      return '☁️';
                    case 'web development stack':
                      return '🌐';
                    case 'data visualization suite':
                      return '📊';
                    default:
                      return '⭐';
                  }
                };

                return (
                  <div key={index} className={styles.skillsCategory}>
                    <div className={styles.skillsCategoryHeader}>
                      <div className={styles.skillsCategoryIcon}>
                        <span style={{ fontSize: '24px' }}>{getSkillSymbol(category.title)}</span>
                      </div>
                      <h3 className={styles.skillsCategoryTitle}>
                        {category.title}
                      </h3>
                    </div>
                    
                    <p className={styles.skillsCategoryDescription}>
                      {category.description}
                    </p>
                    
                    <div className={styles.skillsItemsGrid}>
                      {category.items.map((item: SkillItem, itemIndex: number) => (
                        <div key={itemIndex} className={styles.skillsItemCard}>
                          <h4 className={styles.skillsItemTitle}>
                            {item.title}
                          </h4>
                          <p className={styles.skillsItemDescription}>
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
        {/* Achievements and Credentials Side by Side */}
        {(about.achievements.display || about.credentials.display) && (
          <Flex
            fillWidth
            mobileDirection="column"
            horizontal="center"
            gap="l"
            marginBottom="xl"
          >
            {/* Achievements Section */}
        {about.achievements.display && (
              <Flex
                className={styles.achievementsCard}
                fillWidth
                mobileDirection="column"
                horizontal="center"
                padding="l"
                radius="l"
                flex={1}
              >
                <Column
                  fillWidth
                  minHeight="160"
                  marginBottom="32"
                  maxWidth={100}
                >
            <Heading
              as="h2"
              id={about.achievements.title}
              variant="display-strong-s"
              marginBottom="m"
                    className={styles.textAlign}
            >
              {about.achievements.title}
                  </Heading>
                  <Column fillWidth gap="m">
              {about.achievements.items.map(
                (ach: Achievement, index: number) => (
                  <ListItem
                    key={index}
                    title={ach.title}
                    description={ach.description}
                  />
                )
                    )}
                  </Column>
                </Column>
              </Flex>
            )}

            {/* Credentials Section */}
            {about.credentials.display && (
              <Flex
                className={styles.credentialsCard}
                fillWidth
                mobileDirection="column"
                horizontal="center"
                padding="l"
                radius="l"
                flex={1}
              >
                <Column
                  fillWidth
                  marginBottom="32"
                  maxWidth={100}
                >
                  <Heading
                    as="h2"
                    id={about.credentials.title}
                    variant="display-strong-s"
                    marginBottom="m"
                    className={styles.textAlign}
                  >
                    {about.credentials.title}
                  </Heading>
                  <Column fillWidth gap="m">
                    {about.credentials.items.map(
                      (cred: Credential, index: number) => (
                        <CredentialItem key={index} {...cred} />
                      )
                    )}
                  </Column>
                </Column>
              </Flex>
            )}
          </Flex>
        )}
      </Column>
    </Column>
  );
}