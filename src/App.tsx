import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ParallaxSection } from '@/components/ParallaxSection'
import { FadeInSection } from '@/components/FadeInSection'
import { 
  ArrowRight, 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Rocket,
  Lightning,
  Target
} from '@phosphor-icons/react'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden">
      <div className="fixed inset-0 hero-gradient -z-10" />
      <div className="fixed inset-0 grid-pattern opacity-30 -z-10" />

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.h1 
            className="text-2xl font-bold text-gradient"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            ARKAV
          </motion.h1>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-white/80 hover:text-white transition-colors">About</a>
            <a href="#schedule" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Schedule</a>
            <a href="#prizes" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Prizes</a>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent font-semibold">
              Register Now
              <ArrowRight className="ml-2" />
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge className="mb-6 px-6 py-2 text-sm font-semibold bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
              <Lightning className="mr-2" weight="fill" />
              5TH ANNUAL COMPETITION
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            Innovation
            <br />
            <span className="text-gradient">Unleashed</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Join Indonesia's premier technology competition. Build, compete, and showcase your innovations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent text-lg px-8 py-6 font-bold group"
            >
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 font-semibold backdrop-blur-sm"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">$50K</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Prize Pool</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">48H</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Duration</div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/40"
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ParallaxSection speed={0.7} className="py-32">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-20">
              <h3 className="text-5xl md:text-6xl font-bold mb-6">
                What is <span className="text-gradient">ARKAV</span>?
              </h3>
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                ARKAV is an annual technology competition that brings together the brightest minds 
                to solve real-world challenges through innovation, creativity, and collaboration.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <Card className="bg-card/50 backdrop-blur-xl border-white/10 p-8 hover:border-primary/50 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Rocket size={32} className="text-primary" weight="duotone" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Innovation</h4>
                <p className="text-white/70 leading-relaxed">
                  Push the boundaries of what's possible with cutting-edge technology and creative solutions.
                </p>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <Card className="bg-card/50 backdrop-blur-xl border-white/10 p-8 hover:border-primary/50 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-ring/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users size={32} className="text-ring" weight="duotone" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Collaboration</h4>
                <p className="text-white/70 leading-relaxed">
                  Team up with talented individuals from diverse backgrounds and skill sets.
                </p>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <Card className="bg-card/50 backdrop-blur-xl border-white/10 p-8 hover:border-primary/50 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target size={32} className="text-accent" weight="duotone" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Impact</h4>
                <p className="text-white/70 leading-relaxed">
                  Create solutions that make a real difference in communities and industries.
                </p>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection speed={0.5} className="py-32" id="schedule">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-20">
              <h3 className="text-5xl md:text-6xl font-bold mb-6">
                Event <span className="text-gradient">Timeline</span>
              </h3>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Mark your calendars for an unforgettable experience
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto space-y-6">
            <FadeInSection delay={0.1}>
              <Card className="bg-card/50 backdrop-blur-xl border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Calendar size={32} className="text-primary" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-2xl font-bold">Opening Ceremony</h4>
                      <Badge className="bg-primary/20 text-primary border-primary/30">Day 1</Badge>
                    </div>
                    <p className="text-white/70 mb-3">March 15, 2024 • 09:00 AM</p>
                    <p className="text-white/60">
                      Kick off the competition with inspiring keynotes and team formation sessions.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <Card className="bg-card/50 backdrop-blur-xl border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-ring/20 flex items-center justify-center flex-shrink-0">
                    <Lightning size={32} className="text-ring" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-2xl font-bold">Competition Period</h4>
                      <Badge className="bg-ring/20 text-ring border-ring/30">48 Hours</Badge>
                    </div>
                    <p className="text-white/70 mb-3">March 15-17, 2024 • Non-stop</p>
                    <p className="text-white/60">
                      Build, iterate, and perfect your solutions with mentor support available 24/7.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <Card className="bg-card/50 backdrop-blur-xl border-white/10 p-8 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Trophy size={32} className="text-accent" weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-2xl font-bold">Final Presentations</h4>
                      <Badge className="bg-accent/20 text-accent border-accent/30">Day 3</Badge>
                    </div>
                    <p className="text-white/70 mb-3">March 17, 2024 • 02:00 PM</p>
                    <p className="text-white/60">
                      Showcase your innovations to judges and compete for the grand prize.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection speed={0.8} className="py-32" id="prizes">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-20">
              <h3 className="text-5xl md:text-6xl font-bold mb-6">
                Amazing <span className="text-gradient">Prizes</span>
              </h3>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Compete for over $50,000 in prizes and opportunities
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeInSection delay={0.2}>
              <Card className="bg-card/50 backdrop-blur-xl border-white/10 p-8 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="text-6xl mb-4">🥈</div>
                <h4 className="text-xl font-bold mb-2 text-white/80">2nd Place</h4>
                <div className="text-4xl font-bold text-gradient mb-4">$15,000</div>
                <p className="text-white/60">Plus mentorship opportunities</p>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <Card className="bg-gradient-to-b from-primary/20 to-card/50 backdrop-blur-xl border-primary/50 p-8 text-center transition-all duration-300 hover:scale-105 glow-primary relative -mt-4 md:-mt-8">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground font-bold px-4 py-1">WINNER</Badge>
                </div>
                <div className="text-7xl mb-4">🏆</div>
                <h4 className="text-xl font-bold mb-2">1st Place</h4>
                <div className="text-5xl font-bold text-gradient mb-4">$25,000</div>
                <p className="text-white/80">Plus VC pitch opportunities</p>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <Card className="bg-card/50 backdrop-blur-xl border-white/10 p-8 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="text-6xl mb-4">🥉</div>
                <h4 className="text-xl font-bold mb-2 text-white/80">3rd Place</h4>
                <div className="text-4xl font-bold text-gradient mb-4">$10,000</div>
                <p className="text-white/60">Plus tech resources</p>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <FadeInSection>
            <Card className="bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-xl border-primary/30 p-12 md:p-16 text-center glow-primary">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-gradient">Innovate</span>?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of innovators and start building the future today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 glow-accent text-lg px-10 py-6 font-bold group"
                >
                  Register for ARKAV 2024
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <MapPin size={20} weight="duotone" />
                  Jakarta, Indonesia
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={20} weight="duotone" />
                  March 15-17, 2024
                </div>
              </div>
            </Card>
          </FadeInSection>
        </div>
      </section>

      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="text-2xl font-bold text-gradient mb-2">ARKAV</h4>
              <p className="text-white/60">Innovation Unleashed</p>
            </div>
            <div className="flex gap-8 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
              <a href="#" className="hover:text-white transition-colors">Sponsors</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-white/40">
            © 2024 ARKAV. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App