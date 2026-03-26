"use client"

import { useEffect, useState, useRef } from "react"

type Phase = "showing-normal" | "flipping-to-anni" | "showing-anni" | "shimmering" | "flipping-to-normal"

export default function LogoFlip({ className }: { className?: string }) {
  const [phase, setPhase] = useState<Phase>("showing-normal")
  const [showShimmer, setShowShimmer] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const schedule = (fn: () => void, delay: number) => {
    timerRef.current = setTimeout(fn, delay)
  }

  useEffect(() => {
    // Respeta prefers-reduced-motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setPhase("showing-anni")
      return
    }

    // Secuencia inicial: esperar 1.5s, luego girar al aniversario
    schedule(() => {
      setPhase("flipping-to-anni")
      // Al llegar a 90° (mitad del giro) cambiamos la fase visual
      schedule(() => {
        setPhase("showing-anni")
        // Activar shimmer tras completar el giro
        schedule(() => {
          setShowShimmer(true)
          schedule(() => {
            setShowShimmer(false)
            // Permanecer en aniversario ~12s, luego repetir ciclo
            schedule(startLoop, 12000)
          }, 900)
        }, 400)
      }, 350)
    }, 1500)

    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const startLoop = () => {
    // Girar brevemente al logo normal
    setPhase("flipping-to-normal")
    schedule(() => {
      setPhase("showing-normal")
      // Permanecer en normal ~2.5s
      schedule(() => {
        setPhase("flipping-to-anni")
        schedule(() => {
          setPhase("showing-anni")
          schedule(() => {
            setShowShimmer(true)
            schedule(() => {
              setShowShimmer(false)
              // Loop cada ~15s
              schedule(startLoop, 15000)
            }, 900)
          }, 400)
        }, 350)
      }, 2500)
    }, 350)
  }

  const isFlipping = phase === "flipping-to-anni" || phase === "flipping-to-normal"
  const showAnni = phase === "showing-anni" || phase === "shimmering" || phase === "flipping-to-normal"

  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{ perspective: "600px" }}
    >
      {/* Card container que rota */}
      <div
        style={{
          transformStyle: "preserve-3d",
          transition: isFlipping ? "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
          transform: showAnni ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Cara frontal: logo normal */}
        <img
          src="/images/anpr-logo-header.svg"
          alt="ANPR México"
          className="h-10 md:h-14 w-auto"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            display: "block",
          }}
        />

        {/* Cara trasera: logo 10 aniversario */}
        <img
          src="/images/anpr-insignia-10-aniversario.png"
          alt="ANPR México 10° Aniversario"
          className="h-10 md:h-14 w-auto absolute top-0 left-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        />
      </div>

      {/* Shimmer overlay — destelleo metálico sutil */}
      {showShimmer && (
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              "linear-gradient(120deg, transparent 20%, rgba(255,220,100,0.55) 50%, transparent 80%)",
            animation: "shimmerSweep 0.9s ease-out forwards",
          }}
        />
      )}

      <style>{`
        @keyframes shimmerSweep {
          0%   { opacity: 0; transform: translateX(-60%) skewX(-10deg); }
          30%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(120%) skewX(-10deg); }
        }
      `}</style>
    </div>
  )
}
