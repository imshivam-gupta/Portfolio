import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Image from "next/image";

const services = [
  {
    title: "Web Developer",
    icon: '/web.png',
  },
  {
    title: "React Native Developer",
    icon: '/mobile.png',
  },
  {
    title: "Backend Developer",
    icon: '/backend.png',
  }
];

const ServiceCard = ({ index, title, icon }) => (
  <div className='xs:w-[250px] w-1/5'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card h-1/2'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          height={100}
          width={100}
        />

        <h3 className='text-white-400 text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const about = () => {
  return (
    <>
      <Head>
        <title>Shivam Gupta | About Page</title>
        <meta name="description" content="" />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <div
          className={`w-full h-full inline-block z-0 bg-light p-2 dark:bg-dark  xl:p-24 lg:p-16 mb:p-12 sm:p-8`}
        >
          <AnimatedText
            text="Overview"
            className="lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 mb-4"
          />

          <div className="px-20 mt-4 mb-8 w-4/5 mx-auto flex flex-row">


            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="text-secondary text-[17px] mr-auto w-full text-center leading-[30px] my-auto"
            >
              I am a Full Stack Web Developer and App Developer. I am currently studying at Netaji
              Subash University of Technology and pursuing Computer Science with
              specialization in Artifical Intelligence. I love to play around new tech. My main Tech Stack is MERN Stack.
            </motion.p>

          </div>

          <div className="flex flex-row justify-center items-center w-full gap-x-10 mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>

          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
};

export default about;
