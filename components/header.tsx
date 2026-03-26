"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Home, LogIn, UserPlus } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigationItems = [
    {
      name: "ANPR",
      submenu: [
        { name: "Nosotros", href: "https://anpr.org.mx/nosotros/" },
        { name: "¿Qué hacemos?", href: "https://anpr.org.mx/que-hacemos/" },
        { name: "Nuestro Equipo", href: "https://anpr.org.mx/nuestro-equipo/" },
        { name: "Consejo consultivo", href: "https://anpr.org.mx/consejo-anpr/" },
        { name: "Comités (embajadores)", href: "https://anpr.org.mx/comites-embajadores/" },
        { name: "Iniciativas de Cambio", href: "https://anpr.org.mx/iniciativa-de-cambio/" },
        { name: "Aliados", href: "https://anpr.org.mx/miembros-aliados/" },
        { name: "Únete", href: "https://anpr.org.mx/membresias-anpr/" },
      ],
    },
    {
      name: "Recursos",
      submenu: [
        { name: "Blog", href: "https://anpr.org.mx/blog/" },
        { name: "Podcast", href: "https://anpr.org.mx/podcast-parques/" },
        { name: "Revista Parques", href: "https://anpr.org.mx/revista-parques/" },
        { name: "Centro de Investigación", href: "https://anpr.org.mx/centro-para-la-investigacion-y-estudios-de-parques-urbanos/" },
        { name: "Webinars", href: "https://anpr.org.mx/webinars/" },
        { name: "Biblioteca Parques", href: "https://anpr.org.mx/biblioteca-parques/" },
        { name: "Directorio de la Industria", href: "https://anpr.org.mx/directorio/" },
      ],
    },
    {
      name: "Certificaciones",
      submenu: [
        { name: "Espacios Públicos", href: "https://anpr.org.mx/green-flag-award-en-mexico/" },
        { name: "Profesionales", href: "https://anpr.org.mx/academia-parques/" },
      ],
    },
    {
      name: "Eventos",
      href: "/eventos",
      submenu: [
        { name: "Todos los Eventos", href: "/eventos" },
        { name: "Jornada De Capacitación", href: "/jornada-de-capacitacion" },
        { name: "Bootcamp 2025", href: "https://anpr.org.mx/bootcamp-2025/" },
        { name: "Park Tour", href: "https://anpr.org.mx/park-tour/" },
        { name: "Encuentro Parques", href: "https://anpr.org.mx/encuentro-parques-mx/" },
        { name: "Congreso Parques", href: "https://congresoparques.com/" },
        { name: "Expo Espacio Público", href: "https://www.expoespaciopublico.com/" },
      ],
    },
    {
      name: "Programas",
      submenu: [
        { name: "Premios ANPR", href: "/premios-anpr" },
        { name: "Mes de los Parques", href: "/mes-de-los-parques" },
      ],
    },
    {
      name: "Comunidad",
      submenu: [
        { name: "Actividad", href: "https://anpr.org.mx/activity/" },
        { name: "Grupos/Foros", href: "https://anpr.org.mx/groups/" },
        { name: "Directorio de Miembros", href: "https://anpr.org.mx/members/" },
        { name: "Únete", href: "https://anpr.org.mx/membresias-anpr/" },
        { name: "Fidelidad ANPR", href: "https://anpr.org.mx/puntos-semillas/" },
      ],
    },
  ]

  const handleMouseEnter = (itemName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="https://anpr.org.mx/" className="flex items-center">
              <img src="/images/anpr-logo-header.svg" alt="ANPR México" className="h-10 md:h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home icon */}
            <Link
              href="/"
              className="relative flex items-center justify-center w-9 h-9 rounded-md text-sm font-medium transition-colors text-gray-600 hover:text-[#012787] hover:bg-gray-50"
              title="Inicio"
            >
              <Home className="h-[18px] w-[18px]" />
            </Link>

            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {"href" in item && item.href ? (
                  <Link
                    href={item.href}
                    className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#012787] transition-colors rounded-md hover:bg-gray-50"
                  >
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </Link>
                ) : (
                  <button className="flex items-center gap-0.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#012787] transition-colors rounded-md hover:bg-gray-50">
                    {item.name}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </button>
                )}

                {activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-1.5 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#012787] transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="https://anpr.org.mx/login/"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#012787] transition-colors rounded-md hover:bg-gray-50"
            >
              <LogIn className="h-4 w-4" />
              Ingresar
            </Link>
            <Link
              href="https://anpr.org.mx/membresias-anpr/"
              className="flex items-center gap-1.5 bg-[#1e2a4a] hover:bg-[#162038] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
            >
              <UserPlus className="h-4 w-4" />
              Únete
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 p-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#012787] hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home className="h-4 w-4" />
              Inicio
            </Link>

            {navigationItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#012787] hover:bg-gray-50 rounded-md transition-colors"
                >
                  {item.name}
                  <ChevronDown
                    className={`h-4 w-4 opacity-60 transition-transform ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === item.name && (
                  <div className="pl-4 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-[#012787] hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-3 border-t border-gray-100 space-y-2">
              <Link
                href="https://anpr.org.mx/login/"
                className="flex items-center gap-2 w-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#012787] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Ingresar
              </Link>
              <Link
                href="https://anpr.org.mx/membresias-anpr/"
                className="flex items-center justify-center gap-2 w-full bg-[#1e2a4a] hover:bg-[#162038] text-white px-4 py-2.5 rounded-md text-sm font-semibold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="h-4 w-4" />
                Únete
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
