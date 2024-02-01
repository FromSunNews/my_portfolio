'use client'

import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    desc: (
      <p className='text-base lg:text-lg'>
        I&apos;m a BE and FE developer with a passion for creating interactive and responsive web applications. I have experience working with HTML, CSS, Javascript, ReactJS, React Native, Redux, Node.js, Express, MongoDB, SocketIO, Google Map Plaform, SQL Server, MySQL and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. 
      </p>
    ),
    title: "Hard Skills",
    id: "hard_skills",
    content: (
      <div className="grid grid-cols-2">
        <ul className="list-disc pl-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>ReactJS</li>
          <li>React Native</li>
          <li>Redux</li>
          <li>Node.js</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Express</li>
          <li>MongoDB</li>
          <li>SocketIO</li>
          <li>Google Map Plaform</li>
          <li>SQL Server</li>
          <li>MySQL</li>
          <li>Git</li>
        </ul>
      </div>
    ),
  },
  {
    desc: (
      <p className='text-base lg:text-lg'>
        Adaptability: Quick embrace of new technologies and methodologies, maintaining a positive and proactive mindset.<br /><br />

        Team Collaboration: Proven ability to work seamlessly in diverse teams, valuing each member&apos;s strengths for collective success.<br /><br />

        Problem-Solving: Strategic analysis and creative solutions, breaking down complex issues with technical and analytical skills.<br /><br />

        Leadership: Comfortable taking leadership roles, leading by example, and motivating team members.
      </p>
    ),
    title: "Soft Skills",
    id: "soft_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Adaptability</li>
        <li>Team Collaboration</li>
        <li>Problem-Solving</li>
        <li>Leadership</li>
      </ul>
    ),
  },
  {
    desc: (
      <p className='text-base lg:text-lg'>
        I am currently a senior student at Dong Nai University of Technology, specializing in IT. Throughout my academic journey, I&apos;ve maintained a GPA of 3.47/4. As a dedicated student, I&apos;ve actively pursued knowledge in IT and am eager to apply my academic achievements to real-world scenarios in the field.
      </p>
    ),
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>A Last-year student at Dong Nai Technology University</li>
        <li>Specializing in IT</li>
        <li>GPA: 3.47/4</li>
      </ul>
    ),
  },
  {
    desc: (
      <p className='text-base lg:text-lg'>
        In my academic pursuits, I&apos;ve had the privilege of garnering recognition for my commitment to innovation and excellence. The following awards stand as testaments to my dedication and passion. 
        <br />
        <p className='underline font-bold'><a href='/ScannedAward.pdf' target='_blank'>See the scan here</a></p>
      </p>
    ),
    title: "Awards",
    id: "awards",
    content: (
      <ul className="list-disc pl-2">
        <li>Third Prize of DongNai Solution Competition.</li>
        <li>Consolation Prize of Dong Nai Province 2023 Scientific and Technical Innovation Competition</li>
        <li>Consolation prize of the 7th Scientific and Technical Innovation Competition - Student Division.</li>
        <li>Third Prize of the Student Science Conference 2023</li>
        <li>First Prize of the school-level Informatics Olympiad 2022</li>
      </ul>
    ),
  },
  // {
  //   desc: (
  //     <p className='text-base lg:text-lg'>
  //       cerfi desc
  //     </p>
  //   ),
  //   title: "Certifications",
  //   id: "certifications",
  //   content: (
  //     <ul className="list-disc pl-2">
  //       <li>AWS Cloud Practitioner</li>
  //       <li>Google Professional Cloud Developer</li>
  //     </ul>
  //   ),
  // },
]

const AboutSection = () => {
  const [tab, setTab] = useState('hard_skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }
  return (
    <section className='text-white pt-24' id='about'>
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 ms:py-16 justify-center">
        <Image src='/images/about-image.png' width={500} height={500} alt='about image' className='rounded'/>
        <div className='mt-8 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          {TAB_DATA.find((t) => t.id === tab).desc}
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('hard_skills')} active={tab === 'hard_skills'}>Hard Skills</TabButton>
            <TabButton selectTab={() => handleTabChange('soft_skills')} active={tab === 'soft_skills'}>Soft Skills</TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange('awards')} active={tab === 'awards'}>Awards</TabButton>
            {/* <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>Certifications</TabButton> */}
          </div>
            <div className="mt-4 ml-3">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection