// src/app/page.tsx

import React from "react";
import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
} from "@once-ui-system/core";

import { home, about, person, newsletter, baseURL } from "../resources";
import NewsletterCard from "../components/NewsletterCard";
import RecentArticles from "../components/home/RecentArticles";
import RecentProjects from "../components/home/RecentProjects";
import QuickStats from "../components/home/QuickStats";
import CurrentFocus from "../components/home/CurrentFocus";
import { getMostRecentProject, getAllProjects } from "../utils/utils";
import styles from "../components/about/about.module.scss";

export default function Home() {
  return <div>Hello World</div>;
}