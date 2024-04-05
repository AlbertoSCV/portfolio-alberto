'use client';
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "Sobre Mí",
        path: "/#about"
    },
    {
        title: "Proyectos",
        path: "/#proyects"
    },
    {
        title: "Contáctame",
        path: "/#contact-me"
    }
]

const NavBar = ({sectionVisible}) => {

    const [navbarOpen, setBavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
        <div className=" bg-[#101010] flex flex-wrap items-center justify-between mx-auto p-8 px-11">
            <Link href={'/'} className="text-xl sm:text-2xl md:text-3xl font-extrabold py-2">
                <span className="text-transparent bg-clip-text bg-white">
                    Alberto Somoza
                </span>
            </Link>
            {
                sectionVisible ? 
                <div>
                    <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                        <button onClick={() => setBavbarOpen(true)} className="flex items-center px-3 py-2 rounded-full text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
                              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    ) : (
                        <button onClick={() => setBavbarOpen(false)} className="flex items-center px-3 py-2 rounded-full text-gray-400 hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7">
                              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </button>
                    )
                    }               
                    </div>
                    <div className="menu hidden md:block md:w-auto" id='navbar'>
                        <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                            {
                             navLinks.map((link, index) => (
                                   <li key={index}>
                                     <NavLink href={link.path} title={link.title}/>
                                  </li>
                             ))
                         }
                        </ul>
                    </div>
                </div>
                :
                null
            }
        </div>
    { 
        navbarOpen ? <MenuOverlay links={navLinks}/> : null
    }
    </nav>
  )
}

export default NavBar