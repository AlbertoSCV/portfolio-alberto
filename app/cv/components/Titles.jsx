import React from 'react'

const Titles = ({title}) => {
  return (
    <div className='mt-4 ml-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  text-center'>
      <h1 className='font-bold text-md sm:text-lg py-4 bg-gradient-to-br from-yellow-400 via-orange-600 to-red-500 rounded-r-full rounded-t-full'>
          {title}
      </h1>
    </div>
  )
}

export default Titles