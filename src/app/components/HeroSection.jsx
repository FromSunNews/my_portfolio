'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { scrollToPageId, slideInFromTop } from '../utils/motion';
import Link from 'next/link';

const HeroSection = () => {
  const [hidden, setHidden] = useState(true)

  return (
    <section id="introduce">
      <div className='grid grid-cols-1 md:grid-cols-12 pt-[120px] z-10'>
        <motion.div 
          initial={{opacity: 0, scale: 0.5}} 
          animate={{opacity: 1, scale: 1}} 
          transition={{duration: 0.75}} 
          className='col-span-7 place-content-center text-left'
        >
          <motion.div
            variants={slideInFromTop}
            className="py-[8px] place-items-start mb-4 px-[14px] border border-[#7042f88b] opacity-[0.9] rounded-full text-white flex flex-row items-center w-fit"
          >
            <span className="material-icons text-[#b49bff] mr-[10px] h-5 w-5 mb-1">
            auto_awesome
            </span>
            <h1 className="Welcome-text text-[13px]">
              Developer Portfolio
            </h1>
          </motion.div>
          <h1 className='text-white mb-4 text-4xl sm:text-6xl lg:text-6xl font-extrabold'>
            Hello World, I&#39;m
            <br />
            <TypeAnimation
            preRenderFirstString={true}
              sequence={[
                'Tu Nhat Phuong',
                1000,
                'FromSunNews',
                1000,
                "a Frontend Developer",
                1000,
                "a Backend Developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mt-5'
            />
          </h1>
          <p className='text-[#adb7be] text-lg lg:text-xl mb-6'>
            I&apos;m currently in my final year at <span className='underline font-bold'><a href='https://dntu.edu.vn/' target='_blank'>Dong Nai Technogoly University</a></span>, specializing in IT. Throughout my academic journey, I&apos;ve cultivated a deep passion for <span className='font-bold'>WEB</span> and <span className='font-bold'>MOBILE</span> development, driven by a desire to create meaningful and innovative solutions. As I stand on the threshold of graduation, I am eagerly seeking opportunities to apply my knowledge and skills in a real-world professional setting🍀.
          </p>
          <div className='flex sm:flex-row flex-col items-center lg:mt-20'>
            <Link
              href='#contact'
              onClick={scrollToPageId}
              className='relative px-12 h-[50px] rounded-full  bg-gradient-to-tl from-purple-500 to-cyan-500 hover:bg-slate-500 text-white w-full sm:w-fit sm:mr-4 mb-3 sm:mb-0 items-center hover:border hover:border-white flex justify-center'>
              Contact
              <span class="material-icons ms-2">send</span></Link>
            <div className='relative w-full sm:w-fit'>
              <button
                onClick={() => setHidden(!hidden)}
                className='px-2 h-[50px] rounded-full bg-gradient-to-tl from-purple-500 to-cyan-500 hover:bg-slate-600 text-white w-full sm:w-fit'>
                <span className='bg-[#121212] hover:bg-slate-800 rounded-full px-4 py-[7px] flex justify-between'>
                  Download CV
                  <span class="ms-2 material-icons">keyboard_arrow_down</span>
                </span>
              </button>
                <div
                  className={`rounded border-gray-500 bg-gray-100 absolute z-10 text-black flex-col items-stretch px-2  py-2 top-[55px] w-full l-0 shadow-sm ${hidden ? 'hidden' : 'flex'}`}>
                      <a
                        onClick={() => setHidden(true)}
                        href="/TuNhatPhuong_CV_EN.pdf"
                        download
                        className='cursor-pointer hover:bg-blue-400 hover:rounded py-1 px-2 mb-1'>English</a>
                      <a
                        onClick={() => setHidden(true)}
                        href="/TuNhatPhuong_CV_VI.pdf"
                        download
                        className='cursor-pointer hover:bg-blue-400 hover:rounded py-1 px-2'>Vietnamese</a>
                  </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{opacity: 0, scale: 0.5}} 
          animate={{opacity: 1, scale: 1}} 
          transition={{duration: 0.75}}  
          className='col-span-5 place-self-center mt-5 lg:mt-0 md:ml-16'
        >
          <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative backdrop-blur-md bg-opacity-80'>
            <Image
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 '
              src="/images/hero-image.png"
              alt='hero image'
              width={400}
              height={400}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection