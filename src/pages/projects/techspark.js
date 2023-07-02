import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../../public/techspark-cover.png'

import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


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

const projects = () => {

    const FramerImage = motion(Image)

    // const FeaturedProject = ({type, title, summary, img, link, githubweb,githubapp,details_link}) => {
    //     return(
    //         <article className='relative rounded-br-2xl w-full flex items-center justify-between rounded-3xl border border-solid border-dark 
    //             bg-light shadow-2xl px-12 py-6 dark:bg-dark dark:border-light
    //             lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
    //         >
    //             <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
                

    //             <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ml-6'>
    //                 <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
    //                 <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
    //                     <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
    //                 </Link>
    //                 <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
    //                 <div className='mt-2 flex items-center w-full'>
    //                     <div className='w-10 mr-6 flex flex-col'>
    //                         <Link href={githubweb} target='_blank' className='w-10 mr-4 '>{" "}<GithubIcon /></Link>
    //                         <h3 className='text-md my-1'>Web</h3>
    //                     </div>
    //                     <div className='w-10 mr-4 flex flex-col'>
    //                         <Link href={githubapp} target='_blank' className='w-10 mr-4 '>{" "}<GithubIcon /></Link>
    //                         <h3 className='text-md my-1'>App</h3>
    //                     </div>
                        
              
    //                     <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
    //                         dark:bg-light dark:text-dark sm:px-4 sm:text-base'
    //                     >Visit Website</Link>

    //                     <Link className='ml-auto mr-4' href={details_link}>Details</Link>
    //                 </div>
    //             </div>
    //         </article>
    //     )
    // }

    // const Project = ({title, type, img, link, github}) => {
    //     return (
    //         <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    //             xs:p-4'
    //         >
    //             <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
    //             <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
    //                 <FramerImage src={img} alt={title} className='w-full h-auto' 
    //                     whileHover={{scale:1.05}}
    //                     transition={{duration:0.2}}
    //                 />
    //             </Link>

    //             <div className='w-full flex flex-col items-start justify-between mt-4'>
    //                 <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
    //                 <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
    //                     <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
    //                 </Link>
    //                 <div className='w-full mt-2 flex items-center justify-between'>
    //                     <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>Visit</Link>
    //                     <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon />{" "}</Link>
    //                 </div>
    //             </div>
    //         </article>
    //     )
    // }

  return (
    <>
        <Head>
            <title>Shivam Gupta | Projects Page</title>
            <meta name='description' content=''/>
        </Head>
        <TransitionEffect />

        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'> 

        <div className={`w-full h-full inline-block  bg-light dark:bg-dark px-20 xl:p-10 lg:p-16 mb:p-12 sm:p-8 mt-12`}>
    
            <div className='flex flex-row w-full gap-x-10'>
                <div className='1/4'>
                    <FramerImage src={project1} alt={'Techspark'} className='w-full h-full object-cover mx-auto rounded-lg'
                        whileHover={{scale:1.05}}
                        transition={{duration:0.2}}
                        priority
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' 
                    />
                </div>
                <div className='w-2/4'>


                <div className='w-full mx-auto flex flex-col items-center justify-center text-center overflow-hidden sm:py-0'>
                    <motion.h1 
                    className={`inline-block w-full text-dark font-bold capitalize text-6xl dark:text-light`}
                    variants={quote}
                    initial='initial'
                    animate='animate'
                    >
                        {
                            "Techspark".split(' ').map((word, index) => 
                            <motion.span key={word+'-'+index} className='inline-block tracking-wide'
                            variants={singleWord}
                            >
                                {word}&nbsp;
                            </motion.span>
                            )
                        }
                    </motion.h1>

                    <motion.p className='mt-6 text-lg text-left px-2'>
                        This project is a ecommerce project. It is a full stack project with a backend in Express and Next and frontend in Next.js for website and React Native for android and ios. 
                        It has a fully functional payment gateway (implemented with Stripe) and a cart system. 
                        It also has a admin panel for the admin to manage the products and orders.
                        Code for whole project was fully refactored and aimed towards reusability and scalability.
                        Database used is MongoDB and was schema was designed for scalability and performance.
                        Many paramters in backend were kept for need of future scalability like recommendation engine.
                    </motion.p>
                </div>

                


                    
                </div>

            </div>

            <div className='flex flex-row w-full gap-x-6'>


                <div className='flex flex-col w-full gap-x-10 mt-12 w-3/6'>
                    
                    <motion.h1 
                        className={`inline-block w-full text-dark font-bold capitalize text-4xl mb-2 dark:text-light`}
                        variants={quote}
                        initial='initial'
                        animate='animate'
                        >
                            {
                                "Key Features".split(' ').map((word, index) => 
                                <motion.span key={word+'-'+index} className='inline-block tracking-wide'
                                variants={singleWord}
                                >
                                    {word}&nbsp;
                                </motion.span>
                                )
                            }
                    </motion.h1>

                    <motion.ul>
                        <motion.li className='text-lg text-left px-2 mt-1 list-disc'>
                            <motion.span className='font-semibold'>Fully Functional Payment Gateway</motion.span> (implemented with Stripe)
                        </motion.li>
                        <motion.li className='text-lg text-left px-2 mt-1 list-disc'>
                            <motion.span className='font-semibold'>Cart System</motion.span> (implemented with Redux backed by MongoDB and Express) 
                        </motion.li>
                        <motion.li className='text-lg text-left px-2 mt-1 list-disc'>
                            <motion.span className='font-semibold'>Admin Panel</motion.span> (implemented with React and Express)
                        </motion.li>
                        <motion.li className='text-lg text-left px-2 mt-1 list-disc'>
                            <motion.span className='font-semibold'>Database</motion.span> (MongoDB)
                        </motion.li>
                        <motion.li className='text-lg text-left px-2 mt-1 list-disc'>
                            <motion.span className='font-semibold'>Implemented Native Application for users using React Native</motion.span> 
                        </motion.li>
                    </motion.ul>
                </div>
                <div className='flex flex-col w-full gap-x-10 mt-12 w-3/6'>
                    
                    <motion.h1 
                        className={`inline-block w-full text-dark text-center font-bold capitalize text-4xl mb-2 dark:text-light`}
                        variants={quote}
                        initial='initial'
                        animate='animate'
                        >
                            {
                                "App Demo".split(' ').map((word, index) => 
                                <motion.span key={word+'-'+index} className='inline-block tracking-wide'
                                variants={singleWord}
                                >
                                    {word}&nbsp;
                                </motion.span>
                                )
                            }
                    </motion.h1>

                 
                </div>
                   
            </div>
          

                
               
            </div>
        </main>
    </>
  )
}

export default projects