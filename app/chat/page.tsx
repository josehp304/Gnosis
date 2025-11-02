"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Send, ArrowDown, Sparkles, RotateCcw } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import rehypeRaw from "rehype-raw"
import axios from "axios"
import "highlight.js/styles/github-dark.css"

// Types for messages
type MessageType = "user" | "assistant" | "system"
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
      content: "Shalom !! How can I help you today?",
      type: "assistant",
      timestamp: new Date()
    }
  ])

  const [isLoading, setIsLoading] = useState(false)
  const [showScrollButton, setShowScrollButton] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Check if user has scrolled up
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100
      setShowScrollButton(!isNearBottom)
    }
  }

  // Scroll to bottom function
  const scrollToBottom = () => {
    // messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Auto-scroll only when user sends a message or bot responds (if already at bottom)
  useEffect(() => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 100

      // Only auto-scroll if user is already near the bottom
      if (isNearBottom) {
        scrollToBottom()
      }
    }
  }, [messages])

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`
    }
  }, [input])

  // Global keyboard handler - focus input on any keypress
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Don't focus if user is already typing in input or if modifier keys are pressed
      if (
        document.activeElement === textareaRef.current ||
        e.ctrlKey ||
        e.metaKey ||
        e.altKey
      ) {
        return
      }

      // Handle keyboard shortcuts
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault()
        handleClearChat()
        return
      }

      // Focus input on regular keypress
      if (e.key.length === 1 && textareaRef.current) {
        textareaRef.current.focus()
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [])

  // Handle sending a message
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      type: "user",
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    const reqMessage = messages.map(message => ({
      role: message.type === "user" ? "user" : "assistant",
      content: message.content
    }))

    try {
      const responseax = await axios.post("/api/chatbot", {
        messages: [...reqMessage, { role: userMessage.type, content: userMessage.content }]
      })
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
        content: "I apologize, but I'm having trouble connecting right now. Please try again later. Shalom !!",
        type: "assistant",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      textareaRef.current?.focus()
    }
  }

  // Handle clearing chat
  const handleClearChat = () => {
    setMessages([
      {
        id: "welcome",
        content: "Shalom !! How can I help you today?",
        type: "assistant",
        timestamp: new Date()
      }
    ])
  }

  // Handle textarea key down
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(e)
    }
  }


  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-950 relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 dark:opacity-30"
        style={{
          backgroundImage: 'url(https://media.istockphoto.com/id/182668143/photo/jesus-comforting.webp?b=1&s=612x612&w=0&k=20&c=ov8QgsDRL8aqim8wbX8WK0Dd1nDCkuSBgDJCGiADzzg=)',
        }}
      />
      <div className="fixed inset-0 bg-black/30 dark:bg-black/30" />
      
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Divine Guide
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearChat}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              title="New chat (Ctrl+K)"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Messages Container */}
      <div
        ref={messagesContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto"
      >
        <div className="max-w-3xl mx-auto px-4 py-8">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={`mb-8 opacity-0 animate-fade-in ${
                message.type === "user" ? "flex justify-end" : ""
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: "forwards"
              }}
            >
              <div
                className={`max-w-[85%] ${
                  message.type === "user"
                    ? "bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3"
                    : ""
                }`}
              >
                {message.type === "assistant" && (
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-4 w-4 text-white" />
                    </div>
                    <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:text-gray-900 dark:prose-headings:text-gray-100 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-pre:bg-gray-900 dark:prose-pre:bg-gray-950 prose-pre:text-gray-100 prose-code:text-gray-900 dark:prose-code:text-gray-100 prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-strong:text-gray-900 dark:prose-strong:text-gray-100 prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeHighlight, rehypeRaw]}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  </div>
                )}
                {message.type === "user" && (
                  <p className="text-gray-900 dark:text-gray-100 leading-relaxed">
                    {message.content}
                  </p>
                )}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="mb-8 opacity-0 animate-fade-in" style={{ animationFillMode: "forwards" }}>
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <div className="flex gap-1 items-center pt-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-600 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Scroll to bottom button */}
      {showScrollButton && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-32 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 animate-fade-in z-20"
          style={{ animationFillMode: "forwards" }}
          aria-label="Scroll to bottom"
        >
          <ArrowDown className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        </button>
      )}

      {/* Input Area */}
      <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky bottom-0">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <form onSubmit={handleSendMessage} className="relative">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Message Divine Guide..."
              rows={1}
              className="w-full resize-none rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 pr-12 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 max-h-[200px] overflow-y-auto"
              style={{ minHeight: "48px" }}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 bottom-2 h-8 w-8 rounded-lg bg-gray-900 dark:bg-gray-100 hover:bg-gray-800 dark:hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            >
              <Send className="h-4 w-4 text-white dark:text-gray-900" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  )
}