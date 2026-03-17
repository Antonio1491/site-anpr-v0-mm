"use client"

import { CalendarDays, Clock, MapPin, Users, DollarSign, CheckCircle, ExternalLink, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function RegistroJornadaPage() {
  return (
    <div className="bg-[#f3f8ff] text-gray-800 font-sans antialiased">
      <Header />

      {/* BANNER HEADER */}
      <div className="relative w-full bg-[#012787] overflow-hidden" style={{ minHeight: "260px" }}>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/images/foto-201-20copia.jpeg')" }}
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 max-w-5xl mx-auto">
          <img
            src="/images/anpr-logo.png"
            alt="5a Jornada de Capacitación ANPR México"
            className="w-48 md:w-56 object-contain drop-shadow-xl"
          />
          <div className="text-white text-center md:text-left">
            <p className="text-[#d2dd0a] font-semibold uppercase tracking-widest text-sm mb-1">ANPR México</p>
            <h1 className="text-3xl md:text-4xl font-black font-['Montserrat',sans-serif] mb-2">
              5ta Jornada de Capacitación
            </h1>
            <p className="text-white/80 text-lg">Guadalajara, Jalisco · Evento gratuito</p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT COLUMN — Description */}
        <div className="md:col-span-2 flex flex-col gap-6">

          {/* Intro */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              <strong>¡La ANPR México llegará a Guadalajara!</strong>
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-3">
              ¿Formas parte del sector público, del ámbito del desarrollo urbano o trabajas en la gestión de espacios
              públicos? Te invitamos a sumarte a una{" "}
              <strong>jornada gratuita de capacitación</strong>, diseñada para ofrecerte herramientas prácticas y
              conocimientos fundamentales que impulsen la{" "}
              <strong>planeación, operación y diseño de parques y espacios públicos</strong>.
            </p>
          </div>

          {/* Detalles del evento */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold font-['Montserrat',sans-serif] text-[#012787] mb-4 flex items-center gap-2">
              📍 Detalles del evento
            </h2>
            <ul className="space-y-3 text-gray-700 text-base">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#012787] mt-0.5 shrink-0" />
                <span><strong>Sede:</strong> Guadalajara, Jalisco</span>
              </li>
              <li className="flex items-start gap-3">
                <CalendarDays className="w-5 h-5 text-[#012787] mt-0.5 shrink-0" />
                <span><strong>Fecha:</strong> 28 de abril, 2026</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#012787] mt-0.5 shrink-0" />
                <span><strong>Horario:</strong> 09:00 a 15:00 h (Duración total: 6 horas)</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#012787] mt-0.5 shrink-0" />
                <span><strong>Ubicación:</strong> Jardín de Eventos del Bosque Los Colomos</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#012787] mt-0.5 shrink-0" />
                <span><strong>Aforo:</strong> 50 personas · ¡Cupo limitado!</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-[#012787] mt-0.5 shrink-0" />
                <span><strong>Costo:</strong> Evento gratuito</span>
              </li>
            </ul>
          </div>

          {/* ¿Qué incluye? */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold font-['Montserrat',sans-serif] text-[#012787] mb-4 flex items-center gap-2">
              ✏️ ¿Qué incluye?
            </h2>
            <ul className="space-y-3 text-gray-700 text-base">
              {[
                "Conferencias especializadas",
                "Espacios de networking",
                "Recorrido guiado por el Bosque Los Colomos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00dfbf] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-gray-600 text-sm leading-relaxed">
              Este evento está dirigido a{" "}
              <strong>personal operativo, tomadores de decisiones, especialistas en diseño y mantenimiento</strong>, así
              como a{" "}
              <strong>organizaciones y empresas comprometidas con el desarrollo de espacios públicos de calidad</strong>.
            </p>
          </div>

          {/* Organizado por */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold font-['Montserrat',sans-serif] text-gray-700 mb-4">Organizado por</h2>
            <div className="flex items-center gap-4">
              <img
                src="/images/anpr-logo.png"
                alt="ANPR México"
                className="w-20 h-20 object-contain"
              />
              <div>
                <p className="font-bold text-[#012787] text-base">ANPR México</p>
                <p className="text-sm text-gray-500">Asociación Nacional de Parques y Recreación de México</p>
                <a
                  href="https://anpr.org.mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-white bg-[#012787] hover:bg-[#00338d] px-4 py-1.5 rounded-md transition-colors duration-200"
                >
                  Más información
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — Registro card */}
        <div className="md:col-span-1">
          <div className="sticky top-24 flex flex-col gap-4">

            {/* REGISTRATION CTA CARD */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-[#012787] px-5 py-4 text-center">
                <p className="text-[#d2dd0a] font-bold uppercase tracking-wide text-sm">Registro</p>
                <p className="text-white font-semibold text-sm mt-1">Cupo limitado — Evento gratuito</p>
              </div>
              <div className="p-5 flex flex-col gap-4">
                {/* Big register button */}
                <a
                  href="https://anpr.org.mx/register/5-jornada-de-capacitacion-guadalajara-jalisco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center bg-[#57d476] hover:bg-[#45c264] text-white font-bold text-base py-3 px-4 rounded-xl shadow transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Regístrate Gratis
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-3">Fecha y hora</p>
                  <div className="flex items-start gap-2 text-gray-700 text-sm mb-2">
                    <CalendarDays className="w-4 h-4 text-[#012787] mt-0.5 shrink-0" />
                    <span>28 de abril, 2026 · 09:00 AM – 03:00 PM</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-700 text-sm">
                    <MapPin className="w-4 h-4 text-[#012787] mt-0.5 shrink-0" />
                    <span>Bosque Los Colomos, Calle El Chaco, Providencia, Guadalajara, Jal.</span>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=Bosque+Los+Colomos+Guadalajara+Jalisco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-[#012787] text-[#012787] hover:bg-[#012787] hover:text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Ver en mapa
                </a>
              </div>
            </div>

            {/* Back link */}
            <Link
              href="/"
              className="text-center text-sm text-[#012787] hover:underline font-medium"
            >
              ← Volver a la página principal
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
