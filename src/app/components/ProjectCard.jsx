import Link from 'next/link'
import React from 'react'

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div>
      <div 
        className='h-52 md:h-45 rounded-t-xl relative group'
        style={{background: `url(${imgUrl})`, backgroundSize: 'cover', backgroundPositionY: 'center'}}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex items-center justify-center group-hover:bg-opacity-80 transition-all duration-500">
        <Link
            href={gitUrl}
            target='_blank'
            className="h-14 w-14 mr-3 border-2 rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
          >
            <span className="material-icons text-[#ADB7BE]  cursor-pointer group-hover/link:text-white">
            code
            </span>
        </Link>
        <Link
          href={previewUrl}
          target='_blank'
          className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
        >
          <span className="material-icons text-[#ADB7BE] cursor-pointer group-hover/link:text-white">
          remove_red_eye
          </span>
        </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE] h-[200px] overflow-y-scroll'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard