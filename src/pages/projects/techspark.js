import Head from 'next/head'
import Image from 'next/image'
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

                    <iframe 
                        width="560" 
                        height="315" 
                        className='mt-6'
                        src="https://www.youtube.com/embed/6fgTAOIYMFU?autoplay=1&mute=1" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen>
                    </iframe>
          

                 
                </div>
                   
            </div>
            
               
            </div>
        </main>
    </>
  )
}

export default projects