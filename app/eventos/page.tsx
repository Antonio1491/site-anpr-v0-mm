"use client"

import { useEffect, useState } from "react"
import { Calendar, MapPin, Clock, ExternalLink, List, CalendarDays } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

type EventType = "exposicion" | "congreso" | "capacitacion"

interface Event {
  id: string
  title: string
  date: string
  description: string
  location: string
  duration: string
  type: EventType
  image: string
  href: string
}

const events: Event[] = [
  {
    id: "expo-espacio-publico",
    title: "Expo Espacio Público",
    date: "25 de noviembre de 2026",
    description: "Exposición especializada en diseño, construcción y gestión de espacios públicos urbanos y equipamiento recreativo.",
    location: "Próximamente",
    duration: "2 días",
    type: "exposicion",
    image: "/images/eventos/expo-espacio-publico.png",
    href: "https://www.expoespaciopublico.com/",
  },
  {
    id: "congreso-parques",
    title: "Congreso Parques",
    date: "24 de noviembre de 2026",
    description: "Congreso internacional sobre gestión de parques, espacios públicos y recreación, con ponentes nacionales e internacionales.",
    location: "Próximamente",
    duration: "3 días",
    type: "congreso",
    image: "/images/eventos/congreso-parques.png",
    href: "https://congresoparques.com/",
  },
  {
    id: "bootcamp-parques",
    title: "Bootcamp Parques",
    date: "24 de septiembre de 2025",
    description: "Programa intensivo de capacitación diseñado para equipos multidisciplinarios donde se aprende resolviendo los retos reales de un parque urbano.",
    location: "Bosque de Chapultepec, CDMX",
    duration: "2 días",
    type: "capacitacion",
    image: "/images/eventos/bootcamp-parques.png",
    href: "https://anpr.org.mx/bootcamp-2025/",
  },
  {
    id: "jornada-capacitacion",
    title: "Jornada De Capacitación",
    date: "2 de septiembre de 2025",
    description: "Evento gratuito de capacitación enfocado en el desarrollo de habilidades y conocimientos especializados para profesionales del sector.",
    location: "Chihuahua, Chihuahua",
    duration: "1 día",
    type: "capacitacion",
    image: "/images/eventos/jornada-capacitacion.png",
    href: "https://jornada-de-capacitacion.anpr.org.mx/",
  },
  {
    id: "park-tour",
    title: "Park Tour",
    date: "24 de junio de 2025",
    description: "Recorrido especializado por diferentes parques y espacios recreativos de EE.UU., explorando mejores prácticas e innovaciones en gestión.",
    location: "Washington D.C.",
    duration: "3 días",
    type: "capacitacion",
    image: "/images/eventos/park-tour.png",
    href: "https://anpr.org.mx/park-tour/",
  },
  {
    id: "encuentro-parques",
    title: "Encuentro Parques",
    date: "25 de marzo de 2025",
    description: "Evento que reúne a líderes y tomadores de decisiones del sector parques urbanos y espacios públicos para compartir experiencias y conocimientos.",
    location: "Puebla, México",
    duration: "3 días",
    type: "capacitacion",
    image: "/images/eventos/encuentro-parques.png",
    href: "https://anpr.org.mx/encuentro-parques-mx/",
  },
]

const typeConfig: Record<EventType, { label: string; bgColor: string; textColor: string; icon: string }> = {
  exposicion: {
    label: "Exposición",
    bgColor: "bg-[#e8f5e9]",
    textColor: "text-[#2e7d32]",
    icon: "🏛️",
  },
  congreso: {
    label: "Congreso",
    bgColor: "bg-[#e3f2fd]",
    textColor: "text-[#1565c0]",
    icon: "🎤",
  },
  capacitacion: {
    label: "Capacitación",
    bgColor: "bg-[#e8f5e9]",
    textColor: "text-[#388e3c]",
    icon: "🎓",
  },
}

export default function EventosPage() {
  const [viewMode, setViewMode] = useState<"descriptive" | "calendar">("descriptive")
  const [visibleElements, setVisibleElements] = useState(new Set())

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
      }
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div className="bg-white text-gray-800 font-sans antialiased min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/foto-201-20copia.jpeg')`,
          }}
        />
        <div
          className="absolute inset-0 z-[5]"
          style={{
            background: `radial-gradient(circle, #0040af 1.5px, transparent 1.5px)`,
            backgroundSize: "5px 5px",
            opacity: 0.55,
            mixBlendMode: "multiply",
          }}
        />
        <div className="absolute inset-0 bg-[#0040af] opacity-50 z-[6]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Montserrat',sans-serif]">
            Eventos
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Descubre nuestros próximos eventos, capacitaciones y encuentros profesionales
            que transforman espacios y comunidades
          </p>

          {/* View Toggle Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setViewMode("descriptive")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                viewMode === "descriptive"
                  ? "bg-white text-[#012787]"
                  : "bg-transparent border-2 border-white text-white hover:bg-white/10"
              }`}
            >
              <List className="w-5 h-5" />
              Vista Descriptiva
            </button>
            <button
              onClick={() => setViewMode("calendar")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                viewMode === "calendar"
                  ? "bg-white text-[#012787]"
                  : "bg-transparent border-2 border-white text-white hover:bg-white/10"
              }`}
            >
              <CalendarDays className="w-5 h-5" />
              Vista Calendario
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="flex-grow py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {viewMode === "descriptive" ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {events.map((event, index) => (
                <article
                  key={event.id}
                  id={`event-${event.id}`}
                  data-animate
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full ${
                    isVisible(`event-${event.id}`)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Event Image Banner */}
                  <div className="relative h-40 bg-[#012787] overflow-hidden flex-shrink-0">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Type Badge and External Link */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                          typeConfig[event.type].bgColor
                        } ${typeConfig[event.type].textColor}`}
                      >
                        <span>{typeConfig[event.type].icon}</span>
                        {typeConfig[event.type].label}
                      </span>
                      <a
                        href={event.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#012787] transition-colors"
                        aria-label={`Abrir ${event.title} en nueva ventana`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Event Title */}
                    <h3 className="text-xl font-bold text-[#012787] mb-2 font-['Montserrat',sans-serif]">
                      {event.title}
                    </h3>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Calendar className="w-4 h-4 text-[#012787]" />
                      <span className="text-sm">{event.date}</span>
                    </div>

                    {/* Description */}
                    <div className="flex-grow">
                      <p className="text-gray-600 text-sm mb-6 line-clamp-4">
                        {event.description}
                      </p>
                    </div>

                    {/* Location and Duration */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{event.duration}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a
                      href={event.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-[#012787] text-white text-center py-3 rounded-lg font-medium hover:bg-[#0040af] transition-colors"
                    >
                      Más información
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Calendar View */
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#012787] mb-2 font-['Montserrat',sans-serif]">
                  Calendario de Eventos 2025-2026
                </h2>
                <p className="text-gray-600">
                  Vista cronológica de todos nuestros eventos
                </p>
              </div>

              <div className="space-y-4">
                {events
                  .sort((a, b) => {
                    const dateA = new Date(a.date.split(" de ").reverse().join("-"))
                    const dateB = new Date(b.date.split(" de ").reverse().join("-"))
                    return dateA.getTime() - dateB.getTime()
                  })
                  .map((event, index) => (
                    <a
                      key={event.id}
                      href={event.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#012787] hover:shadow-md transition-all group"
                    >
                      <div className="flex-shrink-0 w-24 text-center">
                        <div className="bg-[#012787] text-white rounded-lg py-2 px-3">
                          <span className="text-sm font-medium">
                            {event.date.split(" de ")[0]}
                          </span>
                          <span className="block text-xs opacity-80">
                            {event.date.split(" de ").slice(1).join(" ")}
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                              typeConfig[event.type].bgColor
                            } ${typeConfig[event.type].textColor}`}
                          >
                            {typeConfig[event.type].label}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-[#012787] group-hover:text-[#0040af] transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location} · {event.duration}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#012787] transition-colors" />
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
