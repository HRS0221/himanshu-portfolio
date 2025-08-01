"use client";

import { useState, useEffect } from "react";
import { Button, Icon } from "@once-ui-system/core";
import styles from "./BackToTop.module.scss";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // For testing - make it always visible
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className={styles.backToTopButton}
          variant="primary"
          size="m"
          aria-label="Back to top"
        >
          ↑
        </Button>
      )}
    </>
  );
} 