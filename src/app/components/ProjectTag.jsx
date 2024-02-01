import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected ? "text-white border-cyan-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"

  return (
    <button 
      onClick={() => onClick(name)}
      className={`rounded-full border-2 py-3 px-6 text-xl cursor-pointer ${buttonStyles}`}
    >{name}</button>
  )
}

export default ProjectTag