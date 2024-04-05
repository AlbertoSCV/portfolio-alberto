"use client";
import React, {useRef} from 'react'
import {motion, useInView} from 'framer-motion'

const CompApt = ({title, grade}) => {

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className='px-8 my-2 '>
        <div className='flex flex-col'>
            <h3 className='font-semibold text-sm sm:text-base'>
                {title}
            </h3>
            <div ref={ref} className="mr-4 bg-[#ADB7BE] h-1">
                <motion.div
                initial={{width: 0}}
                animate={isInView ? {width: grade} : {width: 0}}
                transition={{duration: 2}}
                className='bg-gradient-to-br from-yellow-400 via-orange-600 to-red-500 h-1 w-3/4'>

                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default CompApt