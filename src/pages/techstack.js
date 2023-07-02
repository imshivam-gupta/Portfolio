import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import BallCanvas from "./canvas/Ball";

const lang_technologies = [
  {
    name: "C++",
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: "Javascript",
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: "C",
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  
];

const front_end_technologies = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      },
      {
        name: "React Native",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      },
      {
        name: "Next.js",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      },
      {
        name: "Redux",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
      },
      {
        name: "Tailwind CSS",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'      
    },
];


const backend_technologies = [
    {
        name: "Node.js",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
    },
    {
        name: "Express.js",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
];
const Databases_tech = [
    {
        name: "MongoDB",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
        name: "MySQL",
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },

];



const about = () => {
  return (
    <>
      <Head>
        <title>Shivam Gupta | Technology Page</title>
        <meta name="description" content="" />
      </Head>

      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light mb-40">
        <div
          className={`w-full h-full inline-block bg-light dark:bg-dark xl:p-4 lg:p-16 mb:p-12 sm:p-8`}
        >
          <AnimatedText
            text="Techstack"
            className="lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 mb-4"
          />

          <div className="px-20 mt-4 mb-8 w-4/5 mx-auto flex flex-row">


            <motion.p
              variants={fadeIn("", "", 0.1, 1)}
              className="text-secondary text-[17px] mr-auto w-full text-center leading-[30px] mb-6 my-auto"
            >
               My main language is Javascript and C++ but I can also work with Python and Java. I have experience with React, React Native, Node.js, Express.js, MongoDB, MySQL, Firebase, Git, and more. I am always learning new things and I am open to new opportunities. I am currently looking for a job as a Full Stack Developer.
            </motion.p>

          </div>

            <div className="flex flex-col gap-16 w-4/5 mx-auto">

                <div className="flex flex-row gap-x-10">
                    <h1 className="text-3xl font-bold text-center my-auto w-1/4">Languages</h1>
                    <div className="flex flex-row flex-wrap justify-start gap-6 w-3/4">
                        {lang_technologies.map((technology) => (
                            <div className='w-28 h-28' key={technology.name}>
                                <BallCanvas icon={technology.icon} />
                                <h4 className="text-center">{technology.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-row gap-x-10">
                    <h1 className="text-3xl font-bold text-center my-auto w-1/4">Frontend Tools</h1>
                    <div className="flex flex-row flex-wrap justify-start gap-6 w-3/4">
                        {front_end_technologies.map((technology) => (
                            <div className='w-28 h-28' key={technology.name}>
                                <BallCanvas icon={technology.icon} />
                                <h4 className="text-center">{technology.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

            <div className="flex flex-row gap-x-10">
                    <h1 className="text-3xl font-bold text-center my-auto w-1/4">Backend Tools</h1>
                    <div className="flex flex-row flex-wrap justify-start gap-6 w-3/4">
                        {backend_technologies.map((technology) => (
                            <div className='w-28 h-28' key={technology.name}>
                                <BallCanvas icon={technology.icon} />
                                <h4 className="text-center">{technology.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

            <div className="flex flex-row gap-x-10">
                    <h1 className="text-3xl font-bold text-center my-auto w-1/4">Databases</h1>
                    <div className="flex flex-row flex-wrap justify-start gap-6 w-3/4">
                        {Databases_tech.map((technology) => (
                            <div className='w-28 h-28' key={technology.name}>
                                <BallCanvas icon={technology.icon} />
                                <h4 className="text-center">{technology.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
         

        </div>
      </main>
    </>
  );
};

export default about;
