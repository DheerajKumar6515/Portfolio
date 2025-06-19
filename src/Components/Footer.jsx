import React from 'react'

function Footer({dark}) {
  return (
    <div className={`  pb-3 ${dark ? 'bg-black':'bg-white'}`}>

       <div className='border-b border-gray-400 w-[90%] mx-auto'>
         <a href='#home'> <h2 className={`${dark ? 'text-white/70':'text-black'} pt-12 text-center text-2xl font-semibold sm:text-5xl lg:text-5xl xl:text-3xl`}>dk<span className='text-red-500'>.</span> </h2> </a>
          <p className={`${dark ? 'text-neutral-500': 'text-gray-600'} text-center text-xs mb-4 sm:text-base lg:text-lg xl:text-xs xl:mb-7`}> <i className="ri-mail-send-line"></i> kumardheeraj6515@gmail.com</p>
       </div>

       <div className='flex gap-3 w-[90%] mx-auto justify-between'>
          <div className='w-42 mt-2 xl:w-64 xl:mt-3 xl:mb-4'>
            <p className={`text-xs ${dark ? 'text-neutral-500': 'text-gray-600'} sm:text-base lg:text-lg xl:text-xs`}>&copy;2025 Dheeraj Kumar. All rights reserved</p>
          </div>

          <div className='mt-2 xl:flex xl:gap-5 xl:mt-3 xl:mb-4'>
            <a href='#'> <p className={`text-xs ${dark ? 'text-neutral-500': 'text-gray-600'} cursor-pointer sm:text-base lg:text-lg xl:text-xs`}> <i className="ri-github-fill"></i>  GitHub</p></a>
            <a href='#'> <p className={`text-xs ${dark ? 'text-neutral-500': 'text-gray-600'} cursor-pointer sm:text-base lg:text-lg xl:text-xs`}> <i className="ri-linkedin-box-fill"></i>  LinkedIn</p></a>
            <a href='#'> <p className={`text-xs ${dark ? 'text-neutral-500': 'text-gray-600'} cursor-pointer sm:text-base lg:text-lg xl:text-xs`}> <i className="ri-twitter-x-line"></i>  Twitter</p></a>
          </div>
       </div>

    </div>
  )
}

export default Footer
