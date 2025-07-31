"use client";

import { Flex, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { person, social } from "../resources";

import { SiCodechef, SiLeetcode } from "react-icons/si";
import { IconType } from "react-icons";
import React, { MouseEvent } from "react";

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
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderRadius: "8px",
                  }}
                  onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = "translateY(-2px) scale(1.1)";
                    target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.2), 0 2px 6px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.3)";
                    target.style.background = "rgba(59, 130, 246, 0.1)";
                    
                    // Add sweeping light effect
                    const before = document.createElement('div');
                    before.style.cssText = `
                      position: absolute;
                      top: 0;
                      left: -100%;
                      width: 100%;
                      height: 100%;
                      background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1), transparent);
                      transition: left 0.6s ease;
                      z-index: 1;
                      pointer-events: none;
                    `;
                    before.id = 'sweeping-light';
                    target.appendChild(before);
                    
                    setTimeout(() => {
                      before.style.left = '100%';
                    }, 10);
                  }}
                  onMouseLeave={(e: MouseEvent<HTMLElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = "translateY(0) scale(1)";
                    target.style.boxShadow = "none";
                    target.style.background = "transparent";
                    
                    // Remove sweeping light effect
                    const before = target.querySelector('#sweeping-light');
                    if (before) {
                      target.removeChild(before);
                    }
                  }}
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
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderRadius: "8px",
                  }}
                  onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = "translateY(-2px) scale(1.1)";
                    target.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.2), 0 2px 6px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.3)";
                    target.style.background = "rgba(59, 130, 246, 0.1)";
                    
                    // Add sweeping light effect
                    const before = document.createElement('div');
                    before.style.cssText = `
                      position: absolute;
                      top: 0;
                      left: -100%;
                      width: 100%;
                      height: 100%;
                      background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.1), transparent);
                      transition: left 0.6s ease;
                      z-index: 1;
                      pointer-events: none;
                    `;
                    before.id = 'sweeping-light';
                    target.appendChild(before);
                    
                    setTimeout(() => {
                      before.style.left = '100%';
                    }, 10);
                  }}
                  onMouseLeave={(e: MouseEvent<HTMLElement>) => {
                    const target = e.currentTarget as HTMLElement;
                    target.style.transform = "translateY(0) scale(1)";
                    target.style.boxShadow = "none";
                    target.style.background = "transparent";
                    
                    // Remove sweeping light effect
                    const before = target.querySelector('#sweeping-light');
                    if (before) {
                      target.removeChild(before);
                    }
                  }}
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
