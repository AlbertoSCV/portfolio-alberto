"use client";
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion, useInView} from 'framer-motion'

const projectsInfo = [
  {
    id: 1,
    title: "Portafolio",
    desc: "Es una muestra de mis proyectos de programación, destacando mis habilidades y experiencia en desarrollo.",
    path: "/images/projects/portfolio.png",
    gitUrl: "https://github.com/AlbertoSCV/portfolio-alberto",
    prevUrl: "/",
    tag: ["Todos", "Web"],
    type: "public"
  },
  {
    id: 2,
    title: "ClimateChangeApp",
    desc: "Aplicación móvil sobre noticias del cambio climático, permite autenticación, inicio anónimo y agregar comentarios al estar autenticado.",
    path: "/images/projects/climate-app.png",
    gitUrl: "https://github.com/AlbertoSCV/ClimateChangeApp",
    prevUrl: "https://github.com/AlbertoSCV/ClimateChangeApp/blob/master/README.md",
    tag: ["Todos", "Móvil"],
    type: "public"
  },
  {
    id: 3,
    title: "Autorizaciones y Rosters",
    desc: "Proyecto actualmente en desarrollo en la compañia Copa Airlines, es de código privado por lo que no es accesible.",
    path: "/images/projects/auth-rost.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Desktop"],
    type: "private"
  }
]

const projectsInfo1 = [
  {
    id: 1,
    title: "Proyecto 1",
    desc: "Desc Proyecto 1",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Web"],
    type: "public"
  },
  {
    id: 2,
    title: "Proyecto 2",
    desc: "Desc Proyecto 2",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Server"],
    type: "public"
  },
  {
    id: 3,
    title: "Proyecto 3",
    desc: "Desc Proyecto 3",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Móvil"],
    type: "public"
  },
  {
    id: 4,
    title: "Proyecto 4",
    desc: "Desc Proyecto 4",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Desktop"],
    type: "public"
  },
  {
    id: 5,
    title: "Proyecto 5",
    desc: "Desc Proyecto 5",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Redes"],
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
                <p className='text-center text-sm sm:text-base'>
                ¡Hola! Parece que esta sección está un poco vacía 
                en este momento, ¡pero no te preocupes! Siéntete 
                libre de explorar otras categorías para descubrir 
                más sobre mis proyectos y experiencias. Estoy 
                constantemente trabajando en nuevas ideas y proyectos 
                emocionantes, así que asegúrate de volver pronto para 
                ver las actualizaciones. ¡Gracias por tu interés y 
                paciencia!
                </p>
              </div>
          }
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">    
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