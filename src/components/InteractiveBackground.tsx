import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 30 })
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const newParticles: Particle[] = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        newParticles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3
        })
      }
      setParticles(newParticles)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const unsubscribeX = smoothMouseX.on('change', (latest) => {
      updateParticles(latest, smoothMouseY.get())
    })

    const unsubscribeY = smoothMouseY.on('change', (latest) => {
      updateParticles(smoothMouseX.get(), latest)
    })

    const updateParticles = (mx: number, my: number) => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          const dx = mx - particle.x
          const dy = my - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 200
          
          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            const angle = Math.atan2(dy, dx)
            particle.vx -= Math.cos(angle) * force * 0.5
            particle.vy -= Math.sin(angle) * force * 0.5
          }

          particle.vx += (particle.baseX - particle.x) * 0.01
          particle.vy += (particle.baseY - particle.y) * 0.01
          
          particle.vx *= 0.95
          particle.vy *= 0.95
          
          particle.x += particle.vx
          particle.y += particle.vy

          return particle
        })
      )
    }

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      ctx.strokeStyle = 'rgba(80, 80, 200, 0.15)'
      ctx.lineWidth = 1

      particles.forEach((particleA, i) => {
        particles.slice(i + 1).forEach(particleB => {
          const dx = particleA.x - particleB.x
          const dy = particleA.y - particleB.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.3
            ctx.strokeStyle = `rgba(80, 80, 200, ${opacity})`
            ctx.beginPath()
            ctx.moveTo(particleA.x, particleA.y)
            ctx.lineTo(particleB.x, particleB.y)
            ctx.stroke()
          }
        })

        ctx.fillStyle = `rgba(100, 100, 220, ${particleA.opacity})`
        ctx.beginPath()
        ctx.arc(particleA.x, particleA.y, particleA.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
      unsubscribeX()
      unsubscribeY()
    }
  }, [particles, smoothMouseX, smoothMouseY])

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  return (
    <div 
      className="fixed inset-0 -z-10 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/5" />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ mixBlendMode: 'screen' }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(80, 80, 200, 0.15) 0%, transparent 70%)',
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
    </div>
  )
}
