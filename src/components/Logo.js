import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
        <MotionLink href='/'
        className='w-16 h-16 bg-dark text-light flex items-center justify-center 
        rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light'
        whileHover={{
            backgroundColor: ["#121212", "#888888", "#888888", "#888888","#121212"],
            transition: {duration:1, repeat: Infinity}
        }}
        >
         SG
        </MotionLink>
        
    </div>
  )
}

export default Logo