import React, { useEffect, useState } from 'react';
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../ui/MagicButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Image from "next/image";
import { FlipWords } from "../ui/FlipWords";
import { db } from '@/firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { LinkPreview } from "@/components/ui/LinkPreview";

const Hero = () => {
    const defaultContent = {
        introPart1: "I'm Shivam, a Software Developer at ",
        introPart2: ", with a passion for solving complex problems and building products that make a real difference, particularly in",
        currentFocus: "Currently, I'm trying to improve my skills in Problem Solving Skills and Machine Learning.",
        location: "Bangalore, 2024",
        profileImage: "/images/profile/me.jpg",
        words: ["machine learning", "web development", "app development"],
        mainText: "Building Scalable and Efficient Full-Stack Solutions",
        additionalText: "I'm committed to open-source contributions and constantly expanding my skills.",
        workButtonTitle: "Show my work",
        contactButtonTitle: "Contact me",
        profileAltText: "Shivam, standing on a cliff facing the Himalayas."
    };

    const [content, setContent] = useState(defaultContent);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        const fetchContent = async () => {
            console.log("Fetching content from Firestore...");
            const docRef = doc(db, "heroContent", "default");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setContent(prev => ({ ...prev, ...docSnap.data() }));
            } else {
                console.log("Document does not exist, creating with default content...");
                await setDoc(docRef, defaultContent);
                console.log("Default content saved to Firestore.");
            }
        };

        fetchContent();
    }, []);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="py-8 relative min-h-screen px-20">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                />
                <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
            </div>

            <div className="container mx-auto px-4 pt-10 md:pt-10 lg:pt-10 relative z-10 flex flex-row gap-40">
                <div className="w-full lg:w-2/3 flex flex-col items-start">
                    <TextGenerateEffect
                        words={content.mainText}
                        className="text-left text-[32px] md:text-4xl lg:text-5xl mb-6"
                    />

                    <p className="text-left md:tracking-wider text-sm md:text-lg lg:text-xl text-white mb-4">
                        {content.introPart1}
                        <LinkPreview url="https://www.flipkart.com" className="font-bold" openInNewTab={true}>
                            Flipkart, India
                        </LinkPreview>
                        {content.introPart2}
                        {isClient && <FlipWords words={content.words} duration={4000} className="dark:text-purple"/>}
                        <br />
                        {content.additionalText}
                    </p>

                    <p className="text-left md:tracking-wider text-sm md:text-lg lg:text-xl text-white">
                        {content.currentFocus}
                    </p>

                    <div className="flex flex-row gap-4">
                        <a href="#about">
                            <MagicButton
                                title={content.workButtonTitle}
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                        <a href="#contact">
                            <MagicButton
                                title={content.contactButtonTitle}
                                icon={<FaEnvelope />}
                                position="right"
                            />
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/3 mt-8 lg:mt-0">
                    <div className="rounded-lg shadow-lg border border-gray-100 dark:border-gray-100/10 rotate-2 p-2 dark:bg-zinc-900 bg-white lg:max-w-72 w-full">
                        <Image src={content.profileImage} alt={content.profileAltText} loading="eager" className="w-auto aspect-square rounded overflow-hidden" width="400" height="400" decoding="async" style={{objectFit: "cover", height: "400px", width: "100%"}}/>
                        <div className="lg:pt-2 lg:pb-0 pt-5 pb-2 text-lg text-center dark:text-white">
                            {content.location}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
