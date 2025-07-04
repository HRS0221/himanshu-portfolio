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
import { baseURL, contact } from "../../resources";
import ContactClient from "./ContactClient"; // Import the new client component

// This is a Server Component, so generateMetadata is allowed
export async function generateMetadata() {
  return Meta.generate({
    title: contact.title,
    description: contact.description,
    baseURL: baseURL,
    path: contact.path,
  });
}

// The page is now much cleaner. It handles the overall layout and metadata.
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
      
      {/* The interactive parts are rendered here */}
      <ContactClient />

    </Column>
  );
}