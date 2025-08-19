"use client";
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion, useInView} from 'framer-motion'

const projectsInfo = [
  {
    id: 9,
    title: "Formulario de Devoluciones USPG",
    desc: "Web en Next.js para devoluciones de productos farmacéuticos, integrada mediante API REST al ERP de la empresa para automatizar procesos.",
    path: "/images/projects/return-form.jpg",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Web", "Móvil"],
    type: "private"
  },
  {
    id: 8,
    title: "Cámara de Emisores de Valores de Panamá",
    desc: "Actualización de la página web de la Cámara de Emisores de Valores de Panamá con una nueva versión desarrollada en Next.js (en desarrollo).",
    path: "/images/projects/emisores.jpg",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Web", "Móvil"],
    type: "private"
  },
  {
    id: 7,
    title: "Proxmox | HomeLab",
    desc: "Laboratorio personal con Proxmox para virtualización, servicios en Docker y compartición de archivos mediante Samba.",
    path: "/images/projects/proxmox.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Server", "Redes"],
    type: "private"
  },
  {
    id: 6,
    title: "AgroRed",
    desc: "Plataforma de financiamiento colaborativo para proyectos agrónomos y ganaderos desarrollada en Next.js.",
    path: "/images/projects/agrored.jpg",
    gitUrl: "https://github.com/AlbertoSCV/ecomm-quantum-coders",
    prevUrl: "https://ecomm-quantum-coders.vercel.app/",
    tag: ["Todos", "Web"],
    type: "public"
  },
  {
    id: 3,
    title: "Autorizaciones y Rosters",
    desc: "Sistema de manejo de rosters y autorizaciones del personal de mantenimiento técnico de la aerolínea Copa Airlines.",
    path: "/images/projects/auth-rost.jpg",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Desktop"],
    type: "private"
  },
  {
    id: 5,
    title: "Visualización de Autorizaciones",
    desc: "Sistema de visualización de autorizaciones del personal de mantenimiento técnico de Copa Airlines desarrolado con Next.js.",
    path: "/images/projects/copa-auth.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Web", "Móvil"],
    type: "private"
  },
  {
    id: 1,
    title: "Portafolio",
    desc: "Es una muestra de mis proyectos de programación, destacando mis habilidades y experiencia en desarrollo.",
    path: "/images/projects/portafolio.png",
    gitUrl: "https://github.com/AlbertoSCV/portfolio-alberto",
    prevUrl: "/",
    tag: ["Todos", "Web"],
    type: "public"
  },
  {
    id: 2,
    title: "ClimateChangeApp",
    desc: "Aplicación móvil sobre noticias del cambio climático, permite autenticación, inicio anónimo y agregar comentarios al estar autenticado.",
    path: "/images/projects/climate-app.jpg",
    gitUrl: "https://github.com/AlbertoSCV/ClimateChangeApp",
    prevUrl: "https://github.com/AlbertoSCV/ClimateChangeApp/blob/master/README.md",
    tag: ["Todos", "Móvil"],
    type: "public"
  },
  {
    id: 4,
    title: "Sistema Solar - Three.js",
    desc: "Sistema solar interactivo utilizando Express, Node.js y Three.js en el frontend.",
    path: "/images/projects/threejs.jpg",
    gitUrl: "https://github.com/AlbertoSCV/solar-system",
    prevUrl: "https://solar-system.albertosomoza.net",
    tag: ["Todos", "Web", "Server"],
    type: "public"
  }
]

const ProjectSection = () => {
 
  const MotionProjectCard = motion(ProjectCard);

  const [tag, setTag] = useState("Todos");
  const [restartAnimation, setRestartAnimation] = useState(0);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setRestartAnimation(restartAnimation+1);
  };

  const fiterTags = projectsInfo.filter((project) => 
    project.tag.includes(tag)
  );

  const ref = useRef(null);
  const isInView = useInView(ref);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  }

  return (
    <section id='proyects'>
      <h2 className="text-center text-4xl font-bold text-white my-4">
        Proyectos
      </h2>
      <div className="my-8 grid grid-cols-2 sm:grid sm:grid-cols-3 md:flex md:flex-row justify-center items-center md:gap-2">
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Todos"}
          name={"Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Web"}
          name={"Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Móvil"}
          name={"Móvil"}
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Desktop"}
          name={"Desktop"}
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Server"}
          name={"Server"}
        />
        <ProjectTag
          onClick={handleTagChange}
          isSelected={tag === "Redes"}
          name={"Redes"}
        />
      </div>
      <div ref={ref} key={tag}>
      {
            fiterTags < 1 &&
              <div key={""} className='flex flex-row-3 justify-center items-center'>
                <motion.p 
                initial={{opacity:0}}
                animate={{opacity:100}}
                transition={{duration:1, delay:0.2}}
                className='text-center text-sm sm:text-base'>
                  ¡Hola! Parece que esta sección está un poco vacía 
                  en este momento, ¡pero no te preocupes! 
                  <br />
                  Siéntete 
                  libre de explorar otras categorías para descubrir 
                  más sobre mis proyectos y experiencias. 
                  <br />
                  Estoy 
                  constantemente trabajando en nuevas ideas y proyectos 
                  emocionantes, así que asegúrate de volver pronto para 
                  ver las actualizaciones. 
                  <br />
                  ¡Gracias por tu interés y 
                  paciencia!
                </motion.p>
              </div>
          }
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">    
          {fiterTags.map((project, index) => {
              return(
                <motion.li 
                  variants={cardVariants} 
                  initial="initial" 
                  animate={(isInView || restartAnimation>0) ? 'animate' : 'initial'}
                  transition={{duration: 0.8, delay: index * 0.6}}
                  className="list-none" key={project.id}>
                  <MotionProjectCard
                    key={project.id}
                    title={project.title}
                    desc={project.desc}
                    imgUrl={project.path}
                    gitUrl={project.gitUrl}
                    prevUrl={project.prevUrl}
                    type={project.type}
                    />
                </motion.li>
              );
          })}
        </ul>
      </div>
    </section>
  )
}

export default ProjectSection