import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconBrandGithub,
    IconTableColumn,
    IconWorld,
  } from "@tabler/icons-react";
import { SparklesCore } from "../ui/Sparkles";
import Image from "next/image";
import { LinkPreview } from "../ui/LinkPreview";
import { Compare } from "../ui/Compare";
import Link from "next/link";

const Grid = () => {
  return (
    <section id="projects" className="min-h-[100vh] pt-10 w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] relative flex flex-col items-center justify-center pb-20">

<h1 className="md:text-5xl text-xl lg:text-7xl font-bold text-center text-white relative z-20">
        Projects
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

        <div className="flex flex-col mx-auto gap-4 items-center w-[73rem] mb-10">
            <p className="w-full text-left text-xl dark:text-white text-black px-10">Overtime I have worked on and built multiple projects, some during work, some outside. Here's a humble list of those, some of them are open-source. If you're inspired by what you see, don't hesitate to dive into the code and share your ideas for improvement.</p>
        </div>

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <BentoGrid className="mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i==0 ? "row-span-2 flex flex-col gap-y-2 justify-start" : i==1 ? "col-span-2 flex flex-col  justify-start" : ""}
          tags={item.tags}
        />
      ))}
    </BentoGrid>
    </section>
  );
};

export default Grid;

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "TechSpark Ecommerce",
      description: "A feature-rich Ecommerce platform with a fully functional cart and payment gateway. Built responsive web and cross-platform mobile applications using React Native and Next.js. Managed backend services with Node.js and MongoDB, with efficient state management through Redux. Styled the UI with Tailwind CSS.",
      header:  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
        <Image src="/images/portrait_banner.png" alt="Project 1" width={400} height={200} className="rounded-xl object-contain fluid" style={{width: "100%", height: "28rem"}}/>
      </div>
      ,
      // icon: <LinkPreview url="https://techspark.vercel.app" className="font-bold" openInNewTab={true}><IconLink /></LinkPreview>,
      icon: <div className="ml-2 flex items-center gap-2">
        {/* Github Icon and Preview then Web Icon and Preview */}
        <LinkPreview url="https://github.com/imshivam-gupta/Techspark-Space" className="font-bold" openInNewTab={true}><IconBrandGithub size={24}/></LinkPreview>
        <LinkPreview url="https://techspark.vercel.app" className="font-bold" openInNewTab={true}><IconWorld size={24}/></LinkPreview>
      </div>,
      tags: ["Author","Next.js", "Node.js", "React Native","Tailwind CSS","Websocket","MongoDB","Typescript","Stripe"],
    },
    {
      title: "Course Canvas",
      description: "A free hub for collaborative learning, our student-friendly platform empowers users to share knowledge, host valuable resources, and engage with a vibrant community. Whether connecting with fellow learners or experts, users can resolve doubts, grow their audience, and contribute to a thriving knowledge-sharing ecosystem.",
      header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Image src="/ccbanner.png" alt="Project 1" width={1000} height={1000} className="rounded-xl object-contain fluid" style={{width: "100%", height: "15rem"}}/>
    </div>,
      icon: <div className="ml-2 flex items-center gap-2">
        <LinkPreview url="https://github.com/imshivam-gupta/Course-Canvas-Spring" className="font-bold" openInNewTab={true}><IconBrandGithub size={24}/></LinkPreview>
        <LinkPreview url="https://course-canvas.vercel.app/" className="font-bold" openInNewTab={true}><IconWorld size={24}/></LinkPreview>
      </div>,
      tags: ["Author","Next.js","SpringBoot","Kafka","Docker","Redis" ,"Tailwind CSS","Typescript","MongoDB","WebRTC","WebSockets"],
    },
    {
      title: "Nighttime Image Dehazing Algorithm",
      description: "Researching and implementing an image dehazing algorithm to improve visibility and clarity in nightime hazy images.",
      header:  <div className="p-2 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-2">
      <Compare
        firstImage="/images/hazed.png"
        secondImage="/images/clear.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[100px] w-[100px] md:h-[100px] md:w-[100%]"
        slideMode="hover"
      />
    </div>,
      icon: <div className="ml-2 flex items-center gap-2">
      <Link href="https://github.com/imshivam-gupta/Course-Canvas-Spring" className="font-bold z-[50]"><IconBrandGithub size={24}/></Link>
    </div>,
    tags: ["Author","Python","OpenCV","Image Processing","Pytorch"],
    },
    {
      title: "The Palisadoes Foundation",
      description:
        "The Palisadoes Foundation sponsors open-source software projects to help community groups organize their daily activities and more.",
      header: <div className="p-2 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-2">
        <Image src="https://avatars.githubusercontent.com/u/24500036?s=200&v=4" alt="Project 1" width={1000} height={1000} className="rounded-xl object-contain fluid" style={{width: "100%", height: "100px"}}/>
      </div>,
      icon: <div className="ml-2 flex items-center gap-2">
        <LinkPreview url="https://github.com/PalisadoesFoundation" className="z-[50]" openInNewTab={true}><IconBrandGithub size={24}/></LinkPreview>
        <LinkPreview url="https://palisadoes.org/" className="font-bold z-[50]" openInNewTab={true}><IconWorld size={24}/></LinkPreview>
      </div>,
      tags: ["Contributor","Flutter","Node.js","Typescript"],
    }
  ];
  