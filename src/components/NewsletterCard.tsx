"use client";

import { Column, Heading, Text, RevealFx, Flex, Button, Background } from "@once-ui-system/core";
import { mailchimp } from "../resources";
import { opacity, SpacingToken } from "@once-ui-system/core";
import styles from "./NewsletterCard.module.scss";

interface NewsletterCardProps {
  title: string | JSX.Element;
  description: string | JSX.Element;
  imagePath: string;
  subscribeLink: string;
}

export default function NewsletterCard({ 
  title, 
  description, 
  imagePath, 
  subscribeLink 
}: NewsletterCardProps) {
  return (
    <section className={styles.newsletterCard}>
      <RevealFx>
        <Column
          overflow="hidden"
          fillWidth
          padding="xl"
          radius="l"
          marginBottom="m"
          horizontal="center"
          align="center"
          background="surface"
          border="neutral-alpha-weak"
          className={styles.card}
        >
          <Background
            top="0"
            position="absolute"
            mask={{
              x: mailchimp.effects.mask.x,
              y: mailchimp.effects.mask.y,
              radius: mailchimp.effects.mask.radius,
              cursor: mailchimp.effects.mask.cursor,
            }}
            gradient={{
              display: mailchimp.effects.gradient.display,
              opacity: mailchimp.effects.gradient.opacity as opacity,
              x: mailchimp.effects.gradient.x,
              y: mailchimp.effects.gradient.y,
              width: mailchimp.effects.gradient.width,
              height: mailchimp.effects.gradient.height,
              tilt: mailchimp.effects.gradient.tilt,
              colorStart: mailchimp.effects.gradient.colorStart,
              colorEnd: mailchimp.effects.gradient.colorEnd,
            }}
            dots={{
              display: mailchimp.effects.dots.display,
              opacity: mailchimp.effects.dots.opacity as opacity,
              size: mailchimp.effects.dots.size as SpacingToken,
              color: mailchimp.effects.dots.color,
            }}
            grid={{
              display: mailchimp.effects.grid.display,
              opacity: mailchimp.effects.grid.opacity as opacity,
              color: mailchimp.effects.grid.color,
              width: mailchimp.effects.grid.width,
              height: mailchimp.effects.grid.height,
            }}
            lines={{
              display: mailchimp.effects.lines.display,
              opacity: mailchimp.effects.lines.opacity as opacity,
              size: mailchimp.effects.lines.size as SpacingToken,
              thickness: mailchimp.effects.lines.thickness,
              angle: mailchimp.effects.lines.angle,
              color: mailchimp.effects.lines.color,
            }}
          />
          
          <div className={styles.content}>
            {/* Newsletter Image */}
            <div className={styles.imageContainer}>
              <img
                src={imagePath}
                alt="LinkedIn Newsletter Preview"
                className={styles.newsletterImage}
                onError={(e) => {
                  console.error("Newsletter image failed to load:", imagePath);
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            {/* Newsletter Content */}
            <div className={styles.textContent}>
              <Heading
                style={{ position: "relative" }}
                marginBottom="s"
                variant="display-strong-xs"
              >
                {title}
              </Heading>
              
              <Text
                style={{
                  position: "relative",
                  maxWidth: "var(--responsive-width-xs)",
                }}
                wrap="balance"
                marginBottom="l"
                onBackground="neutral-medium"
              >
                {description}
              </Text>

              <Button
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7085106786910769152"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="m"
                className={`${styles.subscribeButton} glowing-button`}
              >
                Subscribe on LinkedIn
              </Button>
            </div>
          </div>
        </Column>
      </RevealFx>
    </section>
  );
} 