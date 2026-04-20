import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  DeviceMobile, 
  DeviceTablet, 
  Desktop,
  X
} from '@phosphor-icons/react'

interface Device {
  id: string
  name: string
  icon: React.ElementType
  width: string
  height: string
  scale: number
}

const devices: Device[] = [
  {
    id: 'mobile',
    name: 'Mobile',
    icon: DeviceMobile,
    width: '375px',
    height: '667px',
    scale: 0.75
  },
  {
    id: 'tablet',
    name: 'Tablet',
    icon: DeviceTablet,
    width: '768px',
    height: '1024px',
    scale: 0.55
  },
  {
    id: 'desktop',
    name: 'Desktop',
    icon: Desktop,
    width: '1440px',
    height: '900px',
    scale: 0.45
  }
]

export function ResponsiveShowcase() {
  const [selectedDevice, setSelectedDevice] = useState<Device>(devices[2])
  const [isVisible, setIsVisible] = useState(false)
  const isInIframe = window.self !== window.top

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        setIsVisible(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  if (isInIframe) {
    return null
  }

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Button
          onClick={() => setIsVisible(true)}
          className="bg-gradient-to-r from-primary to-accent text-white shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all px-6 py-6 rounded-2xl group"
          size="lg"
        >
          <Desktop className="mr-2 group-hover:scale-110 transition-transform" size={24} weight="duotone" />
          <span className="font-semibold">Test Responsiveness</span>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col"
          >
            <div className="flex-shrink-0 border-b border-border/50 bg-card/50">
              <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl font-bold text-foreground">Responsive Preview</h3>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {selectedDevice.name}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-muted/50 p-1.5 rounded-xl">
                      {devices.map((device) => (
                        <motion.button
                          key={device.id}
                          onClick={() => setSelectedDevice(device)}
                          className={`
                            flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all
                            ${selectedDevice.id === device.id
                              ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }
                          `}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <device.icon size={20} weight="duotone" />
                          <span className="hidden sm:inline">{device.name}</span>
                        </motion.button>
                      ))}
                    </div>

                    <motion.button
                      onClick={() => setIsVisible(false)}
                      className="w-10 h-10 rounded-lg bg-muted hover:bg-destructive hover:text-white flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X size={20} weight="bold" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-8 flex items-center justify-center">
              <motion.div
                key={selectedDevice.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
                style={{
                  transform: `scale(${selectedDevice.scale})`,
                  transformOrigin: 'center center'
                }}
              >
                <Card 
                  className="overflow-hidden shadow-2xl border-8 border-border/30 bg-card"
                  style={{
                    width: selectedDevice.width,
                    height: selectedDevice.height,
                  }}
                >
                  <div className="w-full h-full bg-background">
                    <iframe
                      src={window.location.href}
                      className="w-full h-full border-0"
                      title={`${selectedDevice.name} Preview`}
                    />
                  </div>
                </Card>

                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full border border-border shadow-lg whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {selectedDevice.width} × {selectedDevice.height}
                    </span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <span className="text-sm font-medium text-foreground">{selectedDevice.name}</span>
                </div>
              </motion.div>
            </div>

            <div className="flex-shrink-0 border-t border-border/50 bg-card/50">
              <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span>Fully Responsive</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2">
                      <span>•</span>
                      <span>Touch Optimized</span>
                    </div>
                    <div className="hidden md:flex items-center gap-2">
                      <span>•</span>
                      <span>Cross-browser Compatible</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsVisible(false)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Press ESC to close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
