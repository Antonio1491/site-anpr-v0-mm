"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Search, LogIn, UserRoundPlus } from "lucide-react"

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

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
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

  const isActive = (item: typeof navigationItems[0]) => {
    if ("href" in item && item.href && pathname === item.href) return true
    return item.submenu.some((sub) => sub.href === pathname)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="https://anpr.org.mx/" className="flex items-center flex-shrink-0">
            <img
              src="/images/anpr-logo-header.svg"
              alt="ANPR México"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => {
              const active = isActive(item)
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  {"href" in item && item.href ? (
                    <Link
                      href={item.href}
                      className={`relative flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors font-['Montserrat',sans-serif] ${
                        active
                          ? "text-[#0B3BA7]"
                          : "text-gray-800 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 flex-shrink-0" />
                      {active && (
                        <span className="absolute -bottom-[13px] left-0 right-0 h-[3px] rounded-t-full bg-[#0B3BA7]" />
                      )}
                    </Link>
                  ) : (
                    <button
                      className={`relative flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors font-['Montserrat',sans-serif] ${
                        active
                          ? "text-[#0B3BA7]"
                          : "text-gray-800 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4 flex-shrink-0" />
                      {active && (
                        <span className="absolute -bottom-[13px] left-0 right-0 h-[3px] rounded-t-full bg-[#0B3BA7]" />
                      )}
                    </button>
                  )}

                  {/* Dropdown */}
                  {activeDropdown === item.name && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-4 py-2 text-sm transition-colors font-['Montserrat',sans-serif] ${
                            pathname === sub.href
                              ? "text-[#0B3BA7] bg-[#0B3BA7]/5 font-semibold"
                              : "text-gray-700 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              className="text-gray-500 hover:text-[#0B3BA7] transition-colors p-1"
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="https://anpr.org.mx/login/"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:text-[#0B3BA7] hover:border-[#0B3BA7] transition-colors font-['Montserrat',sans-serif]"
            >
              <LogIn className="h-4 w-4" />
              Ingresar
            </Link>
            <Link
              href="https://anpr.org.mx/membresias-anpr/"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0B3BA7] rounded-md hover:bg-[#0a2f8a] transition-colors font-['Montserrat',sans-serif]"
            >
              <UserRoundPlus className="h-4 w-4" />
              Únete
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-[#0B3BA7] transition-colors"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-3 py-3 space-y-1">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() =>
                    setMobileOpenItem(mobileOpenItem === item.name ? null : item.name)
                  }
                  className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-800 rounded-md hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5 transition-colors font-['Montserrat',sans-serif]"
                >
                  {item.name}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      mobileOpenItem === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileOpenItem === item.name && (
                  <div className="ml-3 border-l-2 border-[#0B3BA7]/20 pl-3 space-y-1 mt-1">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block px-3 py-2 text-sm rounded-md transition-colors font-['Montserrat',sans-serif] ${
                          pathname === sub.href
                            ? "text-[#0B3BA7] font-semibold bg-[#0B3BA7]/5"
                            : "text-gray-600 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
                        }`}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Bottom Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link
                href="https://anpr.org.mx/login/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:text-[#0B3BA7] hover:border-[#0B3BA7] transition-colors font-['Montserrat',sans-serif]"
              >
                <LogIn className="h-4 w-4" />
                Ingresar
              </Link>
              <Link
                href="https://anpr.org.mx/membresias-anpr/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-white bg-[#0B3BA7] rounded-md hover:bg-[#0a2f8a] transition-colors font-['Montserrat',sans-serif]"
              >
                <UserRoundPlus className="h-4 w-4" />
                Únete
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
