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
    // Load Montserrat font
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* SECCIÓN PRINCIPAL (HÉROE) */}
      <header className="relative min-h-screen flex items-center justify-center text-center text-white px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Foto%201%20copia.jpg-QOgckoacDmghIK2oKC0IAXouaj1X7h.jpeg')`,
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: "transform",
          }}
        />
        <div className="relative z-20 w-full max-w-6xl mx-auto px-4">
          {/* Logo Section */}
          <div className="mb-8 animate-fade-in-up animation-delay-200"></div>

          {/* Main Title */}
          <div className="mb-8 animate-fade-in-up animation-delay-400">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-5xl mx-auto font-['Montserrat',sans-serif]"
              style={{ textShadow: "3px 3px 6px rgba(0,0,0,0.8)" }}
            >
              Fortaleciendo la Gestión de <span className="text-white">Parques y Espacios Públicos</span>
            </h1>
          </div>

          {/* Event Badge */}
          <div className="mb-8 animate-fade-in-up animation-delay-600">
            <div className="inline-block bg-[#0f2161]/40 border-2 border-white text-[#d2dd0a] font-bold text-lg sm:text-xl md:text-2xl py-4 px-8 rounded-full drop-shadow-2xl backdrop-blur-sm max-w-4xl">
              <span className="block sm:inline">3° Jornada de Capacitación ANPR México -</span>{" "}
              <span className="text-white font-extrabold">Chihuahua</span>
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
              href="https://anpr.org.mx/register/3-jornada-de-capacitacion-chihuahua/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#012787] hover:bg-[#d2dd0a] text-white hover:text-[#012787] font-bold text-xl py-5 px-12 rounded-full shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:shadow-3xl border-2 border-transparent hover:border-[#012787]"
            >
              <span className="flex items-center gap-3">
                Regístrate Gratis Aquí
                <svg
                  className="w-6 h-6 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                <span className="font-semibold">3 de Septiembre</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center gap-2 text-white">
                <Clock className="w-5 h-5 text-[#d2dd0a]" />
                <span className="font-semibold">9:00 AM - 3:00 PM</span>
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
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2
              data-animate
              id="details-title"
              className={`text-3xl md:text-4xl font-bold text-[#012787] text-center mb-12 transition-all duration-700 ${
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
                  content: "Parque Metropolitano Tres Presas,\nChihuahua, Chihuahua",
                  delay: "100",
                },
                { icon: Users, title: "Aforo", content: "50 personas ¡Cupo limitado!", delay: "200" },
                {
                  icon: ClipboardList,
                  title: "Incluye",
                  content: "Ponencias y recorrido en el Parque Metropolitano Tres Presas",
                  delay: "300",
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
                  <item.icon className="w-8 h-8 text-[#012787] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-[#012787] text-slate-600">{item.title}</h3>
                    <p className="text-gray-600" style={{ whiteSpace: "pre-line" }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN ¿POR QUÉ ASISTIR? */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                  alt="3ra Jornada de Capacitación ANPR México - Chihuahua 2025"
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#012787] mb-7">
                  ¡La ANPR México llegará a Chihuahua!
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

            {/* What to Expect Section */}
            <div className="text-center">
              <p
                data-animate
                id="what-expect"
                className={`text-gray-600 font-bold text-4xl transition-all duration-700 mb-14 ${
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
                    <h3 className="text-xl font-bold text-[#012787] mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Video Gallery Section */}
            <div className="mt-20">
              <h3
                data-animate
                id="video-gallery-title"
                className={`text-2xl md:text-3xl font-bold text-[#012787] text-center mb-12 transition-all duration-700 ${
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
                      <h4 className="text-lg font-bold text-[#012787] mb-2 group-hover:text-[#d2dd0a] transition-colors duration-300">
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
                  href="https://www.youtube.com/@AsociacionNacionaldePar-ql4oj"
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
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2
              data-animate
              id="experts-title"
              className={`text-3xl md:text-4xl font-bold text-[#012787] mb-12 transition-all duration-700 ${
                isVisible("experts-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Conoce a los Expertos
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  image: "/images/experts/maria-isabel.jpg",
                  name: "Isabel Velázquez",
                  role: "Directora General",
                  company: "Parques de México",
                },
                {
                  image: "/images/experts/luis.jpg",
                  name: "Luis Romahn",
                  role: "Director Ejecutivo",
                  company: "World Urban Parks",
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
                {
                  image: "/images/experts/tania.jpg",
                  name: "Tania Jaime",
                  role: "Directora de Recreación",
                  company: "San Pedro + Parques",
                },
              ].map((expert, index) => (
                <div
                  key={index}
                  data-animate
                  id={`expert-${index}`}
                  className={`bg-white p-6 rounded-lg shadow-md w-64 text-center transition-all duration-700 hover:-translate-y-2 font-normal group ${
                    isVisible(`expert-${index}`)
                      ? "opacity-100 translate-y-0 rotate-0"
                      : "opacity-0 translate-y-8 rotate-3"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                    <img
                      src={expert.image || "/placeholder.svg"}
                      alt={expert.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#012787]">{expert.name}</h3>
                  <p className="text-gray-700 font-semibold text-sm">{expert.role}</p>
                  <p className="text-gray-500 text-sm">{expert.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN EJES TEMÁTICOS */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2
              data-animate
              id="themes-title"
              className={`text-3xl md:text-4xl font-bold text-[#012787] mb-12 transition-all duration-700 ${
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
                  <h3 className="text-xl font-bold text-[#012787] mb-2">{theme.title}</h3>
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
              className={`text-3xl md:text-4xl font-bold text-[#012787] mb-4 transition-all duration-700 ${
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

            {/* Organizadores principales */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  name: "ANPR México",
                  role: "Organiza:",
                  url: "https://anpr.org.mx",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ANPR-Prb0Ys6jjwaIfhzTH5KqkoaBvrYIJb.png",
                  alt: "ANPR México - Asociación Nacional de Parques y Recreación de México",
                },
                {
                  name: "Grupo BUGY",
                  role: "Presenta:",
                  url: "https://grupobugy.com",
                  image:
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BUGY-VCXJBLWvSI51Y2j6HjjJUX4qcDyQis.png",
                  alt: "Grupo BUGY - Proyectos Recreativos",
                },
              ].map((org, index) => (
                <div
                  key={index}
                  data-animate
                  id={`org-${index}`}
                  className={`text-center transition-all duration-700 ${
                    isVisible(`org-${index}`)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <h3 className="text-xl font-bold text-[#012787] mb-6">{org.role}</h3>
                  <a
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform transform hover:scale-105"
                  >
                    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 mx-auto max-w-sm">
                      <img
                        src={org.image || "/placeholder.svg"}
                        alt={org.alt}
                        className="w-full h-auto object-contain max-h-24"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Línea divisoria */}
            <div
              data-animate
              id="divider"
              className={`w-24 h-1 bg-[#012787] mx-auto mb-12 transition-all duration-700 ${
                isVisible("divider") ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            ></div>

            {/* Colaboradores */}
            <div className="text-center">
              <h3
                data-animate
                id="collab-title"
                className={`text-2xl font-bold text-[#012787] mb-8 transition-all duration-700 ${
                  isVisible("collab-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Con la colaboración de:
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                {Array.from({ length: 5 }, (_, index) => (
                  <div
                    key={index}
                    data-animate
                    id={`collab-${index}`}
                    className={`h-16 w-28 bg-gray-200 rounded flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105`}
                  >
                    <span className="text-xs font-medium text-gray-600">Logo {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN REGISTRO FINAL */}
        <section id="registro" className="px-4 bg-[#012787] text-white text-center py-20">
          <div className="max-w-2xl mx-auto">
            <h2
              data-animate
              id="register-title"
              className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 ${
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
                  href="https://anpr.org.mx/register/3-jornada-de-capacitacion-chihuahua/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-animate
                  id="register-btn"
                  className={`inline-block bg-white hover:bg-[#d2dd0a] text-[#012787] hover:text-[#012787] font-bold py-4 px-8 rounded-md shadow-lg transition-all duration-500 ease-in-out transform hover:-translate-y-1 animate-bounce ${
                    isVisible("register-btn")
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{
                    animationDuration: "2s",
                    animationIterationCount: "infinite",
                  }}
                >
                  Inscríbete Ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN MÁS INFORMACIÓN */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              data-animate
              id="contact-title"
              className={`text-2xl md:text-3xl font-bold text-[#012787] mb-4 transition-all duration-700 ${
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
    </div>
  )
}
