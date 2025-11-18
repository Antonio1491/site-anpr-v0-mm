// ===== ANPR LANDING - JAVASCRIPT PARA ELEMENTOR =====
// Pegar en: Elementor → Configuración del sitio → JavaScript personalizado

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 ANPR Landing Page - Elementor Version Loaded")

  // ===== SMOOTH SCROLL =====
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
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

  // ===== PARALLAX EFFECT =====
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
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observar elementos para animaciones
  const animateElements = document.querySelectorAll(
    ".anpr-card, .anpr-expert-card, .anpr-detail-item, .anpr-timeline-item",
  )
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.8s ease"
    observer.observe(el)
  })

  // ===== TRACKING DE EVENTOS =====
  const registerButtons = document.querySelectorAll('a[href*="register"], a[href*="anpr.org.mx"]')
  registerButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("📊 Registro clickeado:", this.href)

      // Google Analytics (si está configurado)
      window.gtag =
        window.gtag ||
        (() => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push(arguments)
        })
      window.gtag("event", "click", {
        event_category: "registration",
        event_label: "ANPR Chihuahua 2025",
      })

      // Facebook Pixel (si está configurado)
      window.fbq =
        window.fbq ||
        (() => {
          window._fbq = window._fbq || []
          window._fbq.push(arguments)
        })
      window.fbq("track", "Lead", {
        content_name: "ANPR Registration",
        content_category: "Event Registration",
      })
    })
  })

  // ===== MEJORAS DE UX =====

  // Efecto hover mejorado para cards de expertos
  const expertCards = document.querySelectorAll(".anpr-expert-card")
  expertCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-15px) scale(1.02)"
      this.style.transition = "all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // ===== RESPONSIVE HELPERS =====
  window.addEventListener("orientationchange", () => {
    setTimeout(() => {
      const heroSection = document.querySelector(".anpr-hero-section")
      if (heroSection && window.innerWidth < 768) {
        heroSection.style.minHeight = "80vh"
      }
    }, 100)
  })

  // ===== ACCESIBILIDAD =====
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

  console.log("✅ ANPR Landing Page completamente cargada")
})

// ===== FUNCIONES GLOBALES =====
window.scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

window.openRegistration = () => {
  window.open("https://anpr.org.mx/register/3-jornada-de-capacitacion-chihuahua/", "_blank")

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
