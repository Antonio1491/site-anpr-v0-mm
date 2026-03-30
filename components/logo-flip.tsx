"use client"

import { useEffect, useState, useRef } from "react"

export default function LogoFlip() {
  // true = mostrando logo de aniversario, false = logo normal
  const [flipped, setFlipped] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [shimmer, setShimmer] = useState(false)
  const timers = useRef<NodeJS.Timeout[]>([])

  const after = (ms: number, fn: () => void) => {
    const t = setTimeout(fn, ms)
    timers.current.push(t)
  }

  // Giro hacia el logo de aniversario con destello al final
  const flipToAnniversary = (onDone?: () => void) => {
    setAnimating(true)
    // A los 350ms (mitad del giro) cambiamos la imagen
    after(350, () => setFlipped(true))
    // Al terminar el giro (700ms) activamos el destello
    after(700, () => {
      setAnimating(false)
      setShimmer(true)
      after(800, () => {
        setShimmer(false)
        onDone?.()
      })
    })
  }

  // Giro de vuelta al logo normal
  const flipToNormal = (onDone?: () => void) => {
    setAnimating(true)
    after(350, () => setFlipped(false))
    after(700, () => {
      setAnimating(false)
      onDone?.()
    })
  }

  // Ciclo completo de repetición
  const runCycle = () => {
    // Volver brevemente al logo normal (2s) y luego volver al aniversario
    flipToNormal(() => {
      after(2000, () => {
        flipToAnniversary(() => {
          // Repetir ciclo cada 18 segundos
          after(18000, runCycle)
        })
      })
    })
  }

  useEffect(() => {
    // Respetar prefers-reduced-motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setFlipped(true)
      return
    }

    // Secuencia: 1s de espera → flip → destello → reposo largo → repetición
    after(1000, () => {
      flipToAnniversary(() => {
        // Reposo largo de 14 segundos antes de primera repetición
        after(14000, runCycle)
      })
    })

    return () => timers.current.forEach(clearTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      className="relative flex items-center"
      style={{ perspective: "700px" }}
    >
      {/* Contenedor con giro 3D */}
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: animating
            ? "transform 0.7s cubic-bezier(0.42, 0, 0.58, 1)"
            : "none",
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Cara frontal — logo ANPR normal */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/anpr-logo-header.svg`}
          alt="ANPR México"
          className="h-10 md:h-14 w-auto"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            display: "block",
          }}
        />

        {/* Cara trasera — logo 10° Aniversario */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/anpr-insignia-10-aniversario.png`}
          alt="ANPR México 10° Aniversario"
          className="h-10 md:h-14 w-auto absolute top-0 left-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        />
      </div>

      {/* Destello dorado — solo al mostrar el logo de aniversario */}
      {shimmer && (
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full pointer-events-none overflow-hidden"
          style={{ animation: "anprShimmer 0.8s ease-out forwards" }}
        >
          <span
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, transparent 25%, rgba(255, 215, 80, 0.6) 50%, transparent 75%)",
              borderRadius: "inherit",
            }}
          />
        </span>
      )}

      <style>{`
        @keyframes anprShimmer {
          0%   { opacity: 0; transform: translateX(-80%); }
          25%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(120%); }
        }
      `}</style>
    </div>
  )
}
