"use client"

import { useEffect, useState } from "react"
import { Calendar, MapPin, Clock, ExternalLink, List, CalendarDays, Landmark, Mic, GraduationCap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

type EventType = "exposicion" | "congreso" | "capacitacion"

interface Event {
  id: string
  title: string
  date: string
  sortDate: string
  description: string
  location: string
  duration: string
  type: EventType
  image: string
  href: string
}

const CURRENT_YEAR = 2026
const eventoReprogramado = true

const rawEvents: Event[] = [
  {
    id: "jornada-capacitacion",
    title: "5a Jornada de Capacitación",
    date: eventoReprogramado ? "Evento reprogramado hasta nuevo aviso" : "25 de febrero de 2026",
    sortDate: "2026-02-25",
    description: "Evento gratuito de capacitación enfocado en el desarrollo de habilidades y conocimientos especializados para profesionales del sector.",
    location: "Guadalajara, Jalisco",
    duration: "1 día",
    type: "capacitacion",
    image: "/images/eventos/jornada-capacitacion-new.png",
    href: "/jornada-de-capacitacion",
  },
  {
    id: "expo-espacio-publico",
    title: "Expo Espacio Público",
    date: "14 y 15 de mayo de 2026",
    sortDate: "2026-05-14",
    description: "Exposición especializada en diseño, construcción y gestión de espacios públicos urbanos y equipamiento recreativo.",
    location: "Tijuana, Baja California",
    duration: "2 días",
    type: "exposicion",
    image: "/images/eventos/expo-espacio-publico-new.png",
    href: "https://tijuana.congresoparques.com/expo-espacio-publico",
  },
  {
    id: "congreso-parques",
    title: "IX Congreso Parques",
    date: "13 al 15 de mayo de 2026",
    sortDate: "2026-05-13",
    description: "Congreso internacional sobre gestión de parques, espacios públicos y recreación, con ponentes nacionales e internacionales.",
    location: "Tijuana, Baja California",
    duration: "3 días",
    type: "congreso",
    image: "/images/eventos/congreso-parques-new.png",
    href: "https://congresoparques.com/",
  },
  {
    id: "park-tour",
    title: "Park Tour",
    date: "Agosto 2026",
    sortDate: "2026-08-01",
    description: "Recorrido especializado por diferentes parques y espacios recreativos de EE.UU., explorando mejores prácticas e innovaciones en gestión.",
    location: "Próximamente",
    duration: "3 días",
    type: "capacitacion",
    image: "/images/eventos/park-tour.png",
    href: "https://anpr.org.mx/park-tour/",
  },
  {
    id: "encuentro-parques",
    title: "Encuentro Parques",
    date: "Del 21 al 23 de octubre de 2026",
    sortDate: "2026-10-21",
    description: "Evento que reúne a líderes y tomadores de decisiones del sector parques urbanos y espacios públicos para compartir experiencias y conocimientos.",
    location: "San Pedro Garza García",
    duration: "3 días",
    type: "capacitacion",
    image: "/images/eventos/encuentro-parques.png",
    href: "https://anpr.org.mx/encuentro-parques-mx/",
  },
  {
    id: "bootcamp-parques",
    title: "Bootcamp Parques",
    date: "Próximamente",
    sortDate: "2026-12-31",
    description: "Programa intensivo de capacitación diseñado para equipos multidisciplinarios donde se aprende resolviendo los retos reales de un parque urbano.",
    location: "Próximamente",
    duration: "2 días",
    type: "capacitacion",
    image: "/images/eventos/bootcamp-parques.png",
    href: "https://anpr.org.mx/bootcamp-2025/",
  },
]

const events = (() => {
  const currentYear = rawEvents.filter(e => e.sortDate.startsWith(String(CURRENT_YEAR)))
  const previousYear = rawEvents.filter(e => !e.sortDate.startsWith(String(CURRENT_YEAR)))
  currentYear.sort((a, b) => a.sortDate.localeCompare(b.sortDate))
  previousYear.sort((a, b) => a.sortDate.localeCompare(b.sortDate))
  return [...currentYear, ...previousYear]
})()

const typeConfig: Record<EventType, { label: string; badgeBg: string; badgeText: string; icon: React.ReactNode; cardAccent: string }> = {
  exposicion: {
    label: "Exposición",
    badgeBg: "#e8eef8",
    badgeText: "#012787",
    icon: <Landmark className="w-3.5 h-3.5" />,
    cardAccent: "border-t-4 border-t-[#012787]",
  },
  congreso: {
    label: "Congreso",
    badgeBg: "#eae5f6",
    badgeText: "#5a2d9e",
    icon: <Mic className="w-3.5 h-3.5" />,
    cardAccent: "border-t-4 border-t-[#0040af]",
  },
  capacitacion: {
    label: "Capacitación",
    badgeBg: "#e0f7f1",
    badgeText: "#0a7a68",
    icon: <GraduationCap className="w-3.5 h-3.5" />,
    cardAccent: "border-t-4 border-t-[#00DFBF]",
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
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full ${typeConfig[event.type].cardAccent} ${
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
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium"
                        style={{ backgroundColor: typeConfig[event.type].badgeBg, color: typeConfig[event.type].badgeText }}
                      >
                        {typeConfig[event.type].icon}
                        {typeConfig[event.type].label}
                      </span>
                      {event.href.startsWith("http") && (
                        <a
                          href={event.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-[#012787] transition-colors"
                          aria-label={`Abrir ${event.title} en nueva ventana`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
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
                      {...(event.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="block w-full bg-[#012787] text-white text-center py-3 rounded-lg font-medium hover:bg-[#00DFBF] hover:text-[#012787] transition-all duration-300"
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
                  Calendario de Eventos 2026
                </h2>
                <p className="text-gray-600">
                  Vista cronológica de todos nuestros eventos
                </p>
              </div>

              <div className="space-y-4">
                {[...events]
                  .sort((a, b) => a.sortDate.localeCompare(b.sortDate))
                  .map((event, index) => (
                    <a
                      key={event.id}
                      href={event.href}
                      {...(event.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-[#012787] hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 w-24 text-center">
                        <div className="bg-[#012787] text-white rounded-lg py-2 px-3">
                          {event.date.includes(" de ") ? (
                            <>
                              <span className="text-sm font-medium">
                                {event.date.split(" de ")[0]}
                              </span>
                              <span className="block text-xs opacity-80">
                                {event.date.split(" de ").slice(1).join(" ")}
                              </span>
                            </>
                          ) : (
                            <span className="text-sm font-medium">
                              {event.date}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{ backgroundColor: typeConfig[event.type].badgeBg, color: typeConfig[event.type].badgeText }}
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
