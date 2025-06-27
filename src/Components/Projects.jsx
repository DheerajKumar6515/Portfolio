import React from 'react'
import { motion } from 'motion/react'


function Projects({dark}) {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}
     id='projects' className={`${dark ? 'bg-black':'bg-white'} w-full h-auto px-2 xl:h-[65vh] ` }>

       <div className='py-3 text-center'>
          <motion.p initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.3}}
           className={`font-serif text-xs py-2 ${dark ? 'text-white/60':'text-gray-600'}  sm:text-base sm:mb-1 lg:text-xl lg:pt-8 xl:text-base xl:p-0`}>My portfolio</motion.p>

          <motion.h1 initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{duration:0.5, delay:0.5}}
           className={`${dark ? 'text-white':'text-black'} text-lg font-serif tracking-wide sm:text-3xl sm:mb-3 lg:text-4xl xl:text-2xl` }>My latest work</motion.h1>

          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5, delay:0.7}}
           className={`${dark ? 'text-white/60':'text-gray-600'} text-[13px] py-1 px-3.5 font-sans tracking-wide mb-1 sm:text-xl sm:px-24 sm:mb-5 lg:text-2xl xl:text-[14px] xl:px-72 xl:-mt-3.5 2xl:mt-0 2xl:px-[26rem] 2xl:text-xs` }>Explore my projects showcasing practical skills in building dynamic, responsive web applications with modern technologies and frameworks.</motion.p>
       </div>

       
       <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6, delay:0.9}}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:w-[48rem] sm:m-auto lg:w-[55rem] xl:w-[80%] 2xl:w-[63%] '>

         <motion.div whileHover={{scale:1.05}} transition={{duration:0.3}}
          className='w-70 relative group sm:w-88 h-[15rem] sm:mb-3 sm:h-[22rem] lg:w-[26rem] lg:h-[25rem] mx-auto rounded-md overflow-hidden bg-[url(/grocery.png)] bg-center bg-cover object-cover lg:mb-2 xl:w-56 xl:h-56'>
         
                 <div className='bg-white w-62 mx-auto rounded-md px-3 py-3 flex items-center justify-between mt-40 sm:mt-64 sm:w-78 sm:py-3 lg:mt-76 lg:w-92 lg:py-3 lg:px-4 xl:mt-40 xl:py-1.5 xl:px-2 xl:w-52 group-hover:-translate-y-1 transition duration-500'>
                <div>
                <h3 className='text-black capitalize text-xs font-medium mb-1 sm:text-xl sm:mb-0 lg:text-xl xl:text-xs'>frontend project</h3>
                <p className='text-black/70 text-xs sm:text-lg lg:text-lg xl:text-[11px]'>web design</p>
                </div>
                <p className='border border-black rounded-full w-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12  flex items-center justify-center font-semibold cursor-pointer shadow-md shadow-black xl:w-6 xl:h-6 group-hover:bg-lime-300 transition'>
                  <a href='https://github.com/DheerajKumar6515/Grocery' className='lg:text-2xl xl:text-xs'> <i className="ri-arrow-right-up-line"></i> </a></p>
                </div> 

         </motion.div>

         
         <motion.div whileHover={{scale:1.05}} transition={{duration:0.3}}
          className='w-70 group sm:w-88 h-[15rem] sm:mb-3 sm:h-[22rem] lg:w-[26rem] lg:h-[25rem] mx-auto rounded-md overflow-hidden bg-[url(/ecommerce.png)] bg-center bg-cover object-cover lg:mb-2 xl:w-56 xl:h-56'>
         
                 <div className='bg-white w-62 mx-auto rounded-md px-3 py-3 flex items-center justify-between mt-40 sm:mt-64 sm:w-78 sm:py-3 lg:mt-76 lg:w-92 lg:py-3 lg:px-4 xl:mt-40 xl:py-1.5 xl:px-2 xl:w-52 group-hover:-translate-y-1 transition duration-500'>
                <div>
                <h3 className='text-black capitalize text-xs font-medium mb-1 sm:text-xl sm:mb-0 lg:text-xl xl:text-xs'>fullstack project</h3>
                <p className='text-black/70 text-xs sm:text-lg lg:text-lg xl:text-[11px]'>web design</p>
                </div>
                <p className='border border-black rounded-full w-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12  flex items-center justify-center font-semibold cursor-pointer shadow-md shadow-black xl:w-6 xl:h-6 group-hover:bg-lime-300 transition'>
                  <a href='https://github.com/DheerajKumar6515/Ecommerce' className='lg:text-2xl xl:text-xs'> <i className="ri-arrow-right-up-line"></i> </a></p>
                </div> 

         </motion.div>

        
         <motion.div whileHover={{scale:1.05}} transition={{duration:0.3}}
          className='w-70 group sm:w-88 h-[15rem] sm:mb-3 sm:h-[22rem] lg:w-[26rem] lg:h-[25rem] mx-auto rounded-md overflow-hidden bg-[url(/blog.png)] bg-center bg-cover object-cover lg:mb-2 xl:w-56 xl:h-56'>
         
              <div className='bg-white w-62 mx-auto rounded-md px-3 py-3 flex items-center justify-between mt-40 sm:mt-64 sm:w-78 sm:py-3 lg:mt-76 lg:w-92 lg:py-3 lg:px-4 xl:mt-40 xl:py-1.5 xl:px-2 xl:w-52 group-hover:-translate-y-1 transition duration-500'>
        <div>
        <h3 className='text-black capitalize text-xs font-medium mb-1 sm:text-xl sm:mb-0 lg:text-xl xl:text-xs'>fullstack project</h3>
        <p className='text-black/70 text-xs sm:text-lg lg:text-lg xl:text-[11px]'>web design</p>
        </div>
        <p className='border border-black rounded-full w-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12  flex items-center justify-center font-semibold cursor-pointer shadow-md shadow-black xl:w-6 xl:h-6 group-hover:bg-lime-300 transition'>
          <a href='https://github.com/DheerajKumar6515/Blog-app' className='lg:text-2xl xl:text-xs'> <i className="ri-arrow-right-up-line"></i> </a></p>
        </div> 

         </motion.div>
         
        <motion.div whileHover={{scale:1.05}} transition={{duration:0.3}}
         className='w-70 group sm:w-88 h-[15rem] sm:mb-3 sm:h-[22rem] lg:w-[26rem] lg:h-[25rem] mx-auto rounded-md overflow-hidden bg-[url(/space.png)] bg-center bg-cover object-cover lg:mb-2 xl:w-56 xl:h-56'>
         
              <div className='bg-white w-62 mx-auto rounded-md px-3 py-3 flex items-center justify-between mt-40 sm:mt-64 sm:w-78 sm:py-3 lg:mt-76 lg:w-92 lg:py-3 lg:px-4 xl:mt-40 xl:py-1.5 xl:px-2 xl:w-52 group-hover:-translate-y-1 transition duration-500'>
        <div>
        <h3 className='text-black capitalize text-xs font-medium mb-1 sm:text-xl sm:mb-0 lg:text-xl xl:text-xs'>frontend project</h3>
        <p className='text-black/70 text-xs sm:text-lg lg:text-lg xl:text-[11px]'>web design</p>
        </div>
        <p className='border border-black rounded-full w-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12  flex items-center justify-center font-semibold cursor-pointer shadow-md shadow-black xl:w-6 xl:h-6 group-hover:bg-lime-300 transition'>
          <a href='#' className='lg:text-2xl xl:text-xs'> <i className="ri-arrow-right-up-line"></i> </a></p>
              </div> 

        </motion.div>


       </motion.div>

       <motion.a initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5, delay:1.1}}
        href='#'> <div 
         className={`border cursor-pointer ${dark ? 'border-2 border-neutral-600 text-white hover:bg-fuchsia-900/40 hover:text-white duration-500':'border-gray-400 text-gray-500 hover:bg-black hover:text-white'}  text-xs text-center w-32  py-2 pb-3 rounded-full mx-auto mt-5 sm:text-xl sm:px-3 sm:w-42 sm:py-3 sm:mt-5 lg:w-52 lg:py-4 lg:mt-8 xl:py-2.5 xl:text-xs xl:w-32`}> Show more <i className="ri-arrow-right-line"></i> </div></motion.a>

   
    </motion.div>
  )
}

export default Projects
