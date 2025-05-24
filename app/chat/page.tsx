"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Bot, User } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { fetchGroqResponse } from "@/app/action/askAi"

// Types for messages
type MessageType = "user" | "bot"
interface Message {
  id: string
  content: string
  type: MessageType
  timestamp: Date
}

// Mock response function (to be replaced with actual Groq API integration)
// const getSpiritualGuidance = async (message: string): Promise<string> => {
//   // Simulate API call with delay
//   await new Promise(resolve => setTimeout(resolve, 1000))
  
//   return `Thank you for seeking spiritual guidance. Based on biblical principles, I'd encourage you to reflect on scripture that teaches us about this topic. Remember that prayer and community can also be valuable resources in your spiritual journey.`
// }

export default function ChatPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Welcome to Divine Guide! I'm here to provide spiritual guidance based on biblical principles. How can I assist you today?",
      type: "bot",
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

    try {
      const response = await fetchGroqResponse(input)
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        type: "bot",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error("Error getting response:", error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting right now. Please try again later.",
        type: "bot",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  return (
    <div className="container mx-auto max-w-4xl py-6 px-4">
      <Card className="border shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            Spiritual Guidance
          </CardTitle>
          <CardDescription>
            Ask for biblical wisdom and spiritual guidance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px] pr-4">
            <div className="flex flex-col gap-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.type === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <Avatar>
                    <AvatarFallback className={message.type === "user" ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}>
                      {message.type === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`rounded-lg px-4 py-3 max-w-[80%] ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-lg px-4 py-3 bg-muted">
                    <div className="flex gap-1 items-center">
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse delay-150"></div>
                      <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse delay-300"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSendMessage} className="w-full flex gap-2">
            <Textarea
              ref={inputRef}
              placeholder="Ask for spiritual guidance..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-10 resize-none flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage(e)
                }
              }}
            />
            <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}