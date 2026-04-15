"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Ticket,
  ClipboardList,
  Building2,
  Sprout,
  Handshake,
  Lightbulb,
  Globe,
  Heart,
  Cog,
  Mail,
  MessageCircle,
  ChevronRight,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Add Montserrat font
const montserratFont = "font-['Montserrat',sans-serif]"

const eventoReprogramado = false

type Sede = "guadalajara" | "lapaz" | null

export default function LandingPageV0() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [showAllVideos, setShowAllVideos] = useState(false)
  const [showAllVideosLaPaz, setShowAllVideosLaPaz] = useState(false)
  const [showModal, setShowModal] = useState(eventoReprogramado)
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null)
  const [selectedSede, setSelectedSede] = useState<Sede>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Load Montserrat font with weights 700 and 900 - explicitly normal style only
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;0,900&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  useEffect(() => {
    setPortalTarget(document.body)
  }, [])

  const isVisible = (id: string) => visibleElements.has(id)

  const handleSelectSede = (sede: Sede) => {
    setSelectedSede(sede)
  }

  const comunicadoModal = showModal && portalTarget
    ? createPortal(
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.6)",
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "520px",
              width: "90%",
              borderRadius: "16px",
              overflow: "visible",
              boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
              background: "#fff",
              padding: "8px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                top: "-12px",
                right: "-12px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#012787",
                color: "#fff",
                border: "3px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold",
                lineHeight: 1,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.15)"
                e.currentTarget.style.background = "#d2dd0a"
                e.currentTarget.style.color = "#012787"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"
                e.currentTarget.style.background = "#012787"
                e.currentTarget.style.color = "#fff"
              }}
              aria-label="Cerrar comunicado"
            >
              ✕
            </button>
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/comunicado-jornada.jpg`}
              alt="Evento Reprogramado - 5a Jornada de Capacitación ANPR México - Nueva fecha: 28 de abril"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>,
        portalTarget
      )
    : null

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header />

      {comunicadoModal}

      {/* SECCIÓN PRINCIPAL (HÉROE) - Genérico para ambas sedes */}
      <header className="relative min-h-[85vh] flex items-center justify-center text-center text-white px-4 py-16 overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/foto-201-20copia.jpeg')`,
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: "transform",
          }}
        />
        {/* Halftone overlay effect */}
        <div
          className="absolute inset-0 z-[5]"
          style={{
            background: `radial-gradient(circle, #0040af 1.5px, transparent 1.5px)`,
            backgroundSize: '5px 5px',
            opacity: 0.55,
            mixBlendMode: 'multiply',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0040af] opacity-50 z-[6]"></div>

        {/* Decorative elements */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-turquesa.png`}
          alt=""
          className="absolute top-10 left-4 md:left-8 w-12 md:w-20 opacity-30 z-10 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-amarilla.png`}
          alt=""
          className="absolute top-12 right-4 md:right-8 w-14 md:w-24 opacity-25 z-10 animate-float transform rotate-45"
          style={{ animationDelay: "1s" }}
        />
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-verde.png`}
          alt=""
          className="absolute bottom-24 left-4 md:left-12 w-12 md:w-18 opacity-30 z-10 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea1.png`}
          alt=""
          className="absolute top-1/4 right-0 w-24 md:w-40 opacity-20 z-10"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea2.png`}
          alt=""
          className="absolute bottom-1/3 left-0 w-20 md:w-32 opacity-20 z-10 transform rotate-180"
        />
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4">
          {/* Logo Section */}
          <div className="mb-6 animate-fade-in-up animation-delay-200"></div>

          {/* Main Title */}
          <div className="mb-6 animate-fade-in-up animation-delay-400 flex justify-center">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-jornada.png`}
              alt="Jornada de Capacitación ANPR México"
              className="h-auto object-contain"
              style={{
                width: "clamp(180px, 24vw, 320px)",
                filter: "drop-shadow(0px 4px 12px rgba(0,0,0,0.6)) drop-shadow(0px 2px 5px rgba(0,0,0,0.4))",
              }}
            />
          </div>

          {/* Sede Selection Cards */}
          <div className="animate-fade-in-up animation-delay-600">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 font-['Montserrat',sans-serif] drop-shadow-lg" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              Selecciona tu Sede
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* TARJETA GUADALAJARA */}
              <div
                onClick={() => handleSelectSede("guadalajara")}
                className={`relative cursor-pointer bg-white backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] px-6 pt-6 pb-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 flex flex-col text-left text-gray-800 ${
                  selectedSede === "guadalajara"
                    ? "border-[3px] border-[#57d476] shadow-[0_0_20px_rgba(87,212,118,0.3)] ring-2 ring-[#57d476]/30"
                    : "border-[3px] border-transparent hover:border-white/40"
                }`}
              >
                {selectedSede === "guadalajara" && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#57d476] text-white text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Sede seleccionada
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#012787] mb-2 font-['Montserrat',sans-serif]">
                  5ª Jornada de Capacitación ANPR
                </h3>

                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-[#012787] flex-shrink-0" />
                    <span className="font-semibold">Guadalajara, Jalisco</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Building2 className="w-4 h-4 text-[#012787] flex-shrink-0" />
                    <span>Jardín de Eventos del Bosque Los Colomos</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CalendarDays className="w-5 h-5 text-[#012787] flex-shrink-0" />
                    <span>Martes 28 de abril de 2026</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://anpr.org.mx/register/5-jornada-de-capacitacion-guadalajara-jalisco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#57d476] hover:bg-[#45c264] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-sm"
                  >
                    Regístrate gratis
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelectSede("guadalajara")
                      setTimeout(() => {
                        const el = document.getElementById("detalles-evento")
                        if (el) {
                          const y = el.getBoundingClientRect().top + window.scrollY - 80
                          window.scrollTo({ top: y, behavior: "smooth" })
                        }
                      }, 100)
                    }}
                    className={`flex-1 inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-sm ${
                      selectedSede === "guadalajara"
                        ? "bg-[#012787] text-white"
                        : "bg-white text-[#012787] border-2 border-[#012787] hover:bg-[#012787] hover:text-white"
                    }`}
                  >
                    Ver información
                  </button>
                </div>
              </div>

              {/* TARJETA LA PAZ */}
              <div
                onClick={() => handleSelectSede("lapaz")}
                className={`relative cursor-pointer bg-white backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.25)] px-6 pt-6 pb-6 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:-translate-y-1 flex flex-col text-left text-gray-800 ${
                  selectedSede === "lapaz"
                    ? "border-[3px] border-[#57d476] shadow-[0_0_20px_rgba(87,212,118,0.3)] ring-2 ring-[#57d476]/30"
                    : "border-[3px] border-transparent hover:border-white/40"
                }`}
              >
                {selectedSede === "lapaz" && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#57d476] text-white text-xs font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Sede seleccionada
                  </div>
                )}

                <h3 className="text-xl font-bold text-[#012787] mb-2 font-['Montserrat',sans-serif]">
                  6ª Jornada de Capacitación ANPR
                </h3>

                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="w-5 h-5 text-[#012787] flex-shrink-0" />
                    <span className="font-semibold">La Paz, Baja California Sur</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Building2 className="w-4 h-4 text-[#012787] flex-shrink-0" />
                    <span>Centro Deportivo Municipal "El piojillo"</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CalendarDays className="w-5 h-5 text-[#012787] flex-shrink-0" />
                    <span>Jueves 30 de abril de 2026</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://anpr.org.mx/register/6-jornada-de-capacitacion-la-paz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#57d476] hover:bg-[#45c264] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-sm"
                  >
                    Regístrate gratis
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelectSede("lapaz")
                      setTimeout(() => {
                        const el = document.getElementById("detalles-evento")
                        if (el) {
                          const y = el.getBoundingClientRect().top + window.scrollY - 80
                          window.scrollTo({ top: y, behavior: "smooth" })
                        }
                      }, 100)
                    }}
                    className={`flex-1 inline-flex items-center justify-center gap-2 font-bold py-3 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-sm ${
                      selectedSede === "lapaz"
                        ? "bg-[#012787] text-white"
                        : "bg-white text-[#012787] border-2 border-[#012787] hover:bg-[#012787] hover:text-white"
                    }`}
                  >
                    Ver información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-in animation-delay-1000">
          <div className="animate-bounce">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <main id="sedes">
        {/* ============================================ */}
        {/* CONTENIDO DINÁMICO DE SEDES */}
        {/* ============================================ */}
        {!selectedSede && (
          <section className="py-12 px-4" style={{ backgroundColor: "#f3f8ff" }}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600">Haz clic en la sede de tu interés para ver toda la información del evento.</p>
            </div>
          </section>
        )}

        {/* ============================================ */}
        {/* CONTENIDO DINÁMICO - GUADALAJARA */}
        {/* ============================================ */}
        {selectedSede === "guadalajara" && (
          <div className="animate-fade-in-up">
            {/* SECCIÓN DE DETALLES DEL EVENTO - GUADALAJARA */}
            <section id="detalles-evento" className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#00338d" }}>
              {/* Decorative elements */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-amarilla.png`}
                alt=""
                className="absolute top-10 right-10 w-20 md:w-32 opacity-30 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-verde.png`}
                alt=""
                className="absolute bottom-10 left-10 w-16 md:w-24 opacity-30 animate-float transform -scale-x-100"
                style={{ animationDelay: "1.5s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea3.png`}
                alt=""
                className="absolute top-1/2 left-0 w-24 md:w-40 opacity-20 transform -translate-y-1/2"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea1.png`}
                alt=""
                className="absolute bottom-20 right-0 w-32 md:w-48 opacity-20 transform rotate-45"
              />

              <div className="max-w-6xl mx-auto relative z-10">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white text-center mb-4 font-['Montserrat',sans-serif]"
                >
                  Detalles del Evento
                </h2>
                <p className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 font-['Montserrat',sans-serif]" style={{ color: "#57d476", textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}>
                  Guadalajara, Jalisco
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                  {[
                    {
                      icon: MapPin,
                      title: "Ubicación",
                      content: "Jardín de Eventos del Bosque Los Colomos,\nGuadalajara, Jalisco",
                      iconColor: "#d5df00",
                    },
                    {
                      icon: Users,
                      title: "Aforo",
                      content: "50 personas ¡Cupo limitado!",
                      iconColor: "#57d476",
                    },
                    {
                      icon: ClipboardList,
                      title: "Incluye",
                      content: "Ponencias y recorrido en el Jardín de Eventos del Bosque Los Colomos",
                      iconColor: "#00dfbf",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <item.icon className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: item.iconColor }} />
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-white" style={{ whiteSpace: "pre-line" }}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN ¿POR QUÉ ASISTIR? */}
            <section className="py-20 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left side - Image */}
                  <div className="flex justify-center">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/anpr-logo.png`}
                      alt="5.ª Jornada de Capacitación ANPR México - Guadalajara, Jalisco 2026"
                      className="w-full max-w-xs h-auto object-contain"
                    />
                  </div>

                  {/* Right side - Content */}
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#012787] mb-7 font-['Montserrat',sans-serif]">
                      ¡La ANPR México llegará a Guadalajara, Jalisco!
                    </h2>

                    <div className="border-l-4 border-[#012787] text-gray-700 p-6 rounded-r-lg text-left shadow-sm mb-16 bg-transparent">
                      <p className="font-bold mb-6 ml-2.5">
                        ¿Trabajas en el sector público, en desarrollo urbano o en la gestión de espacios públicos?
                      </p>
                      <p className="font-normal my-0 px-2.5">
                        Te invitamos a participar en una jornada de capacitación gratuita, especialmente pensada para
                        brindarte herramientas prácticas y conocimientos esenciales que te ayudarán a mejorar la planeación,
                        operación y diseño de parques y espacios públicos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN ¿QUÉ PUEDES ESPERAR? */}
            <section className="py-20 px-4" style={{ backgroundColor: "#f3f8ff" }}>
              <div className="max-w-6xl mx-auto">
                <div className="text-center">
                  <p className="font-bold text-4xl mb-14 text-[rgba(7,51,141,1)]">
                    ¿Qué Puedes Esperar?
                  </p>
                  <div className="grid md:grid-cols-3 gap-10">
                    {[
                      {
                        icon: Sprout,
                        title: "Conocimiento de vanguardia",
                        content: "Aprende de los líderes del sector sobre las últimas tendencias y mejores prácticas.",
                        image: "/images/conocimiento-vanguardia.jpg",
                      },
                      {
                        icon: Handshake,
                        title: "Networking estratégico",
                        content: "Conecta con colegas y profesionales de todo el país con tus mismos desafíos y pasiones.",
                        image: "/images/networking.jpg",
                      },
                      {
                        icon: Lightbulb,
                        title: "Soluciones innovadoras",
                        content:
                          "Encuentra respuestas prácticas a los problemas comunes en la gestión de parques y recreación.",
                        image: "/images/soluciones.jpg",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="relative text-center group"
                      >
                        {/* Image Container */}
                        <div className="relative h-48 mb-6 rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                          <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-[#012787]" />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#012787] mb-3 font-['Montserrat',sans-serif]">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN VIDEO GALLERY */}
            <section className="py-20 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#012787] text-center mb-12 font-['Montserrat',sans-serif]"
                  >
                    Conoce Más Sobre Nuestras Jornadas
                  </h3>

                  {(() => {
                    const allVideos = [
                      {
                        title: "Aguascalientes",
                        videoId: "YT5dFUaeTA4",
                        videoUrl: "https://youtu.be/YT5dFUaeTA4",
                        description: "Revive los mejores momentos de nuestra jornada en Aguascalientes",
                        views: "Nuevo",
                        duration: "1 semana",
                      },
                      {
                        title: "Chihuahua",
                        videoId: "_5ESDNQRfZ0",
                        videoUrl: "https://youtu.be/_5ESDNQRfZ0",
                        description: "Revive los mejores momentos de nuestra jornada en Chihuahua",
                        views: "Nuevo",
                        duration: "2 semanas",
                      },
                      {
                        title: "Hermosillo",
                        videoId: "-U6Ml-xubRo",
                        videoUrl: "https://youtu.be/-U6Ml-xubRo",
                        description: "Revive los mejores momentos de nuestra jornada en Hermosillo",
                        views: "18 visualizaciones",
                        duration: "6 días",
                      },
                      {
                        title: "Querétaro",
                        videoId: "OHaeknz0Ei4",
                        videoUrl: "https://youtu.be/OHaeknz0Ei4",
                        description: "Experiencias y aprendizajes de nuestra jornada en Querétaro",
                        views: "111 visualizaciones",
                        duration: "3 meses",
                      },
                    ];
                    const recentVideos = allVideos.slice(0, 2);
                    const olderVideos = allVideos.slice(2);

                    return (
                      <>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                          {recentVideos.map((video, index) => (
                            <div
                              key={video.videoId}
                              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group"
                            >
                              <div className="relative">
                                <div className="relative w-full h-48 bg-black">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${video.videoId}?controls=0&showinfo=0&rel=0&autoplay=0&mute=1&loop=1&playlist=${video.videoId}&start=10&end=30`}
                                    title={video.title}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />

                                  <div
                                    className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center cursor-pointer"
                                    onClick={() => window.open(video.videoUrl, "_blank")}
                                  >
                                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                      <svg className="w-6 h-6 text-[#012787] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>

                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 z-10">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                  </svg>
                                  YouTube
                                </div>

                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Ver video completo
                                </div>
                              </div>

                              <div className="p-6">
                                <h4 className="text-lg font-bold text-[#012787] mb-2 group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                                  {video.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{video.description}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>{video.views}</span>
                                  <span>hace {video.duration}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Accordion for older videos */}
                        <div
                          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto overflow-hidden transition-all duration-500 ease-in-out ${
                            showAllVideos ? "max-h-[2000px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          {olderVideos.map((video) => (
                            <div
                              key={video.videoId}
                              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group opacity-100"
                            >
                              <div className="relative">
                                <div className="relative w-full h-48 bg-black">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${video.videoId}?controls=0&showinfo=0&rel=0&autoplay=0&mute=1&loop=1&playlist=${video.videoId}&start=10&end=30`}
                                    title={video.title}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />

                                  <div
                                    className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center cursor-pointer"
                                    onClick={() => window.open(video.videoUrl, "_blank")}
                                  >
                                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                      <svg className="w-6 h-6 text-[#012787] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>

                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 z-10">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                  </svg>
                                  YouTube
                                </div>

                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Ver video completo
                                </div>
                              </div>

                              <div className="p-6">
                                <h4 className="text-lg font-bold text-[#012787] mb-2 group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                                  {video.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{video.description}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>{video.views}</span>
                                  <span>hace {video.duration}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="text-center mt-12">
                          <button
                            onClick={() => setShowAllVideos(!showAllVideos)}
                            className="inline-flex items-center gap-2 bg-[#012787] hover:bg-[#d2dd0a] text-white hover:text-[#012787] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            {showAllVideos ? "Ver menos videos" : "Ver más videos"}
                            <svg
                              className={`w-4 h-4 transition-transform duration-300 ${showAllVideos ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </section>

            {/* SECCIÓN PONENTES - GUADALAJARA */}
            <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#012787" }}>
              {/* Decorative elements */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-turquesa.png`}
                alt=""
                className="absolute top-16 left-8 w-16 md:w-28 opacity-40 animate-float"
                style={{ animationDelay: "0s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-verde.png`}
                alt=""
                className="absolute top-1/3 right-12 w-20 md:w-32 opacity-35 animate-float transform rotate-12"
                style={{ animationDelay: "1s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-amarilla.png`}
                alt=""
                className="absolute bottom-20 left-16 w-18 md:w-28 opacity-35 animate-float transform -rotate-45"
                style={{ animationDelay: "2s" }}
              />
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea2.png`} alt="" className="absolute top-0 right-0 w-28 md:w-44 opacity-25" />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea3.png`}
                alt=""
                className="absolute bottom-0 left-0 w-24 md:w-40 opacity-25 transform rotate-180"
              />

              <div className="max-w-7xl mx-auto text-center relative z-10">
                <h2
                  className="text-3xl md:text-4xl font-bold text-white mb-16 font-['Montserrat',sans-serif]"
                >
                  Conoce a los Expertos
                </h2>

                {/* Primera fila - 3 expertos */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-8">
                  {[
                    {
                      image: "/images/experts/maria-isabel.jpg",
                      name: "Isabel Velázquez",
                      role: "Directora General",
                      company: "Parques de México",
                    },
                    {
                      image: "/images/experts/manuel-plascencia.jpg",
                      name: "Manuel Plascencia",
                      role: "Director General",
                      company: "Grupo BUGY",
                    },
                    {
                      image: "/images/experts/vitoria.jpg",
                      name: "Vitoria Martín",
                      role: "Directora General",
                      company: "ANPR México",
                    },
                  ].map((expert, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 w-full max-w-[260px] text-center transition-all duration-700 hover:-translate-y-3 hover:scale-105 font-normal group border border-gray-100"
                    >
                      <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl relative">
                          <img
                            src={expert.image || "/placeholder.svg"}
                            alt={expert.name}
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#012787]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#d2dd0a] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <svg className="w-4 h-4 text-[#012787]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#012787] group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                          {expert.name}
                        </h3>
                        <p className="text-gray-700 font-semibold text-sm">{expert.role}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{expert.company}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex justify-center space-x-2">
                          <div className="w-2 h-2 bg-[#d2dd0a] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#012787] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#d2dd0a] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Segunda fila - 3 expertos */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                  {[
                    {
                      image: "/images/experts/luis-romahn.jpg",
                      name: "Luis Romahn",
                      role: "Director",
                      company: "Organización Mundial de Parques Urbanos",
                    },
                    {
                      image: "/images/experts/evaristo.jpg",
                      name: "Evaristo Aguilar",
                      role: "Area Manager Mexico / Central America / Caribbean",
                      company: "Hunter Industries",
                    },
                    {
                      image: "/images/experts/jesus-felix-new.jpg",
                      name: "Jesús Alexandro Félix Gastelum",
                      role: "Administrador General",
                      company: "Agencia Metropolitana de Bosques Urbanos",
                    },
                  ].map((expert, index) => (
                    <div
                      key={index + 3}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 w-full max-w-[260px] text-center transition-all duration-700 hover:-translate-y-3 hover:scale-105 font-normal group border border-gray-100"
                    >
                      <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl relative">
                          <img
                            src={expert.image || "/placeholder.svg"}
                            alt={expert.name}
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#012787]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#d2dd0a] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <svg className="w-4 h-4 text-[#012787]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#012787] group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                          {expert.name}
                        </h3>
                        <p className="text-gray-700 font-semibold text-sm">{expert.role}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{expert.company}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex justify-center space-x-2">
                          <div className="w-2 h-2 bg-[#d2dd0a] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#012787] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#d2dd0a] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN HORARIOS - GUADALAJARA */}
            <section className="py-20 px-4">
              <div className="max-w-4xl mx-auto">
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#012787] text-center mb-16 font-['Montserrat',sans-serif]"
                >
                  Programa del Evento
                </h2>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#012787] text-white p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2 font-['Montserrat',sans-serif]">Martes 28 de abril, 2026</h3>
                    <p className="text-[#d2dd0a] font-semibold">Jardín de Eventos del Bosque Los Colomos, Guadalajara, Jalisco</p>
                  </div>

                  {/* Schedule Items */}
                  <div className="divide-y divide-gray-100">
                    {[
                      { time: "9:00", activity: "Registro y bienvenida", type: "registration" },
                      { time: "9:35", activity: "Introducción por ANPR México", type: "intro" },
                      { time: "10:10", activity: "Primera Conferencia", type: "conference" },
                      { time: "10:55", activity: "Espacio de Coffee Break y Networking", type: "break" },
                      { time: "11:10", activity: "Segunda Conferencia", type: "conference" },
                      { time: "12:00", activity: "Tercera Conferencia", type: "conference" },
                      { time: "12:45", activity: "Espacio de Coffee Break y Networking", type: "break" },
                      { time: "13:15", activity: "Cuarta Conferencia", type: "conference" },
                      { time: "14:05", activity: "Quinta Conferencia", type: "conference" },
                      { time: "14:35", activity: "Espacio de Coffee Break y Networking", type: "break" },
                      { time: "14:55", activity: "Recorrido por Jardín de Eventos del Bosque Los Colomos", type: "tour" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center p-6 hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <div className="flex-shrink-0 w-20 text-right mr-6">
                          <div className="text-2xl font-bold text-[#012787] group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                            {item.time}
                          </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                          <div
                            className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                              item.type === "conference"
                                ? "bg-[#012787] border-[#012787] group-hover:bg-[#d2dd0a] group-hover:border-[#d2dd0a]"
                                : item.type === "break"
                                  ? "bg-[#49db76] border-[#49db76]"
                                  : item.type === "registration"
                                    ? "bg-[#d2dd0a] border-[#d2dd0a]"
                                    : item.type === "tour"
                                      ? "bg-[#00dfbf] border-[#00dfbf]"
                                      : "bg-[#00dfbf] border-[#00dfbf]"
                            }`}
                          />
                          {index < 10 && (
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-200"></div>
                          )}
                        </div>
                        <div className="flex-1 ml-6">
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#012787] transition-colors duration-300">
                            {item.activity}
                          </h4>
                          {item.type === "conference" && (
                            <p className="text-sm text-gray-500 mt-1">Conferencia magistral</p>
                          )}
                          {item.type === "break" && <p className="text-sm text-gray-500 mt-1">Pausa para networking</p>}
                          {item.type === "tour" && <p className="text-sm text-gray-500 mt-1">Recorrido guiado</p>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-6 text-center">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Nota:</span> Los horarios pueden estar sujetos a cambios menores. Se
                      notificará cualquier modificación con anticipación.
                    </p>
                  </div>
                </div>

                {/* Additional info cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {[
                    {
                      icon: Clock,
                      title: "Duración Total",
                      content: "6 horas de contenido especializado",
                      color: "#012787",
                    },
                    {
                      icon: Users,
                      title: "5 Conferencias",
                      content: "Ponencias magistrales de expertos",
                      color: "#d2dd0a",
                    },
                    {
                      icon: Handshake,
                      title: "3 Espacios de Networking",
                      content: "Oportunidades para conectar",
                      color: "#49db76",
                    },
                  ].map((info, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <info.icon className="w-6 h-6" style={{ color: info.color }} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-600 text-sm">{info.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN EJES TEMÁTICOS */}
            <section className="py-20 px-4" style={{ backgroundColor: "#f3f8ff" }}>
              <div className="max-w-5xl mx-auto text-center">
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#012787] mb-12 font-['Montserrat',sans-serif]"
                >
                  Nuestros Ejes Temáticos
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Globe, title: "Operación y Gestión", color: "#d2dd0a" },
                    { icon: Heart, title: "Trascendencia del Espacio Público", color: "#00dfbf" },
                    { icon: Cog, title: "Activación y Recreación", color: "#49db76" },
                  ].map((theme, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-700"
                    >
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: theme.color }}
                      >
                        <theme.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#012787] mb-2 font-['Montserrat',sans-serif]">
                        {theme.title}
                      </h3>
                      <p className="text-gray-600"></p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN PATROCINADORES - GUADALAJARA */}
            <section className="px-4 py-24">
              <div className="max-w-4xl mx-auto text-center">
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#012787] mb-4 font-['Montserrat',sans-serif]"
                >
                  Alianzas que lo Hacen Posible
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Este evento se realiza gracias al impulso y compromiso de diversas organizaciones aliadas, que comparten
                  nuestra misión de mejorar los espacios públicos en México y América Latina.
                </p>

                {/* Organiza */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#012787] mb-6 font-['Montserrat',sans-serif]">Organiza:</h3>
                  <a
                    href="https://anpr.org.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform transform hover:scale-105"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/anpr.png`}
                        alt="ANPR México - Asociación Nacional de Parques y Recreación de México"
                        className="h-16 md:h-20 w-auto object-contain"
                      />
                    </div>
                  </a>
                </div>

                {/* Presenta */}
                <div className="text-center mt-12">
                  <h3 className="text-xl font-bold text-[#012787] mb-6 font-['Montserrat',sans-serif]">Presenta:</h3>
                  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                    <a
                      href="https://bugy.mx/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform transform hover:scale-105"
                    >
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/bugy.png`}
                          alt="Grupo BUGY - Proyectos Recreativos"
                          className="h-16 md:h-20 w-auto object-contain"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.hunterirrigation.com/es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform transform hover:scale-105"
                    >
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logos/hunter.png`}
                          alt="Hunter Industries"
                          className="h-16 md:h-20 w-auto object-contain"
                        />
                      </div>
                    </a>
                    <a
                      href="https://parquesdemexico.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform transform hover:scale-105"
                    >
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logos/parques-mexico.png`}
                          alt="Parques de México"
                          className="h-16 md:h-20 w-auto object-contain"
                        />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Con el apoyo de */}
                <div className="text-center mt-12">
                  <h3 className="text-xl font-bold text-[#012787] mb-6 font-['Montserrat',sans-serif]">Con el apoyo de:</h3>
                  <a
                    href="https://bosquesurbanos.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform transform hover:scale-105"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 mx-auto max-w-sm">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logos/ambu.png`}
                        alt="AMBU - Asociación Mexicana de Bosques Urbanos"
                        className="w-full h-auto object-contain max-h-24"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* SECCIÓN REGISTRO FINAL - GUADALAJARA */}
            <section id="registro" className="px-4 bg-[#012787] text-white text-center py-20 relative overflow-hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-turquesa.png`}
                alt=""
                className="absolute top-10 right-16 w-20 md:w-32 opacity-35 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-amarilla.png`}
                alt=""
                className="absolute bottom-16 left-12 w-24 md:w-36 opacity-30 animate-float transform rotate-90"
                style={{ animationDelay: "1.5s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea1.png`}
                alt=""
                className="absolute top-1/3 left-0 w-28 md:w-44 opacity-20 transform -rotate-45"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea2.png`}
                alt=""
                className="absolute bottom-1/4 right-0 w-32 md:w-48 opacity-20"
              />

              <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat',sans-serif]">
                  Forma Parte del Cambio
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  Inscríbete sin costo y acompáñanos en la <strong>5ª Jornada en Guadalajara</strong>.
                </p>
                <p className="text-base font-semibold opacity-95 mb-8 tracking-wide">
                  ¡Solo 50 lugares disponibles!
                </p>
                <div className="w-full max-w-lg mx-auto">
                  <div className="flex justify-center">
                    <a
                      href="https://anpr.org.mx/register/5-jornada-de-capacitacion-guadalajara-jalisco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#57d476] hover:bg-[#45c264] text-white font-bold py-4 px-14 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-lg font-['Inter',sans-serif]"
                    >
                      REGÍSTRATE GRATIS
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ============================================ */}
        {/* CONTENIDO DINÁMICO - LA PAZ */}
        {/* ============================================ */}
        {selectedSede === "lapaz" && (
          <div className="animate-fade-in-up">
            {/* SECCIÓN DE DETALLES DEL EVENTO - LA PAZ */}
            <section id="detalles-evento" className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#00338d" }}>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-amarilla.png`}
                alt=""
                className="absolute top-10 right-10 w-20 md:w-32 opacity-30 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-verde.png`}
                alt=""
                className="absolute bottom-10 left-10 w-16 md:w-24 opacity-30 animate-float transform -scale-x-100"
                style={{ animationDelay: "1.5s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea3.png`}
                alt=""
                className="absolute top-1/2 left-0 w-24 md:w-40 opacity-20 transform -translate-y-1/2"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea1.png`}
                alt=""
                className="absolute bottom-20 right-0 w-32 md:w-48 opacity-20 transform rotate-45"
              />

              <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 font-['Montserrat',sans-serif]">
                  Detalles del Evento
                </h2>
                <p className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 font-['Montserrat',sans-serif]" style={{ color: "#57d476", textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}>
                  La Paz, Baja California Sur
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                  {[
                    {
                      icon: MapPin,
                      title: "Ubicación",
                      content: "Centro Deportivo Municipal \"El piojillo\",\nLa Paz, Baja California Sur",
                      iconColor: "#d5df00",
                    },
                    {
                      icon: Users,
                      title: "Aforo",
                      content: "50 personas ¡Cupo limitado!",
                      iconColor: "#57d476",
                    },
                    {
                      icon: CalendarDays,
                      title: "Fecha",
                      content: "Jueves 30 de abril del 2026",
                      iconColor: "#00dfbf",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <item.icon className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: item.iconColor }} />
                      <div>
                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        <p className="text-white" style={{ whiteSpace: "pre-line" }}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN ¿POR QUÉ ASISTIR? - LA PAZ */}
            <section className="py-20 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="flex justify-center">
                    <img
                      src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/anpr-logo.png`}
                      alt="Jornada de Capacitación ANPR México - La Paz, BCS 2026"
                      className="w-full max-w-xs h-auto object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#012787] mb-7 font-['Montserrat',sans-serif]">
                      ¡La ANPR México llegará a La Paz, Baja California Sur!
                    </h2>

                    <div className="border-l-4 border-[#012787] text-gray-700 p-6 rounded-r-lg text-left shadow-sm mb-16 bg-transparent">
                      <p className="font-bold mb-6 ml-2.5">
                        ¿Trabajas en el sector público, en desarrollo urbano o en la gestión de espacios públicos?
                      </p>
                      <p className="font-normal my-0 px-2.5">
                        Te invitamos a participar en una jornada de capacitación gratuita, especialmente pensada para
                        brindarte herramientas prácticas y conocimientos esenciales que te ayudarán a mejorar la planeación,
                        operación y diseño de parques y espacios públicos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN ¿QUÉ PUEDES ESPERAR? - LA PAZ */}
            <section className="py-20 px-4" style={{ backgroundColor: "#f3f8ff" }}>
              <div className="max-w-6xl mx-auto">
                <div className="text-center">
                  <p className="font-bold text-4xl mb-14 text-[rgba(7,51,141,1)]">
                    ¿Qué Puedes Esperar?
                  </p>
                  <div className="grid md:grid-cols-3 gap-10">
                    {[
                      {
                        icon: Sprout,
                        title: "Conocimiento de vanguardia",
                        content: "Aprende de los líderes del sector sobre las últimas tendencias y mejores prácticas.",
                        image: "/images/conocimiento-vanguardia.jpg",
                      },
                      {
                        icon: Handshake,
                        title: "Networking estratégico",
                        content: "Conecta con colegas y profesionales de todo el país con tus mismos desafíos y pasiones.",
                        image: "/images/networking.jpg",
                      },
                      {
                        icon: Lightbulb,
                        title: "Soluciones innovadoras",
                        content:
                          "Encuentra respuestas prácticas a los problemas comunes en la gestión de parques y recreación.",
                        image: "/images/soluciones.jpg",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="relative text-center group"
                      >
                        <div className="relative h-48 mb-6 rounded-lg overflow-hidden shadow-lg">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                          <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-[#012787]" />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#012787] mb-3 font-['Montserrat',sans-serif]">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN VIDEO GALLERY - LA PAZ (same videos, shared content) */}
            <section className="py-20 px-4 bg-white">
              <div className="max-w-6xl mx-auto">
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#012787] text-center mb-12 font-['Montserrat',sans-serif]"
                  >
                    Conoce Más Sobre Nuestras Jornadas
                  </h3>

                  {(() => {
                    const allVideos = [
                      {
                        title: "Aguascalientes",
                        videoId: "YT5dFUaeTA4",
                        videoUrl: "https://youtu.be/YT5dFUaeTA4",
                        description: "Revive los mejores momentos de nuestra jornada en Aguascalientes",
                        views: "Nuevo",
                        duration: "1 semana",
                      },
                      {
                        title: "Chihuahua",
                        videoId: "_5ESDNQRfZ0",
                        videoUrl: "https://youtu.be/_5ESDNQRfZ0",
                        description: "Revive los mejores momentos de nuestra jornada en Chihuahua",
                        views: "Nuevo",
                        duration: "2 semanas",
                      },
                      {
                        title: "Hermosillo",
                        videoId: "-U6Ml-xubRo",
                        videoUrl: "https://youtu.be/-U6Ml-xubRo",
                        description: "Revive los mejores momentos de nuestra jornada en Hermosillo",
                        views: "18 visualizaciones",
                        duration: "6 días",
                      },
                      {
                        title: "Querétaro",
                        videoId: "OHaeknz0Ei4",
                        videoUrl: "https://youtu.be/OHaeknz0Ei4",
                        description: "Experiencias y aprendizajes de nuestra jornada en Querétaro",
                        views: "111 visualizaciones",
                        duration: "3 meses",
                      },
                    ];
                    const recentVideos = allVideos.slice(0, 2);
                    const olderVideos = allVideos.slice(2);

                    return (
                      <>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                          {recentVideos.map((video) => (
                            <div
                              key={video.videoId}
                              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group"
                            >
                              <div className="relative">
                                <div className="relative w-full h-48 bg-black">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${video.videoId}?controls=0&showinfo=0&rel=0&autoplay=0&mute=1&loop=1&playlist=${video.videoId}&start=10&end=30`}
                                    title={video.title}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                  <div
                                    className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center cursor-pointer"
                                    onClick={() => window.open(video.videoUrl, "_blank")}
                                  >
                                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                      <svg className="w-6 h-6 text-[#012787] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 z-10">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                  </svg>
                                  YouTube
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Ver video completo
                                </div>
                              </div>
                              <div className="p-6">
                                <h4 className="text-lg font-bold text-[#012787] mb-2 group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                                  {video.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{video.description}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>{video.views}</span>
                                  <span>hace {video.duration}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Accordion for older videos */}
                        <div
                          className={`grid md:grid-cols-2 gap-8 max-w-4xl mx-auto overflow-hidden transition-all duration-500 ease-in-out ${
                            showAllVideosLaPaz ? "max-h-[2000px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          {olderVideos.map((video) => (
                            <div
                              key={video.videoId}
                              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group opacity-100"
                            >
                              <div className="relative">
                                <div className="relative w-full h-48 bg-black">
                                  <iframe
                                    src={`https://www.youtube.com/embed/${video.videoId}?controls=0&showinfo=0&rel=0&autoplay=0&mute=1&loop=1&playlist=${video.videoId}&start=10&end=30`}
                                    title={video.title}
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                  <div
                                    className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center cursor-pointer"
                                    onClick={() => window.open(video.videoUrl, "_blank")}
                                  >
                                    <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                      <svg className="w-6 h-6 text-[#012787] ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 z-10">
                                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                  </svg>
                                  YouTube
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  Ver video completo
                                </div>
                              </div>
                              <div className="p-6">
                                <h4 className="text-lg font-bold text-[#012787] mb-2 group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                                  {video.title}
                                </h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">{video.description}</p>
                                <div className="flex items-center justify-between text-xs text-gray-500">
                                  <span>{video.views}</span>
                                  <span>hace {video.duration}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="text-center mt-12">
                          <button
                            onClick={() => setShowAllVideosLaPaz(!showAllVideosLaPaz)}
                            className="inline-flex items-center gap-2 bg-[#012787] hover:bg-[#d2dd0a] text-white hover:text-[#012787] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            {showAllVideosLaPaz ? "Ver menos videos" : "Ver más videos"}
                            <svg
                              className={`w-4 h-4 transition-transform duration-300 ${showAllVideosLaPaz ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </section>

            {/* SECCIÓN PONENTES - LA PAZ */}
            <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#012787" }}>
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-turquesa.png`}
                alt=""
                className="absolute top-16 left-8 w-16 md:w-28 opacity-40 animate-float"
                style={{ animationDelay: "0s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-verde.png`}
                alt=""
                className="absolute top-1/3 right-12 w-20 md:w-32 opacity-35 animate-float transform rotate-12"
                style={{ animationDelay: "1s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-amarilla.png`}
                alt=""
                className="absolute bottom-20 left-16 w-18 md:w-28 opacity-35 animate-float transform -rotate-45"
                style={{ animationDelay: "2s" }}
              />
              <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea2.png`} alt="" className="absolute top-0 right-0 w-28 md:w-44 opacity-25" />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea3.png`}
                alt=""
                className="absolute bottom-0 left-0 w-24 md:w-40 opacity-25 transform rotate-180"
              />

              <div className="max-w-7xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 font-['Montserrat',sans-serif]">
                  Conoce a los Expertos
                </h2>

                {/* Primera fila - 3 expertos */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-8">
                  {[
                    {
                      image: "/images/experts/maria-isabel.jpg",
                      name: "Isabel Velázquez",
                      role: "Directora General",
                      company: "Parques de México",
                    },
                    {
                      image: "/images/experts/manuel-plascencia.jpg",
                      name: "Manuel Plascencia",
                      role: "Director General",
                      company: "Grupo Bugy",
                    },
                    {
                      image: "/images/experts/vitoria.jpg",
                      name: "Vitoria Martin",
                      role: "Directora General",
                      company: "ANPR México",
                    },
                  ].map((expert, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 w-full max-w-[260px] text-center transition-all duration-700 hover:-translate-y-3 hover:scale-105 font-normal group border border-gray-100"
                    >
                      <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl relative">
                          <img
                            src={expert.image || "/placeholder.svg"}
                            alt={expert.name}
                            className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#012787]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#d2dd0a] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <svg className="w-4 h-4 text-[#012787]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#012787] group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                          {expert.name}
                        </h3>
                        <p className="text-gray-700 font-semibold text-sm">{expert.role}</p>
                        <p className="text-gray-500 text-sm leading-relaxed">{expert.company}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex justify-center space-x-2">
                          <div className="w-2 h-2 bg-[#d2dd0a] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#012787] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#d2dd0a] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Segunda fila - 2 expertos */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
                  {[
                    {
                      image: "/images/experts/evaristo.jpg",
                      name: "Evaristo Aguilar",
                      role: "Area Manager Mexico / Central America / Caribbean",
                      company: "Hunter Industries",
                    },
                    {
                      image: "/images/experts/guadalupe-lizette.jpeg",
                      name: "Guadalupe Lizette Rizo Vilchis",
                      role: "Directora de Medio Ambiente",
                      company: "H. XVIII Ayuntamiento del Municipio de La Paz",
                    },
                    {
                      image: "/images/experts/kenia-cervantes.jpeg",
                      name: "Kenia Selene Cervantes Villegas",
                      role: "Directora General de Gestión Integral de la Ciudad",
                      company: "H. XVIII Ayuntamiento de La Paz",
                      imgStyle: { transform: "scale(1.5)", transformOrigin: "center 15%" },
                    },
                  ].map((expert: any, index) => (
                    <div
                      key={index + 3}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 w-full max-w-[260px] text-center transition-all duration-700 hover:-translate-y-3 hover:scale-105 font-normal group border border-gray-100"
                    >
                      <div className="relative mb-6">
                        <div className="w-32 h-32 rounded-full mx-auto overflow-hidden border-4 border-white shadow-xl relative bg-gray-100 flex items-center justify-center">
                          {expert.image ? (
                            <img
                              src={expert.image}
                              alt={expert.name}
                              className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
                              style={expert.imgStyle || {}}
                            />
                          ) : (
                            <Users className="w-16 h-16 text-gray-300" />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#012787]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#d2dd0a] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <svg className="w-4 h-4 text-[#012787]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-[#012787] group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                          {expert.name}
                        </h3>
                        {expert.role && <p className="text-gray-700 font-semibold text-sm">{expert.role}</p>}
                        <p className="text-gray-500 text-sm leading-relaxed">{expert.company}</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex justify-center space-x-2">
                          <div className="w-2 h-2 bg-[#d2dd0a] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#012787] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#d2dd0a] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN HORARIOS - LA PAZ */}
            <section className="py-20 px-4">
              <div className="max-w-4xl mx-auto">
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#012787] text-center mb-16 font-['Montserrat',sans-serif]"
                >
                  Programa del Evento
                </h2>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#012787] text-white p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2 font-['Montserrat',sans-serif]">Jueves 30 de abril, 2026</h3>
                    <p className="text-[#d2dd0a] font-semibold">Centro Deportivo Municipal "El piojillo", La Paz, Baja California Sur</p>
                  </div>

                  {/* Schedule Items */}
                  <div className="divide-y divide-gray-100">
                    {[
                      { time: "9:00", activity: "Registro y bienvenida", type: "registration" },
                      { time: "9:35", activity: "Introducción por ANPR México", type: "intro" },
                      { time: "10:10", label: "Primera Conferencia", activity: "Compensación ambiental y ordenamiento forestal: Estrategias para el equilibrio de los espacios públicos", type: "conference", speaker: "Lizette Rizo · Directora de Medio Ambiente, H. XVIII Ayuntamiento del Municipio de La Paz" },
                      { time: "10:55", activity: "Espacio de Coffee Break y Networking", type: "break" },
                      { time: "11:10", label: "Segunda Conferencia", activity: "Optimización de recursos para un sistema de riego eficiente", type: "conference", speaker: "Evaristo Aguilar · Area Manager Central America, Caribbean, Hunter Industries" },
                      { time: "12:00", label: "Tercera Conferencia", activity: "Sostenibilidad Financiera en Parques Urbanos: Del subsidio a la autosuficiencia responsable", type: "conference", speaker: "Isabel Velázquez · Directora, Parques de México" },
                      { time: "12:45", activity: "Espacio de Coffee Break y Networking", type: "break" },
                      { time: "13:15", label: "Cuarta Conferencia", activity: "Juegos Infantiles de Calidad", type: "conference", speaker: "Manuel Plascencia · Director, Grupo Bugy" },
                      { time: "14:05", label: "Quinta Conferencia", activity: "La Paz a través de la Rehabilitación de sus Parques", type: "conference", speaker: "Kenia Cervantes · Directora General de Gestión, H. XVIII Ayuntamiento del Municipio de La Paz" },
                      { time: "14:35", activity: "Espacio de Coffee Break y Networking", type: "break" },
                    ].map((item: any, index) => (
                      <div
                        key={index}
                        className="flex items-center p-6 hover:bg-gray-50 transition-all duration-300 group"
                      >
                        <div className="flex-shrink-0 w-20 text-right mr-6">
                          <div className="text-2xl font-bold text-[#012787] group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                            {item.time}
                          </div>
                        </div>
                        <div className="flex-shrink-0 relative">
                          <div
                            className={`w-4 h-4 rounded-full border-4 transition-all duration-300 ${
                              item.type === "conference"
                                ? "bg-[#012787] border-[#012787] group-hover:bg-[#d2dd0a] group-hover:border-[#d2dd0a]"
                                : item.type === "break"
                                  ? "bg-[#49db76] border-[#49db76]"
                                  : item.type === "registration"
                                    ? "bg-[#d2dd0a] border-[#d2dd0a]"
                                    : item.type === "tour"
                                      ? "bg-[#00dfbf] border-[#00dfbf]"
                                      : "bg-[#00dfbf] border-[#00dfbf]"
                            }`}
                          />
                          {index < 10 && (
                            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-200"></div>
                          )}
                        </div>
                        <div className="flex-1 ml-6">
                          {item.label && (
                            <p className="text-xs text-gray-400 font-medium mb-0.5">{item.label}</p>
                          )}
                          <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#012787] transition-colors duration-300">
                            {item.activity}
                          </h4>
                          {item.type === "conference" && (
                            <p className="text-sm text-gray-500 mt-1">
                              {item.speaker ? `Imparte: ${item.speaker}` : "Conferencia magistral"}
                            </p>
                          )}
                          {item.type === "break" && <p className="text-sm text-gray-500 mt-1">Pausa para networking</p>}
                          {item.type === "tour" && <p className="text-sm text-gray-500 mt-1">Recorrido guiado</p>}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-6 text-center">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Nota:</span> Los horarios pueden estar sujetos a cambios menores. Se
                      notificará cualquier modificación con anticipación.
                    </p>
                  </div>
                </div>

                {/* Additional info cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  {[
                    {
                      icon: Clock,
                      title: "Duración Total",
                      content: "6 horas de contenido especializado",
                      color: "#012787",
                    },
                    {
                      icon: Users,
                      title: "5 Conferencias",
                      content: "Ponencias magistrales de expertos",
                      color: "#d2dd0a",
                    },
                    {
                      icon: Handshake,
                      title: "3 Espacios de Networking",
                      content: "Oportunidades para conectar",
                      color: "#49db76",
                    },
                  ].map((info, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${info.color}20` }}
                      >
                        <info.icon className="w-6 h-6" style={{ color: info.color }} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-600 text-sm">{info.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN EJES TEMÁTICOS - LA PAZ */}
            <section className="py-20 px-4" style={{ backgroundColor: "#f3f8ff" }}>
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#012787] mb-12 font-['Montserrat',sans-serif]">
                  Nuestros Ejes Temáticos
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: Globe, title: "Operación y Gestión", color: "#d2dd0a" },
                    { icon: Heart, title: "Trascendencia del Espacio Público", color: "#00dfbf" },
                    { icon: Cog, title: "Activación y Recreación", color: "#49db76" },
                  ].map((theme, index) => (
                    <div
                      key={index}
                      className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-700"
                    >
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: theme.color }}
                      >
                        <theme.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#012787] mb-2 font-['Montserrat',sans-serif]">
                        {theme.title}
                      </h3>
                      <p className="text-gray-600"></p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SECCIÓN PATROCINADORES - LA PAZ */}
            <section className="px-4 py-24">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#012787] mb-4 font-['Montserrat',sans-serif]">
                  Alianzas que lo Hacen Posible
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                  Este evento se realiza gracias al impulso y compromiso de diversas organizaciones aliadas, que comparten
                  nuestra misión de mejorar los espacios públicos en México y América Latina.
                </p>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#012787] mb-6 font-['Montserrat',sans-serif]">Organiza:</h3>
                  <a
                    href="https://anpr.org.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform transform hover:scale-105"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/anpr.png`}
                        alt="ANPR México - Asociación Nacional de Parques y Recreación de México"
                        className="h-16 md:h-20 w-auto object-contain"
                      />
                    </div>
                  </a>
                </div>

                <div className="text-center mt-12">
                  <h3 className="text-xl font-bold text-[#012787] mb-6 font-['Montserrat',sans-serif]">Presenta:</h3>
                  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                    <a
                      href="https://bugy.mx/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform transform hover:scale-105"
                    >
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/bugy.png`}
                          alt="Grupo BUGY - Proyectos Recreativos"
                          className="h-16 md:h-20 w-auto object-contain"
                        />
                      </div>
                    </a>
                    <a
                      href="https://www.hunterirrigation.com/es"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform transform hover:scale-105"
                    >
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logos/hunter.png`}
                          alt="Hunter Industries"
                          className="h-16 md:h-20 w-auto object-contain"
                        />
                      </div>
                    </a>
                    <a
                      href="https://parquesdemexico.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transition-transform transform hover:scale-105"
                    >
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logos/parques-mexico.png`}
                          alt="Parques de México"
                          className="h-16 md:h-20 w-auto object-contain"
                        />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Con el apoyo de - LA PAZ */}
                <div className="text-center mt-12">
                  <h3 className="text-xl font-bold text-[#012787] mb-6 font-['Montserrat',sans-serif]">Con el apoyo de:</h3>
                  <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                    <a href="https://www.lapaz.gob.mx/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform transform hover:scale-105">
                      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-eslapaz.png`}
                          alt="Es La Paz"
                          className="h-16 md:h-20 w-auto object-contain"
                        />
                      </div>
                    </a>
                    <a href="https://www.lapaz.gob.mx/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform transform hover:scale-105">
                      <div className="rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 md:p-6 bg-[#ffffff]">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-ayuntamiento-lapaz.png`}
                          alt="H. XVIII Ayuntamiento del Municipio de La Paz, B.C.S."
                          className="h-16 md:h-20 w-auto object-contain"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* SECCIÓN REGISTRO FINAL - LA PAZ */}
            <section id="registro" className="px-4 bg-[#012787] text-white text-center py-20 relative overflow-hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-turquesa.png`}
                alt=""
                className="absolute top-10 right-16 w-20 md:w-32 opacity-35 animate-float"
                style={{ animationDelay: "0.5s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/hoja-amarilla.png`}
                alt=""
                className="absolute bottom-16 left-12 w-24 md:w-36 opacity-30 animate-float transform rotate-90"
                style={{ animationDelay: "1.5s" }}
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea1.png`}
                alt=""
                className="absolute top-1/3 left-0 w-28 md:w-44 opacity-20 transform -rotate-45"
              />
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/decorations/linea2.png`}
                alt=""
                className="absolute bottom-1/4 right-0 w-32 md:w-48 opacity-20"
              />

              <div className="max-w-2xl mx-auto relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Montserrat',sans-serif]">
                  Forma Parte del Cambio
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  Inscríbete sin costo y acompáñanos en la <strong>6ª Jornada en La Paz</strong>, BCS.
                </p>
                <p className="text-base font-semibold opacity-95 mb-8 tracking-wide">
                  ¡Solo 50 lugares disponibles!
                </p>
                <div className="w-full max-w-lg mx-auto">
                  <div className="flex justify-center">
                    <a
                      href="https://anpr.org.mx/register/6-jornada-de-capacitacion-la-paz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#57d476] hover:bg-[#45c264] text-white font-bold py-4 px-14 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-lg font-['Inter',sans-serif]"
                    >
                      REGÍSTRATE GRATIS
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ============================================ */}
        {/* SECCIÓN CONTACTO (siempre visible) */}
        {/* ============================================ */}
        <section className="py-16 px-4" style={{ backgroundColor: "#f3f8ff" }}>
          <div className="max-w-2xl mx-auto text-center">
            <h2
              data-animate
              id="contact-title"
              className={`text-2xl md:text-3xl font-bold text-[#012787] mb-4 transition-all duration-700 font-['Montserrat',sans-serif] ${
                isVisible("contact-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              ¿Tienes Dudas?
            </h2>

            <p
              data-animate
              id="contact-desc"
              className={`text-lg text-gray-600 mb-8 transition-all duration-700 ${
                isVisible("contact-desc") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Estamos aquí para ayudarte. Contáctanos si necesitas más información sobre el evento.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Correo Electrónico",
                  contact: "contenido@anpr.org.mx",
                  href: "mailto:contenido@anpr.org.mx",
                  icon: Mail,
                },
                {
                  title: "WhatsApp",
                  contact: "Enviar mensaje",
                  href: "https://api.whatsapp.com/send/?phone=%2B529993530691&text=Hola&type=phone_number&app_absent=0",
                  icon: MessageCircle,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-animate
                  id={`contact-${index}`}
                  className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 ${
                    isVisible(`contact-${index}`)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-[#012787]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#012787] hover:text-[#012787]/80 font-medium transition-colors"
                  >
                    {item.contact}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
