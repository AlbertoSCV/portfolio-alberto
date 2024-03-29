"use client";
import React, {useState, useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion, useInView} from 'framer-motion'

const projectsInfo = []

const projectsInfo1 = [
  {
    id: 1,
    title: "Proyecto 1",
    desc: "Desc Proyecto 1",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Web"]
  },
  {
    id: 2,
    title: "Proyecto 2",
    desc: "Desc Proyecto 2",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Server"]
  },
  {
    id: 3,
    title: "Proyecto 3",
    desc: "Desc Proyecto 3",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Móvil"]
  },
  {
    id: 4,
    title: "Proyecto 4",
    desc: "Desc Proyecto 4",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Desktop"]
  },
  {
    id: 5,
    title: "Proyecto 5",
    desc: "Desc Proyecto 5",
    path: "/images/projects/project-template.png",
    gitUrl: "/",
    prevUrl: "/",
    tag: ["Todos", "Redes"]
  }
]

const ProjectSection = () => {

  const [tag, setTag] = useState("Todos");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const fiterTags = projectsInfo.filter((project) => 
    project.tag.includes(tag)
  );

  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {fiterTags.map((project, index) => 
        <motion.li 
          variants={cardVariants} 
          initial="initial" 
          animate={isInView ? 'animate' : 'initial'}
          transition={{duration: 0.8, delay: index * 0.8}}
          className="list-none" key={project.id}>
          <ProjectCard 
            key={project.id}
            title={project.title}
            desc={project.desc}
            imgUrl={project.path}
            gitUrl={project.gitUrl}
            prevUrl={project.prevUrl}
          />
        </motion.li>
        )}
      </ul>
    </section>
  )
}

export default ProjectSection