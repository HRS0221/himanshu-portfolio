// COMMENTED OUT: Complex EnhancedProjectGrid - replaced with simple unified grid
// This component was part of the complex Google-style implementation with filtering
// Now using a simple 2-column grid layout with unified ProjectCard components

/*
"use client";

import { useState, useMemo } from "react";
import { Column, Flex, Text, RevealFx } from "@once-ui-system/core";
import { MdxContent } from "../../utils/utils";
import ProjectGridCard from "./ProjectGridCard";
import ProjectFilters, { FilterCategory } from "./ProjectFilters";
import styles from "./EnhancedProjectGrid.module.scss";

interface EnhancedProjectGridProps {
  projects: MdxContent[];
}

function getProjectCategory(project: MdxContent): FilterCategory {
  const tag = project.metadata.tag?.toLowerCase() || "";
  
  if (project.metadata.featured) {
    return "featured";
  }
  
  if (tag.includes("data analysis")) {
    return "data-analysis";
  }
  
  if (tag.includes("machine learning")) {
    return "machine-learning";
  }
  
  if (tag.includes("deep learning")) {
    return "deep-learning";
  }
  
  if (tag.includes("computer vision")) {
    return "computer-vision";
  }
  
  if (tag.includes("data engineering")) {
    return "data-engineering";
  }
  
  return "all";
}

export default function EnhancedProjectGrid({ projects }: EnhancedProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const {
    filteredProjects,
    featuredCount,
    dataAnalysisCount,
    machineLearningCount,
    deepLearningCount,
    computerVisionCount,
    dataEngineeringCount,
  } = useMemo(() => {
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

    let filteredProjects = projects;
    
    if (activeFilter === "featured") {
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
    };
  }, [projects, activeFilter]);

  return (
    <Column gap="40">
      <RevealFx>
        <ProjectFilters
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          featuredCount={featuredCount}
          dataAnalysisCount={dataAnalysisCount}
          machineLearningCount={machineLearningCount}
          deepLearningCount={deepLearningCount}
          computerVisionCount={computerVisionCount}
          dataEngineeringCount={dataEngineeringCount}
        />
      </RevealFx>

      {filteredProjects.length === 0 ? (
        <RevealFx>
          <Column horizontal="center" gap="16" paddingY="40">
            <Text onBackground="neutral-weak" align="center">
              No projects found for the selected filter.
            </Text>
          </Column>
        </RevealFx>
      ) : (
        <RevealFx>
          <Flex wrap gap="24" className={styles.enhancedGrid}>
            {filteredProjects.map((project, index) => (
              <div key={project.slug} className={styles.gridItem}>
                <ProjectGridCard
                  project={project}
                  index={index}
                />
              </div>
            ))}
          </Flex>
        </RevealFx>
      )}
    </Column>
  );
}
*/ 