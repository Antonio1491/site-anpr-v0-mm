// ===== ANPR LANDING PAGE - ELEMENTOR JAVASCRIPT =====
// Pegar COMPLETO en: Elementor → Configuración del sitio → JavaScript personalizado

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 ANPR Landing Page - Elementor Version Loaded")

  // ===== SMOOTH SCROLL PARA ENLACES INTERNOS =====
  const internalLinks = document.querySelectorAll('a[href^="#"]')
  internalLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // ===== PARALLAX EFFECT PARA HERO =====
  let ticking = false

  function updateParallax() {
    const scrolled = window.pageYOffset
    const heroSection = document.querySelector(".elementor-section:first-child")

    if (heroSection && window.innerWidth > 768) {
      const speed = 0.5
      heroSection.style.transform = `translateY(${scrolled * speed}px)`
    }
    ticking = false
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax)
      ticking = true
    }
  }

  // Activar parallax solo en desktop
  if (window.innerWidth > 768) {
    window.addEventListener("scroll", requestTick)
  }

  // ===== ANIMACIONES AL SCROLL =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("anpr-animate")

        // Animación especial para cards
        if (
          entry.target.classList.contains("anpr-card") ||
          entry.target.classList.contains("anpr-expert-card") ||
          entry.target.classList.contains("anpr-video-card")
        ) {
          setTimeout(() => {
            entry.target.style.transform = "translateY(0)"
            entry.target.style.opacity = "1"
          }, 100)
        }
      }
    })
  }, observerOptions)

  // Observar elementos para animaciones
  const animateElements = document.querySelectorAll(
    ".anpr-card, .anpr-expert-card, .anpr-video-card, .anpr-timeline-item, .anpr-contact-card",
  )
  animateElements.forEach((el) => observer.observe(el))

  // ===== TRACKING DE EVENTOS =====

  // Tracking de botones de registro
  const registerButtons = document.querySelectorAll('a[href*="register"], a[href*="anpr.org.mx"]')
  registerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.textContent.trim()
      const buttonLocation = this.closest(".elementor-section")
        ? this.closest(".elementor-section").querySelector("h1, h2, h3")?.textContent || "Unknown"
        : "Unknown"

      console.log("📊 Registro clickeado:", {
        text: buttonText,
        location: buttonLocation,
        url: this.href,
      })

      // Google Analytics 4 (si está configurado)
      window.gtag =
        window.gtag ||
        (() => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push(arguments)
        })
      window.gtag("event", "click", {
        event_category: "registration",
        event_label: buttonLocation,
        value: 1,
      })

      // Facebook Pixel (si está configurado)
      window.fbq =
        window.fbq ||
        (() => {
          window.fbq.push(arguments)
        })
      window.fbq("track", "Lead", {
        content_name: "ANPR Registration",
        content_category: "Event Registration",
      })
    })
  })

  // Tracking de videos
  const videoCards = document.querySelectorAll(".anpr-video-card")
  videoCards.forEach((card) => {
    card.addEventListener("click", function () {
      const videoTitle = this.querySelector(".anpr-video-title")?.textContent || "Unknown Video"

      console.log("🎥 Video clickeado:", videoTitle)

      window.gtag =
        window.gtag ||
        (() => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push(arguments)
        })
      window.gtag("event", "video_play", {
        event_category: "engagement",
        event_label: videoTitle,
      })
    })
  })

  // ===== MEJORAS DE UX =====

  // Lazy loading para iframes de video
  const videoIframes = document.querySelectorAll(".anpr-video-thumbnail iframe")
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const iframe = entry.target
        if (!iframe.src.includes("autoplay=1")) {
          iframe.src = iframe.src.replace("autoplay=0", "autoplay=0&preload=metadata")
        }
      }
    })
  })

  videoIframes.forEach((iframe) => videoObserver.observe(iframe))

  // ===== EFECTOS HOVER MEJORADOS =====

  // Efecto hover para cards de expertos
  const expertCards = document.querySelectorAll(".anpr-expert-card")
  expertCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
      this.style.transition = "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // ===== RESPONSIVE HELPERS =====

  // Detectar cambios de orientación en móviles
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      const heroSection = document.querySelector(".elementor-section:first-child")
      if (heroSection && window.innerWidth < 768) {
        heroSection.style.minHeight = "80vh"
      }
    }, 100)
  })

  // ===== ACCESIBILIDAD =====

  // Mejorar navegación por teclado
  const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')
  focusableElements.forEach((element) => {
    element.addEventListener("focus", function () {
      this.style.outline = "2px solid #012787"
      this.style.outlineOffset = "2px"
    })

    element.addEventListener("blur", function () {
      this.style.outline = "none"
    })
  })

  // ===== INICIALIZACIÓN FINAL =====

  // Trigger evento personalizado cuando todo esté listo
  const anprReadyEvent = new CustomEvent("anprLandingReady", {
    detail: {
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      sections: document.querySelectorAll(".elementor-section").length,
    },
  })

  document.dispatchEvent(anprReadyEvent)
  console.log("✅ ANPR Landing Page completamente cargada")
})

// ===== FUNCIONES GLOBALES =====

// Función para scroll suave a sección específica
window.scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Función para abrir registro en nueva pestaña
window.openRegistration = () => {
  window.open("https://anpr.org.mx/register/3-jornada-de-capacitacion-chihuahua/", "_blank")

  // Tracking
  window.gtag =
    window.gtag ||
    (() => {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push(arguments)
    })
  window.gtag("event", "registration_click", {
    event_category: "conversion",
    event_label: "direct_call",
  })
}
