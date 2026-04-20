import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { 
  ChatCircleDots, 
  X, 
  PaperPlaneRight,
  User,
  Headset,
  Check,
  Checks,
  Lightning,
  Sparkle
} from '@phosphor-icons/react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'agent'
  timestamp: Date
  status?: 'sending' | 'sent' | 'read'
}

const quickReplies = [
  "Harga paket apa saja?",
  "Cara setup?",
  "Demo gratis?",
  "Fitur lengkap?"
]

const agentResponses: Record<string, string> = {
  default: "Terima kasih sudah menghubungi Arkav! Tim kami akan segera membantu Anda. Ada yang bisa saya bantu?",
  "harga": "Kami punya 3 paket: Starter (500K/bln), Professional (1.5JT/bln), dan Enterprise (custom). Mau info detail paket mana?",
  "setup": "Setup Arkav sangat mudah! Hanya butuh 3 langkah: Pilih modul → Setup company → Langsung pakai. Total waktu < 1 jam. Mau saya tunjukkan caranya?",
  "demo": "Tentu! Kami menyediakan free trial 14 hari tanpa kartu kredit. Atau mau jadwalkan demo langsung dengan tim kami?",
  "fitur": "Arkav punya fitur lengkap: Absensi GPS, Manajemen Cuti, Payroll Otomatis, Employee Portal, Custom Reports, dan masih banyak lagi!"
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isAgentOnline, setIsAgentOnline] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        sendAgentMessage(agentResponses.default)
      }, 800)
    }
  }, [isOpen])

  const sendAgentMessage = (text: string) => {
    setIsTyping(true)
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'agent',
        timestamp: new Date(),
        status: 'read'
      }
      setMessages(prev => [...prev, newMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === newMessage.id ? { ...msg, status: 'sent' } : msg
        )
      )
    }, 300)

    setTimeout(() => {
      setMessages(prev =>
        prev.map(msg =>
          msg.id === newMessage.id ? { ...msg, status: 'read' } : msg
        )
      )
    }, 600)

    const lowerText = messageText.toLowerCase()
    let response = "Terima kasih! Tim kami akan segera merespons pertanyaan Anda."
    
    if (lowerText.includes('harga') || lowerText.includes('paket') || lowerText.includes('biaya')) {
      response = agentResponses.harga
    } else if (lowerText.includes('setup') || lowerText.includes('cara') || lowerText.includes('mulai')) {
      response = agentResponses.setup
    } else if (lowerText.includes('demo') || lowerText.includes('trial') || lowerText.includes('gratis')) {
      response = agentResponses.demo
    } else if (lowerText.includes('fitur') || lowerText.includes('feature')) {
      response = agentResponses.fitur
    }

    sendAgentMessage(response)
  }

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)]"
            >
              <Card className="overflow-hidden shadow-2xl shadow-primary/20 border-primary/20">
                <div className="bg-gradient-to-r from-primary via-primary to-accent p-6 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12 border-2 border-white shadow-lg">
                          <AvatarImage src="" />
                          <AvatarFallback className="bg-white/20 text-white">
                            <Headset size={24} weight="bold" />
                          </AvatarFallback>
                        </Avatar>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white ${
                            isAgentOnline ? 'bg-green-500' : 'bg-gray-400'
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg flex items-center gap-2">
                          Customer Support
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Sparkle size={16} weight="fill" className="text-yellow-300" />
                          </motion.div>
                        </h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                          <p className="text-white/90 text-sm">Online • Biasanya membalas dalam 2 menit</p>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="text-white hover:bg-white/20 -mr-2 -mt-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <X size={20} weight="bold" />
                    </Button>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-muted/30 to-background h-[400px] overflow-y-auto p-4 space-y-4">
                  <AnimatePresence initial={false}>
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className={`flex gap-2 ${
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                      >
                        {message.sender === 'agent' && (
                          <Avatar className="w-8 h-8 mt-1 flex-shrink-0">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              <Headset size={16} weight="bold" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                        
                        <div className={`flex flex-col ${message.sender === 'user' ? 'items-end' : 'items-start'} max-w-[75%]`}>
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className={`px-4 py-3 rounded-md ${
                              message.sender === 'user'
                                ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20'
                                : 'bg-card border border-border shadow-sm'
                            }`}
                          >
                            <p className={`text-sm leading-relaxed ${
                              message.sender === 'user' ? 'text-white' : 'text-foreground'
                            }`}>
                              {message.text}
                            </p>
                          </motion.div>
                          
                          <div className="flex items-center gap-1 mt-1 px-1">
                            <p className="text-xs text-muted-foreground">
                              {message.timestamp.toLocaleTimeString('id-ID', { 
                                hour: '2-digit', 
                                minute: '2-digit' 
                              })}
                            </p>
                            {message.sender === 'user' && message.status && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 500 }}
                              >
                                {message.status === 'read' ? (
                                  <Checks size={14} className="text-primary" weight="bold" />
                                ) : message.status === 'sent' ? (
                                  <Checks size={14} className="text-muted-foreground" />
                                ) : (
                                  <Check size={14} className="text-muted-foreground" />
                                )}
                              </motion.div>
                            )}
                          </div>
                        </div>

                        {message.sender === 'user' && (
                          <Avatar className="w-8 h-8 mt-1 flex-shrink-0">
                            <AvatarFallback className="bg-accent/10 text-accent text-xs">
                              <User size={16} weight="bold" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex gap-2"
                    >
                      <Avatar className="w-8 h-8 mt-1">
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          <Headset size={16} weight="bold" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-card border border-border px-5 py-3 rounded-md shadow-sm">
                        <div className="flex gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-primary/60 rounded-full"
                              animate={{ y: [0, -8, 0] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.15,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {messages.length === 1 && (
                  <div className="p-3 bg-muted/30 border-t border-border/50">
                    <p className="text-xs text-muted-foreground mb-2 px-1">Pertanyaan cepat:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            className="text-xs hover:bg-primary hover:text-white hover:border-primary transition-all"
                            onClick={() => handleQuickReply(reply)}
                          >
                            {reply}
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 bg-background border-t border-border/50">
                  <div className="flex gap-2">
                    <Input
                      ref={inputRef}
                      type="text"
                      placeholder="Ketik pesan..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                      className="flex-1 border-border/50 focus-visible:ring-primary"
                    />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="icon"
                        onClick={() => handleSendMessage()}
                        disabled={!inputValue.trim()}
                        className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50"
                      >
                        <PaperPlaneRight size={18} weight="fill" />
                      </Button>
                    </motion.div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Powered by <span className="text-primary font-semibold">Arkav AI</span>
                  </p>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: 1,
          type: "spring", 
          stiffness: 260, 
          damping: 20 
        }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={!isOpen ? { y: [0, -10, 0] } : {}}
          transition={!isOpen ? { 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3 
          } : {}}
        >
          <Button
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-primary via-primary to-accent text-white shadow-2xl shadow-primary/40 hover:shadow-primary/60 border-4 border-white relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} weight="bold" />
                </motion.div>
              ) : (
                <motion.div
                  key="chat"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <ChatCircleDots size={28} weight="fill" />
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>

        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="absolute bottom-20 right-0 mb-2"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Card className="px-4 py-3 shadow-xl shadow-primary/20 border-primary/20 bg-card/95 backdrop-blur-sm whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <Lightning size={16} className="text-primary" weight="fill" />
                  <p className="text-sm font-medium text-foreground">
                    Butuh bantuan? Chat kami! 👋
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </>
  )
}
