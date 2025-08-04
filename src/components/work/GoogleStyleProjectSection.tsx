// COMMENTED OUT: Complex GoogleStyleProjectSection - replaced with simple unified grid
// This component was part of the complex Google-style implementation with advanced search and filtering
// Now using a simple 2-column grid layout with unified ProjectCard components

/*
"use client";

import { useState, useMemo, useEffect } from "react";
import { Column, Flex, Text, RevealFx, Heading } from "@once-ui-system/core";
import { MdxContent } from "../../utils/utils";
import AdvancedProjectSearch from "./AdvancedProjectSearch";
import ProjectFilters, { FilterCategory } from "./ProjectFilters";
import PerformanceOptimizedGrid from "./PerformanceOptimizedGrid";
import styles from "./GoogleStyleProjectSection.module.scss";

interface GoogleStyleProjectSectionProps {
  projects: MdxContent[];
}

export default function GoogleStyleProjectSection({ 
  projects 
}: GoogleStyleProjectSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<MdxContent | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Analytics tracking (Google-style)
  useEffect(() => {
    // Track page view
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "project_section_view", {
        event_category: "engagement",
        event_label: "project_section"
      });
    }
  }, []);

  // Track filter usage
  const trackFilterUsage = (filter: FilterCategory) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "project_filter_click", {
        event_category: "interaction",
        event_label: filter,
        value: 1
      });
    }
  };

  // Track search usage
  const trackSearchUsage = (query: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "project_search", {
        event_category: "interaction",
        event_label: "search",
        search_term: query
      });
    }
  };

  // Smart project categorization and filtering
  const {
    filteredProjects,
    featuredCount,
    dataAnalysisCount,
    machineLearningCount,
    deepLearningCount,
    computerVisionCount,
    dataEngineeringCount,
    searchResults,
  } = useMemo(() => {
    // Search functionality
    let searchResults: MdxContent[] = [];
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      searchResults = projects.filter(project => {
        const title = project.metadata.title.toLowerCase();
        const summary = (project.metadata.summary || "").toLowerCase();
        const techStack = (project.metadata.techStack || []).join(" ").toLowerCase();
        const tag = (project.metadata.tag || "").toLowerCase();
        
        return title.includes(query) || 
               summary.includes(query) || 
               techStack.includes(query) || 
               tag.includes(query);
      });
    }

    // Category filtering
    const featuredProjects = projects.filter(p => p.metadata.featured);
    const dataAnalysisProjects = projects.filter(p => 
      p.metadata.tag?.toLowerCase().includes("data analysis")
    );
    const machineLearningProjects = projects.filter(p => 
      p.metadata.tag?.toLowerCase().includes("machine learning")
    );
    const deepLearningProjects = projects.filter(p => 
      p.metadata.tag?.toLowerCase().includes("deep learning")
    );
    const computerVisionProjects = projects.filter(p => 
      p.metadata.tag?.toLowerCase().includes("computer vision")
    );
    const dataEngineeringProjects = projects.filter(p => 
      p.metadata.tag?.toLowerCase().includes("data engineering")
    );

    // Determine which projects to show
    let filteredProjects = projects;
    
    if (searchQuery.trim()) {
      filteredProjects = searchResults;
    } else if (activeFilter === "featured") {
      filteredProjects = featuredProjects;
    } else if (activeFilter === "data-analysis") {
      filteredProjects = dataAnalysisProjects;
    } else if (activeFilter === "machine-learning") {
      filteredProjects = machineLearningProjects;
    } else if (activeFilter === "deep-learning") {
      filteredProjects = deepLearningProjects;
    } else if (activeFilter === "computer-vision") {
      filteredProjects = computerVisionProjects;
    } else if (activeFilter === "data-engineering") {
      filteredProjects = dataEngineeringProjects;
    }

    return {
      filteredProjects,
      featuredCount: featuredProjects.length,
      dataAnalysisCount: dataAnalysisProjects.length,
      machineLearningCount: machineLearningProjects.length,
      deepLearningCount: deepLearningProjects.length,
      computerVisionCount: computerVisionProjects.length,
      dataEngineeringCount: dataEngineeringProjects.length,
      searchResults,
    };
  }, [projects, activeFilter, searchQuery]);

  // Handle filter change
  const handleFilterChange = (filter: FilterCategory) => {
    setActiveFilter(filter);
    setSearchQuery(""); // Clear search when filter changes
    trackFilterUsage(filter);
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setActiveFilter("all"); // Reset filter when searching
    trackSearchUsage(query);
  };

  // Handle project selection
  const handleProjectSelect = (project: MdxContent) => {
    setSelectedProject(project);
    // Track project selection
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "project_select", {
        event_category: "interaction",
        event_label: project.slug,
        project_title: project.metadata.title
      });
    }
  };

  return (
    <Column gap="40" className={styles.googleStyleSection}>
      {/* Search Section */}
      <RevealFx>
        <Column gap="24" horizontal="center">
          <Heading as="h2" variant="heading-strong-m" align="center">
            Discover My Projects
          </Heading>
          <Text onBackground="neutral-weak" align="center" maxWidth="600px">
            Search and filter through my portfolio to find projects that match your interests
          </Text>
          <AdvancedProjectSearch
            projects={projects}
            onSearch={handleSearch}
            onSuggestionSelect={handleProjectSelect}
          />
        </Column>
      </RevealFx>

      {/* Filters Section */}
      <RevealFx>
        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          featuredCount={featuredCount}
          dataAnalysisCount={dataAnalysisCount}
          machineLearningCount={machineLearningCount}
          deepLearningCount={deepLearningCount}
          computerVisionCount={computerVisionCount}
          dataEngineeringCount={dataEngineeringCount}
        />
      </RevealFx>

      {/* Results Summary */}
      {(searchQuery || activeFilter !== "all") && (
        <RevealFx>
          <Flex gap="12" vertical="center" wrap className={styles.resultsSummary}>
            <Text onBackground="neutral-weak">
              {searchQuery ? (
                <>
                  Search results for "<strong>{searchQuery}</strong>"
                </>
              ) : (
                <>
                  Filtered by <strong>{activeFilter.replace("-", " ")}</strong>
                </>
              )}
            </Text>
            <Text onBackground="neutral-weak">
              • {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </Text>
            {(searchQuery || activeFilter !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
                className={styles.clearButton}
              >
                Clear all
              </button>
            )}
          </Flex>
        </RevealFx>
      )}

      {/* Projects Grid */}
      <PerformanceOptimizedGrid 
        projects={filteredProjects}
        itemsPerPage={searchQuery ? 12 : 6} // Show more results for search
      />

      {/* Empty State */}
      {filteredProjects.length === 0 && (searchQuery || activeFilter !== "all") && (
        <RevealFx>
          <Column horizontal="center" gap="16" paddingY="60">
            <div className={styles.emptyStateIcon}>🔍</div>
            <Heading as="h3" variant="heading-strong-s" align="center">
              No projects found
            </Heading>
            <Text onBackground="neutral-weak" align="center" maxWidth="400px">
              {searchQuery 
                ? `No projects match "${searchQuery}". Try different keywords or browse all projects.`
                : `No projects in this category yet. Check back soon!`
              }
            </Text>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
              }}
              className={styles.browseAllButton}
            >
              Browse All Projects
            </button>
          </Column>
        </RevealFx>
      )}
    </Column>
  );
}
*/ 