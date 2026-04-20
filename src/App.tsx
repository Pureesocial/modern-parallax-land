import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ParallaxSection } from '@/components/ParallaxSection'
import { FadeInSection } from '@/components/FadeInSection'
import { DashboardMockup } from '@/components/DashboardMockup'
import { DemoApp } from '@/components/DemoApp'
import { ResponsiveShowcase } from '@/components/ResponsiveShowcase'
import { ChatWidget } from '@/components/ChatWidget'
import { InteractiveBackground } from '@/components/InteractiveBackground'
import { 
  ArrowRight, 
  Lightning,
  Target,
  Users,
  CalendarCheck,
  ChartLineUp,
  UsersFour,
  FileText,
  CheckCircle
} from '@phosphor-icons/react'

function App() {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const isHeroInView = useInView(heroRef, { once: false, amount: 0.3 })
  const [showDemo, setShowDemo] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const heroY = useTransform(scrollYProgress, [0, 0.3], ['0%', '20%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  return (
    <div ref={containerRef} className="relative w-full overflow-x-hidden bg-background">
      <AnimatePresence>
        {showDemo && <DemoApp onClose={() => setShowDemo(false)} />}
      </AnimatePresence>

      <ResponsiveShowcase />

      <InteractiveBackground />

      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 5 }}
            >
              <Lightning size={20} className="text-white" weight="fill" />
            </motion.div>
            <h1 className="text-2xl font-bold text-foreground tracking-tight">Arkav</h1>
          </motion.div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#fitur" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:scale-105">Fitur</a>
            <a href="#solusi" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:scale-105">Solusi</a>
            <a href="#cara-kerja" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:scale-105">Cara kerja</a>
            <a href="#paket" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all hover:scale-105">Paket</a>
            <div className="h-6 w-px bg-border mx-2" />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="font-medium">
                Login
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/20 font-semibold">
                Mulai Gratis
              </Button>
            </motion.div>
          </nav>
        </div>
      </motion.header>

      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-24 pb-20">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge className="mb-8 px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20 shadow-lg shadow-primary/5">
              <Lightning className="mr-2" size={16} weight="fill" />
              Modern HR Platform
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-foreground leading-[1.1]"
          >
            Kelola Tim dengan
            <br />
            <span className="text-gradient inline-block">Lebih Efisien</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Platform HCM lengkap untuk absensi, cuti, payroll, dan laporan.
            <br className="hidden md:block" />
            Mulai setup dalam hitungan menit, bukan hari.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary via-primary to-accent text-white hover:shadow-2xl hover:shadow-primary/30 text-lg px-10 py-7 font-semibold group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Mulai Sekarang
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-border hover:bg-muted/50 hover:border-primary/30 text-lg px-10 py-7 font-medium backdrop-blur-sm"
                onClick={() => setShowDemo(true)}
              >
                Lihat Demo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: CheckCircle, text: "Setup < 1 jam" },
              { icon: Users, text: "Multi-role access" },
              { icon: FileText, text: "Auto reports" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                <item.icon size={18} className="text-primary" weight="duotone" />
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <Badge className="mb-6 px-4 py-2 text-xs font-medium bg-accent/10 text-accent border-accent/20">
                DASHBOARD PREVIEW
              </Badge>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Dashboard yang <span className="text-gradient">Intuitif</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pantau aktivitas tim, kelola absensi, approval cuti, hingga payroll—semua dalam satu platform
              </p>
            </div>
          </FadeInSection>
          
          <DashboardMockup />
        </div>
      </section>

      <ParallaxSection speed={0.8} className="py-32 relative" id="fitur">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="mb-6 px-4 py-2 text-xs font-medium bg-primary/10 text-primary border-primary/20">
                  FEATURES
                </Badge>
              </motion.div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Semua yang Tim Anda Butuhkan
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tools lengkap untuk mengelola HR dengan lebih efektif dan terstruktur
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                icon: CalendarCheck, 
                title: "Absensi Digital", 
                desc: "Clock in/out dengan GPS tracking real-time",
                color: "primary"
              },
              { 
                icon: FileText, 
                title: "Manajemen Cuti", 
                desc: "Approval flow otomatis, quota tracking",
                color: "accent"
              },
              { 
                icon: ChartLineUp, 
                title: "Payroll Auto", 
                desc: "Hitung gaji otomatis dengan slip digital",
                color: "primary"
              },
              { 
                icon: UsersFour, 
                title: "Employee Portal", 
                desc: "Self-service untuk karyawan & admin",
                color: "accent"
              }
            ].map((feature, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full group">
                    <motion.div 
                      className={`w-12 h-12 rounded-md bg-${feature.color}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon size={24} className={`text-${feature.color}`} weight="duotone" />
                    </motion.div>
                    <h4 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </Card>
                </motion.div>
              </FadeInSection>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightning,
                title: "Setup Instan",
                desc: "Tidak butuh IT support, langsung bisa dipakai tim dalam hitungan menit"
              },
              {
                icon: Users,
                title: "Role-Based Access",
                desc: "Admin, manager, dan karyawan punya akses sesuai kebutuhan masing-masing"
              },
              {
                icon: Target,
                title: "Audit Trail",
                desc: "Semua aktivitas tercatat rapi untuk kebutuhan compliance dan audit"
              }
            ].map((item, i) => (
              <FadeInSection key={i} delay={0.2 + i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="text-center p-8 rounded-2xl bg-gradient-to-b from-muted/30 to-transparent border border-border/30 hover:border-primary/30 transition-all"
                >
                  <motion.div 
                    className="w-16 h-16 rounded-md bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-5 mx-auto"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon size={32} className="text-primary" weight="duotone" />
                  </motion.div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection speed={0.6} className="py-32 bg-muted/20" id="cara-kerja">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <Badge className="mb-6 px-4 py-2 text-xs font-medium bg-accent/10 text-accent border-accent/20">
                HOW IT WORKS
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Mulai dalam 3 Langkah
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Setup yang simpel tanpa ribet, langsung produktif
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-20 bottom-20 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />
              
              {[
                {
                  step: "01",
                  title: "Pilih Modul",
                  subtitle: "Aktifkan sesuai kebutuhan",
                  description: "Mulai dengan satu modul atau langsung aktifkan semua. Absensi, Cuti, Payroll, Onboarding—semua modular.",
                  highlight: "Setup"
                },
                {
                  step: "02",
                  title: "Setup Company",
                  subtitle: "Import data & atur akses",
                  description: "Upload CSV atau input manual. Tetapkan role admin/karyawan. Subscribe atau trial 14 hari.",
                  highlight: "Configure"
                },
                {
                  step: "03",
                  title: "Langsung Pakai",
                  subtitle: "Real-time dashboard & reports",
                  description: "Aktivitas tersinkron otomatis. Approval flow berjalan. Laporan siap kapan saja.",
                  highlight: "Launch"
                }
              ].map((item, i) => (
                <FadeInSection key={i} delay={i * 0.15}>
                  <motion.div
                    className="relative mb-12 last:mb-0"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="md:pl-24">
                      <motion.div
                        whileHover={{ scale: 1.02, x: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="bg-card/80 backdrop-blur-sm border-border p-8 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden md:flex">
                            <motion.div 
                              className="w-16 h-16 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-xl shadow-primary/30"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              {item.step}
                            </motion.div>
                          </div>

                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="text-2xl font-bold text-foreground">{item.title}</h4>
                                <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                                  {item.highlight}
                                </Badge>
                              </div>
                              <p className="text-sm text-primary font-medium">{item.subtitle}</p>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </Card>
                      </motion.div>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection speed={0.9} className="py-32" id="paket">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <Badge className="mb-6 px-4 py-2 text-xs font-medium bg-primary/10 text-primary border-primary/20">
                PRICING
              </Badge>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Paket yang <span className="text-gradient">Fleksibel</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pilih paket sesuai ukuran dan kebutuhan tim Anda
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "500K",
                period: "/bulan",
                description: "Untuk tim kecil yang baru mulai",
                features: [
                  "Hingga 25 karyawan",
                  "Absensi & Cuti",
                  "Dashboard standar",
                  "Email support"
                ],
                highlighted: false,
                badge: null
              },
              {
                name: "Professional",
                price: "1.5JT",
                period: "/bulan",
                description: "Paling populer untuk tim berkembang",
                features: [
                  "Hingga 100 karyawan",
                  "Semua modul lengkap",
                  "Custom approval flow",
                  "Priority support",
                  "Advanced reports"
                ],
                highlighted: true,
                badge: "POPULAR"
              },
              {
                name: "Enterprise",
                price: "Custom",
                period: "",
                description: "Solusi untuk organisasi besar",
                features: [
                  "Unlimited karyawan",
                  "Custom integration",
                  "Dedicated support",
                  "On-premise option",
                  "SLA guarantee"
                ],
                highlighted: false,
                badge: null
              }
            ].map((plan, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: plan.highlighted ? 0 : -12, scale: plan.highlighted ? 1 : 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  <Card className={`
                    p-8 text-center h-full flex flex-col relative overflow-hidden
                    ${plan.highlighted 
                      ? 'bg-gradient-to-b from-primary/5 via-card to-card border-primary shadow-2xl shadow-primary/20 scale-105 md:scale-110' 
                      : 'bg-card border-border hover:border-primary/40 hover:shadow-xl'
                    }
                    transition-all duration-300
                  `}>
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                        <Badge className="bg-gradient-to-r from-accent to-primary text-white font-bold px-6 py-1.5 shadow-lg">
                          {plan.badge}
                        </Badge>
                      </div>
                    )}

                    {plan.highlighted && (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                    )}

                    <div className="relative z-10">
                      <motion.div
                        className="text-6xl mb-6"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        {i === 0 ? '📦' : i === 1 ? '🚀' : '🏢'}
                      </motion.div>
                      
                      <h4 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h4>
                      <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                      
                      <div className="mb-8">
                        <div className="text-5xl font-bold text-gradient mb-1">
                          {plan.price !== "Custom" && "Rp "}
                          {plan.price}
                        </div>
                        {plan.period && <p className="text-sm text-muted-foreground">{plan.period}</p>}
                      </div>

                      <ul className="space-y-4 text-left mb-10 flex-grow">
                        {plan.features.map((feature, j) => (
                          <motion.li
                            key={j}
                            className="flex items-start gap-3 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + j * 0.05 }}
                          >
                            <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" weight="fill" />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button 
                          className={`w-full ${
                            plan.highlighted 
                              ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-xl hover:shadow-primary/30' 
                              : 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white'
                          }`}
                          size="lg"
                        >
                          {plan.name === "Enterprise" ? "Hubungi Kami" : "Mulai Sekarang"}
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <section className="py-32 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <FadeInSection>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-card via-primary/5 to-card border-primary/30 p-12 md:p-20 text-center shadow-2xl shadow-primary/10 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-block mb-6"
                  >
                    <div className="w-20 h-20 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto shadow-xl shadow-primary/30">
                      <Lightning size={40} className="text-white" weight="fill" />
                    </div>
                  </motion.div>

                  <h3 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                    Siap Transformasi HR Anda?
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    Bergabung dengan ratusan perusahaan yang sudah merasakan efisiensi pengelolaan tim yang lebih baik
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary via-primary to-accent text-white hover:shadow-2xl hover:shadow-primary/40 text-lg px-12 py-7 font-semibold group relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center">
                          Coba Gratis 14 Hari
                          <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" weight="bold" />
                        </span>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-12 py-7 font-medium backdrop-blur-sm"
                        onClick={() => setShowDemo(true)}
                      >
                        Jadwalkan Demo
                      </Button>
                    </motion.div>
                  </div>
                  <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary" weight="fill" />
                      <span>Tanpa kartu kredit</span>
                    </div>
                    <div className="w-px h-4 bg-border hidden sm:block" />
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary" weight="fill" />
                      <span>Setup dalam 1 jam</span>
                    </div>
                    <div className="w-px h-4 bg-border hidden sm:block" />
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-primary" weight="fill" />
                      <span>Support tim lokal</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      <footer className="py-20 border-t border-border/50 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <motion.div 
                className="flex items-center gap-3 mb-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Lightning size={24} className="text-white" weight="fill" />
                </div>
                <h4 className="text-2xl font-bold text-foreground">Arkav</h4>
              </motion.div>
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-sm">
                Platform HCM modern untuk perusahaan Indonesia. Kelola tim dengan lebih efisien dan terstruktur.
              </p>
              <div className="flex gap-3">
                {['twitter', 'linkedin', 'instagram'].map((social, i) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 rounded bg-current" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-foreground mb-4">Produk</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {['Fitur', 'Paket', 'Integrasi', 'API', 'Changelog'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="hover:text-foreground transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-foreground mb-4">Perusahaan</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {['Tentang Kami', 'Blog', 'Karir', 'Kontak', 'FAQ'].map((item) => (
                  <motion.li key={item} whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
                    <a href="#" className="hover:text-foreground transition-colors">{item}</a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 Arkav HCM. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  )
}

export default App