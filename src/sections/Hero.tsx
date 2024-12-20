"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";
import { Spotlight } from "@/components/Spotlight";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import Image from "next/image";
import { db } from "@/lib/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { HeroContent } from "@/lib/data";
import {
  HERO_CONTAINER_CLASSES,
  HERO_SPOTLIGHT_CLASSES,
  HERO_CONTENT_WRAPPER_CLASSES,
  HERO_TEXT_WRAPPER_CLASSES,
  HERO_TEXT_CLASSES,
  HERO_PARAGRAPH_CLASSES,
  HERO_BUTTON_WRAPPER_CLASSES,
  HERO_IMAGE_WRAPPER_CLASSES,
  HERO_IMAGE_CONTAINER_CLASSES,
  HERO_IMAGE_CLASSES,
  HERO_IMAGE_TEXT_CLASSES,
} from "@/lib/constants";

const Hero = () => {
  const [content, setContent] = useState(HeroContent);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, "heroContent", "default");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setContent((prev) => ({ ...prev, ...docSnap.data() }));
      } else {
        await setDoc(docRef, HeroContent);
      }
    };

    fetchContent();
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={HERO_CONTAINER_CLASSES}>
      <div>
        {HERO_SPOTLIGHT_CLASSES.map((className, index) => (
          <Spotlight key={index} className={className} fill={["white", "purple", "blue"][index]} />
        ))}
      </div>

      <div className={HERO_CONTENT_WRAPPER_CLASSES}>
        <div className={HERO_TEXT_WRAPPER_CLASSES}>
          <TextGenerateEffect words={content.mainText} className={HERO_TEXT_CLASSES} />

          {[content.para1, content.para2, content.para3, content.para4].map((para, index) => (
            <p key={index} className={HERO_PARAGRAPH_CLASSES}>
              {para}
            </p>
          ))}

          <div className={HERO_BUTTON_WRAPPER_CLASSES}>
            <a href="/work">
              <MagicButton
                title={content.workButtonTitle}
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="/hire">
              <MagicButton
                title={content.contactButtonTitle}
                icon={<FaEnvelope />}
                position="right"
              />
            </a>
          </div>
        </div>
        <div className={HERO_IMAGE_WRAPPER_CLASSES}>
          <div className={HERO_IMAGE_CONTAINER_CLASSES}>
            <Image
              src={content.profileImage}
              alt={content.profileAltText}
              loading="eager"
              className={HERO_IMAGE_CLASSES}
              width="400"
              height="400"
              decoding="async"
              style={{ objectFit: "cover", height: "400px", width: "100%" }}
            />
            <div className={HERO_IMAGE_TEXT_CLASSES}>{content.location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
