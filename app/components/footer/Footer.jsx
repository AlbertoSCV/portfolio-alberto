import React from 'react'

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent">
        <div className='text-xs container py-12 px-5 sm:py-12 sm:px-12 sm:text-base flex justify-between'>
            <span className='z-50'>
                Alberto Somoza™
            </span>
            <p className='text-slate-400'>
                Todos los derechos reservados.
            </p>
        </div>
    </footer>
  )
}

export default Footer