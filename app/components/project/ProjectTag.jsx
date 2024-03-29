import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {

  const buttonStyle = isSelected
  ? "px-6 mb-2 py-3 rounded-full mr-2 bg-gradient-to-br from-yellow-400 via-orange-600 to-red-500 text-white hover:bg-slate-200"
  : "px-6 mb-2 py-3 rounded-full mr-2 border-2 border-white text-white hover:bg-white hover:text-[#282828]"

  return (
    <button onClick={() => onClick(name)} className={buttonStyle}>
      {name}
    </button>
  )
}

export default ProjectTag