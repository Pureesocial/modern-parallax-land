import { useState, useRef, MouseEvent as ReactMouseEvent } from 'react'
import { motion } from 'framer-motion'

interface Ripple {
  x: number
  y: number
  id: number
}

interface RippleCardProps {
  children: React.ReactNode
  className?: string
}

export function RippleCard({ children, className = '' }: RippleCardProps) {
  const [ripples, setRipples] = useState<Ripple[]>([])
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newRipple: Ripple = {
      x,
      y,
      id: Date.now()
    }
    
    setRipples(prev => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id))
    }, 1000)
  }

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      {ripples.map(ripple => (
        <motion.div
          key={ripple.id}
          className="absolute pointer-events-none rounded-full bg-primary/10"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            marginLeft: -10,
            marginTop: -10,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      ))}
      {children}
    </div>
  )
}
