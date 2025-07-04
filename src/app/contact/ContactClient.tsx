"use client"; // Marks this as a Client Component

import { useState } from "react";
import {
  Column,
  Flex,
  Heading,
  Text,
  Button,
  Input,
  Textarea,
  Icon,
  RevealFx,
} from "@once-ui-system/core";
import { person } from "../../resources";
import styles from "./page.module.scss";

// All the form logic and state management now lives here
export default function ContactClient() {
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
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
      {/* Success/error pop-up message */}
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

      <RevealFx delay={0.1}>
        <Flex fillWidth horizontal="center">
          <div className={styles.mainContent}>
            {/* The interactive form */}
            <form onSubmit={handleSubmit} className={styles.formColumn}>
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

            {/* The sidebar content */}
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
    </>
  );
}