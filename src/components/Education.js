import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon"

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


const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    
    return (
        <li ref={ref} className="my-8  first:mt-0 last:mb-0 w-[60%]  flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
            className="ml-16"
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg my-1">
                    {type}
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm my-1">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm my-2 leading-2">
                    {info}
                </p>
            </motion.div>
        </li>
    )
}

const Education = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['start end', 'center start']
    })

  return (
    <div className='my-32 xs:my-28 sm:my-24 md:my-20 w-[80%] mx-auto'>
        <div className='overflow-hidden mb-10 sm:py-0'>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl dark:text-light `}
        variants={quote}
        initial='initial'
        animate='animate'
        >
            {
                "My Education".split(' ').map((word, index) => 
                <motion.span key={word+'-'+index} className='inline-block mt-4 tracking-wide'
                variants={singleWord}
                >
                    {word}&nbsp;
                </motion.span>
                )
            }
        </motion.h1>
    </div>

        <div className='relative lg:w-[90%] md:w-full' ref={ref}>
            <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full maindarkbkg origin-top dark:bg-light md:w-[2px]  xs:left-[20px]"/>
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                    type='Bachelor Of Science In Computer Science'
                    time='2021-2025'
                    place='Netaji Subhas University Of Technology (NSUT), Delhi,IN'
                    info='Relevant courses included Data Structures, Design and Analysis of Algorithms, Operating Systems, Database Management Systems, Web Technology, Data Communincation '
                />

            </ul>
        </div>
    </div>
  )
}

export default Education