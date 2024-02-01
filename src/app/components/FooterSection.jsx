import Image from 'next/image'
import React from 'react'

const FooterSection = () => {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className="px-12 py-6 flex justify-between w-full">
          <a
            href="#introduce"
            className="h-auto w-auto flex flex-row items-center pt-[10px]"
          >
          <Image
            src="/images/logo_no_subtext_white.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin my-[-60px] rounded-full"
          />
        </a>
        <div>
          <p className='text-slate-400'>All rights reserved.</p>
          <p className='text-slate-400'>Updated 1/2/2024</p>
          <p className='text-slate-400'>Developed by FSN</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection