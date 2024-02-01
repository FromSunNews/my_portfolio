'use client'

import { David_Libre } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const EmailSection = () => {
  const [emailSubmited, setEmailSubmited] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';
    const option = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSONdata,
    };
    const response = await fetch(endpoint, option);
    const resData = await response.json();
    console.log("🚀 ~ handleSubmit ~ resData:", resData)
    if (response.status === 200) {
      console.log('Message sent!');
      setEmailSubmited(true)
    };
  }

  return (
    <section id='contact'>
      <h2 className="text-center text-4xl font-bold text-white mb-3 md:mb-4 pt-24">
        Contact
      </h2>
      <div className='grid md:grid-cols-2 mb-12 md:mb-12 mt-12 gap-4' id='contact'>
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div>
          <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
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
          <div className="flex flex-row items-center my-6">
            <div className='border-[#ADB7BE] border-t-2 w-10'></div>
            <p className='text-lg font-bold text-[#ADB7BE] mx-3'>OR</p>
            <div className='border-[#ADB7BE] border-t-2 w-10'></div>
          </div>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            Send email via tunhatphuong2002.work@gmail.com or ptu2747@gmail.com
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="">
              <label htmlFor="email" className='text-white block text-sm font-medium mb-2'>Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder='user@gmail.com'
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              />
            </div>

            <div className="">
              <label htmlFor="subject" className='text-white block text-sm font-medium mb-2'>Your Subject</label>
              <input
                type="subject"
                name="subject"
                id="subject"
                required
                placeholder='Just say hi!'
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              />
            </div>
            <div className="">
              <label htmlFor="message" className='text-white block text-sm font-medium mb-2'>Your Message</label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                placeholder='Let&apos;s talk about...'
              ></textarea>
            </div>
            <button type="submit" className='bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
            {
              emailSubmited && (
                <p className="text-green-500 text-sm mt-2">Email sent! Thanks for your message.</p>
              )
            }
          </form>
        </div>
      </div>
    </section>
  )
}

export default EmailSection