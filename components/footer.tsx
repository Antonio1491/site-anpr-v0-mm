import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f2161] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/images/anpr-logo-footer.svg" alt="ANPR México" className="h-12 w-auto mr-3" />
              <span className="text-white font-bold leading-tight">
                Asociación Nacional de Parques y Recreación de México
              </span>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Asociación Nacional de Parques y Recreación de México. Fortaleciendo el tejido social de las comunidades
              latinoamericanas a través de los parques.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/anprmexico" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/anprmexico" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://instagram.com/anprmexico"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com/company/anprmexico"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com/anprmexico" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://anpr.org.mx/nosotros/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="https://anpr.org.mx/membresias-anpr/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Membresías
                </Link>
              </li>
              <li>
                <Link
                  href="https://anpr.org.mx/certificaciones/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link
                  href="https://anpr.org.mx/eventos/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Eventos
                </Link>
              </li>
              <li>
                <Link
                  href="https://anpr.org.mx/bootcamp/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Bootcamp Parques
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://anpr.org.mx/blog/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://anpr.org.mx/podcast-parques/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Podcast
                </Link>
              </li>
              <li>
                <Link
                  href="https://anpr.org.mx/revista-parques/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Revista Parques
                </Link>
              </li>
              <li>
                <Link
                  href="https://anpr.org.mx/webinars/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="https://anpr.org.mx/biblioteca-parques/"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Biblioteca Parques
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-1 text-gray-300 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <Link
                    href="mailto:info@anpr.org.mx"
                    className="text-white text-sm hover:text-gray-300 transition-colors"
                  >
                    info@anpr.org.mx
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-1 text-gray-300 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Teléfono</p>
                  <Link href="tel:+525555555555" className="text-white text-sm hover:text-gray-300 transition-colors">
                    +52 (999) 944 4060
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 text-gray-300 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Ubicación</p>
                  <p className="text-white text-sm">Mérida, Yucatán, México</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider y copyright */}
        <div className="border-t border-[#012787] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © 2025 Asociación Nacional de Parques y Recreación de México. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://anpr.org.mx/aviso-de-privacidad/"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="https://anpr.org.mx/aviso-de-privacidad/"
                className="text-gray-300 hover:text-white text-sm transition-colors"
              >
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
