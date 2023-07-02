import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon"

const Details = ({type, time, place, info}) => {
    const ref = useRef(null)
    
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:'spring'}}
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
    <div className='my-40 xs:my-28 sm:my-24 md:my-20'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Education
        </h2>

        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full' ref={ref}>
            <motion.div style={{scaleY: scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"/>
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