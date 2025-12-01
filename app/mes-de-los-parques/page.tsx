"use client"

import { useEffect, useState } from "react"
import {
  Users,
  Globe,
  Download,
  Mail,
  MessageCircle,
  ArrowRight,
  BookOpen,
  Video,
  UserPlus,
  Calendar,
  Camera,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MesDeLosParques() {
  const [scrollY, setScrollY] = useState(0)
  const [visibleElements, setVisibleElements] = useState(new Set())
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setShowPopup(true)
  }, [])

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
    // Load fonts
    const montserratLink = document.createElement("link")
    montserratLink.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;800&display=swap"
    montserratLink.rel = "stylesheet"
    document.head.appendChild(montserratLink)

    // Load Komika Axis alternative (using a comic-style font as backup)
    const comicLink = document.createElement("link")
    comicLink.href = "https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap"
    comicLink.rel = "stylesheet"
    document.head.appendChild(comicLink)

    // Add Komikax font only (KomiKa Display is now in globals.css)
    const komikaxStyle = document.createElement("style")
    komikaxStyle.textContent = `
      @font-face {
        font-family: 'Komikax';
        src: url('/fonts/komikax.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `
    document.head.appendChild(komikaxStyle)

    return () => {
      document.head.removeChild(montserratLink)
      document.head.removeChild(comicLink)
      document.head.removeChild(komikaxStyle)
    }
  }, [])

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div className="bg-white text-gray-800 font-['Montserrat',sans-serif] antialiased">
      <Header />

      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-pulse-glow">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src="https://anpr.org.mx/wp-content/uploads/2025/12/Imagen-de-WhatsApp-2025-12-01-a-las-12.01.06_5957210f.jpg"
              alt="Anuncio Mes de los Parques"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center text-center px-4 overflow-hidden"
        style={{
          backgroundColor: "#6ab1a4",
          backgroundImage: "url(/images/fondo-nuevo-mes-parques.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-[#d4de00]/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#27debf]/30 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4">
          {/* Mobile Layout - Single Column */}
          <div className="block lg:hidden text-center space-y-8">
            {/* Logo */}
            <div
              data-animate
              id="hero-logo-mobile"
              className={`transition-all duration-1000 ease-out delay-300 transform ${
                isVisible("hero-logo-mobile")
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <img
                src="/images/logo-mes-parques.png"
                alt="Mes de los Parques 2025"
                className="w-64 md:w-80 mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Subtitle */}
            <div
              data-animate
              id="hero-subtitle-mobile"
              className={`transition-all duration-1000 ease-out delay-600 transform ${
                isVisible("hero-subtitle-mobile") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
            >
              <div className="w-full bg-[#012787] border-2 border-black rounded-lg px-6 py-4 shadow-md mb-4">
                <p className="text-xl md:text-2xl text-white font-bold leading-relaxed font-['Komikax',sans-serif] text-center">
                  Edición #8 | Octubre 2025
                </p>
              </div>
              <div className="w-full bg-[#00dfbf] border-2 border-black rounded-lg px-6 py-4 shadow-md">
                <p className="text-lg md:text-xl text-black font-bold font-komika text-center">
                  Un movimiento desde todos los rincones de Latinoamérica
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div
              data-animate
              id="hero-cta-mobile"
              className={`transition-all duration-1000 ease-out delay-900 transform ${
                isVisible("hero-cta-mobile")
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-12 scale-95"
              }`}
            >
              <div className="flex justify-center mb-8">
                <a
                  href="#como-participar"
                  className="inline-flex items-center gap-3 bg-white text-black font-bold text-xl py-5 px-8 rounded-full shadow-lg border-2 border-black transition-all duration-500 hover:bg-gradient-to-r hover:from-[#cfdd00] hover:to-[#00dfbf] hover:text-white hover:scale-105 hover:shadow-xl"
                >
                  <UserPlus className="w-6 h-6" />
                  ¡ÚNETE AL MOVIMIENTO!
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Mobile Image */}
            <div
              data-animate
              id="hero-image-mobile"
              className={`transition-all duration-1200 ease-out delay-1100 transform ${
                isVisible("hero-image-mobile")
                  ? "opacity-100 translate-y-0 scale-100 rotate-0"
                  : "opacity-0 translate-y-8 scale-90 -rotate-3"
              }`}
            >
              <div className="flex justify-center mb-10">
                <img
                  src="/images/perrito-celular.png"
                  alt="Perrito promocionando Mes de los Parques"
                  className="w-full max-w-sm mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Mobile Social Media Icons */}
            <div
              data-animate
              id="hero-social-mobile"
              className={`transition-all duration-1000 ease-out delay-1300 transform ${
                isVisible("hero-social-mobile") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex justify-center space-x-4 pb-8">
                {[
                  { icon: Facebook, href: "https://facebook.com/anprmexico", bg: "bg-blue-600" },
                  { icon: Twitter, href: "https://twitter.com/anprmexico", bg: "bg-blue-400" },
                  { icon: Instagram, href: "https://instagram.com/anprmexico", bg: "bg-pink-500" },
                  { icon: Linkedin, href: "https://linkedin.com/company/anprmexico", bg: "bg-blue-700" },
                  { icon: Youtube, href: "https://youtube.com/anprmexico", bg: "bg-red-600" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.bg} rounded-full flex items-center justify-center text-white shadow-lg border-2 border-black transition-all duration-300 hover:scale-110 hover:shadow-xl hover:animate-bounce`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout - Two Columns */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="text-left space-y-8">
              {/* Logo */}
              <div
                data-animate
                id="hero-logo"
                className={`transition-all duration-1000 ease-out delay-300 transform ${
                  isVisible("hero-logo") ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                }`}
              >
                <img
                  src="/images/logo-mes-parques.png"
                  alt="Mes de los Parques 2025"
                  className="w-64 md:w-80 lg:w-[24rem] mx-auto lg:mx-0 drop-shadow-2xl"
                />
              </div>

              {/* Subtitle */}
              <div
                data-animate
                id="hero-subtitle"
                className={`transition-all duration-1000 ease-out delay-600 transform ${
                  isVisible("hero-subtitle") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                <div className="w-full bg-[#012787] border-2 border-black rounded-lg px-6 py-4 shadow-md mb-4">
                  <p className="text-xl md:text-2xl text-white font-bold leading-relaxed font-['Komikax',sans-serif] text-center">
                    Edición #8 | Octubre 2025
                  </p>
                </div>
                <div className="w-full bg-[#00dfbf] border-2 border-black rounded-lg px-6 py-4 shadow-md">
                  <p className="text-lg md:text-xl text-black font-bold font-komika text-center">
                    Un movimiento desde todos los rincones de Latinoamérica
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div
                data-animate
                id="hero-cta"
                className={`transition-all duration-1000 ease-out delay-900 transform ${
                  isVisible("hero-cta") ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
                }`}
              >
                <a
                  href="#como-participar"
                  className="inline-flex items-center gap-3 bg-white text-black font-bold text-xl py-5 px-8 rounded-full shadow-lg border-2 border-black transition-all duration-500 hover:bg-gradient-to-r hover:from-[#cfdd00] hover:to-[#00dfbf] hover:text-white hover:scale-105 hover:shadow-xl"
                >
                  <UserPlus className="w-6 h-6" />
                  ¡ÚNETE AL MOVIMIENTO!
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Right side - Image & Social Media */}
            <div className="flex flex-col items-center space-y-8">
              {/* Social Media Icons */}
              <div
                data-animate
                id="hero-social"
                className={`transition-all duration-1000 ease-out delay-200 transform ${
                  isVisible("hero-social") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex space-x-4 justify-center mb-6">
                  {[
                    { icon: Facebook, href: "https://facebook.com/anprmexico", bg: "bg-blue-600" },
                    { icon: Twitter, href: "https://twitter.com/anprmexico", bg: "bg-blue-400" },
                    { icon: Instagram, href: "https://instagram.com/anprmexico", bg: "bg-pink-500" },
                    { icon: Linkedin, href: "https://linkedin.com/company/anprmexico", bg: "bg-blue-700" },
                    { icon: Youtube, href: "https://youtube.com/anprmexico", bg: "bg-red-600" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.bg} rounded-full flex items-center justify-center text-white shadow-lg border-2 border-black transition-all duration-300 hover:scale-110 hover:shadow-xl hover:animate-bounce`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Main Image */}
              <div
                data-animate
                id="hero-image"
                className={`transition-all duration-1200 ease-out delay-500 transform ${
                  isVisible("hero-image")
                    ? "opacity-100 translate-x-0 scale-100 rotate-0"
                    : "opacity-0 translate-x-8 scale-90 -rotate-3"
                }`}
              >
                <div className="relative">
                  <img
                    src="/images/perrito-celular.png"
                    alt="Perrito promocionando Mes de los Parques"
                    className="w-full max-w-md mx-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿QUÉ ES? SECTION */}
      <section className="relative py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2
            data-animate
            id="que-es-title"
            className={`text-4xl md:text-5xl font-komika font-bold text-[#001e80] mb-8 transition-all duration-700 ${
              isVisible("que-es-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            ¿Qué es el Mes de los Parques?
          </h2>

          <div
            data-animate
            id="que-es-content"
            className={`max-w-4xl mx-auto mb-12 transition-all duration-700 delay-200 ${
              isVisible("que-es-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Celebración internacional para <strong className="text-[#001e80]">visibilizar, proteger y activar</strong>{" "}
              los espacios públicos como motores de{" "}
              <strong className="text-[#27debf]">salud, inclusión y comunidad</strong>.
            </p>
            <p className="text-lg text-gray-600">
              Cada año participan gobiernos, organizaciones, empresas y ciudadanos con actividades, campañas y acciones
              inspiradoras.
            </p>
          </div>

          {/* Sección Calendario de Actividades movida aquí */}
          <div className="mt-16">
            {/* Imagen decorativa arriba del título */}
            <div
              data-animate
              id="calendario-deco-top"
              className={`text-center mb-6 transition-all duration-700 ${
                isVisible("calendario-deco-top") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <img
                src="/images/actividades-caricatura1.png"
                alt=""
                role="presentation"
                aria-hidden="true"
                className="w-full max-w-full opacity-95 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <h2
              data-animate
              id="calendario-title"
              className={`text-4xl md:text-5xl font-komika font-bold text-[#001e80] text-center mb-16 transition-all duration-700 ${
                isVisible("calendario-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Calendario de Actividades
            </h2>

            <div
              data-animate
              id="calendario-content"
              className={`text-center transition-all duration-700 delay-200 ${
                isVisible("calendario-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="rounded-2xl p-8 text-white mb-8" style={{ backgroundColor: "#001E80" }}>
                <h3 className="text-2xl font-komika font-bold mb-6">Durante todo octubre:</h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Globe className="w-8 h-8 text-[#d4de00]" />
                    <span className="text-lg">Webinars semanales</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-[#d4de00]" />
                    <span className="text-lg">Bibliografía y recursos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-8 h-8 text-[#d4de00]" />
                    <span className="text-lg">Presentaciones ANPR</span>
                  </div>
                </div>
              </div>

              <a
                href="https://anpr.org.mx/eventos-mes-parques"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#d4de00] hover:bg-[#b8c409] text-[#001e80] font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Consulta aquí el calendario actualizado
              </a>

              {/* Imagen decorativa debajo del botón */}
              <div
                data-animate
                id="calendario-deco-bottom"
                className={`text-center mt-8 transition-all duration-700 delay-400 ${
                  isVisible("calendario-deco-bottom") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <img
                  src="/images/actividades-caricatura2.png"
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  className="w-full max-w-full opacity-95 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONES DEL MES DE LOS PARQUES SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            data-animate
            id="funciones-title"
            className={`text-4xl md:text-5xl font-komika font-bold text-[#001e80] text-center mb-16 transition-all duration-700 ${
              isVisible("funciones-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Funciones del Mes de los Parques
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Formativa y educativa",
                description:
                  "Compartamos conocimientos y recursos para mejorar los parques y espacios públicos. ¡Súmate!",
                image: "/images/formativa-educativa.png",
              },
              {
                title: "Recreativa e Informativa",
                description:
                  "Comparte las actividades programadas en tu parque en octubre y te ayudamos a difundirlas.",
                image: "/images/recreativa-programacion.png",
              },
              {
                title: "Llamado a la Acción",
                description:
                  "Crezcamos como comunidad e impulsemos el reconocimiento del valor que tienen los parques.",
                image: "/images/convocatoria-accion.png",
              },
              {
                title: "Exposición y Reconocimiento",
                description: "Visibilizar el esfuerzo y trabajo diario de quienes mantienen vivos nuestros parques.",
                image: "/images/exposicion.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-animate
                id={`funcion-${index}`}
                className={`transition-all duration-700 ${
                  isVisible(`funcion-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                <div
                  className="border border-black rounded-2xl p-8 shadow-xl h-full min-h-[350px] flex flex-col items-center"
                  style={{ backgroundColor: "#001e80" }}
                >
                  {/* Icono en la parte superior */}
                  <div className="mb-6 flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-32 h-32 object-contain drop-shadow-lg"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="flex-grow flex flex-col justify-center text-center">
                    <h3
                      className="text-xl font-black mb-4 text-white"
                      style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900 }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO PARTICIPAR SECTION */}
      <section id="como-participar" className="py-20 px-4" style={{ backgroundColor: "#001e80" }}>
        <div className="max-w-6xl mx-auto">
          <h2
            data-animate
            id="participar-title"
            className={`text-4xl md:text-5xl font-komika font-bold text-white text-center mb-16 transition-all duration-700 ${
              isVisible("participar-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            ¿Cómo puedes participar?
          </h2>

          <div className="space-y-20">
            {[
              {
                title: "Inscríbete como promotor oficial",
                description: "Recibe el Kit de Celebración, comparte tu logotipo y accedes a recursos exclusivos.",
                icon: UserPlus,
                button: "Únete aquí",
                deadline: "31 oct. 2025",
                image: "/images/inscribete-promotor.png",
                imagePosition: "left",
                url: "https://es.surveymonkey.com/r/PYDL3K6",
              },
              {
                title: "Registra tu actividad",
                description:
                  "Tus eventos formarán parte del Calendario Oficial y se difundirán en nuestras plataformas.",
                icon: Calendar,
                button: "Regístrala aquí",
                deadline: "31 oct. 2025",
                image: "/images/registra-actividad.png",
                imagePosition: "right",
                url: "https://es.surveymonkey.com/r/7GC8RGY",
              },
              {
                title: "Participa en el reto #DesdeMiParque",
                description: "Graba un video mostrando tu parque y únete a un collage audiovisual continental.",
                icon: Camera,
                button: "Envía tu video",
                deadline: "28 oct. 2025",
                video: true,
                imagePosition: "left",
                url: "https://es.surveymonkey.com/r/29YLLXZ",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-animate
                id={`participate-${index}`}
                className={`transition-all duration-700 ${
                  isVisible(`participate-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                {/* DESKTOP: Layout horizontal con imagen al lado */}
                <div
                  className={`bg-white rounded-2xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hidden md:flex items-center gap-12 ${
                    item.imagePosition === "right" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Imagen o Video Desktop - AL LADO, 50% más pequeña */}
                  <div className="flex-shrink-0 w-1/3">
                    {item.video ? (
                      <div className="relative">
                        {/* Montaje de celular para el video */}
                        <div className="relative mx-auto" style={{ width: "200px", height: "360px" }}>
                          {/* Marco del celular */}
                          <div className="absolute inset-0 bg-black rounded-[2rem] p-1.5">
                            <div className="w-full h-full bg-gray-900 rounded-[1.5rem] overflow-hidden">
                              {/* Video de YouTube */}
                              <iframe
                                src="https://www.youtube.com/embed/seUpTobTcaM?autoplay=1&loop=1&mute=1&playlist=seUpTobTcaM&controls=0&showinfo=0&rel=0&modestbranding=1"
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                style={{ border: "none" }}
                              />
                            </div>
                          </div>
                          {/* Botón home del celular */}
                          <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full opacity-30"></div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-auto object-contain max-h-64"
                        loading="lazy"
                        style={{ imageRendering: "crisp-edges" }}
                      />
                    )}
                  </div>

                  {/* Contenido Desktop - AL LADO de la imagen */}
                  <div className="flex-1">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#001e80] rounded-full mb-6">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-[#001e80] mb-6">{item.title}</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed text-xl">{item.description}</p>

                    <div className="space-y-4">
                      {item.url ? (
                        <a
                          href={item.url}
                          target={item.url.startsWith("mailto:") ? "_self" : "_blank"}
                          rel={item.url.startsWith("mailto:") ? "" : "noopener noreferrer"}
                          className="block w-full py-4 px-6 bg-gradient-to-r from-[#d4de00] to-[#27debf] text-[#001e80] font-bold rounded-full border-2 border-black transition-all duration-300 hover:scale-105 shadow-lg text-lg text-center"
                        >
                          {item.button}
                        </a>
                      ) : (
                        <button className="w-full py-4 px-6 bg-gradient-to-r from-[#d4de00] to-[#27debf] text-[#001e80] font-bold rounded-full border-2 border-black transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                          {item.button}
                        </button>
                      )}
                      <p className="text-sm text-[#001e80] flex items-center justify-center gap-2">
                        <span className="w-4 h-4 bg-[#001e80] rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </span>
                        Fecha límite: <strong>{item.deadline}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* MOBILE: Layout vertical con imagen debajo */}
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 md:hidden">
                  {/* Contenido Mobile - ARRIBA */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-[#001e80] rounded-full mb-6 mx-auto">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#001e80] mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{item.description}</p>

                    <div className="space-y-4">
                      {item.url ? (
                        <a
                          href={item.url}
                          target={item.url.startsWith("mailto:") ? "_self" : "_blank"}
                          rel={item.url.startsWith("mailto:") ? "" : "noopener noreferrer"}
                          className="block w-full py-4 px-6 bg-gradient-to-r from-[#d4de00] to-[#27debf] text-[#001e80] font-bold rounded-full border-2 border-black transition-all duration-300 hover:scale-105 shadow-lg text-lg text-center"
                        >
                          {item.button}
                        </a>
                      ) : (
                        <button className="w-full py-4 px-6 bg-gradient-to-r from-[#d4de00] to-[#27debf] text-[#001e80] font-bold rounded-full border-2 border-black transition-all duration-300 hover:scale-105 shadow-lg text-lg">
                          {item.button}
                        </button>
                      )}
                      <p className="text-sm text-[#001e80] flex items-center justify-center gap-2">
                        <span className="w-4 h-4 bg-[#001e80] rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </span>
                        Fecha límite: <strong>{item.deadline}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Imagen o Video Mobile - DEBAJO del contenido */}
                  <div className="flex justify-center">
                    {item.video ? (
                      <div className="relative">
                        {/* Montaje de celular para el video - móvil */}
                        <div className="relative mx-auto" style={{ width: "180px", height: "320px" }}>
                          {/* Marco del celular */}
                          <div className="absolute inset-0 bg-black rounded-[1.5rem] p-1">
                            <div className="w-full h-full bg-gray-900 rounded-[1.2rem] overflow-hidden">
                              {/* Video de YouTube */}
                              <iframe
                                src="https://www.youtube.com/embed/seUpTobTcaM?autoplay=1&loop=1&mute=1&playlist=seUpTobTcaM&controls=0&showinfo=0&rel=0&modestbranding=1"
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                style={{ border: "none" }}
                              />
                            </div>
                          </div>
                          {/* Botón home del celular */}
                          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-white rounded-full opacity-30"></div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="max-w-[280px] h-auto object-contain"
                        loading="lazy"
                        style={{ imageRendering: "crisp-edges" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hashtags con recuadro azul destacado */}
          <div
            data-animate
            id="hashtags"
            className={`text-center mt-12 transition-all duration-700 delay-800 ${
              isVisible("hashtags") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-block bg-[#001e80] border-2 border-[#27debf] rounded-2xl px-8 py-4 shadow-xl">
              <p className="text-[#d4de00] text-xl font-komika font-bold">#MesDeLosParques | #ActivandoMiParque</p>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2
            data-animate
            id="recursos-title"
            className={`text-4xl md:text-5xl font-komika font-bold text-[#001e80] text-center mb-16 transition-all duration-700 ${
              isVisible("recursos-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Recursos para compartir
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Kit de Celebración",
                icon: Download,
                description: "Descarga todos los recursos visuales",
                color: "from-[#d4de00] to-yellow-500",
                url: "https://www.dropbox.com/scl/fo/05bnrlx637jp1zeup5r0r/AL-ZP8FTuTOx6ZhM7PwiTLY?rlkey=470w7l1fafvttuaw62bkj5pyu&st=raakobrl&dl=0",
              },
              {
                title: "Guía de Acciones",
                icon: BookOpen,
                description: "Manual completo de actividades",
                color: "from-[#27debf] to-cyan-500",
                url: "https://www.flipsnack.com/revistaparques/mes-de-los-parques-gu-a-de-acciones.html",
              },
              {
                title: "Blogs y artículos",
                icon: BookOpen,
                description: "Recursos y convocatorias",
                color: "from-[#001e80] to-blue-600",
                url: "https://anpr.org.mx/convocatoria-general-de-participacion-octubre-mes-de-los-parques-2025/",
              },
              {
                title: "Webinars",
                icon: Video,
                description: "Accede a la cartelera de webinars",
                color: "from-purple-500 to-purple-600",
                url: "https://anpr.org.mx/cartelera-de-webinars-mes-de-los-parques-2025/",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-animate
                id={`resource-${index}`}
                className={`transition-all duration-700 ${
                  isVisible(`resource-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                {item.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-2xl p-6 text-white cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col block"
                    style={{ backgroundColor: "#00DFBF" }}
                  >
                    {/* Imagen decorativa de fondo anclada en la parte superior */}
                    <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none overflow-hidden">
                      <img
                        src="/images/deco-comic-turquesa.png"
                        alt=""
                        className="w-full h-auto object-cover object-top"
                        style={{
                          minHeight: "60px",
                          maxHeight: "90px",
                          imageRendering: "crisp-edges",
                          transform: "scaleX(-1)",
                        }}
                        loading="lazy"
                      />
                    </div>

                    {/* Contenido de la tarjeta */}
                    <div className="relative z-10 flex flex-col h-full">
                      <item.icon className="w-10 h-10 mb-4" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm flex-grow">{item.description}</p>
                    </div>
                  </a>
                ) : (
                  <div
                    className="relative rounded-2xl p-6 text-white cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                    style={{ backgroundColor: "#00DFBF" }}
                  >
                    {/* Imagen decorativa de fondo anclada en la parte superior */}
                    <div className="absolute top-0 left-0 right-0 z-0 pointer-events-none overflow-hidden">
                      <img
                        src="/images/deco-comic-turquesa.png"
                        alt=""
                        className="w-full h-auto object-cover object-top"
                        style={{
                          minHeight: "60px",
                          maxHeight: "90px",
                          imageRendering: "crisp-edges",
                          transform: "scaleX(-1)",
                        }}
                        loading="lazy"
                      />
                    </div>

                    {/* Contenido de la tarjeta */}
                    <div className="relative z-10 flex flex-col h-full">
                      <item.icon className="w-10 h-10 mb-4" />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-white/90 text-sm flex-grow">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOTORES SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            data-animate
            id="promotores-title"
            className={`text-4xl md:text-5xl font-komika font-bold text-[#001e80] mb-8 transition-all duration-700 ${
              isVisible("promotores-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Promotores del Mes de los Parques
          </h2>

          <div
            data-animate
            id="promotores-content"
            className={`transition-all duration-700 delay-200 ${
              isVisible("promotores-content") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl text-gray-700 mb-12">
              Estas organizaciones apoyan la celebración del Mes de los Parques 2025
            </p>

            {/* Logos en una sola línea */}
            <div
              className="flex flex-row flex-nowrap justify-center items-center mb-12 overflow-x-auto"
              style={{ gap: "18px" }}
            >
              {[
                {
                  name: "Zapopan",
                  logo: "/images/logo-zapopan.png",
                  url: "#",
                },
                {
                  name: "Tlalticpac - Regeneración Urbana",
                  logo: "/images/logo-tlalticpac.png",
                  url: "#",
                },
                {
                  name: "Parque Cancún",
                  logo: "/images/logo-parque-cancun.png",
                  url: "#",
                },
                {
                  name: "ProBosque Chapultepec",
                  logo: "/images/logo-probosque-chapultepec.png",
                  url: "#",
                },
                {
                  name: "San Pedro Parques",
                  logo: "/images/logo-san-pedro-parques.png",
                  url: "#",
                },
              ].map((promotor, index) => (
                <div
                  key={index}
                  data-animate
                  id={`promotor-${index}`}
                  className={`flex-shrink-0 transition-all duration-700 ${
                    isVisible(`promotor-${index}`)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 150}ms`,
                    width: "18%",
                    minWidth: "120px",
                  }}
                >
                  <a
                    href={promotor.url}
                    className="block bg-white rounded-xl p-3 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 flex items-center justify-center"
                    style={{ height: "90px" }}
                  >
                    <img
                      src={promotor.logo || "/placeholder.svg"}
                      alt={promotor.name}
                      className="object-contain"
                      style={{ maxHeight: "60px", maxWidth: "100%" }}
                      loading="lazy"
                    />
                  </a>
                </div>
              ))}
            </div>

            {/* Sección de llamado a la acción */}
            <div className="space-y-6 pt-8 border-t-2 border-gray-200">
              <p className="text-lg text-gray-600">
                ¿Tu organización quiere ser promotora? Únete al movimiento y haz que tu logotipo aparezca aquí.
              </p>
              <a
                href="https://es.surveymonkey.com/r/PYDL3K6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#27debf] hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Inscríbete como Promotor
              </a>
              <p className="text-sm text-gray-500">
                📆 Fecha límite para enviar logotipo: <strong>31 oct. 2025</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section className="py-20 px-4" style={{ backgroundColor: "#001E80" }}>
        <div className="max-w-6xl mx-auto text-center">
          <h2
            data-animate
            id="contacto-title"
            className={`text-4xl md:text-5xl font-komika font-bold text-white mb-16 transition-all duration-700 ${
              isVisible("contacto-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Contacto
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "comunicacion@anpr.org.mx",
                link: "mailto:comunicacion@anpr.org.mx",
              },
              {
                icon: Mail,
                title: "Contenido",
                value: "contenido@anpr.org.mx",
                link: "mailto:contenido@anpr.org.mx",
              },
              {
                icon: MessageCircle,
                title: "WhatsApp",
                value: "+52 999 353 0691",
                link: "https://wa.me/5299935306910",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-animate
                id={`contact-${index}`}
                className={`transition-all duration-700 ${
                  isVisible(`contact-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
              >
                <a
                  href={item.link}
                  className="block bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#d4de00] rounded-full mb-4 mx-auto">
                    <item.icon className="w-8 h-8 text-[#001e80]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#001e80] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
