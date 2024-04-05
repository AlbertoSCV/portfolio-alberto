/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image'
import React, {useEffect} from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'framer-motion'
import Link from 'next/link';

const HomeSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <section>
        <motion.div 
        initial={{ opacity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}} 
        transition={{duration: 0.5, delay: 0.1}} 
        className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-orange-600 to-red-500">Hola, soy </span>
                    <br />
                    <TypeAnimation className="text-4xl lg:text-5xl"
                      sequence={[
                        'Alberto',
                        1000,
                        'Desarrollador Desktop',
                        1500,
                        'Desarrollador Móvil',
                        1500,
                        'Desarrollador Back-End',
                        1500
                      ]}
                      wrapper="span"
                      speed={30}
                      repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
                Bienvenido a mi portafolio digital, soy un desarrollador entusiasta con experiencia en diversos 
                lenguajes y tecnologías, y este espacio es mi lienzo digital donde te puedo mostar los frutos 
                de mi trabajo.
                </p>
                <div>
                    <Link href='#contact-me'>
                        <button href='#contact-me' className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-yellow-400 via-orange-600 to-red-500 text-white hover:bg-slate-200">
                            Contáctame
                        </button>
                    </Link>
                    <Link href={"/cv"}>
                        <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-yellow-400 via-orange-600 to-red-500 hover:bg-slate-800 text-white mt-3">
                            <span className="block bg-[#181818] hover:bg-[#282828] rounded-full px-5 py-2">
                                Mira mi CV
                            </span>
                        </button>
                    </Link>
                    
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-6 md:ml-14">
                <div className="rounded-full bg-[#101010] w-[250px] h-[250px] lg:w-[275px] lg:h-[275px] relative ">
                    <Image 
                    src="/images/pfp_2024.jpeg"
                    alt='home-image'
                    width={225}
                    height={225}
                    className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default HomeSection