import {
  Column,
  Flex,
  Heading,
  Line,
  Meta,
  RevealFx,
  Schema,
  Text,
} from "@once-ui-system/core";
import { baseURL, contact, person } from "../../resources";

// This is a Server Component, so generateMetadata is allowed
export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    path: contact.path,
  });
}

// Simplified contact page to fix build error
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
      
      {/* Simple contact form for now */}
      <RevealFx delay={0.1}>
        <Flex fillWidth horizontal="center">
          <Column gap="24" maxWidth="s">
            <Heading as="h2" variant="heading-default-m">Get in Touch</Heading>
            <Text onBackground="neutral-weak" align="center">
              I'm always open to discussing new opportunities and interesting projects.
            </Text>
            <Flex horizontal="center">
              <a href={`mailto:${person.email}`} style={{ textDecoration: 'none' }}>
                <Text variant="body-default-l" weight="strong">
                  {person.email}
                </Text>
              </a>
            </Flex>
          </Column>
        </Flex>
      </RevealFx>

    </Column>
  );
}