"use client";
import Image from 'next/image'
import React, {useTransition, useState} from 'react'
import TabButton from './TabButton';
import {motion} from 'framer-motion'

const TAB_DATA=[
    {
        title: "Habilidades",
        id: "skills",
        content:(
        <ul className='list-disc pl-4'>
            <li>SQL</li>
            <li>C</li>
            <li>C#</li>
            <li>Java</li>
            <li>Android Studio</li>
            <li>.NET WinForms</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Next.js</li>
            <li>Ubuntu Server</li>
            <li>Infraestructura de redes</li>
            <li>Infraestructura en la nube</li>
        </ul>
        )
    },
    {
        title: "Formación",
        id: "education",
        content:(
        <ul className="font-semibold text-lg list-disc pl-4">
            <li>Formación Academica
                <ul>
                    <li className="pl-4 mt-2 text-base font-normal flex justify-between">
                        Univesidad Tecnológica de Panamá
                        <span className="text-sm text-right text-[#ADB7BE]">
                            2020-presente
                        </span>                       
                    </li>
                </ul>
            </li>
            <li className="pt-4">Certificaciones
                <ul>
                    <li className="pl-4 mt-2 text-base font-normal flex justify-between">
                        <span className="text-left">
                            Microsoft Office Specialist - Office Powerpoint 2013
                        </span>
                        <span className="text-sm text-right text-[#ADB7BE]">
                            oct-2017
                        </span>
                    </li>
                    <li className="pl-4 mt-2 text-base font-normal flex justify-between">
                        Microsoft Office Specialist - Office Word 2013
                        <span className="text-sm text-right text-[#ADB7BE]">
                            nov-2018
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
        )
    },
    {
        title: "Experiencia",
        id: "experience",
        content:(
        <ul className='font-semibold text-lg list-disc pl-4'>
            <li> Experiencia Laboral
                <ul>
                    <li className='pl-4 mt-2 text-base font-normal flex justify-between'>
                        Soporte Técnico en Grupo Athens
                        <span className="text-sm text-right text-[#ADB7BE]">
                            jun 2023-presente
                        </span>
                    </li>
                    <li className='pl-4 mt-2 text-base font-normal flex justify-between'>
                        <span className='text-left'>
                            Prácticante como desarrollador en Copa Airlines
                        </span>
                        <span className="text-sm text-right text-[#ADB7BE]">
                            abr 2024-sep 2024
                        </span>
                    </li>
                </ul>
            </li>
            <li className="pt-4">Voluntariado
                <ul>
                <li className='pl-4 mt-2 text-base font-normal flex justify-between'>
                        Tutorías de Aritmética y Álgebra Ayudinga
                        <span className="text-sm text-right text-[#ADB7BE]">
                            jun-2023
                        </span>
                    </li>
                </ul>
            </li>
        </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    };

  return (
    <section id='about' className="text-white">
        <motion.div 
            initial={{ opacity: 0, scale: 0.5}} 
            animate={{opacity: 1, scale: 1}} 
            transition={{duration: 0.5, delay: 0.4}}
            className="md:grid md:grid-cols-2 place-self-center gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src="/images/about-pc.png"
                    alt='pc'
                    width={300}
                    height={300}
                    className='hidden md:block'
                />
                <div className="mt-8 md:mt-0 flex flex-col h-full">
                    <h2 className="text-3xl font-bold">Resumen</h2>
                    <p className="text-base lg:text-lg text-[#ADB7BE] text-justify">
                    A lo largo de mi carrera, he adquirido una amplia experiencia en el 
                    desarrollo de soluciones tecnológicas, tanto a nivel académico como en 
                    prácticas profesionales, incluyendo gestión y manejo de infraestructura 
                    de comercios a nivel nacional, como creación y desarrollo 
                    proyectos de optimización y automatización en empresas como ServiBird y Copa Airlines.

                    Mi enfoque está en la resolución de problemas a través de la innovación 
                    tecnológica, con experiencia en programación web, bases de datos SQL y 
                    NoSQL, manejo de infraestructura de red, y entornos de sistemas operativos 
                    como Linux y Windows. Este espacio es una muestra de mis habilidades y 
                    proyectos que reflejan mi compromiso y dedicación al campo de la ingeniería de software.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Habilidades{""}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Formación{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("experience")}
                            active={tab === "experience"}
                        >
                            {" "}
                            Experiencia{" "}
                        </TabButton>
                    </div>
                    <div className="mt-6">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
        </motion.div>
    </section>
  )
}

export default AboutSection