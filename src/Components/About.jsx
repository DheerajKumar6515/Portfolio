import React from 'react'
import { motion } from "motion/react"

function About({dark}) {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}
     id='about' className={`${dark ? 'bg-black':'bg-white'} w-full h-auto sm:h-screen md:h-auto  lg:h-screen xl:h-[80vh]` }>

        <motion.p initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.3}}
         className={`text-center sm:text-2xl sm:py-5 capitalize ${dark ? 'text-neutral-500':'text-black/70'}  mb-2 xl:text-lg xl:pb-0`}style={{fontFamily:'Ovo'}}>introduction</motion.p>

        <motion.h1 initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}}
         className={`${dark ? 'text-white':'text-black'} text-2xl sm:text-4xl text-center capitalize font-serif tracking-wide md:text-5xl xl:text-3xl`} style={{fontFamily:'Ovo'}}>about me</motion.h1>
          
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8}}
         className='mt-3 grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 xl:w-[80%] xl:m-auto xl:mt-7'>

            <motion.div initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} transition={{duration:0.6}}
             className='w-52 mx-auto rounded h-58  overflow-hidden sm:mt-2 sm:w-84 sm:h-96 sm:rounded-lg lg:w-[26rem] lg:h-[26rem] lg:rounded-full lg:mt-4 xl:rounded-md xl:max-w-56 xl:h-[21rem] xl:mt-[38px]'>
                <img className='w-full bg-cover object-cover bg-center' src="/myImage.jpeg" alt="" />
            </motion.div>

            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6, delay:0.8}}
             className='w-full px-3 mt-3 sm:mt-6 xl:w-full xl:mt-6 xl:-ml-28 '>
                <p style={{fontFamily:'Ovo'}} className={` text-[14px] text-center ${dark ? 'text-neutral-400':'text-black/80'} mb-4 sm:text-[29px] sm:px-8 sm:leading-9 lg:text-[34px] lg:px-12 lg:leading-11 xl:text-base xl:leading-5 xl:tracking-wide xl:py-3 xl:px-0 xl:text-start xl:mb-0 2xl:tracking-wider 2xl:leading-6 ` }>As a motivated and enthusiastic fresher Full Stack Developer, I am passionate about building web applications and learning the latest technologies to create seamless user experiences. With a strong foundation in both front-end and back-end development, I have hands-on experience in designing, developing, and maintaining interactive websites and applications. </p>
              
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.8, delay:1}}
                 className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-2 sm:mt-6 sm:px-3 lg:mt-10 lg:px-5 xl:px-0 xl:mt-0'>

                    <motion.div  whileHover={{scale:1.05}} 
                     className={` border-[0.5px] rounded px-2 ${dark ? 'border-fuchsia-900 hover:shadow-[3px_3px_2px_white] hover:bg-fuchsia-900/50 ':'  hover:shadow-[3px_3px_2px_black] border-gray-500 hover:bg-rose-50'}  hover:-translate-y-1 duration-500`}>
                        <p className={`text-lg sm:text-4xl ${dark ? 'text-white/80':'text-black/70'} lg:text-4xl xl:text-base `}> <i className="ri-code-s-slash-line"></i> </p>
                        <p className={`capitalize ${dark ? 'text-white/80':'text-black/80'} mb-1 sm:text-3xl lg:text-4xl lg:mb-3 xl:text-base xl:mb-1`}>technical skills</p>
                        <p className={`${dark ? 'text-white/80':'text-black/70'} text-xs mb-2 sm:text-xl lg:text-2xl lg:tracking-wide xl:text-[12px]`} >HTML, CSS, JavaScript, React Js, Next Js,Tailwind Css,Java,php,c++,python,c#, Node.js, Express.js,MongoDB,MySQL</p>
                    </motion.div>

                   <motion.div whileHover={{scale:1.05}}
                    className={` border   rounded px-2 ${dark ? 'border-fuchsia-900 hover:shadow-[3px_3px_2px_white] hover:bg-fuchsia-900/50 ':'hover:shadow-[3px_3px_2px_black] border-gray-500 hover:bg-rose-50'} hover:-translate-y-1 duration-500 `}>
                        <p className={`text-lg ${dark ? 'text-white/80':'text-black/70'} sm:text-4xl lg:text-4xl xl:text-base`}> <i className="ri-graduation-cap-line"></i> </p>
                        <p className={`capitalize ${dark ? 'text-white/80':'text-black/80'} mb-1 sm:text-3xl lg:text-4xl lg:mb-3 xl:text-base xl:mb-1`}>education</p>
                        <p className={`${dark ? 'text-white/80':'text-black/70'} text-[14px] mb-2 sm:text-xl lg:text-2xl lg:tracking-wide xl:text-[12px]`}>Master Diploma in computer science and graduation in BA</p>
                    </motion.div>

                   <motion.div whileHover={{scale:1.05}}
                    className={`border   rounded px-2 ${dark ? 'border-fuchsia-900 hover:shadow-[3px_3px_2px_white] hover:bg-fuchsia-900/50 ':'hover:shadow-[3px_3px_2px_black] border-gray-500 hover:bg-rose-50'} hover:-translate-y-1 duration-500`}>
                        <p className={`text-lg ${dark ? 'text-white/80':'text-black/70'} sm:text-4xl lg:text-4xl xl:text-base`}> <i className="ri-briefcase-2-line"></i> </p>
                        <p className={`capitalize ${dark ? 'text-white/80':'text-black/80'} mb-1 sm:text-3xl lg:text-4xl lg:mb- xl:text-base xl:mb-1`}>projects</p>
                        <p className={`${dark ? 'text-white/80':'text-black/70'} text-[14px] mb-2 sm:text-xl lg:text-2xl lg:tracking-wide xl:text-[12px]`}>Built more than 5 projects</p>
                    </motion.div>

                </motion.div>

                <div className='w-full mb-2 sm:mb-5 overflow-hidden'>
                    <motion.p initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{delay:1.3, duration:0.5}}
                     style={{fontFamily:'Ovo'}} className={`text-[14px] ${dark ? 'text-white/80':'text-black/80'} sm:text-xl sm:px-3 lg:px-4 lg:mt-4 lg:text-2xl xl:text-xs xl:mt-0 xl:px-0`}>Tools i use</motion.p>

                    <motion.div initial={{opacity:0}} whileInView={{ opacity:1}} transition={{delay:1.5, duration:0.6}}
                    className='flex items-center justify-items-start gap-6 sm:gap-16 sm:px-3 mt-2 lg:mt-8 lg:gap-24 xl:-ml-72 xl:mt-0 xl:gap-8 xl:py-2 xl:px-4 2xl:ml-0 2xl:pl-0'>

                        <motion.div whileHover={{scale:1.1}}
                         className='border rounded border-gray-400 px-1 py-1 sm:mt-4 xl:mt-0 xl:ml-[17rem] 2xl:-ml-0 hover:-translate-y-1 duration-500'> <img className='w-9 sm:w-16 lg:w-20 xl:w-9 ' src="./src/assets/vscode.png" alt="" /> </motion.div>
                        <motion.div whileHover={{scale:1.1}}
                         className='border rounded border-gray-400 px-1 py-1 hover:-translate-y-1 duration-500'> <img className='w-9 sm:w-16 lg:w-20 xl:w-9 ' src="./src/assets/firebase.png" alt="" /> </motion.div>
                        <motion.div whileHover={{scale:1.1}}
                         className='border rounded border-gray-400 px-1 py-1 hover:-translate-y-1 duration-500'> <img className='w-9 sm:w-16 lg:w-20 xl:w-9 ' src="./src/assets/mongodb.png" alt="" /> </motion.div>
                        <motion.div whileHover={{scale:1.1}}
                         className='border rounded border-gray-400 px-1 py-1 hover:-translate-y-1 duration-500'> <img className='w-9 sm:w-16 lg:w-20 xl:w-9 ' src="./src/assets/git.png" alt="" /> </motion.div>
                    </motion.div>
                </div>

            </motion.div>

        </motion.div>

    </motion.div>
  )
}

export default About
