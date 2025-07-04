"use client"; // ✅ 1. ADDED: This makes the page an interactive client component

import { useState } from "react"; // ✅ 2. ADDED: Import useState for managing form state
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
  // ✅ 3. ADDED: State management for the form
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://usebasin.com/f/5996bdcef23c", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form on success
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };


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
      
      {/* ✅ 4. ADDED: The success/error pop-up message */}
      {status === "success" && (
        <RevealFx>
          <Flex background="accent-weak" padding="16" radius="l" gap="12" vertical="center" border="accent-alpha-medium">
            <Icon name="check" onBackground="accent-strong" />
            <Text onBackground="accent-strong">Your message has been sent successfully!</Text>
          </Flex>
        </RevealFx>
      )}
      {status === "error" && (
         <RevealFx>
          <Flex background="danger-weak" padding="16" radius="l" gap="12" vertical="center" border="danger-alpha-medium">
            <Icon name="warning" onBackground="danger-strong" />
            <Text onBackground="danger-strong">Something went wrong. Please try again.</Text>
          </Flex>
        </RevealFx>
      )}

      <Line fillWidth />

      <RevealFx delay={0.1}>
        <Flex fillWidth horizontal="center">
          <div className={styles.mainContent}>

            {/* ✅ 5. UPDATED: Form now uses the handleSubmit function */}
            <form
              onSubmit={handleSubmit}
              className={styles.formColumn}
            >
              <Column gap="24">
                <Heading as="h2" variant="heading-default-m">Send a Message</Heading>
                <Column gap="16">
                  <Text as="label" htmlFor="name" variant="body-default-m">Name</Text>
                  <Input type="text" id="name" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
                </Column>
                <Column gap="16">
                  <Text as="label" htmlFor="email" variant="body-default-m">Email</Text>
                  <Input type="email" id="email" name="email" placeholder="your.email@example.com" required value={formData.email} onChange={handleChange} />
                </Column>
                <Column gap="16">
                  <Text as="label" htmlFor="message" variant="body-default-m">Message</Text>
                  <Textarea id="message" name="message" placeholder="Your message..." rows={5} required value={formData.message} onChange={handleChange} />
                </Column>
                <Flex horizontal="start" paddingTop="8">
                  <Button type="submit" size="l" className={styles.submitButton} disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>
                </Flex>
              </Column>
            </form>

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