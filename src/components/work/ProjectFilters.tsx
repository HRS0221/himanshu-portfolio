// COMMENTED OUT: Complex ProjectFilters - replaced with simple unified grid
// This component was part of the complex Google-style implementation with category filtering
// Now using a simple 2-column grid layout with unified ProjectCard components

/*
import { Flex, Button } from "@once-ui-system/core";
import styles from "./ProjectFilters.module.scss";

export type FilterCategory = "all" | "featured" | "data-analysis" | "machine-learning" | "deep-learning" | "computer-vision" | "data-engineering";

interface ProjectFiltersProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
  featuredCount: number;
  dataAnalysisCount: number;
  machineLearningCount: number;
  deepLearningCount: number;
  computerVisionCount: number;
  dataEngineeringCount: number;
}

const filterOptions = [
  { key: "all" as FilterCategory, label: "All Projects" },
  { key: "featured" as FilterCategory, label: "Featured" },
  { key: "data-analysis" as FilterCategory, label: "Data Analysis" },
  { key: "machine-learning" as FilterCategory, label: "Machine Learning" },
  { key: "deep-learning" as FilterCategory, label: "Deep Learning" },
  { key: "computer-vision" as FilterCategory, label: "Computer Vision" },
  { key: "data-engineering" as FilterCategory, label: "Data Engineering" },
];

export default function ProjectFilters({
  activeFilter,
  onFilterChange,
  featuredCount,
  dataAnalysisCount,
  machineLearningCount,
  deepLearningCount,
  computerVisionCount,
  dataEngineeringCount,
}: ProjectFiltersProps) {
  const getCount = (filter: FilterCategory) => {
    switch (filter) {
      case "featured":
        return featuredCount;
      case "data-analysis":
        return dataAnalysisCount;
      case "machine-learning":
        return machineLearningCount;
      case "deep-learning":
        return deepLearningCount;
      case "computer-vision":
        return computerVisionCount;
      case "data-engineering":
        return dataEngineeringCount;
      default:
        return 0;
    }
  };

  return (
    <Flex className={styles.filterContainer} gap="12" wrap>
      {filterOptions.map((option) => {
        const count = getCount(option.key);
        const isActive = activeFilter === option.key;
        
        return (
          <Button
            key={option.key}
            variant={isActive ? "primary" : "neutral"}
            size="s"
            onClick={() => onFilterChange(option.key)}
            className={`${styles.filterButton} ${isActive ? styles.active : ""}`}
          >
            {option.label}
            {count > 0 && (
              <span className={styles.count}>({count})</span>
            )}
          </Button>
        );
      })}
    </Flex>
  );
}
*/ 