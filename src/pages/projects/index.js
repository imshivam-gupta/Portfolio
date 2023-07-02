import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import project1 from '../../../public/proj2.png'
import project2 from '../../../public/proj3.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const projects = () => {

    const FramerImage = motion(Image)

    const FeaturedProject = ({type, title, summary, img, link, githubweb,githubapp,details_link}) => {
        return(
            <article className='relative rounded-br-2xl w-full flex items-center justify-between rounded-3xl border border-solid border-dark 
                bg-light shadow-2xl px-12 py-6 dark:bg-dark dark:border-light
                lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
            >
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
                <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                    <FramerImage src={img} alt={title} className='w-full h-auto'
                        whileHover={{scale:1.05}}
                        transition={{duration:0.2}}
                        priority
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' 
                    />
                </Link>

                <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ml-6'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                    </Link>
                    <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                    <div className='mt-2 flex items-center w-full'>
                        <div className='w-10 mr-6 flex flex-col'>
                            <Link href={githubweb} target='_blank' className='w-10 mr-4 '>{" "}<GithubIcon /></Link>
                            <h3 className='text-md my-1'>Web</h3>
                        </div>
                        <div className='w-10 mr-4 flex flex-col'>
                            <Link href={githubapp} target='_blank' className='w-10 mr-4 '>{" "}<GithubIcon /></Link>
                            <h3 className='text-md my-1'>App</h3>
                        </div>
                        
              
                        <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
                            dark:bg-light dark:text-dark sm:px-4 sm:text-base'
                        >Visit Website</Link>

                        <Link className='ml-auto mr-4' href={details_link}>Details</Link>
                    </div>
                </div>
            </article>
        )
    }

    const Project = ({title, type, img, link, github}) => {
        return (
            <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
                xs:p-4'
            >
                <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>
                <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                    <FramerImage src={img} alt={title} className='w-full h-auto' 
                        whileHover={{scale:1.05}}
                        transition={{duration:0.2}}
                    />
                </Link>

                <div className='w-full flex flex-col items-start justify-between mt-4'>
                    <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                    </Link>
                    <div className='w-full mt-2 flex items-center justify-between'>
                        <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>Visit</Link>
                        <Link href={github} target='_blank' className='w-8 md:w-6'><GithubIcon />{" "}</Link>
                    </div>
                </div>
            </article>
        )
    }

  return (
    <>
        <Head>
            <title>Shivam Gupta | Projects Page</title>
            <meta name='description' content=''/>
        </Head>
        <TransitionEffect />

        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'> 

        <div className={`w-full h-full inline-block  bg-light dark:bg-dark  px-32 xl:p-10 lg:p-16 mb:p-12 sm:p-8`}>
                <AnimatedText text='My Projects' className='mb-8 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject
                            title='Techspark Ecommerce Space'
                            img={project1}
                            summary='A feature-rich  Ecommerce space with a fully functional cart and payment gateway.
                            Implemented both website and cross-platform mobile application using React, Next.js. Backend was
                            built using Node.js, Express.js. Database used was MongoDB. 
                            State Management was done using Redux and Context API depending on the use case. Styling was done using Tailwind CSS'
                            link='https://techspark.vercel.app/'
                            githubweb='https://github.com/imshivam-gupta/Techspark-Website'
                            githubapp='https://github.com/imshivam-gupta/React-Native-Techspark'
                            type='Featured Project'
                            details_link='projects/techspark'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='Seedsnitch'
                            img={project2}
                            link='https://seedsnitch.in/'
                            github='https://github.com/imshivam-gupta/Final-Project'
                            type='Freelance Project'
                            />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <Project
                            title='Techspark Ecommerce Space'
                            img={project1}
                            link='https://techspark.vercel.app/'
                            github='https://github.com/imshivam-gupta/Techspark-Website'
                            type='Featured Project'
                        />
                    </div>
                  
                </div>
            </div>
        </main>
    </>
  )
}

export default projects