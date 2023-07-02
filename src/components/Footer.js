import React from 'react'
import Layout from './Layout'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>

            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
                <motion.span className=""
                 
                  animate={{
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}

                >👋🏻</motion.span>&nbsp; <h2 className='text-xl'>Shivam Gupta</h2>
            </div>
            
   
              <Link href='https://www.linkedin.com/in/shivamgupta2003'  className='flex flex-row' target={"_blank"}>Follow Me on LinkedIn </Link>
                       
        </Layout>
    </footer>
  )
}

export default Footer