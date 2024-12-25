import React from "react";
import {
  IconHome,
  IconTerminal2,
  IconExchange,
  IconFileText,
  IconBriefcase,
  IconBrandX,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

interface Link {
  title: string;
  icon: React.ReactElement;
  href: string;
  openInNewTab?: boolean;
}

export const links: Link[] = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/project",
  },
  {
    title: "Work Experience",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/work",
  },
  {
    title: "Hire Me",
    icon: (
      <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/hire",
  },
  {
    title: "Blog",
    icon: (
      <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/blog",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://x.com/shivam1176",
    openInNewTab: true,
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/imshivam-gupta",
  },
  {
    title: "Linkedin",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/shivam-gupta-bbb669226",
  }
];


export const BLOG_SECTION_ID = "blog";
export const BLOG_SECTION_CLASSES =
  "min-h-[100vh] pt-10 w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] relative flex flex-col items-center justify-center pb-20";
export const BLOG_TITLE_CLASSES =
  "md:text-5xl text-xl lg:text-7xl font-bold text-center text-white relative z-20";
export const BLOG_TITLE = "Blogs";
export const BLOG_PARAGRAPH_CLASSES = "w-full text-center text-xl dark:text-white text-black";
export const BLOG_PARAGRAPH_TEXT =
  "I don't write often, but when I do, it is mostly about my experience building products, here are few of them. All the blogs are organised by topics";
export const BLOG_PARAGRAPH_LINK_TEXT = "here";
export const BLOG_PARAGRAPH_LINK_URL = "https://profile.shivamgupta.tech/blogs";
export const BLOG_HOVER_WRAPPER_CLASSES = "mx-auto px-32 mt-2";
export const BLOG_DIVIDER_CLASSES = "w-[40rem] h-8 relative";
export const BLOG_DIVIDER_OVERLAY_CLASSES =
  "absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]";
export const BLOG_GRADIENT_CLASSES = [
  "absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4 blur-sm",
  "absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4",
  "absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-1/4 blur-sm",
  "absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4",
];
export const BLOG_CONTENT_WRAPPER_CLASSES = "flex flex-col mx-auto gap-4 px-10 w-[73rem]";

export const HERO_CONTAINER_CLASSES = "py-4 relative min-h-screen px-20";
export const HERO_SPOTLIGHT_CLASSES = [
  "-top-40 -left-10 md:-left-32 md:-top-20 h-screen",
  "h-[80vh] w-[50vw] top-10 left-full",
  "left-80 top-28 h-[80vh] w-[50vw]",
];
export const HERO_CONTENT_WRAPPER_CLASSES =
  "container mx-auto px-4 pt-4 md:pt-4 lg:pt-6 relative z-10 flex flex-row gap-40";
export const HERO_TEXT_WRAPPER_CLASSES =
  "w-full lg:w-2/3 flex flex-col items-start";
export const HERO_TEXT_CLASSES =
  "text-left text-[32px] md:text-4xl lg:text-5xl mb-0";
export const HERO_PARAGRAPH_CLASSES =
  "text-left md:tracking-wider text-sm md:text-lg lg:text-xl text-white mb-3";
export const HERO_BUTTON_WRAPPER_CLASSES =
  "flex flex-row gap-4 -mt-4";
export const HERO_IMAGE_WRAPPER_CLASSES =
  "lg:w-1/3 mt-8 lg:mt-0";
export const HERO_IMAGE_CONTAINER_CLASSES =
  "rounded-lg shadow-lg border border-gray-100 dark:border-gray-100/10 rotate-2 p-2 dark:bg-zinc-900 bg-white w-full";
export const HERO_IMAGE_CLASSES =
  "w-auto aspect-square rounded overflow-hidden";
export const HERO_IMAGE_TEXT_CLASSES =
  "lg:pt-2 lg:pb-0 pt-5 pb-2 text-lg text-center dark:text-white";

export const BUTTON_SIGN_UP_TEXT = "Submit";
export const BUTTON_WHATSAPP_TEXT = "Chat on Whatsapp";
export const FORM_EMAIL_PLACEHOLDER = "recruiter@gmail.com";
export const FORM_MESSAGE_PLACEHOLDER = "Your message here...";
export const SECTION_TITLE = "Hire Me as a Freelancer";
export const SECTION_DESCRIPTION =
  "Want to hire me as a freelancer? Let's discuss. Drop your message and let's discuss about your project.";

export const hireMeStrings = {
  title: "Hire Me as a Freelancer",
  description:
    "Want to hire me as a freelancer? Let's discuss. Drop your message and let's discuss about your project.",
  emailPlaceholder: "recruiter@gmail.com",
  messagePlaceholder: "Your message here...",
  signUpButton: "Submit",
  whatsappButton: "Chat on Whatsapp",
};