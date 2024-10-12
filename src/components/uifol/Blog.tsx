import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { motion } from "framer-motion";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconBrandGithub,
    IconClipboardCopy,
    IconFileBroken,
    IconLink,
    IconSignature,
    IconTableColumn,
    IconWorld,
    IconWorldWww,
  } from "@tabler/icons-react";
import { LampContainer } from "../ui/Lamp";
import { SparklesCore } from "../ui/Sparkles";
import Image from "next/image";
import { LinkPreview } from "../ui/LinkPreview";
import { Compare } from "../ui/Compare";
import Link from "next/link";
import { HoverEffect } from "../ui/CardHoverEffect";
import { title } from "process";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Blog = () => {
  return (
    <section id="blog" className="min-h-[100vh] pt-10 w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] relative flex flex-col items-center justify-center pb-20">

<h1 className="md:text-5xl text-xl lg:text-7xl font-bold text-center text-white relative z-20">
        Blogs
      </h1>
      <div className="w-[40rem] h-8 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[1px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[3px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        {/* <SparklesCore
          background="transparent"
          minSize={1}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-[6rem]"
          particleColor="#FFFFFF"
        /> */}
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

        <div className="flex flex-col mx-auto gap-4 px-10 w-[73rem]">
            <p className="w-full text-left text-xl dark:text-white text-black">
            I don&apos;t write often, but when I do, it is mostly about my experience building products, here are few of them. If you are interested in reading more, you can find them <LinkPreview url="https://blog.shivamgupta.tech">
            <span className="underline">here</span>
            </LinkPreview>
              </p>
        </div>

        <div className="mx-auto px-32 mt-2">
      <HoverEffect items={projects} />
    </div>
    </section>
  );
};

export default Blog;


  export const projects = [
    {
      title: "Why Low Level Design Matters?",
      description:
        "Understanding the importance of low level design in software development. Why it matters and how to do it. How to think through the design of a system at a higher level of abstraction.",
      link: "https://blog.shivamgupta.tech/posts/why-low-level-design-matters",
    },
    {
      title: "Why Redis?",
      description:
        "A collection of reasons why Redis is a powerful tool for building scalable and performant systems.",
      link: "https://blog.shivamgupta.tech/posts/why-redis",
    },
   {
    title: "Server Side Rendering vs Static Site Generation",
    description: "A comparison of server side rendering and static site generation. How they work and when to use them. The trade offs and the benefits.",
    link: "https://blog.shivamgupta.tech/posts/server-side-rendering-vs-client-side-rendering",
   },
    {
      title: "Segment Tree",
      description:
        "A data structure that allows for efficient range queries and updates. How it works and how to implement it.",
      link: "https://blog.shivamgupta.tech/posts/segment-tree",
    },
    {
      title: "Graph Databases",
      description:
        "A comparison of graph databases and relational databases. How they work and when to use them.",
      link: "https://blog.shivamgupta.tech/posts/graph-databases",
    },
    {
      title: "Handling Big Data",
      description:
        "A collection of techniques and best practices for handling big data. How to process and analyze large datasets efficiently",
      link: "https://blog.shivamgupta.tech/posts/handling-big-data",
    },
  ];