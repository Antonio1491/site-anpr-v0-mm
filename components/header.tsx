"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Search } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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
        {
          name: "Centro de Investigación",
          href: "https://anpr.org.mx/centro-para-la-investigacion-y-estudios-de-parques-urbanos/",
        },
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
        { name: "Jornada De Capacitación", href: "https://jornada-de-capacitacion.anpr.org.mx/" },
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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay before closing
  }

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="https://anpr.org.mx/" className="flex items-center">
              <img src="/images/anpr-logo-header.svg" alt="ANPR México" className="h-14 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
                    className="flex items-center text-gray-700 hover:text-[#BCCE16] px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                ) : (
                  <button className="flex items-center text-gray-700 hover:text-[#BCCE16] px-3 py-2 text-sm font-medium transition-colors">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                )}

                {/* Dropdown Menu */}
                {activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
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
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="https://anpr.org.mx/login/"
              className="bg-[#d2dd0a] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#c1cc09] transition-colors"
            >
              Ingresar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-500 hover:text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-1">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="flex items-center justify-between w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#BCCE16] hover:bg-gray-50"
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${activeDropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>

                  {activeDropdown === item.name && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="https://anpr.org.mx/login/"
                  className="block w-full text-center bg-[#d2dd0a] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#c1cc09] transition-colors"
                >
                  Ingresar
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
