import {
  Column,
  Flex,
  Heading,
  Line,
  Meta,
  RevealFx,
  Schema,
  Text,
  Button,
  Input,
  Textarea,
  Icon,
} from "@once-ui-system/core";
import { baseURL, contact, person } from "../../resources";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    path: contact.path,
  });
}

export default function Contact() {
  return (
    <Column maxWidth="m" gap="40" paddingY="64" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={contact.path}
        title={contact.title}
        description={contact.description}
      />

      {/* --- Page Header --- */}
      <RevealFx>
        <Flex fillWidth horizontal="center">
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h1" variant="display-strong-l" align="center">
              {contact.title}
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              {contact.description}
            </Text>
          </Column>
        </Flex>
      </RevealFx>
      
      <Line fillWidth />

      {/* --- Main Content Area (2-Column) --- */}
      <RevealFx delay={0.1}>
        <Flex fillWidth horizontal="center">
          <div className={styles.mainContent}>

            {/* --- Left Column: Contact Form --- */}
            {/* ✅ FIX: Replaced <Column as="form"> with a standard <form> tag */}
            <form
              action="https://usebasin.com/f/5996bdcef23c"
              method="POST"
              className={styles.formColumn}
            >
              <Column gap="24">
                <Heading as="h2" variant="heading-default-m">Send a Message</Heading>
                <Column gap="16">
                  <Text as="label" htmlFor="name" variant="body-default-m">Name</Text>
                  <Input type="text" id="name" name="name" placeholder="Your Name" />
                </Column>
                <Column gap="16">
                  <Text as="label" htmlFor="email" variant="body-default-m">Email</Text>
                  <Input type="email" id="email" name="email" placeholder="your.email@example.com" />
                </Column>
                <Column gap="16">
                  <Text as="label" htmlFor="message" variant="body-default-m">Message</Text>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} />
                </Column>
                <Flex horizontal="start" paddingTop="8">
                  <Button type="submit" size="l" className={styles.submitButton}>Send Message</Button>
                </Flex>
              </Column>
            </form>

            {/* --- Right Column: Other Info --- */}
            <Column className={styles.sidebarColumn} gap="32">
              <Column gap="16">
                <Heading as="h2" variant="heading-default-m">Other Ways to Reach Me</Heading>
                <a href={`mailto:${person.email}`} style={{ textDecoration: 'none' }}>
                  <Flex gap="12" vertical="center">
                    <Icon name="email" onBackground="brand-weak" size="l" />
                    <Column gap="4">
                      <Text weight="strong">Email</Text>
                      <Text onBackground="neutral-weak">{person.email}</Text>
                    </Column>
                  </Flex>
                </a>
              </Column>
              
              <Column background="neutral-alpha-weak" padding="20" radius="l" gap="12">
                <Text weight="strong">Response Time</Text>
                <Text onBackground="neutral-weak" size="s">
                  I'll do my best to get back to you within 24-48 hours.
                </Text>
              </Column>
            </Column>
            
          </div>
        </Flex>
      </RevealFx>
    </Column>
  );
}