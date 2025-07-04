"use client";

import React from "react"; // ✅ FIX: Added the missing React import
import { usePathname } from "next/navigation";

import { Fade, Flex, Line, ToggleButton } from "@once-ui-system/core";

import {
  display,
  home,
  about,
  blog,
  work,
  contact,
} from "../resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";

  const navLinks = [
    { key: "home", href: "/", icon: "home", data: home, exact: true },
    { key: "about", href: "/about", icon: "person", data: about, exact: true },
    { key: "work", href: "/work", icon: "grid", data: work, exact: false },
    { key: "blog", href: "/blog", icon: "book", data: blog, exact: false },
    { key: "contact", href: "/contact", icon: "email", data: contact, exact: true },
  ];

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        show="s"
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Flex
        fitHeight
        position="unset"
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        <Flex
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
        ></Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Flex
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
            >
              {navLinks.map((link, index) => (
                link.data && (
                  <React.Fragment key={link.key}>
                    {index === 1 && <Line background="neutral-alpha-medium" vert maxHeight="24" />}
                    
                    <ToggleButton
                      className="s-flex-hide"
                      prefixIcon={link.icon}
                      href={link.href}
                      label={link.data.label}
                      selected={link.exact ? pathname === link.href : pathname.startsWith(link.href)}
                    />
                    <ToggleButton
                      className="s-flex-show"
                      prefixIcon={link.icon}
                      href={link.href}
                      selected={link.exact ? pathname === link.href : pathname.startsWith(link.href)}
                    />
                  </React.Fragment>
                )
              ))}

              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          ></Flex>
        </Flex>
      </Flex>
    </>
  );
};