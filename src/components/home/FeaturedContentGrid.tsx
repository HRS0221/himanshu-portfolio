// Complete code for the NEW file: src/components/home/FeaturedContentGrid.tsx

import type { MdxContent } from "../../utils/utils";
import styles from "./FeaturedContentGrid.module.scss";
import FeaturedProjectCard from "../work/FeaturedProjectCard";
import HomepageArticleCard from "./HomepageArticleCard"; // We will create this next
import CallToActionCard from "./CallToActionCard";
import { work } from "../../resources";

interface FeaturedContentGridProps {
  featuredProject: MdxContent | null;
  latestArticles: MdxContent[];
}

export default function FeaturedContentGrid({
  featuredProject,
  latestArticles,
}: FeaturedContentGridProps) {
  if (!featuredProject || latestArticles.length < 2) {
    return null; // Don't render the grid if we don't have enough content
  }

  return (
    <div className={styles.gridContainer}>
      <div className={styles.featuredProject}>
        <FeaturedProjectCard project={featuredProject} index={0} />
      </div>
      <div className={styles.latestArticle1}>
        <HomepageArticleCard article={latestArticles[0]} />
      </div>
      <div className={styles.latestArticle2}>
        <HomepageArticleCard article={latestArticles[1]} />
      </div>
      <div className={styles.ctaCard}>
        <CallToActionCard
          title="View All Projects"
          description="Explore the full archive of my work."
          href={work.path}
        />
      </div>
    </div>
  );
}
