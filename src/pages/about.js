import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Image from "next/image";


const quote = {
  initial: {
      opacity:1
  },
  animate:{
      opacity:1,
      transition:{
          delay:0.5,
          staggerChildren:0.08
      }
  }
}

const singleWord = {
  initial: {
      opacity:0,
      y:50
  },
  animate:{
      opacity:1,
      y:0,
      transition:{
          duration:1
      }
  }
}



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
          className={`w-full h-full inline-block z-0 bg-light p-2 dark:bg-lds  xl:px-10 xl:py-24 lg:p-16 mb:p-12 sm:p-8`}
        >

          <div className="mt-10 mb-8 w-4/5 mx-auto flex flex-row lg:flex-col">


            <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
            <motion.h1 className={`inline-block w-full  text-dark font-bold capitalize text-6xl dark:text-light`}
              variants={quote}
              initial='initial'
              animate='animate'
            >
            {
                "Welcome".split(' ').map((word, index) => 
                <motion.span key={word+'-'+index} className='inline-block mt-4 tracking-wide'
                variants={singleWord}
                >
                    {word}&nbsp;
                </motion.span>
                )
            }
            <span class="wave">👋</span>
        </motion.h1>
    </div>
  
            

            <motion.p
              // variants={fadeIn("", "", 0.1, 1)}
              className=" mr-auto w-full sm:mt-6 lg:mt-0 leading-[34px] mb-auto font-mart font-normal text-xl"
              variants={quote}
              initial='initial'
              animate='animate'
            >
              Hi there,  I&apos;m Shivam Gupta, a junior year student at NSUT. I&apos;m passionate about problem-solving and creating innovative solutions. As a Full Stack Developer, I&apos;ve crafted both web and mobile applications. My expertise extends to Blockchain Technology, where I&apos;ve authored Smart Contracts and developed DApps. I possess a knack for rapid learning and thrive on exploring emerging technologies. I&apos;ve also delved into the world of Machine Learning. Beyond coding, I indulge in Netflix binges, enjoy gaming.
            </motion.p>
          </div>

          

          {/* <div className="flex flex-row justify-center items-center w-full gap-x-10 mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div> */}

          <Skills />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
};

export default about;
