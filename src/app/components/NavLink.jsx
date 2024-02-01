import Link from 'next/link'
import React from 'react'
import { scrollToPageId } from '../utils/motion'

const NavLink = ({href, title, isMobile=false, onToggle}) => {
  return (
    <Link 
      href={href} 
      className={`block ${!isMobile && 'pl-3 pr-4'} py-2 text-[#ADB7BE] sm:text-lg rounded md:p-0 hover:text-white`}
      onClick={(e) => {
        scrollToPageId(e)
        if (isMobile) {
          onToggle()
        }
      }}
    >
      {title}
    </Link>
  )
}

export default NavLink