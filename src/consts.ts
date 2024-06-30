import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Surendra J",
  EMAIL: "suri312006@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Who am I",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "What do I like",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where do I work",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "What do I do.",
};

export const SOCIALS: Socials = [
  // { 
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
  { 
    NAME: "github",
    HREF: "https://github.com/suri312006"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/surendra-jammishetti-909809293/",
  }
];
