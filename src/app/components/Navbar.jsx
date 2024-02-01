'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { MenuMobile } from './MenuMobile'
import { Socials } from '../constants'

const Navbar = () => {
  const navLinks = [
    {
      title: 'Introduce',
      path: '#introduce'
    },
    {
      title: 'About',
      path: '#about'
    },
    {
      title: 'Projects',
      path: '#projects'
    },
    {
      title: 'Contact',
      path: '#contact'
    },
  ]


  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px] ">
        <a
          href="#introduce"
          className="h-auto w-auto flex flex-row items-center pt-[10px]"
        >
          <Image
            src="/images/logo_no_subtext_white.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin"
          />
        </a>

        <div className="w-[500px] h-full  flex-row items-center justify-between hidden md:flex ">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
          {
            navLinks.map((item, index) => (
              <NavLink key={`link-${index}`} href={item.path} title={item.title} />
            ))
          }
          </div>
        </div>

        <div className=" flex-row gap-5 hidden md:flex">
          {Socials.map((social) => (
            <Link key={social.name} href={social.href} target='_blank'>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                className='cursor-pointer'
              />
            </Link>
          ))}
        </div>

      </div>
    </div>
    // <nav className='fixed top-0 left-0 right-0 z-30 bg-[#121212] bg-opacity-90'>
    //   <div className='flex flex-wrap items-center justify-between mx-auto py-6 px-10'>
    //     <Link href={'/'} className='rounded-full'>
    //       <Image src='/images/big_logo_white.png' width={60} height={60} alt='my logo' className='rounded-full'/>
    //     </Link>



    //     <MenuMobile />
    //     <div className='menu hidden md:block md:w-auto' id='navbar'>
    //       <ul className='flex md:flex-row p-4 md:p-0 md:space-x-8 mt-0'>
    //       {
    //         navLinks.map((item, index) => (
    //           <li key={`link-${index}`}> 
    //           <NavLink href={item.path} title={item.title}/>
    //           </li>
    //         ))
    //       }
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  )
}

export default Navbar