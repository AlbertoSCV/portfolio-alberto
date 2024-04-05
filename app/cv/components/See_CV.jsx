import React from 'react'
import Title from './Titles'
import Image from 'next/image'
import FormExpTitle from './FormExpTitle'
import ParentCont from './ParentCont'
import CompApt from './CompApt'
import Link from 'next/link'

const See_CV = () => {
  return (
    <div className='mt-14'>
        <div>
            <Title title="Perfil"/>
            <ParentCont>
                <div className='grid grid-cols-1 sm:grid-cols-12'>
                    <p className='text-sm sm:text-base col-span-7 mt-3 place-self-center'>
                        Soy Alberto Somoza, estudiante de Ingeniería en Sistemas y Computación en mi quinto año de formación
                        académica en la Universidad Tecnológica de Panamá. 
                        Mi pasión por la tecnología me ha llevado a dedicar gran parte de mi tiempo al estudio y la práctica en
                        este campo. Estoy constantemente buscando nuevas oportunidades para expandir mis conocimientos y
                        habilidades, ya sea a través de proyectos personales, cursos adicionales o experiencias laborales.
                        Considero que la proactividad es una de mis principales fortalezas, ya que siempre estoy dispuesto a
                        asumir nuevos desafíos y responsabilidades. Me gusta enfrentarme a situaciones que me permitan
                        desarrollar soluciones innovadoras y mejorar mis habilidades de resolución de problemas.
                    </p>
                    <div className="col-span-5 place-self-center mt-1 md:ml-14">
                        <div className="rounded-full bg-[#101010] w-[200px] h-[200px] md:w-[200px] md:h-[200px] relative ">
                            <Image 
                            src="/images/pfp_2024.jpeg"
                            alt='home-image'
                            width={175}
                            height={175}
                            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            />
                        </div>
                    </div>
                </div>
            </ParentCont>
        </div>
        <div>
            <Title title="Datos Personales"/>
            <ParentCont>
                <div className='pt-4'>
                    <p>
                        <span className='font-bold pr-2'>
                            Correo: 
                        </span>
                         <span className='text-sm sm:text-base'>albertos@somoza-labs.com</span>
                    </p>
                    <div className='grid'>
                        <div className='flex items-center'>
                            <span className='font-bold pr-2'>
                                Teléfono: 
                            </span>
                            <span className='text-sm sm:text-base'>
                                +507 6362-4662
                            </span>
                            <Image
                                src="/images/panama-flag.png"
                                alt='home-image'
                                width={500}
                                height={500}
                                className=' rounded-lg ml-2 h-7 w-10'
                            />
                        </div>    
                    </div>
                    <p>
                        <span className='font-bold pr-2'>
                            Página Web:
                        </span>
                        <Link className="text-sm sm:text-base text-orange-500" href={"/"}>
                            www.albertosomoza.net
                        </Link>
                    </p>
                </div>
            </ParentCont>
        </div>
        <div>
            <Title title="Formación"/>
            <ParentCont>
                <FormExpTitle
                    title={"Liceniatura en Ingeniería en Sistemas y Computación"}
                    location={"Univesidad Tecnológica de Panamá, Panamá"}
                    initDate={"2020"}
                    finalDate={"presente"}
                />
                <p className='text-sm sm:text-base'>
                    La Licenciatura en Ingeniería de Sistemas y Computación es una 
                    propuesta de especializaciones con un fuerte matiz hacia el 
                    desarrollo de elementos informáticos originales y a la medida de una solución
                    específica. Se fundamenta en una sólida base matemática y 
                    computacional que permite la formación de profesionales más críticos 
                    y orientados al desarrollo de soluciones innovadoras.
                </p>
            </ParentCont>
        </div>
        <div>
            <Title title="Experiencia"/>
            <ParentCont>
                <div>
                    <FormExpTitle
                            title={"Soporte Técnico"}
                            location={"ServiBird, Panamá"}
                            initDate={"jun 2023"}
                            finalDate={"presente"}
                    />
                    <ul className='list-disc pl-8 text-sm sm:text-base'>
                        <li>
                            Proporcionar soporte técnico a las sucursales de Grupo Athens a nivel nacional, 
                            incluyendo Athens Pizza y Cinnabon, resolviendo incidencias relacionadas con 
                            hardware, software y redes.
                        </li>
                        <li>
                            Realizar mantenimiento preventivo y correctivo en los equipos de tecnología para 
                            garantizar su rendimiento óptimo
                        </li>
                        <li>
                            Colaborar estrechamente con el equipo de TI de Grupo Athens para implementar mejoras 
                            en la infraestructura tecnológica.
                        </li>
                        <li>
                            Documentar procedimientos y soluciones para su referencia futura y para facilitar la 
                            capacitación del personal.
                        </li>
                    </ul>
                </div>
                <div>
                    <FormExpTitle
                            title={"Practicante Desarrollador"}
                            location={"Hangar Copa Airlines, Panamá"}
                            initDate={"mar 2024"}
                            finalDate={"presente"}
                    />
                    <p className='text-sm sm:text-base'>
                        Actualmente, estoy realizando una práctica profesional en Copa Airlines, 
                        donde mi enfoque principal es el desarrollo de una aplicación en C# para la automatización 
                        de reportes. Este proyecto tiene como objetivo mejorar la eficiencia en la generación 
                        y gestión de informes dentro de la empresa. La aplicación está diseñada para optimizar 
                        los procesos operativos al agilizar la recopilación, análisis y presentación de datos 
                        relevantes. Al implementar esta solución tecnológica, se espera aumentar la productividad 
                        y reducir el tiempo dedicado a tareas manuales, lo que contribuirá significativamente a la 
                        mejora continua de los procesos en Copa Airlines.
                    </p>
                </div>
            </ParentCont>
        </div>
        <div>
            <Title title="Competencias"/>
            <div className='my-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12'>
                <CompApt
                    title={"Conocimiento en equipos de Hardware"}
                    grade={"100%"}
                />
                <CompApt
                    title={"Conocimientos sólidos de sistemas operativos Windows y Linux"}
                    grade={"100%"}
                />
                <CompApt
                    title={"Conocimientos sólidos de sistemas de facturación y gestión Invu."}
                    grade={"75%"}
                />
                <CompApt
                    title={"Programación de computadoras"}
                    grade={"100%"}
                />
                <CompApt
                    title={"Programación en dispositivos Android"}
                    grade={"100%"}
                />
                <CompApt
                    title={"Manejo de herramientas de ofimática"}
                    grade={"100%"}
                />
                <CompApt
                    title={"Conocimientos en infraestuctura de red"}
                    grade={"75%"}
                />
            </div>
        </div>
        <div>
            <Title title="Idioma"/>
            <div className='my-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12'>
                <CompApt
                    title={"Español"}
                    grade={"100%"}
                />
                <CompApt
                    title={"Inglés"}
                    grade={"75%"}
                />
            </div>
        </div>
        <div>
            <Title title="Pasatiempos"/>
            <ParentCont>
                <div className='mt-4'>
                    <div>
                        <span className='font-semibold text-sm sm:text-base'>Tocar instrumentos:</span>
                        <ul className='text-sm sm:text-base italic list-disc pl-8 my-2 grid sm:grid-cols-3 lg:grid-cols-6 gap-x-8 md:gap-x-12'>
                            <li>
                                Guitarra
                            </li>
                            <li>
                                Batería
                            </li>
                            <li>
                                Bajo
                            </li>
                            <li>
                                Piano
                            </li>
                        </ul>
                    </div>
                    <div className='mt-2'>
                        <span className='font-semibold text-sm sm:text-base'>Aprender Lenguajes de Programación</span>
                    </div>
                    <div className='mt-2'>
                        <span className='font-semibold text-sm sm:text-base'>Hacer Deporte</span>
                    </div>

                </div>

            </ParentCont>
        </div>
        <div>
            <Title title="Aptitudes"/>
            <ParentCont>
                <div className='mt-4'>
                    <span className='font-semibold text-sm sm:text-base'>Tecnologías Aprendidas</span>
                    <ul className='text-sm sm:text-base italic list-disc pl-8 my-2 grid sm:grid-cols-3 lg:grid-cols-6 gap-x-8 md:gap-x-12'>
                        <li>
                            C
                        </li>
                        <li>
                            C#
                        </li>
                        <li>
                            Java
                        </li>
                        <li>
                            SQL
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            Next.JS
                        </li>
                        <li>
                            Android Studio
                        </li>
                        <li>
                            .NET Core
                        </li>
                        <li>
                            Node.JS
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            Ubuntu Server
                        </li>
                        <li>
                            Blender
                        </li>
                    </ul>
                </div>
            </ParentCont>
            <div className='my-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12'>
                    <CompApt
                        title={"Comunicación efectiva para interactuar con personal técnico y no técnico"}
                        grade={"100%"}
                    />
                    <CompApt
                        title={"Capacidad para trabajar bajo presión y priorizar tareas según las necesidades operativas."}
                        grade={"100%"}
                    />
                    <CompApt
                        title={"Capacidad de análisis y resolución de problemas"}
                        grade={"100%"}
                    />
                    <CompApt
                        title={"Trabajo en equipo"}
                        grade={"100%"}
                    />
                </div>
        </div>
        <div>
            <Title title="Certificaciones"/>
            <ParentCont>
                <FormExpTitle
                title={"Microsoft Office Specialist - Office Powerpoint 2013"}
                location={"Panamá, Panamá"}
                initDate={"oct 2017"}
                /> 
                <FormExpTitle
                title={"Microsoft Office Specialist - Office Word 2013"}
                location={"Panamá, Panamá"}
                initDate={"nov 2018"}
                /> 
            </ParentCont>
        </div>
        <div className='mb-14'>
            <Title title="Voluntariado"/>
            <ParentCont>
                <FormExpTitle
                    title={"Tutor - Aritmética, Álgebra y Estadística"}  
                    location={"Ayudinga,  Panamá"}
                    initDate={"jun 2023"}
                    finalDate={"jun 2023"}
                />
                <p className='text-sm sm:text-base'>
                    Tutorías para ayudar a los jóvenes de primer ingreso que deseaban hacer el examen de 
                    admisión de la Universidad Tecnológica de Panamá.
                </p>
            </ParentCont>
        </div>
        <div>

        </div>
    </div>
  )
}

export default See_CV