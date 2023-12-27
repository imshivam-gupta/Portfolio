import {motion} from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import Image from 'next/image'


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

const Badge = ({imgsrc}) =>{
  console.log(imgsrc)
  return <img src={imgsrc} alt='badge' className='h-8 inline'/>
}


const Skills = (props) => {

  return (
    <div className='mt-20 w-[80%] mx-auto '>
    
    <div className='overflow-hidden mb-6 sm:py-0'>
        <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-6xl dark:text-light `}
        variants={quote}
        initial='initial'
        animate='animate'
        >
            {
                "My Skills".split(' ').map((word, index) => 
                <motion.span key={word+'-'+index} className='inline-block mt-4 tracking-wide'
                variants={singleWord}
                >
                    {word}&nbsp;
                </motion.span>
                )
            }
        </motion.h1>
    </div>


  <div className="mt-4 mb-8">

    
    <motion.div
      className="text-secondary text-[17px] w-full leading-[30px] mt-auto mb-4"
      initial={{y:30}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
    >
      I possess a strong foundation in web development, with expertise spanning from frontend to backend technologies.  I&apos;ve explored the intricacies of  <Badge imgsrc='https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E' /> and <Badge imgsrc="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" /> including its advanced features, as I strive to enhance my abilities. Through practical projects and dedication, I&apos;ve become proficient in using frameworks like <Badge imgsrc="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" /> and <Badge imgsrc={"https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"} /> allowing me to create interactive and responsive web applications. I&apos;ve ventured into server-side development using <Badge imgsrc="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/> striving to improve both the frontend and backend of my projects. To manage state effectively, I&apos;ve embraced <Badge imgsrc="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" /> enabling me to maintain seamless user experiences. My database experience spans across various technologies including <Badge imgsrc="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />, <Badge imgsrc="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" /> and <Badge imgsrc="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase" /> as I&apos;ve sought to adapt to different project requirements. Additionally, I use with <Badge imgsrc={"https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"} /> to enhance the visual appeal and professionalism of my web projects.
    </motion.div>
    <motion.div
      className="text-secondary text-[17px] w-full leading-[30px] mt-auto mb-4"
      initial={{y:30}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
    >
      My blockchain journey has been a remarkable exploration of innovative technologies with a strong focus on <Badge imgsrc={"https://img.shields.io/badge/Ethereum-3C3C3D?style=for-the-badge&logo=Ethereum&logoColor=white"} /> and Polygon. I&apos;ve designed and implemented a blockchain-based loyalty reward program, introducing an ERC-20 token to incentivize user engagement and loyalty. To optimize efficiency, I&apos;ve integrated batch processing to reduce transaction costs, making the system more cost-effective. I&apos;ve also embraced the world of decentralized applications (DApps) and smart contracts, using <Badge imgsrc="https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white" />, <Badge imgsrc="https://img.shields.io/badge/Chainlink-375BD2?style=for-the-badge&logo=Chainlink&logoColor=white" />, Ethers.js,  and Hardhat to bring my blockchain projects to life. My experience extends to exploring digital assets like NFTs (Non-Fungible Tokens) and FTs (Fungible Tokens), opening doors to exciting possibilities in the blockchain realm.
    </motion.div>

    <motion.div
      className="text-secondary text-[17px] w-full leading-[30px] mt-auto mb-4"
      initial={{y:30}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
    >
      In addition to web development and blockchain, I&apos;ve also delved into the realm of app development. My skills extend to creating cross-platform applications using <Badge imgsrc={"https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"} /> and <Badge imgsrc={"https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37"} />. Leveraging these technologies, I&apos;ve successfully brought the majority of features from my web projects into the app world. My expertise in state management with Redux.js has allowed me to ensure a seamless transition of functionalities from web to mobile. These skills, combined with my knowledge of backend technologies like Express.js and Firebase, have equipped me to craft engaging and efficient mobile applications, further broadening my horizons in the world of software development.
    </motion.div>

    <motion.div
      className="text-secondary text-[17px] w-full leading-[30px] mt-auto"
      initial={{y:30}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:'spring'}}
    >
      My journey in technology extends to the exciting realms of machine learning and deep learning. Currently, I&apos;m engrossed in furthering my knowledge in these cutting-edge fields under the guidance of the renowned Andrew Ng. As I delve into the intricacies of algorithms and data analysis, I&apos;m eager to apply my expertise in data science libraries like <Badge imgsrc={"https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white"} />, <Badge imgsrc={"https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)"} />, <Badge imgsrc={"https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white"} />, and <Badge imgsrc={"https://img.shields.io/badge/Matplotlib-%23ffffff.svg?style=for-the-badge&logo=Matplotlib&logoColor=black"} /> to tackle real-world challenges. This ongoing journey fuels my passion for continuous learning and exploration in the dynamic field of ML and DL, where I aim to harness the power of data-driven insights for transformative solutions.
    </motion.div>



   

  </div>
  </div>
  )
}


export default Skills