import React,{useEffect, useRef, useState} from 'react'
import 'remixicon/fonts/remixicon.css'

function Navbar({dark,setdark}) {
   const [isScroll,setIsScroll]=useState(false)
    
   let openRef=useRef()
  
   const handleOpen=()=>{
      openRef.current.style.transform = 'translatex(-16rem)'     
   }

   const handleclose=()=>{
      openRef.current.style.transform = 'translatex(16rem)'
   }

   useEffect(()=>{
      window.addEventListener('scroll',()=>{
         if(scrollY > 50){
             setIsScroll(true)
         }else{
            setIsScroll(false)
         }
      })
   },[])

  return (
    <div className={`w-full py-4 z-50 fixed  flex items-center justify-between px-5   lg:px-8 xl:px-[8%] xl:py-1  2xl:px-[10rem]  ${isScroll ? 'bg-white/5 bg-opacity-50 backdrop-blur-xl shadow-sm':''}`}>

       <div>
         <a href='#home'> <h3 className={`${dark? 'text-white':'text-black'} text-4xl sm:text-5xl xl:text-3xl 2xl:text-3xl font-sans font-medium`}>dk</h3> </a>
       </div>

       <div className={`${isScroll ? 'bg-white/5':''} hidden sm:hidden lg:hidden xl:block rounded-full px-8 py-2 mt-2 xl:ml-18 2xl:ml-18  ${dark ? 'border border-white/50 text-white': 'bg-white border-gray-400'}  `}>
         <ul className={`flex gap-8 `}>
            <li><a href='#home' className='font-serif text-xs' style={{fontFamily:'Ovo'}}>Home</a></li>
            <li><a href='#about' className='font-serif text-xs ' style={{fontFamily:'Ovo'}}>About</a></li>
            {/* <li><a href='#' className='font-serif text-xs ' style={{fontFamily:'Ovo'}}>Services</a></li> */}
            <li><a href='#projects' className='font-serif text-xs ' style={{fontFamily:'Ovo'}}>My work</a></li>
            <li><a href='#contact' className='font-serif text-xs ' style={{fontFamily:'Ovo'}}>Contact me</a></li>
         </ul>
       </div>

       
       <div className='flex gap-3 '>   
           <button onClick={()=>{setdark(true)}} className={`${dark ? 'hidden': 'block'} text-2xl sm:text-3xl lg:text-3xl xl:text-lg text-gray-500 cursor-pointer` }><i className="ri-moon-line"></i>  
         </button>

         <button onClick={()=>{setdark(false)}} className={`${dark ? 'block': 'hidden'} text-2xl sm:text-3xl lg:text-base text-white cursor-pointer`}> <i className="ri-sun-line"></i> 
         </button>  
                      
      
         <a href='#contact'><button className={`hidden lg:hidden xl:block  text-xs ${dark ? 'border border-white text-white': 'border border-gray-400'}  rounded-full px-5 py-2 cursor-pointer text-gray-700 hover:bg-gray-300 hover:text-black`}> Connect <i className="ri-arrow-right-up-line"></i></button></a>

          <button onClick={handleOpen} className={`${dark? 'text-white':'text-black'} lg:block xl:hidden sm:text-4xl text-2xl font-medium`}> <i className="ri-menu-3-line"></i> </button>

       </div>

       {/* navbar for mobile device */}           
       <ul ref={openRef} className={`${dark ? 'bg-fuchsia-950 text-white font-medium':'bg-rose-200 font-medium'} lg:block xl:hidden flex flex-col items-start gap-4  py-20 px-10 fixed -right-64 top-0 bottom-0 w-64  z-50 h-screen  transition duration-500`}>
            <div className='absolute right-6 top-6 lg:right-7'>
               <p onClick={handleclose} className='w-5 font-bold text-lg sm:text-2xl cursor-pointer lg:text-4xl'> <i className="ri-close-line"></i> </p>
            </div>
            <li className='lg:mt-8'><a href='#home' style={{fontFamily:'Ovo'}} onClick={handleclose} className='sm:text-2xl lg:text-3xl'>Home</a></li>
            <li className='lg:mt-8'><a href='#about' style={{fontFamily:'Ovo'}} onClick={handleclose} className='sm:text-2xl lg:text-3xl'>About</a></li>
            {/* <li className='lg:mt-8'><a href='#' style={{fontFamily:'Ovo'}} onClick={handleclose} className='sm:text-2xl lg:text-3xl'>Services</a></li> */}
            <li className='lg:mt-8'><a href='#projects' style={{fontFamily:'Ovo'}} onClick={handleclose} className='sm:text-2xl lg:text-3xl'>My work</a></li>
            <li className='lg:mt-8'><a href='#contact' style={{fontFamily:'Ovo'}} onClick={handleclose} className='sm:text-2xl lg:text-3xl'>Contact me</a></li>
         </ul>


    </div>
  )
}

export default Navbar
