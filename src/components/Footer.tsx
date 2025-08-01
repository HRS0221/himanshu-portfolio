import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "../resources";

import { SiCodechef, SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";
import React from "react";

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
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">Designed & Developed by {person.name}</Text>
          <Text onBackground="neutral-weak" paddingX="4">/</Text>
          <Text as="span" onBackground="neutral-weak" style={{ fontSize: '0.95em' }}>
            Based on the Magic Portfolio Template by{' '}
            <a
              href="https://github.com/once-ui-system/magic-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'underline', color: '#06b6d4', fontWeight: 600 }}
            >
              Once UI
            </a>
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
