"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award, Globe, BookOpen, Download, FileText, CheckCircle, Info, MapPin, ChevronDown } from "lucide-react"

export default function PremiosANPR() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [openAccordion, setOpenAccordion] = useState<number | null>(null)

  const [isApplicationOpen, setIsApplicationOpen] = useState(false)

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  useEffect(() => {
    const targetDate = new Date("2026-01-25T23:59:59").getTime()

    const applicationOpenDate = new Date("2025-11-14T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      setIsApplicationOpen(now >= applicationOpenDate)

      if (distance < 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const format = (num: number) => num.toString().padStart(2, "0")

  return (
    <div className="bg-gray-50 text-gray-800 font-['Inter',sans-serif] antialiased">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative text-white min-h-screen flex items-center overflow-hidden py-16 md:py-24">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/premios-20anpr-202025-02.jpg')",
            }}
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Floating sparkles - slowed down animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Small sparkles */}
            {[...Array(30)].map((_, i) => (
              <div
                key={`sparkle-${i}`}
                className="absolute animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 6}s`,
                }}
              >
                <div
                  className="w-1 h-1 bg-white rounded-full"
                  style={{
                    boxShadow: "0 0 4px 1px rgba(255, 255, 255, 0.8)",
                  }}
                />
              </div>
            ))}

            {/* Larger bokeh effects */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`bokeh-${i}`}
                className="absolute rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${40 + Math.random() * 80}px`,
                  height: `${40 + Math.random() * 80}px`,
                  background: "radial-gradient(circle, rgba(100, 150, 255, 0.4) 0%, transparent 70%)",
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${10 + Math.random() * 10}s`,
                  filter: "blur(20px)",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center justify-center text-center gap-6 lg:gap-8">
              {/* Title Section */}
              <div className="w-full">
                <h1 className="font-extrabold font-montserrat">
                  <div
                    className="text-2xl md:text-3xl tracking-[0.3em] mb-3"
                    style={{
                      background:
                        "linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.4)",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                    }}
                  >
                    – PREMIOS –
                  </div>
                  <div
                    className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-3"
                    style={{
                      fontFamily: "'Arial Black', sans-serif",
                      background:
                        "linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.4)",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                    }}
                  >
                    ANPR
                  </div>
                  <div
                    className="text-4xl md:text-5xl lg:text-6xl tracking-wide font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      textShadow: "0 4px 8px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.4)",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
                    }}
                  >
                    2026
                  </div>
                </h1>
              </div>

              {/* Image Section */}
              <div className="flex-shrink-0 w-full flex justify-center">
                <img
                  src="/images/premio-20anpr.png"
                  alt="Premio ANPR"
                  className="w-80 md:w-96 lg:w-[28rem] h-auto drop-shadow-2xl"
                />
              </div>

              {/* Description and CTA Section */}
              <div className="w-full">
                <p className="mx-auto max-w-2xl text-xl md:text-2xl text-gray-100 leading-relaxed">
                  Reconocemos las mejores prácticas en parques, espacio público y recreación de Latinoamérica.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  {isApplicationOpen ? (
                    <a
                      href="https://premios.anpr.org.mx/participants/create"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-gray-900 bg-[#00DFBF] hover:bg-[#00c9ab] shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      Aplica Ahora
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-gray-900 bg-[#00DFBF] opacity-60 cursor-not-allowed shadow-lg transition-all duration-300"
                    >
                      Aplica a partir del 14 de noviembre
                    </button>
                  )}
                  <a
                    href="https://anpr.org.mx/mp-files/bases-premios-anpr-2026.pdf/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-lg text-white bg-transparent hover:bg-white hover:text-[#012787] transform hover:scale-105 transition-all"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Bases
                  </a>
                </div>
                <p className="mt-8 text-lg text-gray-200 flex items-center justify-center gap-2">
                  <MapPin className="w-5 h-5 text-[#00DFBF]" />
                  Sede de premiación: <span className="font-bold">Congreso Parques 2026</span>, Tijuana, Baja
                  California.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fechas Importantes y Countdown */}
        <section id="fechas" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-[#012787] tracking-wide uppercase font-montserrat">
                ¡No te quedes fuera!
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl font-montserrat">
                Fechas Importantes
              </p>
              <span className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full mt-4 animate-pulse">
                NUEVAS FECHAS
              </span>
            </div>

            {/* Countdown Timer */}
            <div className="max-w-2xl mx-auto mt-12 bg-gray-50 rounded-2xl shadow-inner p-8 text-center">
              <h3 className="text-2xl font-bold text-[#012787] font-montserrat">El cierre de la convocatoria es en:</h3>
              <div className="flex justify-center space-x-4 md:space-x-6 mt-6">
                <div
                  className="text-center p-4 rounded-lg w-28"
                  style={{
                    background: "#02183a",
                  }}
                >
                  <span className="block text-4xl md:text-5xl font-extrabold" style={{ color: "#7ddebf" }}>
                    {format(countdown.days)}
                  </span>
                  <span className="block text-sm uppercase mt-1" style={{ color: "#7ddebf" }}>
                    Días
                  </span>
                </div>
                <div
                  className="text-center p-4 rounded-lg w-28"
                  style={{
                    background: "#02183a",
                  }}
                >
                  <span className="block text-4xl md:text-5xl font-extrabold" style={{ color: "#7ddebf" }}>
                    {format(countdown.hours)}
                  </span>
                  <span className="block text-sm uppercase mt-1" style={{ color: "#7ddebf" }}>
                    Horas
                  </span>
                </div>
                <div
                  className="text-center p-4 rounded-lg w-28"
                  style={{
                    background: "#02183a",
                  }}
                >
                  <span className="block text-4xl md:text-5xl font-extrabold" style={{ color: "#7ddebf" }}>
                    {format(countdown.minutes)}
                  </span>
                  <span className="block text-sm uppercase mt-1" style={{ color: "#7ddebf" }}>
                    Minutos
                  </span>
                </div>
                <div
                  className="text-center p-4 rounded-lg w-28"
                  style={{
                    background: "#02183a",
                  }}
                >
                  <span className="block text-4xl md:text-5xl font-extrabold" style={{ color: "#7ddebf" }}>
                    {format(countdown.seconds)}
                  </span>
                  <span className="block text-sm uppercase mt-1" style={{ color: "#7ddebf" }}>
                    Segundos
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="max-w-4xl mx-auto mt-16">
              <ul className="space-y-6">
                <li className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#012787] text-white rounded-full font-bold">
                    1
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-gray-900">Lanzamiento:</span> 15 de noviembre 2025
                  </p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#012787] text-white rounded-full font-bold">
                    2
                  </div>
                  <p className="text-lg text-red-600">
                    <span className="font-bold text-red-700">Cierre de convocatoria:</span> 25 de enero 2026
                  </p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-300 text-gray-700 rounded-full font-bold">
                    3
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-gray-900">Lanzamiento de Voto Social:</span> 15 de febrero 2026
                  </p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-300 text-gray-700 rounded-full font-bold">
                    4
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-gray-900">Cierre de Voto Social:</span> 13 de marzo 2026
                  </p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-300 text-gray-700 rounded-full font-bold">
                    5
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-gray-900">Resultados:</span> 20 de marzo 2026
                  </p>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#012787] text-white rounded-full">
                    <Award className="w-6 h-6" />
                  </div>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-gray-900">Entrega de premios:</span> Congreso Parques 2026, 13-15 de
                    mayo en Tijuana
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section id="beneficios" className="py-16 sm:py-24" style={{ backgroundColor: "#012780" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-montserrat">
                Beneficios de obtener un premio ANPR
              </h2>
              <p className="mt-4 text-lg text-white">
                Más que un premio, es un reconocimiento que impulsa tu proyecto.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#012787] rounded-full text-white">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 font-montserrat">Reconocimiento Público</h3>
                <p className="mt-2 text-base text-gray-600">
                  Entrega y reconocimiento durante la ceremonia de premiación en el Congreso Parques 2026.
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#012787] rounded-full text-white">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 font-montserrat">Promoción Latinoamericana</h3>
                <p className="mt-2 text-base text-gray-600">
                  Visibilidad ante la comunidad ANPR en redes sociales, página web y comunidad.
                </p>
              </div>
              <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-[#012787] rounded-full text-white">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 font-montserrat">Desarrollo de Contenido</h3>
                <p className="mt-2 text-base text-gray-600">
                  Participación en la Revista Parques, Webinars y Artículos del mes de la ANPR México.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo Aplicar Section */}
        <section id="aplicar" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-montserrat">
                ¿Cómo puedo aplicar?
              </h2>
              <p className="mt-4 text-lg text-gray-600">Un proceso sencillo en 6 pasos.</p>
            </div>
            <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-6">
              {[
                {
                  step: "1",
                  title: "Revisa las bases",
                  description: "Asegúrate de entender todos los requisitos y criterios de tu categoría.",
                  link: "https://anpr.org.mx/mp-files/bases-premios-anpr-2026.pdf/",
                },
                {
                  step: "2",
                  title: "Sube tu propuesta",
                  description:
                    "Completa tus datos en el formato en línea y selecciona la categoría en la que deseas participar.",
                },
                {
                  step: "3",
                  title: "Recibe confirmación",
                  description: "Te llegará un correo electrónico confirmando la recepción de tu información.",
                },
                {
                  step: "4",
                  title: "Difunde en Voto Social",
                  description: "Durante el periodo de Voto Social, difunde tu convocatoria para ganar puntos extras.",
                },
                {
                  step: "5",
                  title: "Espera los resultados",
                  description: "Te notificaremos por correo electrónico el resultado obtenido por tu propuesta.",
                },
                {
                  step: "6",
                  title: "¡Recibe tu premio!",
                  description: "Nos vemos en la ceremonia de premiación en el Congreso Parques Tijuana 2026.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl shadow-sm">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#012787] text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-montserrat">{item.title}</h3>
                    <p className="mt-1 text-gray-600">
                      {item.description}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#012787] hover:underline ml-1"
                        >
                          Descarga las bases aquí
                        </a>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Elegibilidad Section */}
        <section id="elegibilidad" className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left column - Text content */}
              <div>
                <div className="text-left">
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-montserrat">
                    ¿Quiénes pueden participar?
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Invitamos a una amplia gama de actores a postular sus proyectos.
                  </p>
                </div>
                <div className="mt-12">
                  <ul className="space-y-4">
                    {[
                      "Instituciones académicas de América Latina.",
                      "Gobiernos municipales y ayuntamientos.",
                      "Organizaciones civiles vinculadas al espacio público.",
                      "Organismos públicos y privados (urbanismo, ambiente, etc.).",
                      "Colegios y asociaciones profesionales.",
                      "Estudiantes universitarios (últimos años o posgrado).",
                      "Consultoras y despachos (arquitectura, diseño, etc.).",
                      "Agencias inmobiliarias comprometidas.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckCircle className="w-6 h-6 text-[#012787]" />
                        </div>
                        <p className="ml-3 text-lg text-gray-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right column - Image */}
              <div className="flex items-center justify-center lg:justify-end">
                <img
                  src="/images/recurso-202.png"
                  alt="Premios ANPR - Ilustración de ganador"
                  className="w-full max-w-md lg:max-w-lg h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categorías Section */}
        <section id="categorias" className="py-16 sm:py-24" style={{ backgroundColor: "#012787" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-montserrat">
                Categorías Proyectos e Iniciativas
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                Reconociendo las acciones que transforman los espacios públicos y mejoran la calidad de vida en las
                ciudades.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {[
                {
                  image: "/images/activacio-cc-81n-20social-2c-20educativa-20y-20cultural.png",
                  title: "Activación Social, Educativa y Cultural",
                  description:
                    "Reconoce proyectos que promueven la participación social y comunitaria a través de la educación, la cultura y la recreación.",
                  topics: [
                    "Programas de educación ambiental",
                    "Arte público y cultura",
                    "Inclusión y participación ciudadana",
                    "Activaciones deportivas",
                    "Voluntariado en parques",
                  ],
                },
                {
                  image: "/images/medio-20ambiente-20y-20resiliencia-20urbana.png",
                  title: "Medio Ambiente y Resiliencia Urbana",
                  description:
                    "Reconoce iniciativas que fortalecen la relación entre parques y entorno natural, promoviendo la sostenibilidad y resiliencia.",
                  topics: [
                    "Hidrología urbana y gestión de agua",
                    "Bosques urbanos y corredores verdes",
                    "Biodiversidad y restauración ecológica",
                    "Cambio climático",
                    "Mantenimiento sostenible",
                  ],
                },
                {
                  image: "/images/isen-cc-83o-20de-20espacios-20pu-cc-81blicos-20y-20playgrounds.png",
                  title: "Diseño de Espacios Públicos y Playgrounds",
                  description:
                    "Distingue proyectos de planeación, diseño y construcción que transforman parques en espacios funcionales, accesibles y atractivos.",
                  topics: [
                    "Diseño urbano y arquitectura del paisaje",
                    "Espacios recreativos y parques de bolsillo",
                    "Playgrounds inclusivos y seguros",
                    "Accesibilidad universal",
                    "Urbanismo táctico",
                  ],
                },
                {
                  image: "/images/innovacio-cc-81n-20y-20tecnologi-cc-81a-20para-20parques.png",
                  title: "Innovación y Tecnología para Parques",
                  description:
                    "Premia iniciativas que incorporan nuevas tecnologías, materiales y procesos innovadores en la gestión y disfrute de los parques.",
                  topics: [
                    "Soluciones digitales para la gestión",
                    "Tecnología para mantenimiento y seguridad",
                    "Materiales sostenibles",
                    "Energías limpias",
                    "Datos, monitoreo y análisis",
                  ],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                  style={{ backgroundColor: "#0f2161" }}
                >
                  <div className="p-8 text-center">
                    <div className="mb-4">
                      <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: "#EFD175" }}>
                        – PREMIO –
                      </span>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                      <img
                        src={category.image || "/placeholder.svg"}
                        alt={category.title}
                        className="w-24 h-24 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold font-montserrat mb-5" style={{ color: "#efd175" }}>
                      {category.title}
                    </h3>
                    <p className="text-white">{category.description}</p>

                    {/* Accordion for Temas Clave */}
                    <div className="mt-6">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex items-center justify-center text-center font-semibold text-white hover:text-[#efd175] transition-colors duration-300"
                      >
                        <span>Temas Clave</span>
                        <ChevronDown
                          className={`w-5 h-5 ml-2 transition-transform duration-300 ease-in-out ${
                            openAccordion === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openAccordion === index ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                      >
                        <ul className="space-y-2 text-sm text-gray-200 list-disc list-inside text-left">
                          {category.topics.map((topic, idx) => (
                            <li key={idx}>{topic}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 mb-16">
              <div className="h-px w-full" style={{ backgroundColor: "#EFD175" }} />
            </div>

            {/* Premios Individuales */}
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-montserrat">
                Categorías Individuales
              </h2>
              <p className="mt-4 text-lg text-gray-200">Reconociendo a los líderes que marcan la diferencia.</p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              <div
                className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{ backgroundColor: "#0f2161" }}
              >
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: "#EFD175" }}>
                      – PREMIO –
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src="/images/premio-20semilla.png" alt="Premio Semilla" className="w-24 h-24 object-contain" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold font-montserrat" style={{ color: "#efd175" }}>
                    Semilla
                  </h3>
                  <p className="mt-4 text-white">
                    Celebra a jóvenes líderes (menores de 35 años) que están transformando su entorno e impulsando
                    cambios positivos en la industria de los parques urbanos.
                  </p>
                </div>
              </div>
              <div
                className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{ backgroundColor: "#0f2161" }}
              >
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: "#EFD175" }}>
                      – PREMIO –
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/premio-20li-cc-81der.png"
                      alt="Premio Líder"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold font-montserrat" style={{ color: "#efd175" }}>
                    Líder
                  </h3>
                  <p className="mt-4 text-white">
                    Honra a profesionales con visión y compromiso que han dejado una huella en la gestión y
                    transformación de los parques, elevando los estándares de la industria.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              {isApplicationOpen ? (
                <a
                  href="https://premios.anpr.org.mx/participants/create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-gray-900 bg-[#00DFBF] hover:bg-[#00c9ab] shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Aplica Ahora
                </a>
              ) : (
                <button
                  disabled
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-gray-900 bg-[#00DFBF] opacity-60 cursor-not-allowed shadow-lg transition-all duration-300"
                >
                  Aplica a partir del 14 de noviembre
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Premios Especiales */}
        <section id="especiales" className="py-16 sm:py-24" style={{ backgroundColor: "#012787" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="h-px w-full" style={{ backgroundColor: "#EFD175" }} />
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-montserrat">Categorías Especiales</h2>
              <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
                En el marco de nuestro 10º Aniversario ANPR, otorgaremos reconocimientos especiales a individuos e
                instituciones clave.
              </p>
              <div className="mt-6 max-w-2xl mx-auto">
                <div className="rounded-lg bg-yellow-50 p-4 border border-yellow-200">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Info className="h-5 w-5 text-yellow-500" />
                    </div>
                    <div className="ml-3 text-left">
                      <p className="text-sm font-medium text-yellow-800">
                        Las siguientes categorías serán designadas directamente por la ANPR México y no están sujetas a
                        convocatoria o aplicación pública.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              <div
                className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{ backgroundColor: "#0f2161" }}
              >
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: "#EFD175" }}>
                      – PREMIO –
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/premio-20fundador-20y-20lealtad-20anpr.png"
                      alt="Premio Lealtad ANPR"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold font-montserrat" style={{ color: "#efd175" }}>
                    Lealtad ANPR
                  </h3>
                  <p className="mt-4 text-white">
                    Reconoce a quienes han acompañado a la ANPR desde sus inicios, demostrando fidelidad y compromiso.
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{ backgroundColor: "#0f2161" }}
              >
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: "#EFD175" }}>
                      – PREMIO –
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/trayectoria-20anpr.png"
                      alt="Premio Trayectoria ANPR"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold font-montserrat" style={{ color: "#efd175" }}>
                    Trayectoria ANPR
                  </h3>
                  <p className="mt-4 text-white">
                    Celebra a miembros cuya colaboración ha sido fundamental en el desarrollo y fortalecimiento de la
                    ANPR.
                  </p>
                </div>
              </div>

              <div
                className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl"
                style={{ backgroundColor: "#0f2161" }}
              >
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <span className="text-sm font-bold tracking-[0.3em] uppercase" style={{ color: "#EFD175" }}>
                      – PREMIO –
                    </span>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src="/images/legado-20anpr.png"
                      alt="Premio Legado ANPR"
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold font-montserrat" style={{ color: "#efd175" }}>
                    Legado ANPR
                  </h3>
                  <p className="mt-4 text-white">
                    Otorgado a quien ha dejado una huella permanente, impulsando programas o alianzas clave para la red.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof (Ganadores Anteriores) */}
        <section id="social-proof" className="bg-white py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-montserrat">
                Conoce a ganadores anteriores
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Proyectos y líderes que han sido reconocidos por su excelencia.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  year: "2022",
                  videoId: "7CjH1i7hFRI",
                  description: "Conoce a los ganadores de los Premios ANPR 2022 y sus proyectos destacados.",
                },
                {
                  year: "2023",
                  videoId: "yfs4MOiZik4",
                  description: "Descubre los proyectos ganadores de los Premios ANPR 2023.",
                },
                {
                  year: "2024",
                  videoId: "ojm23ExalWY",
                  description: "Mira los proyectos reconocidos en los Premios ANPR 2024.",
                },
              ].map((winner, index) => (
                <div
                  key={index}
                  className="flex flex-col bg-gray-50 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                >
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${winner.videoId}`}
                      title={`Premios ANPR ${winner.year}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-[#012787] font-montserrat">Premios ANPR {winner.year}</h3>
                      <p className="mt-3 text-gray-600">{winner.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-gray-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl font-montserrat">
                ¿Quieres conocer más sobre los Premios ANPR?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Descarga la información completa para preparar tu postulación.
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href="https://anpr.org.mx/mp-files/bases-premios-anpr-2026.pdf/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-gray-900 bg-[#00DFBF] hover:bg-[#00c9ab] shadow-lg transform hover:scale-105 transition-all w-full sm:w-auto"
              >
                <FileText className="w-6 h-6 mr-3" />
                Descargar Bases (Presentación)
              </a>

              <a
                href="https://anpr.org.mx/mp-files/mas-informacion-bases-premios-anpr-2026.pdf/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-[#012787] hover:bg-[#011d6b] shadow-lg transform hover:scale-105 transition-all w-full sm:w-auto"
              >
                <Download className="w-6 h-6 mr-3" />
                Descargar Detalles (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
