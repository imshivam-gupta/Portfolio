import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon"

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)
    
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
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
    <div className='my-32 xs:my-28 sm:my-24 md:my-20'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Experience
        </h2>

        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' ref={ref}>
            <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"/>
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                    position='Teaching Assistant'
                    company='Coding Ninjas'
                    companyLink='https://www.codingninjas.com/'
                    time='March,2023-July-2023'
                    address='Remote, Delhi,IN'
                    work='Solved 700+ DSA Doubts in JAVA language on the platform of Coding Ninjas. Recieved average 4.8 star rating from students. '
                />
              
               
            </ul>
        </div>
    </div>
  )
}

export default Experience