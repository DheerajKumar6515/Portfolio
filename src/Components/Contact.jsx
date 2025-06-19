import React,{useState} from 'react'
import { motion } from 'motion/react';

function Contact({dark}) {
     
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", `${import.meta.env.VITE_WEBFORM_API_KEY}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    
   
  return (
    <> 
      <div className={`${dark ? 'hidden': 'block'} absolute w-full md:w-[35rem] translate-y-[140px] sm:left-40 h-72 bg-linear-30 from-yellow-100 to-purple-300 rounded-full blur-3xl -z-10 xl:left-72 xl:translate-y-40 xl:w-[47rem] xl:h-[19rem] xl:blur-5xl`}>      
      </div>

    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}}
     id='contact' className={`w-full h-auto  z-50 ${dark ? 'bg-black': ''} `}>

       <div className=''>
           <motion.p initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{delay:0.3 , duration:0.5}}
            className={`text-center ${dark ? 'text-neutral-500':'text-gray-700'} pt-10 text-xs sm:text-xl sm:pt-12 sm:mb-2 lg:text-2xl lg:pt-18 xl:text-[14px]`} style={{fontFamily:'Ovo'}}>Connect with me</motion.p>

           <motion.h1 initial={{opacity:0, y:-20}} whileInView={{opacity:1, y:0}} transition={{delay:0.5 , duration:0.5}}
            className={`${dark ? 'text-white/70':'text-black'} text-center text-2xl pt-1 font-serif sm:text-4xl lg:text-5xl xl:text-[32px]`} style={{fontFamily:'Ovo'}}>Get in touch</motion.h1>

           <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.7 , duration:0.5}}
            className={`${dark ? 'text-neutral-500':'text-gray-700'} text-center text-xs py-2 px-13 sm:text-base sm:px-28 sm:tracking-wide lg:text-lg lg:px-36 xl:text-xs xl:py-3.5 xl:px-[26rem] 2xl:px-[32rem]` } style={{fontFamily:'Ovo'}}>I'd love to hear from you! If you have any questions, comments or feedback please use the form below</motion.p>

           <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.9 , duration:0.5}}
            onSubmit={onSubmit} className='py-5 h-auto flex flex-col '>
               <div className='flex flex-col mx-auto'>
                   <motion.input initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} transition={{delay:1.1 , duration:0.6}}
                    className={`border ${dark ? 'bg-fuchsia-900/30 text-white border-fuchsia-900':'border-gray-400 bg-white/80'}   w-72 rounded-md py-2.5 px-2 text-[14px] mb-3.5 sm:w-[28rem] sm:h-16 sm:text-base sm:mb-6 lg:w-[38rem] lg:h-20 lg:rounded-xl lg:text-2xl xl:w-[27rem] xl:h-[50px] xl:text-[13px] xl:rounded-md outline-0`} type='text' placeholder='Enter your name' name='name' required/>
                   <motion.input initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} transition={{delay:1.2 , duration:0.6}}
                    className={`border  ${dark ? 'bg-fuchsia-900/30 text-white border-fuchsia-900':'border-gray-400 bg-white/80'}  w-72 rounded-md py-2.5 px-2 text-[14px] mb-3.5 sm:w-[28rem] sm:h-16 sm:text-base sm:mb-6 lg:w-[38rem] lg:h-20 lg:rounded-xl lg:text-2xl xl:w-[27rem] xl:h-[50px] xl:text-[13px] xl:rounded-md outline-0`} type='email' name="email" placeholder='Enter your email' required/>
               </div>
               <motion.textarea initial={{opacity:0, y:100}} whileInView={{opacity:1, y:0}} transition={{delay:1.3 , duration:0.6}}
                className={`border  ${dark ? 'bg-fuchsia-900/30 text-white border-fuchsia-900':'border-gray-400 bg-white/80'} mx-auto  w-72 h-28 rounded-md py-1.5 px-2 text-[14px] mb-3.5 sm:w-[28rem] sm:h-48 sm:text-base sm:mb-6 lg:w-[38rem] lg:h-82 lg:rounded-xl lg:text-2xl xl:w-[27rem] xl:h-52 xl:text-[13px] xl:rounded-md outline-0`} type='text' name="message" placeholder='Enter your message' required/>

               <motion.button whileHover={{scale:1.05}} transition={{duration:0.3}}
                className={`mt-4 mx-auto w-28 rounded-2xl py-2 px-1 text-xs ${dark ? ' text-white border-2 border-fuchsia-900 hover:bg-fuchsia-900/40 hover:text-white duration-500':'bg-black/80 text-white hover:bg-black duration-500'}  mb-3 sm:text-base sm:w-36 sm:py-3 sm:rounded-full lg:w-48 lg:text-xl lg:py-5 xl:text-[13px] xl:py-3 xl:w-32 cursor-pointer  `} type='submit'>Submit now <i className="ri-arrow-right-line"></i> </motion.button>

               <p className='mt-4 text-center' style={{fontFamily:'Ovo'}}>{result}</p>
           </motion.form>
       </div>

    </motion.div>

    </>
  )
}

export default Contact
