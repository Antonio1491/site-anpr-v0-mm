// ANPR Landing Page v2 - JavaScript Ultra-Seguro

;(() => {
  // Verificar que jQuery está disponible
  const jQuery = window.jQuery
  if (typeof jQuery === "undefined") {
    console.warn("ANPR v2: jQuery no disponible")
    return
  }

  jQuery(document).ready(($) => {
    try {
      console.log("🚀 ANPR Landing v2 inicializado")

      // Verificar contenedor principal
      const mainContainer = $(".anpr-v2-container")
      if (mainContainer.length === 0) {
        console.warn("ANPR v2: Contenedor principal no encontrado")
        return
      }

      // Smooth scroll para enlaces internos
      $('a[href^="#"]').on("click", function (e) {
        e.preventDefault()
        const target = $(this.getAttribute("href"))
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            800,
          )
        }
      })

      // Tracking de clics en botones CTA
      $(".anpr-v2-cta-button").on("click", () => {
        try {
          console.log("📊 CTA clickeado")

          // Google Analytics (si está disponible)
          const gtag = window.gtag
          if (typeof gtag !== "undefined") {
            gtag("event", "click", {
              event_category: "registration",
              event_label: "cta_button",
              value: 1,
            })
          }

          // Facebook Pixel (si está disponible)
          const fbq = window.fbq
          if (typeof fbq !== "undefined") {
            fbq("track", "Lead", {
              content_name: "ANPR Registration v2",
            })
          }
        } catch (e) {
          console.log("Error en tracking:", e)
        }
      })

      // Tracking de contacto
      $(".anpr-v2-contact-card a").on("click", function () {
        try {
          const method = $(this).closest(".anpr-v2-contact-card").find("h3").text()
          console.log("📞 Contacto:", method)

          const gtag = window.gtag
          if (typeof gtag !== "undefined") {
            gtag("event", "contact", {
              event_category: "engagement",
              event_label: method.toLowerCase(),
            })
          }
        } catch (e) {
          console.log("Error en tracking de contacto:", e)
        }
      })

      // Verificar que los estilos se cargaron
      setTimeout(() => {
        const heroSection = $(".anpr-v2-hero")
        if (heroSection.length > 0) {
          const bgColor = heroSection.css("background-color")
          if (!bgColor || bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent") {
            console.warn("ANPR v2: Los estilos CSS no se cargaron correctamente")
          }
        }
      }, 1000)
    } catch (e) {
      console.error("ANPR v2 - Error en inicialización:", e)
    }
  })

  // Manejo de errores global
  window.addEventListener("error", (e) => {
    console.log("ANPR v2 - Error capturado:", e.message)
  })
})()
