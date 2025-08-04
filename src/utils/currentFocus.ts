import fs from 'fs';
import path from 'path';
import { articles } from '../resources/content';

export interface FocusItem {
  icon: string;
  title: string;
  description: string;
  status: string;
}

export interface CurrentFocusData {
  focusItems: FocusItem[];
}

export function getCurrentFocus(): CurrentFocusData {
  try {
    const filePath = path.join(process.cwd(), 'src/data/currentFocus.json');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileContent);
    
    // Calculate article status directly from articles
    const totalArticles = articles.items.length;
    const recentArticles = articles.items.filter((article) => {
      const articleDate = new Date(article.publishedAt);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return articleDate > thirtyDaysAgo;
    });
    
    const articleStatus = recentArticles.length > 0 ? "Active" : "Paused";
    
    // Update the technical writing item with dynamic status
    const updatedFocusItems = data.focusItems.map((item: FocusItem) => {
      if (item.title === "Technical Writing") {
        return {
          ...item,
          status: articleStatus,
          description: `Creating educational content on machine learning and data science concepts through LinkedIn articles and documentation. ${totalArticles} articles published.`
        };
      }
      return item;
    });
    
    return {
      focusItems: updatedFocusItems
    };
  } catch (error) {
    console.error('Error reading current focus data:', error);
    // Return default data if file can't be read
    const totalArticles = articles.items.length;
    const recentArticles = articles.items.filter((article) => {
      const articleDate = new Date(article.publishedAt);
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      return articleDate > thirtyDaysAgo;
    });
    
    const articleStatus = recentArticles.length > 0 ? "Active" : "Paused";
    
    return {
      focusItems: [
        {
          icon: "📚",
          title: "GATE 2026 Preparation",
          description: "Intensive preparation for Graduate Aptitude Test in Engineering 2026, focusing on Data Science and Artificial Intelligence paper.",
          status: "Active"
        },
        {
          icon: "👁️",
          title: "Computer Vision Projects",
          description: "Developing real-time object detection and image processing solutions using YOLO and deep learning frameworks.",
          status: "Ongoing"
        },
        {
          icon: "☁️",
          title: "Cloud Data Engineering",
          description: "Building scalable data pipelines and analytics solutions using AWS services and modern data engineering practices.",
          status: "Learning"
        },
        {
          icon: "✍️",
          title: "Technical Writing",
          description: `Creating educational content on machine learning and data science concepts through LinkedIn articles and documentation. ${totalArticles} articles published.`,
          status: articleStatus
        }
      ]
    };
  }
} 