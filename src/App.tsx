import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ParallaxSection } from '@/components/ParallaxSection'
import { FadeInSection } from '@/components/FadeInSection'
import { 
  ArrowRight, 
  Lightning,
  Target,
  Users
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

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">✨</span>
            </div>
            <h1 className="text-xl font-bold text-foreground">Arkav</h1>
          </motion.div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#fitur" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Fitur</a>
            <a href="#solusi" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solusi</a>
            <a href="#cara-kerja" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Cara kerja</a>
            <a href="#paket" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Paket</a>
            <Button variant="outline" className="font-medium">
              Login
            </Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              Mulai
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
            <Badge className="mb-6 px-6 py-2 text-sm font-semibold bg-accent/10 text-accent border-accent/20">
              <Lightning className="mr-2" weight="fill" />
              HCM + SaaS + Self-serve onboarding
            </Badge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-foreground"
          >
            Satu platform untuk HR,
            <br />
            <span className="text-gradient">Absensi, Cuti, Payroll,</span>
            <br />
            dan laporan—siap dipakai.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Hilangkan ribet. Kelola tim secara lengkap. Mulai dari yang paling penting, kemudian pakai fitur lain sesuai kebutuhan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-bold group"
            >
              Lihat Paket
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:bg-secondary text-lg px-8 py-6 font-semibold"
            >
              Coba Trial Gratis!
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-6 max-w-3xl mx-auto text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="text-foreground">✓</span>
              <span>RBAC admin vs karyawan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-foreground">✓</span>
              <span>UI seluruh template</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-foreground">✓</span>
              <span>Invoice email (optional)</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-muted-foreground"
          >
            <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ParallaxSection speed={0.7} className="py-32" id="fitur">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Apa yang tim kamu <span className="text-gradient">rasakan</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Bukan janji kosong—ini ringkasan outcome yang biasanya dicari tim HR & finance.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 group hover:shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Lightning size={28} className="text-primary" weight="duotone" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">Mulai cepat</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Setup awal tidak sampai sejam. Langsung fokus ke yang penting: kelola tim dan operasional.
                </p>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 group hover:shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Users size={28} className="text-primary" weight="duotone" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">Kolaborasi</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Admin dan karyawan akses terpisah, tapi sinkron. Approval cuti, payroll, semua transparan.
                </p>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 group hover:shadow-lg">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target size={28} className="text-accent" weight="duotone" />
                </div>
                <h4 className="text-xl font-bold mb-4 text-foreground">Audit-friendly</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Laporan otomatis, data tersimpan rapi. Audit compliance jadi jauh lebih mudah.
                </p>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection speed={0.5} className="py-32" id="cara-kerja">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Cara <span className="text-gradient">Kerja</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Tiga langkah mudah untuk mulai kelola tim dengan lebih efisien
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto space-y-6">
            <FadeInSection delay={0.1}>
              <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-foreground">Modul siap</h4>
                      <Badge className="bg-accent/10 text-accent border-accent/20">Setup</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">Pilih modul yang perlu langsung</p>
                    <p className="text-sm text-muted-foreground">
                      Hanya aktifkan Absensi, atau ambil semua modul: Cuti, Payroll, Onboarding. Fleksibel sesuai kebutuhan.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-foreground">Onboarding</h4>
                      <Badge className="bg-primary/10 text-primary border-primary/20">Konfigurasi</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">Buat company + owner + trial atau subscribe</p>
                    <p className="text-sm text-muted-foreground">
                      Import data karyawan via CSV atau manual, atur role (admin/karyawan), lalu langsung jalan.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <Card className="bg-card border-border p-8 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-foreground">Audit-ready</h4>
                      <Badge className="bg-accent/10 text-accent border-accent/20">Siap Pakai</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">Akses dashboard dan laporan otomatis</p>
                    <p className="text-sm text-muted-foreground">
                      Aktivitas terupdate real-time. Approval flow berjalan transparan. Laporan siap untuk audit.
                    </p>
                  </div>
                </div>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      <ParallaxSection speed={0.8} className="py-32" id="paket">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-20">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Paket <span className="text-gradient">Fleksibel</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pilih paket yang sesuai dengan kebutuhan tim Anda
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FadeInSection delay={0.1}>
              <Card className="bg-card border-border p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl mb-4">📦</div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Starter</h4>
                <div className="text-3xl font-bold text-gradient mb-4">Rp 500K</div>
                <p className="text-sm text-muted-foreground mb-6">/bulan, untuk tim kecil</p>
                <ul className="space-y-3 text-left text-sm text-muted-foreground mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Hingga 25 karyawan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Absensi & Cuti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Dashboard standar</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Pilih Paket</Button>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.05}>
              <Card className="bg-gradient-to-b from-primary/10 to-card border-primary p-8 text-center transition-all duration-300 hover:shadow-xl relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground font-bold px-4 py-1">POPULAR</Badge>
                </div>
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Professional</h4>
                <div className="text-4xl font-bold text-gradient mb-4">Rp 1.5JT</div>
                <p className="text-sm text-muted-foreground mb-6">/bulan, untuk tim berkembang</p>
                <ul className="space-y-3 text-left text-sm text-muted-foreground mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Hingga 100 karyawan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Semua modul (Payroll, Onboarding)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Approval flow custom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Pilih Paket</Button>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <Card className="bg-card border-border p-8 text-center hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="text-5xl mb-4">🏢</div>
                <h4 className="text-xl font-bold mb-2 text-foreground">Enterprise</h4>
                <div className="text-3xl font-bold text-gradient mb-4">Custom</div>
                <p className="text-sm text-muted-foreground mb-6">Hubungi kami untuk penawaran</p>
                <ul className="space-y-3 text-left text-sm text-muted-foreground mb-8">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Unlimited karyawan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Custom integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>On-premise option</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Hubungi Kami</Button>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative">
          <FadeInSection>
            <Card className="bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20 p-12 md:p-16 text-center shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Siap <span className="text-gradient">Efisienkan</span> Operasional HR?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Bergabung dengan ratusan perusahaan yang sudah mempercayai Arkav untuk kelola tim mereka.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6 font-bold group"
                >
                  Mulai Trial Gratis
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-10 py-6 font-semibold"
                >
                  Jadwalkan Demo
                </Button>
              </div>
              <div className="mt-8 text-sm text-muted-foreground">
                Tidak perlu kartu kredit • Setup dalam 1 jam • Support tim lokal
              </div>
            </Card>
          </FadeInSection>
        </div>
      </section>

      <footer className="py-16 border-t border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✨</span>
                </div>
                <h4 className="text-xl font-bold text-foreground">Arkav</h4>
              </div>
              <p className="text-muted-foreground">Human Capital Management</p>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Tentang</a>
              <a href="#" className="hover:text-foreground transition-colors">Kontak</a>
              <a href="#" className="hover:text-foreground transition-colors">FAQ</a>
              <a href="#" className="hover:text-foreground transition-colors">Blog</a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © 2024 Arkav HCM. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App