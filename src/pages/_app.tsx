import '@/styles/globals.css'
import Head from 'next/head';
import { useRouter } from 'next/router'
import Hero from '@/components/uifol/Hero';
import { FloatingDock } from '@/components/ui/floating-dock';
import { IconBrandGithub, IconBrandX, IconBriefcase, IconExchange, IconFileText, IconHome, IconMessage, IconNewSection, IconTerminal2 } from '@tabler/icons-react';
import Grid from '@/components/uifol/Grid';
import Work from '@/components/uifol/Work';
import Blog from '@/components/uifol/Blog';
import HireMe from '@/components/uifol/HireMe';


const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Projects",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "Work Experience",
    icon: (
      <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#work",
  },
  {
    title: "Blog",
    icon: (
      <IconFileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#blog",
  },
  {
    title: "Hire Me",
    icon: (
      <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#hire",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

const data = [
  {
    title: "Sep 2024 - Present",
    company: "My Sensei",
    url: "https://mysensei.co/",
    role: "Software Engineer",
    responsibilities: [
      "Worked remotely on startup products and features.",
      "Developed and maintained scalable and secure web applications using TypeScript, React, Next.js, and Node.js.",
      "Collaborated with cross-functional teams to implement new features and improve user experiences.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ],
    tags: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    title: "May 2024 - July 2024",
    company: "Flipkart",
    url: "https://www.flipkart.com/",
    role: "Software Engineer Intern",
    responsibilities: [
      "Developed and maintained scalable and secure web applications using TypeScript, React, Next.js, and Node.js.",
      "Collaborated with cross-functional teams to implement new features and improve user experiences.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ],
    tags: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    title: "March 2024 - May 2024",
    company: "AccioJob",
    url: "https://acciojob.com/",
    role: "Frontend Instructor",
    responsibilities: [
      "Taught frontend development to 100+ students.",
      "Mentored students to help them learn and grow.",
    ],
    tags: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    title: "Jan 2024 - March 2024",
    company: "Coding Ninjas",
    url: "https://www.codingninjas.com/",
    role: "Teaching Assistant",
    responsibilities: [
      "Taught Data Structures and Algorithms to 100+ students.",
      "Mentored students to help them learn and grow.",
    ],
    tags: [],
  },
];


export default function App() {
  


  const router = useRouter()

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="desc"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto  min-h-screen">
      <div className="max-w-[100vw] w-full">

        <Hero />
        <Grid />
        <Work />
        <Blog />
        <HireMe />

        <FloatingDock 
      desktopClassName='fixed bottom-[2rem] left-1/2 transform -translate-x-1/2 opacity-100 px-10'
          items={links} />
      </div>
    </main>
    </div>  
  )
}
