import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next/image";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


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

export const Navigation = ({onToggle}) => (
  <div className="flex flex-col items-center justify-center">
    <motion.ul variants={variants} className="z-[1000] flex flex-col p-4 md:p-0 md:space-x-8 mt-0 text-xl items-center justify-center text-center">
            {
              navLinks.map((item, index) => (
                <li key={`link-${index}`} className="flex flex-col items-center">
                  {index !== 0 && <div className="h-[1px] w-[100px] bg-[#ADB7BE] my-1" ></div>}
                  <NavLink href={item.path} title={item.title} onToggle={onToggle} isMobile={true}/>
                </li>
              ))
            }
    </motion.ul>
    <div className="socials flex flex-row gap-2">
      <Link href='https://github.com/FromSunNews' target='_blank'>
        <Image src='/icons/github.png' alt='github icon'  width={30} height={30} />
      </Link>

      <Link href='https://www.linkedin.com/in/t%E1%BB%AB-ph%C6%B0%C6%A1ng-8b500b2b1' target='_blank'>
        <Image src='/icons/linkedin.png' alt='github icon'  width={30} height={30} />
      </Link>

      <Link href='https://www.facebook.com/phuong.tu.1207' target='_blank'>
        <Image src='/icons/facebook.png' alt='github icon'  width={30} height={30} />
      </Link>
    </div>
  </div>
);

const itemIds = [0, 1, 2, 3, 4];
