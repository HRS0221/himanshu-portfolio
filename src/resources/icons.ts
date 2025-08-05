import React from "react";
import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiArrowLeft,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
  HiXMark,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import { FaDiscord, FaGithub, FaLinkedin, FaX, FaThreads } from "react-icons/fa6";

// Custom SVG Icons
const HomeIcon: IconType = ({ size = 16, ...props }) => React.createElement(
  "svg",
  { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
  React.createElement("path", { d: "M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("path", { d: "M9 22V12H15V22", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
);

const AboutIcon: IconType = ({ size = 16, ...props }) => React.createElement(
  "svg",
  { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
  React.createElement("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("circle", { cx: "12", cy: "9", r: "3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("path", { d: "M7 20C7 16.6863 9.23858 14 12 14C14.7614 14 17 16.6863 17 20", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
);

const WorkIcon: IconType = ({ size = 16, ...props }) => React.createElement(
  "svg",
  { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
  React.createElement("rect", { x: "2", y: "2", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("rect", { x: "14", y: "2", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("rect", { x: "14", y: "14", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("rect", { x: "2", y: "14", width: "8", height: "8", rx: "2", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("circle", { cx: "6", cy: "6", r: "1.2", fill: "currentColor" }),
  React.createElement("circle", { cx: "18", cy: "6", r: "1.2", fill: "currentColor" }),
  React.createElement("circle", { cx: "18", cy: "18", r: "1.2", fill: "currentColor" }),
  React.createElement("circle", { cx: "6", cy: "18", r: "1.2", fill: "currentColor" }),
  React.createElement("line", { x1: "6", y1: "10", x2: "18", y2: "10", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", opacity: "0.3" }),
  React.createElement("line", { x1: "10", y1: "6", x2: "10", y2: "18", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", opacity: "0.3" })
);

const ArticleIcon: IconType = ({ size = 16, ...props }) => React.createElement(
  "svg",
  { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
  React.createElement("path", { d: "M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("path", { d: "M14 2V8H20", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("line", { x1: "16", y1: "13", x2: "8", y2: "13", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("line", { x1: "16", y1: "17", x2: "8", y2: "17", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("line", { x1: "10", y1: "9", x2: "8", y2: "9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("circle", { cx: "12", cy: "6", r: "0.8", fill: "currentColor" })
);

const ContactIcon: IconType = ({ size = 16, ...props }) => React.createElement(
  "svg",
  { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props },
  React.createElement("path", { d: "M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("path", { d: "M22 6L12 13L2 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
  React.createElement("circle", { cx: "12", cy: "13", r: "1", fill: "currentColor" }),
  React.createElement("path", { d: "M4 8L12 15L20 8", stroke: "currentColor", strokeWidth: "1", strokeLinecap: "round", strokeLinejoin: "round", opacity: "0.3" })
);

export const iconLibrary: Record<string, IconType> = {
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  arrowLeft: HiArrowLeft,
  close: HiXMark,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: HomeIcon,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  // Custom navigation icons
  about: AboutIcon,
  work: WorkIcon,
  article: ArticleIcon,
  contact: ContactIcon,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;