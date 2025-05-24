"use client";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";
import "animate.css";
import "@fontsource/poppins";
import Link from "next/link";

export default function Home() {
  const socialLinks = [
    {
      icon: <FaEnvelope />,
      link: "mailto:juanpi.fogliaco.freelance@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/juan-pablo-fogliaco-b28054194/",
    },
    { icon: <FaWhatsapp />, link: "https://wa.me/59897274330" },
    { icon: <FaGithub />, link: "https://github.com/JuanpiiFogliacoTech" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./CV_Juan_Pablo_Fogliaco_ES.pdf"; // Asegúrate de colocar tu archivo en la carpeta "public"
    link.download = "Juan_Pablo_Fogliaco_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
 <div className="bg-gradient-to-r from-blue-100 via-white to-blue-300 text-gray-900 min-h-screen flex flex-col items-center font-[Poppins]">
  {/* Hero Section */}
  <header className="flex flex-col items-center justify-center text-center py-20 px-4">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold animate__animated animate__fadeInDown text-blue-800">
      Juan Pablo Fogliaco
    </h1>

    <p className="text-lg md:text-2xl mt-4 animate__animated animate__fadeIn animate__delay-1s text-blue-600">
      Technical Team Lead / Software Engineer
    </p>
    <p className="text-blue-500 mt-2 animate__animated animate__fadeIn animate__delay-1s ellipsis">
      Uruguay, Maldonado, Piriápolis
    </p>
    <p className="text-blue-500 mt-2 animate__animated animate__fadeIn animate__delay-1s ellipsis">
      Cel: +598 9727 4330
    </p>
    <button
      onClick={handleDownload}
      className="cursor-pointer mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2 transition-transform transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s"
    >
      <FaDownload /> Descargar CV
    </button>
    <p className="text-gray-500 mt-4 animate__animated animate__fadeIn animate__delay-1s text-sm">
      Para más información, puedes descargar el CV o contactarme por correo,
      LinkedIn o WhatsApp.
    </p>
  </header>

  {/* Sobre Mí */}
  <section className="max-w-3xl mx-auto text-gray-700 animate__animated animate__fadeInUp animate__delay-2s flex flex-row items-center justify-center flex-wrap p-4">
    <h2 className="text-3xl font-semibold text-center mb-6 text-blue-700">
      Sobre Mí
    </h2>
    <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-lg border border-blue-400">
      <p>
        Soy un desarrollador full stack con más de 6 años de trayectoria,
        combinando formación autodidacta con experiencia profesional real.
        Inicié con HTML, CSS y JavaScript, y hoy lidero proyectos complejos
        utilizando tecnologías como{" "}
        <span className="font-semibold">
          React.js, Node.js, NestJS y MySQL, aplicando patrones de diseño y arquitectura de software
        </span>
        .
      </p>
      <p className="mt-4">
        En los últimos años, me consolidé como{" "}
        <span className="font-semibold">
          Technical Team Lead en Interbanking
        </span>
        , una de las plataformas fintech más importantes de Argentina, y
        actualmente impulso mis propias ideas de automatización con{" "}
        <span className="font-semibold">NestJS, React, IA, n8n y Supabase</span>. Mi
        enfoque actual combina visión de producto, arquitectura escalable y
        automatización inteligente.
      </p>
      <p className="mt-4">
        Además de mi paso académico por la{" "}
        <Link className="italic" href="https://www.frd.utn.edu.ar/">
          UTN
        </Link>{" "}
        y la{" "}
        <Link className="italic" href="https://www.unsada.edu.ar">
          UNSADA
        </Link>
        , me he formado intensivamente en plataformas como{" "}
        <span className="font-semibold">Udemy, Platzi y AWS Academy</span>,
        manteniéndome siempre a la vanguardia del desarrollo web moderno.
      </p>
    </div>
  </section>

  {/* Experiencia */}
  <section className="max-w-5xl mx-auto px-4 py-32 text-gray-800 animate__animated animate__fadeInUp animate__delay-4s">
    <h2 className="text-3xl font-semibold text-center mb-6 text-blue-800">
      Experiencia
    </h2>
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-lg border border-blue-400">
        <Link href="https://www.interbanking.com">
          <h3 className="text-xl font-semibold text-blue-700">
            Interbanking SA (2022 - Actualidad)
          </h3>
        </Link>
        <p className="italic">Technical Team Lead End to End</p>
        <p className="font-semibold text-sm mt-2">
          Actividades principales:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
          <li>Planificación estratégica y alineación con objetivos de negocio.</li>
          <li>Análisis, estimación y diseño técnico.</li>
          <li>Gestión y mentoría de equipos de desarrollo.</li>
          <li>Priorización y resolución de incidentes en producción.</li>
          <li>Desarrollo de frontend y backend.</li>
          <li>Arquitectura de microfrontends y microservicios.</li>
          <li>Implementaciones a producción.</li>
          <li>
            Gestión de backlog, creación de tareas, esfuerzos y definición de funcionalidades.
          </li>
        </ul>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg border border-blue-400">
        <Link href="https://recursiva.global/">
          <h3 className="text-xl font-semibold text-blue-700">
            Recursiva SA (2020 - 2022)
          </h3>
        </Link>

        <p className="italic">
          Developer Fullstack SSR y Tech Lead Frontend
        </p>
        <p className="font-semibold text-sm mt-2">
          Actividades principales:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
          <li>
            Desarrollo y mantenimiento de aplicaciones web en React.js y
            Node.js.
          </li>
          <li>
            Gestión de equipo de desarrollo frontend y backend, asignación y seguimiento de tareas.
          </li>
          <li>Diseño y desarrollo de la arquitectura del sistema.</li>
        </ul>
        <p className="font-semibold text-sm mt-2">
          Proyectos en los que trabajé:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
          <li><Link className="text-blue-500" href={"https://www.gdmseeds.com/"}>GDM</Link></li>
          <li><Link className="text-blue-500" href={"https://landing.totalcoin.com/"}>TotalCoin</Link></li>
          <li><Link className="text-blue-500" href={"https://aira-system.com/"}>AiraSystem</Link></li>
          <li><Link className="text-blue-500" href={"https://www.koandina.com/"}>Coca-Cola Andina - Chile</Link></li>
        </ul>
      </div>
    </div>
  </section>

  {/* Contacto */}
  <footer className="text-center py-8 flex flex-col items-center justify-center">
    <div className="p-6  mb-8 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold text-blue-800">Contacto</h2>
      <p className="text-gray-500 mt-2 text-sm">
        Para más información, puedes descargar el CV o contactarme por correo,
        LinkedIn o WhatsApp.
      </p>
      <button
        onClick={handleDownload}
        className="cursor-pointer mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 flex items-center gap-2"
      >
        <FaDownload /> Descargar CV
      </button>
    </div>

    <div className="flex justify-center space-x-6 mt-4">
      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="text-blue-500 hover:text-blue-700 text-2xl transition-transform transform hover:scale-110 animate__animated animate__pulse animate__infinite"
        >
          {item.icon}
        </a>
      ))}
    </div>
  </footer>
</div>

  );
}
