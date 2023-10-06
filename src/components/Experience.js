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

const Details = ({position, company, companyLink, time, address, work}) => {
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
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink} 
                    target='_blank'
                    className="text-primary dark:text-primaryDark capitalize my-2"
                    >@{company}</a></h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm my-2">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm my-2">
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
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
                "My Experience".split(' ').map((word, index) => 
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
                    position='Teaching Assistant'
                    company='Coding Ninjas'
                    companyLink='https://www.codingninjas.com/'
                    time='April,2023-July-2023'
                    address='Remote, Delhi,IN'
                    work='Solved 700+ DSA Doubts in JAVA language on the platform of Coding Ninjas. Recieved average 4.8 star rating from students. '
                />
              
               
            </ul>
        </div>
    </div>
  )
}

export default Experience