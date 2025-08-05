"use client";

import { Flex, Button } from "@once-ui-system/core";
import type { MdxContent } from "../../utils/utils";
import styles from "./ProjectGridCard.module.scss";

interface ProjectPageButtonsProps {
  project: MdxContent;
}

export default function ProjectPageButtons({ project }: ProjectPageButtonsProps) {
  return (
    <Flex gap="12" style={{ marginTop: 16 }}>
      {project.metadata.link && (
        <Button
          href={project.metadata.link}
          target="_blank"
          variant="primary"
          size="m"
          arrowIcon
          className={styles.projectButton}
          style={{
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
          <Flex gap="8" vertical="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            View Code
          </Flex>
        </Button>
      )}
      {project.metadata.outputLink && (
        <Button
          href={project.metadata.outputLink}
          target="_blank"
          variant="secondary"
          size="m"
          arrowIcon
          className={styles.projectButton}
          style={{
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            color: "rgb(34, 197, 94)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
            const target = e.currentTarget as HTMLElement;
            target.style.transform = "translateY(-2px) scale(1.02)";
            target.style.boxShadow = "0 8px 25px rgba(34, 197, 94, 0.25), 0 4px 12px rgba(34, 197, 94, 0.15)";
            target.style.backgroundColor = "rgba(34, 197, 94, 0.15)";
            target.style.border = "1px solid rgba(34, 197, 94, 0.5)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
            const target = e.currentTarget as HTMLElement;
            target.style.transform = "translateY(0) scale(1)";
            target.style.boxShadow = "none";
            target.style.backgroundColor = "rgba(34, 197, 94, 0.1)";
            target.style.border = "1px solid rgba(34, 197, 94, 0.3)";
          }}
        >
          <Flex gap="8" vertical="center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="m6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
            </svg>
            View Output
          </Flex>
        </Button>
      )}
    </Flex>
  );
} 