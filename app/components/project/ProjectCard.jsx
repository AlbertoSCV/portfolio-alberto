import Link from 'next/link'
import React from 'react'

const ProjectCard = ({imgUrl, title, desc, gitUrl, prevUrl, type}) => {
  return (
    <div>      
        <div className="h-32 w-full md:h-42 lg:h-52 rounded-t-2xl relative group" 
          style={{background:`url(${imgUrl})`, backgroundSize: "cover"}}>
        {
          type === "public" &&
            <div className={`overlay items-center justify-center rounded-t-xl absolute top-0 left-0 right-0 w-full h-full bg-[#232323] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-75 transition-all duration-500`}>
              <Link href={gitUrl} className="h-10 w-10 sm:h-12 sm:w-12 border-[#ADB7BE] hover:border-white relative rounded-full border-2 group/link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 sm:w-9 sm:h-9 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </Link>
              <Link href={prevUrl} className="h-10 sm:h-12 sm:w-12 w-10 ml-8 border-[#ADB7BE] hover:border-white relative rounded-full border-2 group/link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 sm:w-10 sm:h-10 text-[#ADB7BE] group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </Link>
            </div>
        }

        {
          type === "private" &&
            <div className={`overlay items-center justify-center rounded-t-xl absolute top-0 left-0 right-0 w-full h-full bg-[#232323] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-75 transition-all duration-500`}>
              <div className="h-10 w-10 sm:h-12 sm:w-12 border-[#ADB7BE] hover:cursor-no-drop relative rounded-full border-2 group/link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 sm:w-9 sm:h-9 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <div className="h-10 sm:h-12 sm:w-12 w-10 ml-8 border-[#ADB7BE] hover:cursor-no-drop relative rounded-full border-2 group/link">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 sm:w-10 sm:h-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
            </div>
        }

        </div>
        <div className='text-white rounded-b-xl bg-[#232323] px-2 pt-3 pb-4'>
            <h4 className="text-lg font-semibold pl-2">{title}</h4>
            <p className='text-[#ADB7BE] text-base pl-4'>{desc}</p>
        </div>
    </div>
  )
}

export default ProjectCard