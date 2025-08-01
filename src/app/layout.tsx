import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "../resources/custom.css";

import classNames from "classnames";

import {
  Background,
  Column,
  Flex,
  Meta,
  opacity,
  SpacingToken,
} from "@once-ui-system/core";
import { Footer, Header, Providers, BackToTop } from "../components";
import { baseURL, effects, fonts, style, dataStyle, home } from "../resources";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: "/images/og/home.jpg", // ✅ FIX: Using static OG image
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames()}
    >
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
          rel="stylesheet"
        />

        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
               (function() {
                 try {
                   const root = document.documentElement;
                   const defaultTheme = 'dark';
                   const config = ${JSON.stringify({
                     brand: style.brand,
                     accent: style.accent,
                     neutral: style.neutral,
                     solid: style.solid,
                     "solid-style": style.solidStyle,
                     border: style.border,
                     surface: style.surface,
                     transition: style.transition,
                     scaling: style.scaling,
                     "viz-style": dataStyle.variant,
                   })};
                   Object.entries(config).forEach(([key, value]) => {
                     root.setAttribute('data-' + key, value);
                   });
                   const resolveTheme = (themeValue) => {
                     if (!themeValue || themeValue === 'system') {
                       return 'dark'; // Always default to dark mode
                     }
                     return themeValue;
                   };
                   const savedTheme = localStorage.getItem('data-theme');
                   const resolvedTheme = resolveTheme(savedTheme);
                   root.setAttribute('data-theme', resolvedTheme);
                   const styleKeys = Object.keys(config);
                   styleKeys.forEach(key => {
                     const value = localStorage.getItem('data-' + key);
                     if (value) {
                       root.setAttribute('data-' + key, value);
                     }
                   });
                 } catch (e) {
                   console.error('Failed to initialize theme:', e);
                   document.documentElement.setAttribute('data-theme', 'dark');
                 }
               })();
             `,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          style={{
            minHeight: "100vh",
          }}
          margin="0"
          padding="0"
          horizontal="center"
          suppressHydrationWarning
        >
          <Background
            position="fixed"
            mask={{
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
              cursor: effects.mask.cursor,
            }}
            gradient={{
              display: effects.gradient.display,
              opacity: effects.gradient.opacity as opacity,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
            }}
            dots={{
              display: effects.dots.display,
              opacity: effects.dots.opacity as opacity,
              size: effects.dots.size as SpacingToken,
              color: effects.dots.color,
            }}
            grid={{
              display: effects.grid.display,
              opacity: effects.grid.opacity as opacity,
              color: effects.grid.color,
              width: effects.grid.width,
              height: effects.grid.height,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as opacity,
              size: effects.lines.size as SpacingToken,
              thickness: effects.lines.thickness,
              angle: effects.lines.angle,
              color: effects.lines.color,
            }}
          />
          <Flex fillWidth minHeight="16" hide="s" />
          <Header />
          <Flex zIndex={0} fillWidth padding="l" horizontal="center" flex={1}>
            <Flex horizontal="center" fillWidth minHeight="0">
              {children}
            </Flex>
          </Flex>
          <Footer />
          <BackToTop />
          <Analytics />
          <SpeedInsights />
        </Column>
      </Providers>
    </Flex>
  );
}