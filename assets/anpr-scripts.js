// ===== ANPR LANDING PAGE - PLUGIN JAVASCRIPT =====

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 ANPR Landing Page Plugin cargado correctamente")

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
    const heroSection = document.querySelector(".anpr-hero-section")

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
      }
    })
  }, observerOptions)

  // Observar elementos para animaciones
  const animateElements = document.querySelectorAll(".anpr-detail-item, .anpr-contact-card, .anpr-section-title")
  animateElements.forEach((el) => observer.observe(el))

  // ===== TRACKING DE EVENTOS =====

  // Tracking de botones de registro
  const registerButtons = document.querySelectorAll('a[href*="register"], a[href*="anpr.org.mx"]')
  registerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = this.textContent.trim()
      const buttonLocation = this.closest(".anpr-section")
        ? this.closest(".anpr-section").querySelector("h1, h2, h3")?.textContent || "Unknown"
        : "Hero Section"

      console.log("📊 Registro clickeado:", {
        text: buttonText,
        location: buttonLocation,
        url: this.href,
      })

      // Google Analytics 4 (si está configurado)
      const gtag = window.gtag // Declare gtag variable
      if (typeof gtag !== "undefined") {
        gtag("event", "click", {
          event_category: "registration",
          event_label: buttonLocation,
          value: 1,
        })
      }

      // Facebook Pixel (si está configurado)
      const fbq = window.fbq // Declare fbq variable
      if (typeof fbq !== "undefined") {
        fbq("track", "Lead", {
          content_name: "ANPR Registration",
          content_category: "Event Registration",
        })
      }
    })
  })

  // ===== MEJORAS DE UX =====

  // Detectar cambios de orientación en móviles
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      const heroSection = document.querySelector(".anpr-hero-section")
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
      plugin: true,
    },
  })

  document.dispatchEvent(anprReadyEvent)
  console.log("✅ ANPR Landing Page Plugin completamente inicializado")
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
  const gtag = window.gtag // Declare gtag variable
  if (typeof gtag !== "undefined") {
    gtag("event", "registration_click", {
      event_category: "conversion",
      event_label: "direct_call",
    })
  }
}
