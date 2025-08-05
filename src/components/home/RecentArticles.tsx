"use client";

import { Column, Heading, Text, RevealFx, Flex, Button, Card } from "@once-ui-system/core";
import { articles } from "../../resources";
import styles from "./RecentArticles.module.scss";

export default function RecentArticles() {
  // Get the 3 most recent articles (last 3 from the array)
  const recentArticles = articles.items
    .filter(article => article.title && article.image && article.link)
    .slice(-3); // Take the last 3 articles instead of first 3

  return (
    <section className={styles.recentArticles}>
      <RevealFx>
        <Flex fillWidth horizontal="center" marginBottom="32">
          <Column horizontal="center" gap="16" maxWidth="s">
            <Heading as="h2" variant="display-strong-m" align="center">
              Latest Articles
            </Heading>
            <Text onBackground="neutral-weak" align="center">
              Recent insights on AI, machine learning, and data science
            </Text>
          </Column>
        </Flex>
      </RevealFx>

      <RevealFx translateY="16" delay={0.2}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, 320px)",
              gap: "24px",
              justifyContent: "center",
              maxWidth: "1024px",
              width: "100%",
            }}
          >
            {recentArticles.map((article, index) => (
              <RevealFx key={index} translateY="12" delay={index * 0.05}>
                <Card
                  radius="xl"
                  padding="0"
                  background="neutral-alpha-weak"
                  border="neutral-strong"
                  style={{
                    width: "320px",
                    maxWidth: "100%",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    boxShadow: "0 4px 12px rgba(59, 130, 246, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(59, 130, 246, 0.15), 0 4px 12px rgba(59, 130, 246, 0.1), 0 2px 6px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(59, 130, 246, 0.08), 0 2px 6px rgba(0, 0, 0, 0.05)";
                  }}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      height: "180px",
                      width: "100%",
                      objectFit: "cover",
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                    onError={(e) => {
                      // Hide image if it fails to load
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <Column align="center" gap="12" padding="20" style={{ flex: 1, width: "100%", alignItems: "center" }}>
                    <Text 
                      variant="heading-strong-s" 
                      align="center"
                      style={{
                        transition: "text-shadow 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        const target = e.currentTarget as HTMLElement;
                        target.style.textShadow = "0 0 8px rgba(59, 130, 246, 0.3), 0 0 16px rgba(59, 130, 246, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        const target = e.currentTarget as HTMLElement;
                        target.style.textShadow = "none";
                      }}
                    >
                      {article.title}
                    </Text>
                    <Text 
                      size="s" 
                      onBackground="neutral-weak" 
                      align="center"
                      suppressHydrationWarning={true}
                    >
                      {new Date(article.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </Text>
                    
                    {/* Read Button */}
                    <Button
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="s"
                      style={{
                        width: "fit-content",
                        minWidth: "80px",
                        padding: "4px 10px",
                        marginTop: "8px",
                        fontSize: "0.8rem",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                        const target = e.currentTarget as HTMLElement;
                        target.style.transform = "translateY(-2px) scale(1.02)";
                        target.style.boxShadow = "0 8px 25px rgba(59, 130, 246, 0.25), 0 4px 12px rgba(59, 130, 246, 0.15)";
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                        const target = e.currentTarget as HTMLElement;
                        target.style.transform = "translateY(0) scale(1)";
                        target.style.boxShadow = "none";
                      }}
                    >
                                             <Flex gap="xs" vertical="center">
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="14"
                           height="14"
                           fill="currentColor"
                           viewBox="0 0 16 16"
                           style={{
                             transition: "transform 0.3s ease",
                           }}
                           onMouseEnter={(e) => {
                             e.currentTarget.style.transform = "scale(1.1) rotate(5deg)";
                           }}
                           onMouseLeave={(e) => {
                             e.currentTarget.style.transform = "scale(1) rotate(0deg)";
                           }}
                         >
                           <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                         </svg>
                         Read on LinkedIn
                       </Flex>
                    </Button>
                  </Column>
                </Card>
              </RevealFx>
            ))}
          </div>
        </div>
      </RevealFx>

      <RevealFx delay={0.4}>
        <Flex fillWidth horizontal="center" marginTop="48">
          <Button
            href="/article"
            variant="primary"
            size="m"
            arrowIcon
            className="glowing-button"
          >
            View All Articles
          </Button>
        </Flex>
      </RevealFx>
    </section>
  );
} 