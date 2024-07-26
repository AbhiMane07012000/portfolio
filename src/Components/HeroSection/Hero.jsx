import React from 'react'

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      {/* <section id="home" className='' >

        <div className='flex flex-col-reverse lg:flex-row '>
          <div className='bg-black lg:w-1/2 justify-center items-center'>
            <img className='pt-52' src="./profile.png" alt="" />
          </div>
          <div className='z-10 py-16 md:py-36 lg:py-40 pl-10 lg:w-1/2 ' >
            <div className='flex flex-row pb-2'>
              <img className='h-10' src="./hello.gif" alt="" />
              <h2 className='pl-2 font-bold self-end text-md md:text-md lg:text-md'>Hello</h2>
            </div>
            <h1 className='font-bold text-2xl  md:text-4xl lg:text-4xl pb-5 text-black font-montserrat'>I'm Abhijeet Mane</h1>
            <h3 className='font-bold text-xl  md:text-2xl lg:text-2xl pb-5 text-black font-montserrat ' >Front-end Developer</h3>
            <p className='font-semibold text-md md:text-sm lg:text:xl text-black pb-5 pr-10 md:pr-40 lg:pr-5 font-montserrat'>I focus on developing user-friendly web applications that meet the client's requirements, with attention to detail, scalability, and performance.</p>
            <a href="#about">
              <button className='text-white mb-5 bg-black px-6 py-2 rounded-3xl flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p className='pl-3  font-semibold font-montserrat'>About Me</p>
              </button>
            </a>

            <div className='pl-4 flex flex-row space-x-6'>
              <a href=""><FaGithub className='' size={30} /></a>
              <a href=""><FaLinkedinIn className='' size={30} /></a>
            </div>


          </div>
        </div>
      </section> */}
      <section id='home' className='flex flex-col-reverse lg:flex-row h-[100vh]'>
          <div className='bg-black lg:w-1/2 '>
              <img className='h-72' src="./profile.png" alt="" />
          </div>
          <div className='lg:w-1/2'></div>
      </section>
    </>
  )
}

export default Hero