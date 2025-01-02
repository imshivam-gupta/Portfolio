// import React, { useEffect, useState } from 'react';
// import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "../ui/MagicButton";
// import { Spotlight } from "@/components/ui/Spotlight";
// import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
// import Image from "next/image";
// import { FlipWords } from "../ui/FlipWords";
// import { db } from '@/firebaseConfig';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { LinkPreview } from "@/components/ui/LinkPreview";

// const Hero = () => {
//     const defaultContent = {
//         introPart1: "I'm Shivam, a Software Developer at ",
//         introPart2: ", with a passion for solving complex problems and building products that make a real difference, particularly in",
//         currentFocus: "Currently, I'm trying to improve my skills in Problem Solving Skills and Machine Learning.",
//         location: "Bangalore, 2024",
//         profileImage: "/images/profile/me.jpg",
//         words: ["machine learning", "web development", "app development"],
//         mainText: "Building Scalable and Efficient Full-Stack Solutions",
//         additionalText: "I'm committed to open-source contributions and constantly expanding my skills.",
//         workButtonTitle: "Show my work",
//         contactButtonTitle: "Contact me",
//         profileAltText: "Shivam, standing on a cliff facing the Himalayas."
//     };

//     const [content, setContent] = useState(defaultContent);
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         const fetchContent = async () => {
//             console.log("Fetching content from Firestore...");
//             const docRef = doc(db, "heroContent", "default");
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 setContent(prev => ({ ...prev, ...docSnap.data() }));
//             } else {
//                 console.log("Document does not exist, creating with default content...");
//                 await setDoc(docRef, defaultContent);
//                 console.log("Default content saved to Firestore.");
//             }
//         };

//         fetchContent();
//     }, []);

//     useEffect(() => {
//         setIsClient(true);
//     }, []);

//     return (
//         <div className="py-8 relative min-h-screen px-20">
//             <div>
//                 <Spotlight
//                     className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
//                     fill="white"
//                 />
//                 <Spotlight
//                     className="h-[80vh] w-[50vw] top-10 left-full"
//                     fill="purple"
//                 />
//                 <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
//             </div>

//             <div className="container mx-auto px-4 pt-10 md:pt-10 lg:pt-10 relative z-10 flex flex-row gap-40">
//                 <div className="w-full lg:w-2/3 flex flex-col items-start">
//                     <TextGenerateEffect
//                         words={content.mainText}
//                         className="text-left text-[32px] md:text-4xl lg:text-5xl mb-6"
//                     />

//                     <p className="text-left md:tracking-wider text-sm md:text-lg lg:text-xl text-white mb-4">
//                         {content.introPart1}
//                         <LinkPreview url="https://www.flipkart.com" className="font-bold" openInNewTab={true}>
//                             Flipkart, India
//                         </LinkPreview>
//                         {content.introPart2}
//                         {isClient && <FlipWords words={content.words} duration={4000} className="dark:text-purple"/>}
//                         <br />
//                         {content.additionalText}
//                     </p>

//                     <p className="text-left md:tracking-wider text-sm md:text-lg lg:text-xl text-white">
//                         {content.currentFocus}
//                     </p>

//                     <div className="flex flex-row gap-4">
//                         <a href="#about">
//                             <MagicButton
//                                 title={content.workButtonTitle}
//                                 icon={<FaLocationArrow />}
//                                 position="right"
//                             />
//                         </a>
//                         <a href="#contact">
//                             <MagicButton
//                                 title={content.contactButtonTitle}
//                                 icon={<FaEnvelope />}
//                                 position="right"
//                             />
//                         </a>
//                     </div>
//                 </div>
//                 <div className="lg:w-1/3 mt-8 lg:mt-0">
//                     <div className="rounded-lg shadow-lg border border-gray-100 dark:border-gray-100/10 rotate-2 p-2 dark:bg-zinc-900 bg-white lg:max-w-72 w-full">
//                         <Image src={content.profileImage} alt={content.profileAltText} loading="eager" className="w-auto aspect-square rounded overflow-hidden" width="400" height="400" decoding="async" style={{objectFit: "cover", height: "400px", width: "100%"}}/>
//                         <div className="lg:pt-2 lg:pb-0 pt-5 pb-2 text-lg text-center dark:text-white">
//                             {content.location}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MousePointerClick } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background"
      />
      
      {/* Main content */}
      <div className="relative z-10 container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <span className="text-primary">Hello, I&apos;m</span>{" "}
              <span className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                Shivam Gupta
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl my-2">
              A passionate full-stack developer crafting beautiful and functional web experiences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-2 min-[400px]:flex-row mt-8"
          >
            <Button className="gap-2" asChild>
              <a href="#projects">
                <MousePointerClick className="h-4 w-4" />
                View Experience
              </a>
            </Button>
            <Button variant="secondary" className="gap-2" asChild>
              <a href="#contact">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/imshivam-gupta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/shivam-gupta-bbb669226/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:shivamggupta2003@gmail.com"
            >
              <Button variant="ghost" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[50%] top-[50%] -z-10 h-[600px] w-[600px] -translate-x-[50%] -translate-y-[50%] rounded-full bg-primary/5 blur-3xl" />
      </motion.div>
    </section>
  )
}