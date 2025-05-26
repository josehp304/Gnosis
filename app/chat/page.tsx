"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, Bot, User, MessageCircle } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

import parse from "html-react-parser"
import axios from "axios"
// Types for messages
type MessageType = "user" | "assistant" |"system"
interface Message {
  id: string
  content: string
  type: MessageType
  timestamp: Date
}



export default function ChatPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Praise God! How can I help you today?",
      type: "assistant",
      timestamp: new Date()
    }
  ])

  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle sending a message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      type: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)
    const reqMessage=messages.map(message => ({role:message.type === "user" ? "user" : "assistant", content:message.content}))
    try {
      const responseax = await axios.post("/api/chatbot",{messages:[...reqMessage,{role:userMessage.type,content:userMessage.content}]})
      const response = responseax.data
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response?.message?.content,
        type: "assistant",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error("Error getting response:", error)

      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        type: "assistant",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="container mx-auto max-w-6xl py-4 md:py-8 px-4">
        <Card className="border-0 shadow-2xl h-[90vh] md:h-[85vh] flex flex-col justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-indigo-600/90"></div>
            <div className="relative z-10 ">
              <CardTitle className="flex items-center justify-between text-xl md:text-2xl font-bold">
                <div className="flex items-center">
                  The Bible Guide
                </div>
                <div className="flex items-center gap-1 text-xs md:text-sm font-normal bg-white/20 px-2 md:px-3 py-1 rounded-full">
                  <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                  AI Spiritual Guidance
                </div>
              </CardTitle>

            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-purple-300/20 rounded-full blur-lg"></div>
          </CardHeader>
          <CardContent className="flex-1 p-6 relative overflow-hidden">
            {/* Background Image with Spiritual Overlay */} 
            <div
              className="absolute inset-0 chat-background"
              style={{
                backgroundImage: "url('/seek jesus.jpg')"
              }}
            />
            {/* Multi-layered overlay for spiritual atmosphere and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/90 via-white/85 to-purple-50/90 dark:from-blue-900/90 dark:via-gray-900/85 dark:to-purple-900/90 spiritual-overlay" />
            <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/20 to-white/40 dark:from-transparent dark:via-gray-900/20 dark:to-gray-900/40" />

            <ScrollArea className="h-[55vh] pr-4 relative z-10">
              <div className="flex flex-col gap-6 py-4">
                {messages.map((message, index) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-4 opacity-0 animate-fade-in ${
                      message.type === "user" ? "flex-row-reverse" : ""
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                  
                    <div
                      className={`relative max-w-[85%] sm:max-w-[75%] group ${
                        message.type === "user" ? "ml-auto" : "mr-auto"
                      }`}
                    >
                      <div
                        className={`rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-xl transition-all duration-300 hover:shadow-2xl backdrop-blur-sm ${
                          message.type === "user"
                            ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-purple-500/25"
                            : "bg-white/98 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 text-gray-800 dark:text-gray-200 shadow-gray-500/20"
                        }`}
                      >
                        <div className="prose prose-sm max-w-none">
                          {parse(message.content)}
                        </div>
                      </div>
                      {/* Message tail */}
                      <div className={`absolute top-4 w-3 h-3 transform rotate-45 ${
                        message.type === "user"
                          ? "-left-1 bg-gradient-to-br from-purple-500 to-pink-500"
                          : "-right-1 bg-white/98 dark:bg-gray-800/95 border-r border-b border-gray-200/60 dark:border-gray-700/60"
                      }`}></div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex items-start gap-4 opacity-0 animate-fade-in" style={{ animationFillMode: 'forwards' }}>
                    
                    <div className="relative max-w-[85%] sm:max-w-[75%] mr-auto">
                      <div className="rounded-2xl px-4 md:px-6 py-3 md:py-4 shadow-xl bg-white/98 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm shadow-gray-500/20">
                        <div className="flex gap-2 items-center">
                          <div className="flex gap-1">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 animate-bounce"></div>
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 animate-bounce delay-100"></div>
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 animate-bounce delay-200"></div>
                          </div>
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Thinking...</span>
                        </div>
                      </div>
                      <div className="absolute top-4 -right-1 w-3 h-3 transform rotate-45 bg-white/98 dark:bg-gray-800/95 border-r border-b border-gray-200/60 dark:border-gray-700/60"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="p-4 md:p-6 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSendMessage} className="w-full flex gap-3 md:gap-4 items-end">
              <div className="flex-1 relative">
                <Textarea
                  ref={inputRef}
                  placeholder="Share your thoughts..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="min-h-[50px] md:min-h-[60px] max-h-32 resize-none border-2 border-gray-200 dark:border-gray-600 rounded-2xl px-4 md:px-6 py-3 md:py-4 text-sm md:text-base bg-white dark:bg-gray-800 focus:border-purple-400 dark:focus:border-purple-400 focus:ring-2 focus:ring-purple-100 dark:focus:ring-purple-900/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage(e)
                    }
                  }}
                />
                <div className="absolute bottom-2 md:bottom-3 right-3 text-xs text-gray-400 dark:text-gray-500">
                  {input.length > 0 && (
                    <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {input.length}
                    </span>
                  )}
                </div>
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isLoading || !input.trim()}
                className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <Send className="h-5 w-5 md:h-6 md:w-6" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}