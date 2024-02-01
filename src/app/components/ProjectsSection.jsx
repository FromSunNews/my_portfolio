'use client'

import React, { useRef, useState } from 'react'
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { useInView, motion } from 'framer-motion';


const projectsData = [
  {
    id: 1,
    title: "Developer Portfolio Website",
    description: "My Developer Portfolio is made with Next.js and highlights my skills, projects, awards, and education in a user-friendly way. Using Next.js ensures a smooth experience, showcasing my commitment to professionalism and innovation in web development.",
    image: "/projects/developer_portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "HSSE Website",
    description: "Health Safety Security and Environment is a private project of MSA Consulting and Technical Service JSC that deals with safety observation reports regarding vehicle inspections using TypeScript on ReactJS based on pre-designed requirements from the supervisor.",
    image: "/projects/hsse.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "DongNaiTravel Application",
    description: "DongNaiTravel is a project undertaken by my group in Dong Nai Province 2023 Scientific and Technical Innovation Competition, and it also serves as the graduation project for the year 2024. It utilizes technologies such as React Native, NodeJs, Express, MongoDB, Socket.IO, and Google Maps Platform.",
    image: "/projects/dongnaitravel.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/FromSunNews/DongNaiTravelApp",
    previewUrl: "https://www.youtube.com/watch?v=6lMZkIQiZ68",
  },
  {
    id: 4,
    title: "DongNaiItinerary Website",
    description: "DongNaiItinerary is a team project where we are building a web application that allows users to create travel itineraries using the ChatGPT and LangChain platforms.",
    image: "/projects/dongnai_itinerary.png",
    tag: ["All", "Web"],
    gitUrl: "/https://github.com/NekoCyan/DNTU-Research-Conference-2023",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Trello Website",
    description: "Trello, a product of TrungQuanDev's MERN Stack course, using technology as ReactJS, Hooks, Redux, SocketIO, RedisQueue, Cloudinary, and SendInBlue. This project guides you in creating a user-friendly Trello-like app with expanded features. Enhance your skills in intuitive interface design, state management, and real-time communication to effortlessly build dynamic applications following industry standards. Master development in a user-friendly way with Trello.",
    image: "/projects/trello_app.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/FromSunNews/trello",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Food Application",
    description: "Discover a culinary journey with the Food Application—crafted with React Native, Redux, and Google Maps Platform. Effortlessly navigate, explore, and order your favorite dishes in a seamless and innovative mobile experience. A tasty blend of technology and convenience at your fingertips!",
    image: "/projects/food_app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/FromSunNews/Food-App",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Crypto Application",
    description: "My Crypto App, built on React Native, smoothly integrates Redux and Thunk via Expo to fetch live cryptocurrency data from CoinGecko (https://www.coingecko.com/). This not only ensures a slick user experience but also showcases my knack for React Native development. It's not just an app; it's a snapshot of my seamless coding skills in action.",
    image: "/projects/crypto_app.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/FromSunNews/Crypto-App",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});


  const handleTagchange = (newTag) => {
    console.log("🚀 ~ handleTagchange ~ newTag:", newTag)
    setTag(newTag);
  };

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1}
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mb-3 md:mb-4 pt-24">
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
          onClick={handleTagchange} 
          name='All' 
          isSelected={tag === 'All'}
        />

        <ProjectTag 
          onClick={handleTagchange} 
          name='Web' 
          isSelected={tag === 'Web'}
        />

        <ProjectTag 
          onClick={handleTagchange} 
          name='Mobile' 
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className='grid  md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12'>
        {
          projectsData.map((project, index) => {
            if (project.tag.includes(tag))
            return (
              <motion.li
                key={index}
                variants={cardVariants}
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                transition={{duration: 0.3,  delay: index * 0.4}}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  imgUrl={project.image}
                  tags={project.tag}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                />
              </motion.li>
            )
          })
        }
      </ul>
    </section>
  )
}

export default ProjectsSection