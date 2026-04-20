import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  CalendarCheck, 
  CurrencyCircleDollar,
  ChartBar,
  User,
  CalendarBlank,
  FileText,
  CheckCircle,
  SquaresFour
} from '@phosphor-icons/react'

export function DashboardMockup() {
  const chartData = [
    { height: '60%', delay: 0.1 },
    { height: '85%', delay: 0.15 },
    { height: '95%', delay: 0.2 },
    { height: '75%', delay: 0.25 },
    { height: '90%', delay: 0.3 },
    { height: '65%', delay: 0.35 },
    { height: '80%', delay: 0.4 },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-5xl mx-auto"
      style={{ perspective: '2000px' }}
    >
      <div className="relative">
        <motion.div
          className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <Card className="relative bg-gradient-to-br from-card via-card to-muted/30 border-2 border-border/50 shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-br from-muted/40 to-background/40 backdrop-blur-sm p-4 border-b border-border/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-accent/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>
              <span className="ml-4 text-sm font-semibold text-foreground">Preview Dashboard</span>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">
              <CheckCircle size={12} className="mr-1" weight="fill" />
              HCM ready
            </Badge>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-2 mb-6 border-b border-border/30 pb-4">
              {[
                { icon: SquaresFour, label: 'Overview', active: true },
                { icon: Users, label: 'Employees', active: false },
                { icon: CalendarCheck, label: 'Attendance', active: false },
                { icon: CurrencyCircleDollar, label: 'Payroll', active: false },
              ].map((tab, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all
                    ${tab.active 
                      ? 'bg-primary/10 text-primary border border-primary/30' 
                      : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    }
                  `}
                >
                  <tab.icon size={14} weight={tab.active ? 'fill' : 'regular'} />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20 p-5">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1.5">
                        <ChartBar size={12} weight="duotone" className="text-primary" />
                        Ringkasan minggu ini
                      </p>
                      <p className="text-xs text-muted-foreground">Aktivitas & progress modul HCM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-end justify-between h-32 gap-1.5 mb-4">
                    {chartData.map((bar, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: bar.height }}
                        viewport={{ once: true }}
                        transition={{ delay: bar.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 bg-gradient-to-t from-primary to-primary/60 rounded-t-sm relative group"
                        whileHover={{ opacity: 0.8 }}
                      >
                        <motion.div 
                          className="absolute -top-6 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                          initial={{ y: 5 }}
                          whileHover={{ y: 0 }}
                        >
                          {parseInt(bar.height)}%
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                      <p className="text-xs text-muted-foreground mb-0.5">Employees</p>
                      <motion.p 
                        className="text-xl font-bold text-foreground"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        124
                      </motion.p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                      <p className="text-xs text-muted-foreground mb-0.5">Attendance</p>
                      <motion.p 
                        className="text-xl font-bold text-foreground"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                      >
                        98%
                      </motion.p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-accent/5 to-transparent border-accent/20 p-5 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <CalendarBlank size={12} weight="duotone" className="text-accent" />
                      Aktivitas terbaru
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { 
                        icon: User, 
                        title: 'Employee ditambahkan', 
                        subtitle: 'Directory update',
                        color: 'bg-blue-500/10 text-blue-600',
                        delay: 0.4
                      },
                      { 
                        icon: CalendarBlank, 
                        title: 'Leave request', 
                        subtitle: 'Approval flow',
                        color: 'bg-green-500/10 text-green-600',
                        delay: 0.5
                      },
                      { 
                        icon: FileText, 
                        title: 'Payroll draft', 
                        subtitle: 'Ready to finalize',
                        color: 'bg-yellow-500/10 text-yellow-600',
                        delay: 0.6
                      },
                    ].map((activity, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: activity.delay }}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-all cursor-pointer group"
                      >
                        <div className={`w-9 h-9 rounded-lg ${activity.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                          <activity.icon size={16} weight="duotone" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-foreground truncate">{activity.title}</p>
                          <p className="text-xs text-muted-foreground truncate">{activity.subtitle}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="mt-4 p-3 rounded-lg bg-muted/30 border border-border/30"
                  >
                    <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1.5">
                      <CheckCircle size={12} weight="duotone" />
                      Audit-friendly
                    </p>
                    <div className="bg-background/50 rounded-lg p-3 border border-border/20">
                      <p className="text-xs font-medium text-foreground mb-1">Next step</p>
                      <p className="text-xs font-bold text-foreground mb-1">Mulai onboarding</p>
                      <p className="text-xs text-muted-foreground">Buat company + owner, pilih trial / subscribe.</p>
                    </div>
                  </motion.div>
                </Card>
              </motion.div>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  )
}
