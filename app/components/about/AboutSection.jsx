"use client";
import Image from "next/image";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        {/* Infraestructura / Sistemas */}
        <li>Windows Server, Ubuntu, Debian</li>
        <li>Proxmox, VMware ESXi</li>
        <li>Redes (routing/switching, Wi-Fi, DNS, DHCP)</li>
        <li>Active Directory, RDP, SSH</li>
        <li>Docker & Docker Compose</li>
        {/* Desarrollo */}
        <li>Next.js, Node.js, Express</li>
        <li>Python, C#, Java</li>
        <li>REST / SOAP, OAuth2, OpenAPI 3</li>
        {/* Datos */}
        <li>SQL (PostgreSQL, MariaDB, MySQL, SQL Server)</li>
        <li>Power BI, reportes SQL</li>
        {/* IA / DevOps */}
        <li>LLMs, YOLO/OpenCV (visión)</li>
        <li>Bash scripting, Git</li>
        <li>Infraestructura en la nube (AWS Foundations)</li>
        <li>Ciberseguridad (Ethical Hacking – Cisco Academy)</li>
      </ul>
    ),
  },
  {
    title: "Formación",
    id: "education",
    content: (
      <ul className="font-semibold text-lg list-disc pl-4">
        <li>
          Formación Académica
          <ul>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              Universidade da Coruña — Máster en Inteligencia Artificial
              <span className="text-sm text-right text-[#ADB7BE]">
                sep 2025 – presente
              </span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              Universidad Tecnológica de Panamá — Ing. en Sistemas y Computación
              <span className="text-sm text-right text-[#ADB7BE]">
                2020 – 2024
              </span>
            </li>
          </ul>
        </li>
        <li className="pt-4">
          Certificaciones y cursos
          <ul>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              AI & Deep Learning con Python — Udemy
              <span className="text-sm text-right text-[#ADB7BE]">may 2025</span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              EF SET C1 (69/100)
              <span className="text-sm text-right text-[#ADB7BE]">nov 2024</span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              Microsoft Office Specialist (Word/PowerPoint/Excel 2013)
              <span className="text-sm text-right text-[#ADB7BE]">2017–2019</span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              AWS Academy — Cloud Foundations (en curso)
              <span className="text-sm text-right text-[#ADB7BE]">2025</span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              Cisco Academy — Ethical Hacking (en curso)
              <span className="text-sm text-right text-[#ADB7BE]">2025</span>
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Experiencia",
    id: "experience",
    content: (
      <ul className="font-semibold text-lg list-disc pl-4">
        <li>
          Experiencia Laboral
          <ul>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              Freelancer — Desarrollo, Datos, IA & Servidores
              <span className="text-sm text-right text-[#ADB7BE]">
                2021 – presente
              </span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              US Pharmacy Group — Soporte Técnico & Desarrollador Senior
              <span className="text-sm text-right text-[#ADB7BE]">
                ene 2025 – ago 2025
              </span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              ServiBird (Grupo Athens) — Soporte Técnico
              <span className="text-sm text-right text-[#ADB7BE]">
                jun 2023 – ene 2025
              </span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              Copa Airlines — Desarrollador en Prácticas
              <span className="text-sm text-right text-[#ADB7BE]">
                abr 2024 – sep 2024
              </span>
            </li>
          </ul>
        </li>
        <li className="pt-4">
          Voluntariado
          <ul>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              Fanlyc — Relevo por la Vida
              <span className="text-sm text-right text-[#ADB7BE]">oct 2024</span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              Centro Las 500 — Soporte Técnico
              <span className="text-sm text-right text-[#ADB7BE]">may 2024</span>
            </li>
            <li className="pl-4 mt-2 text-base font-normal flex justify-between">
              Ayudinga — Tutorías (Aritmética y Álgebra)
              <span className="text-sm text-right text-[#ADB7BE]">jun 2023</span>
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section id="about" className="text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="md:grid md:grid-cols-2 place-self-center gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16"
      >
        <Image
          src="/images/about.png"
          alt="pc"
          width={350}
          height={350}
          className="hidden md:block"
        />
        <div className="mt-8 md:mt-0 flex flex-col h-full">
          <h2 className="text-3xl font-bold">Resumen</h2>
          <p className="text-base lg:text-lg text-[#ADB7BE] text-justify">
            Ingeniero en Sistemas con experiencia integral en infraestructura,
            redes y virtualización (Windows Server, Linux, Proxmox, VMware), y
            en desarrollo web con Next.js y Python. Integración de APIs
            REST/SOAP (OAuth2, OpenAPI 3) con ERP Acumatica y manejo de bases
            de datos SQL (PostgreSQL, MariaDB, MySQL, SQL Server). Foco en
            ciberseguridad y mejores prácticas, automatización con Bash y
            despliegue con Docker/Compose. Experiencia en IA aplicada (LLMs,
            visión por computadora con YOLO/OpenCV) y analítica con Power BI.
            Formación continua en AWS Cloud Foundations y Ethical Hacking.
          </p>

          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Habilidades
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Formación
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experiencia
            </TabButton>
          </div>

          <div className="mt-6">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;