import React from 'react'

const FormExpTitle = ({title, location, initDate, finalDate}) => {
  return (
    <div className='mt-4 mb-1 flex flex-row gap-2 justify-between items-center'>
        <div className='flex flex-col flex-grow '>
        <h1 className='font-bold sm:text-lg'>
            {title}
        </h1>
        <h2 className='italic font-light text-sm sm:text-base'>
            {location}
        </h2>
        </div>
        <h3 className='text-right text-sm md:text-base italic font-thin'>
            {initDate} 
            {
                finalDate ? 
                <span> - </span>
                :
                null
            }
            {finalDate}
        </h3>
    </div>    
  )
}

export default FormExpTitle