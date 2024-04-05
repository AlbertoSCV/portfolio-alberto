import React from 'react'

const ParentCont = ({children}) => {
  return (
    <div className='px-8 md:px-12'>
        {children}
    </div>
  )
}

export default ParentCont