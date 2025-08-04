// COMMENTED OUT: Complex PerformanceOptimizedGrid - replaced with simple unified grid
// This component was part of the complex Google-style implementation with infinite scroll
// Now using a simple 2-column grid layout with unified ProjectCard components

/*
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Column, Flex, Text, RevealFx } from "@once-ui-system/core";
import { MdxContent } from "../../utils/utils";
import AccessibleProjectCard from "./AccessibleProjectCard";
import styles from "./PerformanceOptimizedGrid.module.scss";

interface PerformanceOptimizedGridProps {
  projects: MdxContent[];
  itemsPerPage?: number;
}

export default function PerformanceOptimizedGrid({ 
  projects, 
  itemsPerPage = 6 
}: PerformanceOptimizedGridProps) {
  const [visibleProjects, setVisibleProjects] = useState<MdxContent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Calculate visible projects
  useEffect(() => {
    const endIndex = currentPage * itemsPerPage;
    const newVisibleProjects = projects.slice(0, endIndex);
    setVisibleProjects(newVisibleProjects);
    setHasMore(endIndex < projects.length);
  }, [projects, currentPage, itemsPerPage]);

  // Intersection Observer for infinite scroll
  const lastProjectRef = useCallback((node: HTMLDivElement) => {
    if (isLoading) return;
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setIsLoading(true);
        setTimeout(() => {
          setCurrentPage(prev => prev + 1);
          setIsLoading(false);
        }, 500);
      }
    }, {
      rootMargin: '100px'
    });
    
    if (node) {
      observerRef.current.observe(node);
    }
  }, [isLoading, hasMore]);

  // Cleanup observer
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Lazy load images
  const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => observer.disconnect();
    }, []);

    return (
      <div className={styles.lazyImageContainer}>
        {!isLoaded && isInView && (
          <div className={styles.imageSkeleton} />
        )}
        {isInView && (
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            className={`${styles.lazyImage} ${isLoaded ? styles.loaded : ''}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
          />
        )}
      </div>
    );
  };

  return (
    <Column gap="40">
      <RevealFx>
        <Flex wrap gap="24" className={styles.optimizedGrid}>
          {visibleProjects.map((project, index) => (
            <div 
              key={project.slug} 
              className={styles.gridItem}
              ref={index === visibleProjects.length - 1 ? lastProjectRef : null}
            >
              <AccessibleProjectCard
                project={project}
                index={index}
              />
            </div>
          ))}
        </Flex>
      </RevealFx>

      {isLoading && (
        <RevealFx>
          <Column horizontal="center" gap="16" paddingY="40">
            <div className={styles.loadingSpinner} />
            <Text onBackground="neutral-weak" align="center">
              Loading more projects...
            </Text>
          </Column>
        </RevealFx>
      )}

      {!hasMore && visibleProjects.length > 0 && (
        <RevealFx>
          <Column horizontal="center" gap="16" paddingY="40">
            <Text onBackground="neutral-weak" align="center">
              You've reached the end! 🎉
            </Text>
          </Column>
        </RevealFx>
      )}

      {visibleProjects.length === 0 && (
        <RevealFx>
          <Column horizontal="center" gap="16" paddingY="40">
            <Text onBackground="neutral-weak" align="center">
              No projects found.
            </Text>
          </Column>
        </RevealFx>
      )}
    </Column>
  );
}
*/ 