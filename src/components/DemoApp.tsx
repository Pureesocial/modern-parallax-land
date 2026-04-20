import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { 
  X,
  Users,
  CalendarCheck,
  CurrencyCircleDollar,
  ChartLineUp,
  FileText,
  SquaresFour,
  Clock,
  CheckCircle,
  Warning,
  Bell,
  MagnifyingGlass,
  DotsThreeVertical,
  MapPin,
  CaretDown,
  TrendUp
} from '@phosphor-icons/react'

interface DemoAppProps {
  onClose: () => void
}

export function DemoApp({ onClose }: DemoAppProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const employees = [
    { name: 'Andi Wijaya', role: 'Engineering', status: 'Hadir', time: '08:45', avatar: 'AW', color: 'bg-blue-500' },
    { name: 'Siti Nurhaliza', role: 'Marketing', status: 'Hadir', time: '08:52', avatar: 'SN', color: 'bg-purple-500' },
    { name: 'Budi Santoso', role: 'Sales', status: 'Hadir', time: '09:02', avatar: 'BS', color: 'bg-green-500' },
    { name: 'Maya Putri', role: 'Design', status: 'Cuti', time: '-', avatar: 'MP', color: 'bg-pink-500' },
    { name: 'Rudi Hermawan', role: 'Engineering', status: 'Hadir', time: '08:38', avatar: 'RH', color: 'bg-orange-500' },
  ]

  const leaveRequests = [
    { name: 'Maya Putri', type: 'Annual Leave', days: '3 hari', date: '12-14 Jan', status: 'pending', avatar: 'MP', color: 'bg-pink-500' },
    { name: 'Andi Wijaya', type: 'Sick Leave', days: '1 hari', date: '10 Jan', status: 'approved', avatar: 'AW', color: 'bg-blue-500' },
  ]

  const tabs = [
    { id: 'overview', icon: SquaresFour, label: 'Overview' },
    { id: 'employees', icon: Users, label: 'Karyawan' },
    { id: 'attendance', icon: CalendarCheck, label: 'Absensi' },
    { id: 'leave', icon: FileText, label: 'Cuti' },
    { id: 'payroll', icon: CurrencyCircleDollar, label: 'Payroll' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md overflow-y-auto"
    >
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <SquaresFour size={20} className="text-white" weight="fill" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Demo Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Arkav HCM Platform</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <Badge className="bg-primary/10 text-primary border-primary/30">
                <Clock size={14} className="mr-1.5" weight="fill" />
                Demo Mode
              </Badge>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="rounded-xl"
                >
                  <X size={20} />
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-2 mb-6 flex items-center gap-2 overflow-x-auto"
          >
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap
                  ${activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon size={16} weight={activeTab === tab.id ? 'fill' : 'regular'} />
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Karyawan', value: '124', change: '+12%', icon: Users, color: 'from-blue-500 to-blue-600' },
                    { label: 'Hadir Hari Ini', value: '118', change: '95%', icon: CalendarCheck, color: 'from-green-500 to-green-600' },
                    { label: 'Pending Cuti', value: '8', change: '+2', icon: FileText, color: 'from-orange-500 to-orange-600' },
                    { label: 'Payroll Bulan Ini', value: '250JT', change: 'On track', icon: CurrencyCircleDollar, color: 'from-purple-500 to-purple-600' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <Card className="p-6 border-border/50 hover:border-primary/30 transition-all hover:shadow-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                            <stat.icon size={24} className="text-white" weight="duotone" />
                          </div>
                          <Badge className="bg-green-500/10 text-green-600 border-green-500/30 text-xs">
                            <TrendUp size={12} className="mr-1" weight="bold" />
                            {stat.change}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="lg:col-span-2"
                  >
                    <Card className="p-6 border-border/50">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">Attendance Trend</h3>
                          <p className="text-sm text-muted-foreground">7 hari terakhir</p>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary">
                          View All
                        </Button>
                      </div>
                      <div className="flex items-end justify-between h-48 gap-2">
                        {[92, 95, 88, 98, 94, 96, 95].map((value, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center gap-2">
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: `${value}%` }}
                              transition={{ delay: 0.7 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                              className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg relative group cursor-pointer"
                              whileHover={{ opacity: 0.8 }}
                            >
                              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
                                {value}%
                              </div>
                            </motion.div>
                            <span className="text-xs text-muted-foreground">
                              {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Card className="p-6 border-border/50 h-full">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-foreground">Quick Stats</h3>
                        <Bell size={20} className="text-muted-foreground" />
                      </div>
                      <div className="space-y-4">
                        {[
                          { label: 'On Time Rate', value: 87, color: 'bg-green-500' },
                          { label: 'Leave Usage', value: 62, color: 'bg-blue-500' },
                          { label: 'Overtime Hours', value: 45, color: 'bg-orange-500' },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">{item.label}</span>
                              <span className="text-sm font-bold text-foreground">{item.value}%</span>
                            </div>
                            <Progress value={item.value} className="h-2" />
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {activeTab === 'employees' && (
              <motion.div
                key="employees"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 border-border/50">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Daftar Karyawan</h3>
                      <p className="text-sm text-muted-foreground">124 total karyawan</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="Cari karyawan..." className="pl-10 w-64" />
                      </div>
                      <Button className="bg-gradient-to-r from-primary to-accent text-white">
                        Tambah Karyawan
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {employees.map((employee, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ x: 4, scale: 1.01 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className={`w-12 h-12 ${employee.color} text-white font-bold shadow-lg`}>
                            <AvatarFallback className={`${employee.color} text-white`}>
                              {employee.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {employee.name}
                            </p>
                            <p className="text-sm text-muted-foreground">{employee.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <Badge className={`
                              ${employee.status === 'Hadir' 
                                ? 'bg-green-500/10 text-green-600 border-green-500/30' 
                                : 'bg-orange-500/10 text-orange-600 border-orange-500/30'
                              }
                            `}>
                              {employee.status === 'Hadir' ? <CheckCircle size={14} className="mr-1" weight="fill" /> : <Clock size={14} className="mr-1" weight="fill" />}
                              {employee.status}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">{employee.time}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                            <DotsThreeVertical size={20} />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {activeTab === 'attendance' && (
              <motion.div
                key="attendance"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 border-border/50">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">Absensi Hari Ini</h3>
                    <p className="text-sm text-muted-foreground">Senin, 13 Januari 2025</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Hadir Tepat Waktu', value: '98', total: '124', color: 'from-green-500 to-green-600', icon: CheckCircle },
                      { label: 'Terlambat', value: '20', total: '124', color: 'from-orange-500 to-orange-600', icon: Clock },
                      { label: 'Tidak Hadir', value: '6', total: '124', color: 'from-red-500 to-red-600', icon: Warning },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Card className="p-5 bg-gradient-to-br from-card to-muted/30 border-border/50">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                              <stat.icon size={20} className="text-white" weight="fill" />
                            </div>
                            <div>
                              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                              <p className="text-xs text-muted-foreground">dari {stat.total}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Absensi Terbaru</h4>
                    {employees.filter(e => e.status === 'Hadir').map((employee, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border/50"
                      >
                        <div className="flex items-center gap-4">
                          <Avatar className={`w-10 h-10 ${employee.color} text-white font-bold`}>
                            <AvatarFallback className={`${employee.color} text-white`}>
                              {employee.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-foreground">{employee.name}</p>
                            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                              <MapPin size={12} weight="fill" />
                              Jakarta Office
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-foreground">{employee.time}</p>
                          <Badge className="bg-green-500/10 text-green-600 border-green-500/30 text-xs mt-1">
                            On Time
                          </Badge>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {activeTab === 'leave' && (
              <motion.div
                key="leave"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 border-border/50">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Manajemen Cuti</h3>
                      <p className="text-sm text-muted-foreground">Approval & tracking cuti karyawan</p>
                    </div>
                    <Button className="bg-gradient-to-r from-primary to-accent text-white">
                      Buat Cuti Baru
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {leaveRequests.map((request, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ x: 4 }}
                        className="p-5 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <Avatar className={`w-12 h-12 ${request.color} text-white font-bold shadow-lg`}>
                              <AvatarFallback className={`${request.color} text-white`}>
                                {request.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-foreground mb-1">{request.name}</p>
                              <p className="text-sm text-muted-foreground mb-2">{request.type}</p>
                              <div className="flex items-center gap-4 text-xs">
                                <span className="flex items-center gap-1.5 text-muted-foreground">
                                  <CalendarCheck size={14} weight="duotone" />
                                  {request.date}
                                </span>
                                <span className="flex items-center gap-1.5 text-muted-foreground">
                                  <Clock size={14} weight="duotone" />
                                  {request.days}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            {request.status === 'pending' ? (
                              <>
                                <Button variant="outline" size="sm" className="border-red-500/30 text-red-600 hover:bg-red-500/10">
                                  Tolak
                                </Button>
                                <Button size="sm" className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                                  Approve
                                </Button>
                              </>
                            ) : (
                              <Badge className="bg-green-500/10 text-green-600 border-green-500/30">
                                <CheckCircle size={14} className="mr-1" weight="fill" />
                                Approved
                              </Badge>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )}

            {activeTab === 'payroll' && (
              <motion.div
                key="payroll"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 border-border/50">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">Payroll Management</h3>
                      <p className="text-sm text-muted-foreground">Januari 2025</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" className="gap-2">
                        <FileText size={16} weight="duotone" />
                        Export
                        <CaretDown size={14} />
                      </Button>
                      <Button className="bg-gradient-to-r from-primary to-accent text-white">
                        Process Payroll
                      </Button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Total Payroll', value: 'Rp 250JT', subtitle: '124 karyawan', color: 'from-purple-500 to-purple-600' },
                      { label: 'Sudah Diproses', value: '87', subtitle: '70% completed', color: 'from-green-500 to-green-600' },
                      { label: 'Pending Review', value: '37', subtitle: 'Perlu review', color: 'from-orange-500 to-orange-600' },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <Card className={`p-5 bg-gradient-to-br ${stat.color} text-white border-0`}>
                          <p className="text-3xl font-bold mb-1">{stat.value}</p>
                          <p className="text-sm opacity-90 mb-1">{stat.label}</p>
                          <p className="text-xs opacity-75">{stat.subtitle}</p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-foreground">Breakdown Payroll</h4>
                      <Button variant="ghost" size="sm" className="text-primary">
                        View Details
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {[
                        { label: 'Gaji Pokok', value: 'Rp 180JT', percentage: 72 },
                        { label: 'Tunjangan', value: 'Rp 45JT', percentage: 18 },
                        { label: 'Bonus & Insentif', value: 'Rp 25JT', percentage: 10 },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">{item.label}</span>
                            <span className="text-sm font-bold text-foreground">{item.value}</span>
                          </div>
                          <div className="h-2 bg-background rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percentage}%` }}
                              transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                              className="h-full bg-gradient-to-r from-primary to-accent"
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
