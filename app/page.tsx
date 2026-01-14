"use client"

import { useEffect, useState } from "react"
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Ticket,
  ClipboardList,
  Sprout,
  Handshake,
  Lightbulb,
  Globe,
  Heart,
  Cog,
  Mail,
  MessageCircle,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Add Montserrat font
const montserratFont = "font-['Montserrat',sans-serif]"

export default function LandingPageV0() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleElements, setVisibleElements] = useState(new Set())

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
    // Load Montserrat font with Black weight (900)
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      <Header />

      {/* SECCIÓN PRINCIPAL (HÉROE) */}
      <header className="relative min-h-screen flex items-center justify-center text-center text-white px-4 overflow-hidden">
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
            background: `radial-gradient(circle, #0040af 1px, transparent 1px)`,
            backgroundSize: '6px 6px',
            opacity: 0.4,
            mixBlendMode: 'multiply',
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0040af] opacity-40 z-[6]"></div>

        {/* Decorative elements */}
        <img
          src="/images/decorations/hoja-turquesa.png"
          alt=""
          className="absolute top-10 left-4 md:left-8 w-12 md:w-20 opacity-30 z-10 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <img
          src="/images/decorations/hoja-amarilla.png"
          alt=""
          className="absolute top-12 right-4 md:right-8 w-14 md:w-24 opacity-25 z-10 animate-float transform rotate-45"
          style={{ animationDelay: "1s" }}
        />
        <img
          src="/images/decorations/hoja-verde.png"
          alt=""
          className="absolute bottom-24 left-4 md:left-12 w-12 md:w-18 opacity-30 z-10 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <img
          src="/images/decorations/linea1.png"
          alt=""
          className="absolute top-1/4 right-0 w-24 md:w-40 opacity-20 z-10"
        />
        <img
          src="/images/decorations/linea2.png"
          alt=""
          className="absolute bottom-1/3 left-0 w-20 md:w-32 opacity-20 z-10 transform rotate-180"
        />
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4">
          {/* Logo Section */}
          <div className="mb-8 animate-fade-in-up animation-delay-200"></div>

          {/* Main Title with Hojas Image */}
          <div className="mb-8 animate-fade-in-up animation-delay-400 relative">
            {/* Hojas image positioned over the text */}
            <div className="relative inline-block">
              <img
                src="/images/hojas.png"
                alt=""
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[240px] md:w-[320px] lg:w-[400px] xl:w-[480px] h-auto object-contain pointer-events-none"
                style={{ opacity: 0.85 }}
              />
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight max-w-5xl mx-auto font-['Montserrat',sans-serif] relative z-10"
                style={{ textShadow: "4px 4px 8px rgba(0,0,0,0.9)", color: "#57d476", fontWeight: 900 }}
              >
                5ª Jornada
              </h1>
            </div>
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mt-4 text-white font-['Montserrat',sans-serif] relative z-20"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              DE CAPACITACIÓN ANPR MÉXICO
            </p>
          </div>

          {/* Event Badge */}
          <div className="mb-8 animate-fade-in-up animation-delay-600">
            <div className="inline-block bg-[#0f2161]/40 border-2 border-white text-white font-bold text-lg sm:text-xl md:text-2xl py-4 px-8 rounded-full drop-shadow-2xl backdrop-blur-sm max-w-4xl">
              <span className="font-extrabold">Guadalajara, Jalisco, 2026</span>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 animate-fade-in-up animation-delay-700">
            <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light opacity-95 drop-shadow-lg">
              Evento gratuito con conferencias impartidas por{" "}
              <span className="font-semibold text-white">expertos líderes del sector</span> y espacios de networking
              para impulsar la transformación de nuestros parques.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mb-16 animate-fade-in-up animation-delay-800">
            <a
              href="https://anpr.org.mx/event/cuarta-jornada-de-capacitacion-anpr-mexico/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#57d476] hover:bg-[#45c264] text-white font-bold text-xl py-5 px-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(87,212,118,0.5)] focus:outline-none focus:ring-4 focus:ring-[#57d476]/50"
            >
              <span className="flex items-center gap-3">
                Regístrate Gratis
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Event Details Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-900">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-white">
                <CalendarDays className="w-5 h-5 text-[#d2dd0a]" />
                <span className="font-semibold">Miércoles, 25 de febrero</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-white">
                <Clock className="w-5 h-5 text-[#d2dd0a]" />
                <span className="font-semibold">09:00 a 15:00</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-white">
                <Ticket className="w-5 h-5 text-[#d2dd0a]" />
                <span className="font-semibold">Evento Gratuito</span>
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

      <main>
        {/* SECCIÓN DE DETALLES DEL EVENTO */}
        <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#00338d" }}>
          {/* Decorative elements */}
          <img
            src="/images/decorations/hoja-amarilla.png"
            alt=""
            className="absolute top-10 right-10 w-20 md:w-32 opacity-30 animate-float"
            style={{ animationDelay: "0.5s" }}
          />
          <img
            src="/images/decorations/hoja-verde.png"
            alt=""
            className="absolute bottom-10 left-10 w-16 md:w-24 opacity-30 animate-float transform -scale-x-100"
            style={{ animationDelay: "1.5s" }}
          />
          <img
            src="/images/decorations/linea3.png"
            alt=""
            className="absolute top-1/2 left-0 w-24 md:w-40 opacity-20 transform -translate-y-1/2"
          />
          <img
            src="/images/decorations/linea1.png"
            alt=""
            className="absolute bottom-20 right-0 w-32 md:w-48 opacity-20 transform rotate-45"
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <h2
              data-animate
              id="details-title"
              className={`text-3xl md:text-4xl font-bold text-white text-center mb-12 transition-all duration-700 font-['Montserrat',sans-serif] ${
                isVisible("details-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Detalles del Evento
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
              {[
                {
                  icon: MapPin,
                  title: "Ubicación",
                  content: "Jardín de Eventos del Bosque Los Colomos,\nGuadalajara, Jalisco",
                  delay: "100",
                  iconColor: "#d5df00",
                },
                {
                  icon: Users,
                  title: "Aforo",
                  content: "50 personas ¡Cupo limitado!",
                  delay: "200",
                  iconColor: "#57d476",
                },
                {
                  icon: ClipboardList,
                  title: "Incluye",
                  content: "Ponencias y recorrido en el Jardín de Eventos del Bosque Los Colomos",
                  delay: "300",
                  iconColor: "#00dfbf",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-animate
                  id={`detail-${index}`}
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isVisible(`detail-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${Number.parseInt(item.delay)}ms` }}
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
              <div
                data-animate
                id="anpr-logo"
                className={`flex justify-center transition-all duration-700 ${
                  isVisible("anpr-logo") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <img
                  src="/images/anpr-logo.png"
                  alt="5.ª Jornada de Capacitación ANPR México - Guadalajara, Jalisco 2026"
                  className="w-full max-w-md h-auto object-contain"
                />
              </div>

              {/* Right side - Content */}
              <div
                data-animate
                id="anpr-content"
                className={`transition-all duration-700 my-0 py-0 ${
                  isVisible("anpr-content") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
              >
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
              <p
                data-animate
                id="what-expect"
                className={`font-bold text-4xl transition-all duration-700 mb-14 text-[rgba(7,51,141,1)] ${
                  isVisible("what-expect") ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
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
                    data-animate
                    id={`expect-${index}`}
                    className={`relative text-center transition-all duration-700 group ${
                      isVisible(`expect-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Image Container */}
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>

                      {/* Icon in corner */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-[#012787]" />
                      </div>
                    </div>

                    {/* Content */}
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
                data-animate
                id="video-gallery-title"
                className={`text-2xl md:text-3xl font-bold text-[#012787] text-center mb-12 transition-all duration-700 font-['Montserrat',sans-serif] ${
                  isVisible("video-gallery-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Conoce Más Sobre Nuestras Jornadas
              </h3>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    title: "Jornada ANPR México - Hermosillo",
                    videoId: "-U6Ml-xubRo",
                    videoUrl: "https://youtu.be/-U6Ml-xubRo",
                    description: "Revive los mejores momentos de nuestra jornada en Hermosillo",
                    views: "18 visualizaciones",
                    duration: "6 días",
                  },
                  {
                    title: "Jornada ANPR México - Querétaro",
                    videoId: "OHaeknz0Ei4",
                    videoUrl: "https://youtu.be/OHaeknz0Ei4",
                    description: "Experiencias y aprendizajes de nuestra jornada en Querétaro",
                    views: "111 visualizaciones",
                    duration: "3 meses",
                  },
                ].map((video, index) => (
                  <div
                    key={index}
                    data-animate
                    id={`video-${index}`}
                    className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 group ${
                      isVisible(`video-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="relative">
                      {/* YouTube Embed Preview */}
                      <div className="relative w-full h-48 bg-black">
                        <iframe
                          src={`https://www.youtube.com/embed/${video.videoId}?controls=0&showinfo=0&rel=0&autoplay=0&mute=1&loop=1&playlist=${video.videoId}&start=10&end=30`}
                          title={video.title}
                          className="w-full h-full object-cover"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />

                        {/* Overlay for click interaction */}
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

                      {/* YouTube Badge */}
                      <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 z-10">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                        YouTube
                      </div>

                      {/* Watch Full Video Badge */}
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

              {/* Call to Action for More Videos */}
              <div className="text-center mt-12">
                <a
                  href="https://www.youtube.com/@anprmexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#012787] hover:bg-[#d2dd0a] text-white hover:text-[#012787] font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Ver Más Videos en YouTube
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN PONENTES */}
        <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: "#012787" }}>
          {/* Decorative elements */}
          <img
            src="/images/decorations/hoja-turquesa.png"
            alt=""
            className="absolute top-16 left-8 w-16 md:w-28 opacity-40 animate-float"
            style={{ animationDelay: "0s" }}
          />
          <img
            src="/images/decorations/hoja-verde.png"
            alt=""
            className="absolute top-1/3 right-12 w-20 md:w-32 opacity-35 animate-float transform rotate-12"
            style={{ animationDelay: "1s" }}
          />
          <img
            src="/images/decorations/hoja-amarilla.png"
            alt=""
            className="absolute bottom-20 left-16 w-18 md:w-28 opacity-35 animate-float transform -rotate-45"
            style={{ animationDelay: "2s" }}
          />
          <img src="/images/decorations/linea2.png" alt="" className="absolute top-0 right-0 w-28 md:w-44 opacity-25" />
          <img
            src="/images/decorations/linea3.png"
            alt=""
            className="absolute bottom-0 left-0 w-24 md:w-40 opacity-25 transform rotate-180"
          />

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2
              data-animate
              id="experts-title"
              className={`text-3xl md:text-4xl font-bold text-white mb-16 transition-all duration-700 font-['Montserrat',sans-serif] ${
                isVisible("experts-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
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
                  data-animate
                  id={`expert-${index}`}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 w-full max-w-[260px] text-center transition-all duration-700 hover:-translate-y-3 hover:scale-105 font-normal group border border-gray-100 ${
                    isVisible(`expert-${index}`)
                      ? "opacity-100 translate-y-0 rotate-0"
                      : "opacity-0 translate-y-8 rotate-1"
                  }`}
                  style={{ transitionDelay: `${index * 120}ms` }}
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

            {/* Segunda fila - 2 expertos nuevos centrados */}
            <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
              {[
                {
                  image: "/images/experts/carlos-hernandez.jpg",
                  name: "Dr. Carlos Hernández",
                  role: "Consultor urbano y profesor",
                  company: "Universidad Iberoamericana",
                },
                {
                  image: "/images/experts/israel-ortega.jpg",
                  name: "Israel Ortega González",
                  role: "Titular",
                  company: "Fideicomiso Complejo Tres Centurias (Ficotrece)",
                },
                {
                  image: "/images/experts/jose-roberto-barretero.png",
                  name: "José Roberto Barretero Muñoz",
                  role: "Jefe de Departamento de Planeación y Diseño Urbano",
                  company: "Instituto Municipal de Planeación y Evaluación de Aguascalientes",
                },
              ].map((expert, index) => (
                <div
                  key={index + 3}
                  data-animate
                  id={`expert-${index + 3}`}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 w-full max-w-[260px] text-center transition-all duration-700 hover:-translate-y-3 hover:scale-105 font-normal group border border-gray-100 ${
                    isVisible(`expert-${index + 3}`)
                      ? "opacity-100 translate-y-0 rotate-0"
                      : "opacity-0 translate-y-8 rotate-1"
                  }`}
                  style={{ transitionDelay: `${(index + 3) * 120}ms` }}
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

        {/* SECCIÓN HORARIOS */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2
              data-animate
              id="schedule-title"
              className={`text-3xl md:text-4xl font-bold text-[#012787] text-center mb-16 transition-all duration-700 font-['Montserrat',sans-serif] ${
                isVisible("schedule-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Programa del Evento
            </h2>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-[#012787] text-white p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 font-['Montserrat',sans-serif]">26 de noviembre, 2025</h3>
                <p className="text-[#d2dd0a] font-semibold">Complejo Turístico Tres Centurias, Aguascalientes</p>
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
                  { time: "14:55", activity: "Recorrido por Complejo Turístico Tres Centurias", type: "tour" },
                ].map((item, index) => (
                  <div
                    key={index}
                    data-animate
                    id={`schedule-${index}`}
                    className={`flex items-center p-6 hover:bg-gray-50 transition-all duration-300 group ${
                      isVisible(`schedule-${index}`) ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Time */}
                    <div className="flex-shrink-0 w-20 text-right mr-6">
                      <div className="text-2xl font-bold text-[#012787] group-hover:text-[#d2dd0a] transition-colors duration-300 font-['Montserrat',sans-serif]">
                        {item.time}
                      </div>
                    </div>

                    {/* Timeline dot */}
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
                                  : item.type === "closing"
                                    ? "bg-[#d2dd0a] border-[#d2dd0a]"
                                    : "bg-[#00dfbf] border-[#00dfbf]"
                        }`}
                      />
                      {index < 10 && (
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-200"></div>
                      )}
                    </div>

                    {/* Activity */}
                    <div className="flex-1 ml-6">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#012787] transition-colors duration-300">
                        {item.activity}
                      </h4>
                      {item.type === "conference" && (
                        <p className="text-sm text-gray-500 mt-1">Conferencia magistral</p>
                      )}
                      {item.type === "break" && <p className="text-sm text-gray-500 mt-1">Pausa para networking</p>}
                      {item.type === "tour" && <p className="text-sm text-gray-500 mt-1">Recorrido guiado</p>}
                      {item.type === "closing" && <p className="text-sm text-gray-500 mt-1">Evento de clausura</p>}
                    </div>

                    {/* Icon */}
                    <div className="flex-shrink-0 ml-4">
                      {item.type === "conference" && (
                        <div className="w-8 h-8 bg-[#012787]/10 rounded-full flex items-center justify-center group-hover:bg-[#d2dd0a]/20 transition-colors duration-300">
                          <svg className="w-4 h-4 text-[#012787]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                      )}
                      {item.type === "break" && (
                        <div className="w-8 h-8 bg-[#49db76]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#49db76]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                      )}
                      {item.type === "registration" && (
                        <div className="w-8 h-8 bg-[#d2dd0a]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#d2dd0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                      )}
                      {item.type === "intro" && (
                        <div className="w-8 h-8 bg-[#00dfbf]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#00dfbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                            />
                          </svg>
                        </div>
                      )}
                      {item.type === "tour" && (
                        <div className="w-8 h-8 bg-[#00dfbf]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#00dfbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      )}
                      {item.type === "closing" && (
                        <div className="w-8 h-8 bg-[#d2dd0a]/10 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#d2dd0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
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
                  data-animate
                  id={`schedule-info-${index}`}
                  className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300 ${
                    isVisible(`schedule-info-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${(index + 12) * 100}ms` }}
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
              data-animate
              id="themes-title"
              className={`text-3xl md:text-4xl font-bold text-[#012787] mb-12 transition-all duration-700 font-['Montserrat',sans-serif] ${
                isVisible("themes-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
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
                  data-animate
                  id={`theme-${index}`}
                  className={`bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-700 ${
                    isVisible(`theme-${index}`)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
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

        {/* SECCIÓN PATROCINADORES */}
        <section className="px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              data-animate
              id="sponsors-title"
              className={`text-3xl md:text-4xl font-bold text-[#012787] mb-4 transition-all duration-700 font-['Montserrat',sans-serif] ${
                isVisible("sponsors-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Alianzas que lo Hacen Posible
            </h2>
            <p
              data-animate
              id="sponsors-desc"
              className={`text-lg text-gray-600 mb-12 transition-all duration-700 ${
                isVisible("sponsors-desc") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Este evento se realiza gracias al impulso y compromiso de diversas organizaciones aliadas, que comparten
              nuestra misión de mejorar los espacios públicos en México y América Latina.
            </p>

            {/* Organizadores principales - en la misma línea */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Organiza */}
              <div
                data-animate
                id="org-anpr"
                className={`text-center transition-all duration-700 ${
                  isVisible("org-anpr") ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
              >
                <h3 className="text-xl font-bold text-[#012787] mb-6 font-['Montserrat',sans-serif]">Organiza:</h3>
                <a
                  href="https://anpr.org.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform transform hover:scale-105"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 mx-auto max-w-sm">
                    <img
                      src="/images/anpr.png"
                      alt="ANPR México - Asociación Nacional de Parques y Recreación de México"
                      className="w-full h-auto object-contain max-h-24"
                    />
                  </div>
                </a>
              </div>

              {/* Presenta */}
              <div
                data-animate
                id="org-bugy"
                className={`text-center transition-all duration-700 ${
                  isVisible("org-bugy") ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h3 className="text-xl font-bold text-[#012787] mb-6 font-['Montserrat',sans-serif]">Presenta:</h3>
                <a
                  href="https://bugy.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform transform hover:scale-105"
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 mx-auto max-w-sm">
                    <img
                      src="/images/bugy.png"
                      alt="Grupo BUGY - Proyectos Recreativos"
                      className="w-full h-auto object-contain max-h-24"
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* Con el apoyo de */}
            <div
              data-animate
              id="org-apoyo"
              className={`text-center transition-all duration-700 mt-12 ${
                isVisible("org-apoyo") ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-xl font-bold text-[#012787] mb-6 font-['Montserrat',sans-serif]">Con el apoyo de:</h3>
              <a
                href="https://www.facebook.com/FideicomisoCTC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-transform transform hover:scale-105"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 mx-auto max-w-sm">
                  <img
                    src="/images/logo-tres-centurias.png"
                    alt="Fideicomiso Complejo Tres Centurias"
                    className="w-full h-auto object-contain max-h-24"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN REGISTRO FINAL */}
        <section id="registro" className="px-4 bg-[#012787] text-white text-center py-20 relative overflow-hidden">
          {/* Decorative elements */}
          <img
            src="/images/decorations/hoja-turquesa.png"
            alt=""
            className="absolute top-10 right-16 w-20 md:w-32 opacity-35 animate-float"
            style={{ animationDelay: "0.5s" }}
          />
          <img
            src="/images/decorations/hoja-amarilla.png"
            alt=""
            className="absolute bottom-16 left-12 w-24 md:w-36 opacity-30 animate-float transform rotate-90"
            style={{ animationDelay: "1.5s" }}
          />
          <img
            src="/images/decorations/linea1.png"
            alt=""
            className="absolute top-1/3 left-0 w-28 md:w-44 opacity-20 transform -rotate-45"
          />
          <img
            src="/images/decorations/linea2.png"
            alt=""
            className="absolute bottom-1/4 right-0 w-32 md:w-48 opacity-20"
          />

          <div className="max-w-2xl mx-auto relative z-10">
            <h2
              data-animate
              id="register-title"
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 font-['Montserrat',sans-serif] ${
                isVisible("register-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Forma Parte del Cambio
            </h2>
            <p
              data-animate
              id="register-desc"
              className={`text-lg opacity-90 mb-8 transition-all duration-700 ${
                isVisible("register-desc") ? "opacity-90 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Inscríbete sin costo y acompáñanos en esta jornada que impulsa la transformación de los espacios públicos.
              ¡El espacio es limitado!
            </p>
            <div className="w-full max-w-lg mx-auto">
              <div className="flex justify-center">
                <a
                  href="https://anpr.org.mx/event/cuarta-jornada-de-capacitacion-anpr-mexico/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-animate
                  id="register-btn"
                  className={`inline-block bg-[#d2dd0a] hover:bg-[#b8c409] text-[#012787] font-bold py-4 px-8 rounded-md shadow-lg transition-all duration-300 hover:scale-105 ${
                    isVisible("register-btn")
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  Inscríbete Ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN MÁS INFORMACIÓN */}
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
                  contact: "aux.programas@anpr.org.mx",
                  href: "mailto:aux.programas@anpr.org.mx",
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
