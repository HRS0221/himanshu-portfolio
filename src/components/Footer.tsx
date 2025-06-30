import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons"; // ✅ FIX: Import IconType
import React from "react";

// ✅ FIX: Explicitly define the type for our lookup map
const customIcons: { [key: string]: IconType } = {
  CodeChef: SiCodechef,
  LeetCode: SiLeetcode,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            / Build your portfolio with{" "}
            <SmartLink
              href="https://once-ui.com/products/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text>
        <Flex gap="16">
          {social.map((item) => {
            if (!item.link) return null;

            if (item.name in customIcons) {
              const IconComponent = customIcons[item.name];
              return (
                <IconButton
                  key={item.name}
                  href={item.link}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                >
                  <IconComponent />
                </IconButton>
              );
            }

            if (item.icon) {
              return (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              );
            }

            return null;
          })}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};