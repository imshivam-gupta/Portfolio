import {motion} from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import AnimatedText from './AnimatedText'

const Skill = ({name, x, y}) => {
  return(
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
    dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
    xs:font-bold'
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x, y:y, transition: {duration: 1.5}}}
    viewport={{once: true}}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <div className='mt-20'>
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
  </div>
  )
}


export default Skills