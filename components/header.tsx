"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu, X, ChevronDown, Home,
  Building2, Users, Shield, Megaphone, UserRoundPlus,
  BookOpen, Library, FlaskConical, Mic2, Newspaper, Video,
  GraduationCap, Calendar, CalendarDays, Trophy,
  MessageCircle, LayoutGrid, LogIn, Search,
} from "lucide-react"
import LogoFlip from "./logo-flip"

const acercaDeItems = [
  { name: "Nosotros", href: "https://anpr.org.mx/nosotros/", icon: Building2 },
  { name: "Nuestro Equipo", href: "https://anpr.org.mx/nuestro-equipo/", icon: Users },
  { name: "Consejo Consultivo", href: "https://anpr.org.mx/consejo-anpr/", icon: Shield },
  { name: "Comité y Embajadores", href: "https://anpr.org.mx/comites-embajadores/", icon: Megaphone },
  { name: "Únete", href: "https://anpr.org.mx/membresias-anpr/", icon: UserRoundPlus },
]

const recursosMegaMenu = [
  {
    title: "Capacítate",
    items: [
      { name: "Blog", href: "https://anpr.org.mx/blog/", icon: BookOpen },
      { name: "Biblioteca Parques", href: "https://anpr.org.mx/biblioteca-parques/", icon: Library },
      { name: "Estudios", href: "https://anpr.org.mx/centro-para-la-investigacion-y-estudios-de-parques-urbanos/", icon: FlaskConical },
      { name: "Podcast", href: "https://anpr.org.mx/podcast-parques/", icon: Mic2 },
      { name: "Revista Parques", href: "https://anpr.org.mx/revista-parques/", icon: Newspaper },
      { name: "Webinars", href: "https://anpr.org.mx/webinars/", icon: Video },
    ],
  },
  {
    title: "Certifícate",
    items: [
      { name: "Parques (GFA)", href: "https://anpr.org.mx/green-flag-award-en-mexico/", icon: Shield },
      { name: "Profesionales (Academia)", href: "https://anpr.org.mx/academia-parques/", icon: GraduationCap },
    ],
  },
  {
    title: "Participa",
    items: [
      { name: "Eventos", href: "/eventos", icon: Calendar },
      { name: "Jornada de Capacitación", href: "/", icon: GraduationCap },
      { name: "Mes de los Parques", href: "/mes-de-los-parques", icon: CalendarDays },
      { name: "Premios", href: "/premios-anpr", icon: Trophy },
    ],
  },
  {
    title: "Conecta",
    items: [
      { name: "Comunidad", href: "https://anpr.org.mx/activity/", icon: MessageCircle },
      { name: "Directorio", href: "https://anpr.org.mx/directorio/", icon: LayoutGrid },
    ],
  },
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpenItem, setMobileOpenItem] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchInputRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const q = searchQuery.trim()
    if (q) {
      window.location.href = `https://anpr.org.mx/?s=${encodeURIComponent(q)}`
    }
  }

  const openSearch = () => {
    setSearchOpen(true)
    setTimeout(() => searchInputRef.current?.focus(), 50)
  }

  const closeSearch = () => {
    setSearchOpen(false)
    setSearchQuery("")
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [])

  const openDropdown = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  const keepOpen = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 font-['Montserrat',sans-serif] ${
        scrolled ? "bg-white shadow-lg" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="https://anpr.org.mx/" className="flex items-center flex-shrink-0">
            <LogoFlip />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Home icon */}
            <Link
              href="/"
              className={`flex items-center justify-center px-3 py-2 rounded-md transition-colors ${
                pathname === "/"
                  ? "text-[#0B3BA7]"
                  : "text-gray-800 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
              }`}
            >
              <Home className="h-5 w-5" />
              {pathname === "/" && (
                <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-[#0B3BA7]" />
              )}
            </Link>

            {/* Acerca de */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("acerca")}
              onMouseLeave={closeDropdown}
            >
              <button
                className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeDropdown === "acerca" ? "text-[#0B3BA7]" : "text-gray-800 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
                }`}
              >
                Acerca de
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "acerca" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "acerca" && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={keepOpen}
                  onMouseLeave={closeDropdown}
                >
                  {acercaDeItems.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5 transition-colors"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" style={{ color: '#9ca3af' }} />
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Recursos (mega-menu) */}
            <div
              className="relative"
              onMouseEnter={() => openDropdown("recursos")}
              onMouseLeave={closeDropdown}
            >
              <button
                className={`relative flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeDropdown === "recursos" ? "text-[#0B3BA7]" : "text-gray-800 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
                }`}
              >
                Recursos
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "recursos" ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === "recursos" && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] bg-white rounded-lg shadow-xl border border-gray-100 py-6 px-8 z-50"
                  onMouseEnter={keepOpen}
                  onMouseLeave={closeDropdown}
                >
                  <div className="grid grid-cols-4 gap-x-6">
                    {recursosMegaMenu.map((col) => (
                      <div key={col.title}>
                        <p className="text-sm font-semibold text-[#0B3BA7] mb-3">{col.title}</p>
                        <ul className="space-y-1">
                          {col.items.map(({ name, href, icon: Icon }) => (
                            <li key={name}>
                              <Link
                                href={href}
                                className={`flex items-start gap-2.5 px-2 py-2 text-sm rounded-md transition-colors ${
                                  pathname === href
                                    ? "text-[#0B3BA7] font-semibold bg-[#0B3BA7]/5"
                                    : "text-gray-700 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
                                }`}
                              >
                                <Icon className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: '#9ca3af' }} />
                                <span>{name}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Eventos (directo) */}
            <Link
              href="/eventos"
              className={`relative flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/eventos" || pathname === "/jornada-de-capacitacion"
                  ? "text-[#0B3BA7]"
                  : "text-gray-800 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
              }`}
            >
              Eventos
              {(pathname === "/eventos" || pathname === "/jornada-de-capacitacion") && (
                <span className="absolute -bottom-[13px] left-0 right-0 h-[3px] rounded-t-full bg-[#0B3BA7]" />
              )}
            </Link>
          </nav>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search */}
            <div className="relative flex items-center mr-2">
              {searchOpen ? (
                <form onSubmit={handleSearch} className="flex items-center gap-1">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Escape" && closeSearch()}
                    placeholder="Buscar..."
                    className="w-44 px-3 py-1.5 text-sm border border-gray-300 rounded-md outline-none focus:border-[#0B3BA7] focus:ring-1 focus:ring-[#0B3BA7]/30 transition-all"
                  />
                  <button
                    type="submit"
                    className="p-1.5 text-gray-500 hover:text-[#0B3BA7] transition-colors"
                    aria-label="Buscar"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={closeSearch}
                    className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Cerrar búsqueda"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </form>
              ) : (
                <button
                  onClick={openSearch}
                  className="p-1.5 text-gray-500 hover:text-[#0B3BA7] transition-colors"
                  aria-label="Buscar"
                >
                  <Search className="h-[15px] w-[15px]" />
                </button>
              )}
            </div>

            <Link
              href="https://anpr.org.mx/login/"
              className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-[#0B3BA7] transition-colors"
            >
              <LogIn className="h-4 w-4" />
              Ingresar
            </Link>
            <Link
              href="https://anpr.org.mx/membresias-anpr/"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#0B3BA7] rounded-md hover:bg-[#0a2f8a] transition-colors"
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

            {/* Home */}
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                pathname === "/" ? "text-[#0B3BA7] bg-[#0B3BA7]/5" : "text-gray-800 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
              }`}
            >
              <Home className="h-4 w-4" />
              Inicio
            </Link>

            {/* Acerca de */}
            <div>
              <button
                onClick={() => setMobileOpenItem(mobileOpenItem === "acerca" ? null : "acerca")}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-800 rounded-md hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5 transition-colors"
              >
                Acerca de
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileOpenItem === "acerca" ? "rotate-180" : ""}`} />
              </button>
              {mobileOpenItem === "acerca" && (
                <div className="ml-3 border-l-2 border-[#0B3BA7]/20 pl-3 space-y-1 mt-1">
                  {acercaDeItems.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 rounded-md hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5 transition-colors"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" style={{ color: '#9ca3af' }} />
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Recursos */}
            <div>
              <button
                onClick={() => setMobileOpenItem(mobileOpenItem === "recursos" ? null : "recursos")}
                className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-gray-800 rounded-md hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5 transition-colors"
              >
                Recursos
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileOpenItem === "recursos" ? "rotate-180" : ""}`} />
              </button>
              {mobileOpenItem === "recursos" && (
                <div className="ml-3 border-l-2 border-[#0B3BA7]/20 pl-3 space-y-3 mt-1 pb-2">
                  {recursosMegaMenu.map((col) => (
                    <div key={col.title}>
                      <p className="px-3 py-1 text-xs font-semibold text-[#0B3BA7] uppercase tracking-wide">{col.title}</p>
                      {col.items.map(({ name, href, icon: Icon }) => (
                        <Link
                          key={name}
                          href={href}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 rounded-md hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5 transition-colors"
                        >
                          <Icon className="h-4 w-4 flex-shrink-0" style={{ color: '#9ca3af' }} />
                          {name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Eventos */}
            <Link
              href="/eventos"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-md transition-colors ${
                pathname === "/eventos" ? "text-[#0B3BA7] bg-[#0B3BA7]/5" : "text-gray-800 hover:text-[#0B3BA7] hover:bg-[#0B3BA7]/5"
              }`}
            >
              <Calendar className="h-4 w-4" />
              Eventos
            </Link>

            {/* Bottom Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              {/* Search mobile */}
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  const q = searchQuery.trim()
                  if (q) {
                    setIsMenuOpen(false)
                    window.location.href = `https://anpr.org.mx/?s=${encodeURIComponent(q)}`
                  }
                }}
                className="flex items-center gap-2 w-full px-3 py-2 border border-gray-300 rounded-md focus-within:border-[#0B3BA7] focus-within:ring-1 focus-within:ring-[#0B3BA7]/30 transition-all"
              >
                <Search className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar en anpr.org.mx..."
                  className="flex-1 text-sm outline-none bg-transparent text-gray-800 placeholder-gray-400"
                />
              </form>

              <Link
                href="https://anpr.org.mx/login/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-gray-800 border border-gray-300 rounded-md hover:text-[#0B3BA7] hover:border-[#0B3BA7] transition-colors"
              >
                <LogIn className="h-4 w-4" />
                Ingresar
              </Link>
              <Link
                href="https://anpr.org.mx/membresias-anpr/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-white bg-[#0B3BA7] rounded-md hover:bg-[#0a2f8a] transition-colors"
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
