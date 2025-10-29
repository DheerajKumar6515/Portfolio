import React from 'react'
import { motion } from "motion/react"

function Header({dark}) {
  return (
    <>
     <div className={`${dark ? 'hidden': 'block'} absolute w-52 left-16 translate-y-[-7rem] lg:left-[33%] md:translate-y-[-10rem] md:w-[35rem] h-72 bg-linear-30 from-yellow-100 to-purple-300 rounded-full blur-3xl`}>      
     </div>

    <div id='home' className={`w-full h-screen z-50 flex items-center justify-center ${dark ? 'bg-black':'bg-white'} `}>

        <div className='w-full h-auto sm:h-auto flex flex-col items-center justify-center text-center lg:h-[45rem]'>

            <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:0.8, type:'spring', stiffness:100}}
             className='w-32 h-32 sm:w-72 sm:h-72 lg:w-72 lg:h-72 xl:w-40 xl:h-40 2xl:w-42 2xl:h-42 rounded-full overflow-hidden mb-3 '>
              <img className='w-full bg-cover bg-center object-cover' src="/myImage.jpeg" alt="" />
            </motion.div>

            <motion.p
             initial={{y:-20, opacity:0}}
             whileInView={{y:0, opacity:1}}
              transition={{duration:0.6, delay:0.3}}
             className={`${dark? 'text-white':'text-black'} text-base sm:text-2xl lg:text-3xl font-sans font-light mb-3 lg:mb-3 xl:text-base 2xl:text-lg 2xl:mb-1.5 xl:mb-1`} style={{fontFamily:'Ovo'}}>Hi! I'm Dheeraj Kumar <span className='text-lg sm:text-4xl lg:text-5xl xl:text-2xl 2xl:text-2xl'>👋</span></motion.p>

            <motion.h1
             initial={{y:-30, opacity:0}}
             whileInView={{y:0, opacity:1}}
              transition={{duration:0.8, delay:0.5}}
             className={`${dark? 'text-white':'text-black'} text-4xl px-1 sm:text-6xl sm:px-20 lg:text-7xl lg:px-10 lg:leading-20 sm:leading-16 antialiased font-serif mb-5 2xl:w-[50rem] xl:text-6xl xl:w-[50rem] xl:leading-16 xl:mb-0 2xl:leading-16 2xl:mb-0 2xl:text-[4rem]` } style={{fontFamily:'Ovo'}}>fullstack web developer based in India.</motion.h1>

             <div className='flex flex-col sm:flex-row gap-4 sm:mt-3 2xl:mt-6'>

             <motion.a
              initial={{y:30, opacity:0}}
              whileInView={{y:0, opacity:1}}
               transition={{duration:0.6, delay:1}}
              href='#contact'><button className={`w-36 px-4 py-3 text-xs  sm:w-52 sm:text-xl sm:py-4 rounded-full ${dark ? 'border-fuchsia-900 text-white border-2 hover:bg-fuchsia-900/40 hover:text-white':'bg-black text-white hover:bg-black/70'}  lg:text-2xl lg:w-62 lg:py-5 xl:text-base xl:w-48 xl:py-3 cursor-pointer 2xl:text-xs 2xl:w-44 2xl:py-4 `}> connect with me <i className="ri-arrow-right-line"></i></button></motion.a>

             <motion.a
              initial={{y:30, opacity:0}}
              whileInView={{y:0, opacity:1}}
               transition={{duration:0.6, delay:1}}
              href='/myResume.pdf' download><p className={`w-36 px-6 py-3  sm:text-xl sm:w-52 sm:py-4 xl:text-base xl:py-3  xl:w-48 2xl:text-xs 2xl:w-44 2xl:py-4 cursor-pointer lg:w-32 text-xs rounded-full ${dark ? 'bg-white text-black hover:bg-neutral-600 hover:text-white': 'border text-gray-600 hover:bg-gray-300'}  lg:text-2xl lg:w-62 `}>my resume <i className="ri-download-2-line"></i></p></motion.a>

             </div>
            
        </div>
    </div>
    </>
  )
}

export default Header
