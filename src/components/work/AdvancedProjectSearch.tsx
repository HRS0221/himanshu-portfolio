// COMMENTED OUT: Complex AdvancedProjectSearch - replaced with simple unified grid
// This component was part of the complex Google-style implementation with fuzzy search
// Now using a simple 2-column grid layout with unified ProjectCard components

/*
"use client";

import { useState, useEffect, useRef } from "react";
import { Flex, Input, Column, Text, Button } from "@once-ui-system/core";
import { MdxContent } from "../../utils/utils";
import styles from "./AdvancedProjectSearch.module.scss";

interface AdvancedProjectSearchProps {
  projects: MdxContent[];
  onSearch: (query: string) => void;
  onSuggestionSelect: (project: MdxContent) => void;
}

// Fuzzy search implementation
function fuzzySearch(projects: MdxContent[], query: string): MdxContent[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  return projects
    .map(project => {
      const title = project.metadata.title.toLowerCase();
      const summary = (project.metadata.summary || "").toLowerCase();
      const techStack = (project.metadata.techStack || []).join(" ").toLowerCase();
      const tag = (project.metadata.tag || "").toLowerCase();
      
      const searchableText = `${title} ${summary} ${techStack} ${tag}`;
      
      // Simple fuzzy matching
      let score = 0;
      let queryIndex = 0;
      
      for (let i = 0; i < searchableText.length && queryIndex < searchTerm.length; i++) {
        if (searchableText[i] === searchTerm[queryIndex]) {
          score += 1;
          queryIndex++;
        }
      }
      
      return { project, score, matchPercentage: (score / searchTerm.length) * 100 };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(result => result.project);
}

export default function AdvancedProjectSearch({
  projects,
  onSearch,
  onSuggestionSelect,
}: AdvancedProjectSearchProps) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<MdxContent[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);

  // Debounced search
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.trim()) {
        const results = fuzzySearch(projects, query);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, projects]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        onSuggestionSelect(suggestions[selectedIndex]);
        setQuery("");
        setSuggestions([]);
        setSelectedIndex(-1);
      } else {
        onSearch(query);
      }
    } else if (e.key === "Escape") {
      setSuggestions([]);
      setSelectedIndex(-1);
      setIsFocused(false);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (project: MdxContent) => {
    onSuggestionSelect(project);
    setQuery("");
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  // Handle search submit
  const handleSearch = () => {
    onSearch(query);
    setSuggestions([]);
    setSelectedIndex(-1);
  };

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <Flex gap="12" className={styles.searchBox}>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search projects by tech, skills, or keywords..."
          className={styles.searchInput}
          size="l"
        />
        <Button
          onClick={handleSearch}
          variant="primary"
          size="l"
          className={styles.searchButton}
        >
          Search
        </Button>
      </Flex>

      {isFocused && suggestions.length > 0 && (
        <Column className={styles.suggestionsContainer}>
          {suggestions.map((project, index) => (
            <div
              key={project.slug}
              className={`${styles.suggestionItem} ${
                index === selectedIndex ? styles.selected : ""
              }`}
              onClick={() => handleSuggestionClick(project)}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <Column gap="4">
                <Text variant="text-strong-s">{project.metadata.title}</Text>
                <Text variant="text-weak-s" onBackground="neutral-weak">
                  {project.metadata.tag} • {project.metadata.techStack?.slice(0, 3).join(", ")}
                </Text>
              </Column>
            </div>
          ))}
        </Column>
      )}
    </div>
  );
}
*/ 