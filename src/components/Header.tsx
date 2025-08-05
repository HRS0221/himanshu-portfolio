"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Flex, Line, ToggleButton } from "@once-ui-system/core";

import {
  display,
  home,
  about,
  article,
  work,
  contact,
} from "../resources";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";

  const navLinks = [
    { key: "home", href: "/", icon: "home", data: home, exact: true },
    { key: "about", href: "/about", icon: "about", data: about, exact: true },
    { key: "work", href: "/work", icon: "work", data: work, exact: false },
    { key: "article", href: "/article", icon: "article", data: article, exact: false },
    { key: "contact", href: "/contact", icon: "contact", data: contact, exact: true },
  ];

  return (
    <header className={styles.header}>
      <Flex
        fitHeight
        className={styles.headerContent}
        as="div"
        zIndex={10}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
      >
        {/* Left Section - Enhanced Brand/Logo */}
        <Flex
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
          className={styles.brandSection}
        >
          <Link href="/" className={styles.brand}>
            <div className={styles.logoContainer}>
              <div className={styles.logoIcon}>
                <div className={styles.logoInner}>
                  <span className={styles.logoInitial}>H</span>
                  <div className={styles.logoShine}></div>
                  <div className={styles.logoGlow}></div>
                </div>
                <div className={styles.logoRing}></div>
              </div>
              <div className={styles.logoText}>
                <span className={styles.brandName}>Himanshu</span>
                <span className={styles.brandSubtitle}>Salunke</span>
                <div className={styles.brandLine}></div>
              </div>
            </div>
            <div className={styles.brandGlow}></div>
          </Link>
        </Flex>

        {/* Center Section - Enhanced Navigation */}
        <Flex fillWidth horizontal="center" className={styles.navSection}>
          <Flex
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
            className={styles.navContainer}
          >
            <div className={styles.navBackground}></div>
            <Flex
              gap="4"
              vertical="center"
              textVariant="body-default-s"
              suppressHydrationWarning
              className={styles.navLinks}
            >
              {navLinks.map((link, index) => (
                link.data && (
                  <React.Fragment key={link.key}>
                    {index === 1 && <Line background="neutral-alpha-medium" vert maxHeight="24" className={styles.navDivider} />}
                    
                    <ToggleButton
                      className={`s-flex-hide ${styles.navButton}`}
                      prefixIcon={link.icon}
                      href={link.href}
                      label={link.data.label}
                      selected={link.exact ? pathname === link.href : pathname.startsWith(link.href)}
                    />
                    <ToggleButton
                      className={`s-flex-show ${styles.navButton}`}
                      prefixIcon={link.icon}
                      href={link.href}
                      selected={link.exact ? pathname === link.href : pathname.startsWith(link.href)}
                    />
                  </React.Fragment>
                )
              ))}

              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" className={styles.navDivider} />
                  <div className={styles.themeToggleWrapper}>
                  <ThemeToggle />
                  </div>
                </>
              )}
            </Flex>
          </Flex>
        </Flex>

        {/* Right Section - Enhanced Actions */}
        <Flex fillWidth horizontal="end" vertical="center" className={styles.actionsSection}>
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
            className={styles.actions}
          >
            {/* Space for future actions */}
          </Flex>
        </Flex>
      </Flex>
    </header>
  );
};