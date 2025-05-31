"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Sidebar } from "@/components/dashboard/Sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Plus, Loader2 } from "lucide-react"

// Tipos para mensagens e conversas
interface Message {
  id: number
  role: "user" | "assistant"
  content: string
  created_at: string
}

interface Conversation {
  id: number
  title: string
  created_at: string
}

export default function ChatPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [conversations, setConversations] = useState<Conversation[]>([])
  const [currentConversation, setCurrentConversation] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Carregar conversas do usuário
  useEffect(() => {
    async function loadConversations() {
      try {
        // Em um ambiente real, isso seria uma chamada API autenticada
        // Por enquanto, usamos dados simulados
        const mockConversations = [
          { id: 1, title: "Estratégias de Marketing Digital", created_at: new Date().toISOString() },
          { id: 2, title: "Análise de Dados com Python", created_at: new Date().toISOString() },
        ]
        setConversations(mockConversations)

        // Se não houver conversa selecionada, selecione a primeira
        if (mockConversations.length > 0 && !currentConversation) {
          setCurrentConversation(mockConversations[0].id)
          await loadMessages(mockConversations[0].id)
        }
      } catch (error) {
        console.error("Erro ao carregar conversas:", error)
      }
    }

    loadConversations()
  }, [currentConversation])

  // Carregar mensagens da conversa atual
  async function loadMessages(conversationId: number) {
    try {
      setLoading(true)
      // Em um ambiente real, isso seria uma chamada API autenticada
      // Por enquanto, usamos dados simulados
      const mockMessages = [
        {
          id: 1,
          role: "user" as const,
          content: "Olá! Preciso de ajuda com estratégias de marketing digital para minha startup.",
          created_at: new Date().toISOString(),
        },
        {
          id: 2,
          role: "assistant" as const,
          content:
            "Olá! Claro, posso ajudar com estratégias de marketing digital. Para começar, poderia me contar um pouco mais sobre sua startup? Qual é o setor, público-alvo e objetivos principais?",
          created_at: new Date().toISOString(),
        },
      ]
      setMessages(mockMessages)
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error)
    } finally {
      setLoading(false)
      scrollToBottom()
    }
  }

  // Criar nova conversa
  async function createNewConversation() {
    try {
      // Em um ambiente real, isso seria uma chamada API autenticada
      const newConversation = {
        id: Date.now(),
        title: "Nova Conversa",
        created_at: new Date().toISOString(),
      }
      setConversations([newConversation, ...conversations])
      setCurrentConversation(newConversation.id)
      setMessages([])
    } catch (error) {
      console.error("Erro ao criar nova conversa:", error)
    }
  }

  // Enviar mensagem
  async function sendMessage(e: React.FormEvent) {
    e.preventDefault()
    if (!input.trim() || !currentConversation) return

    const userMessage = {
      id: Date.now(),
      role: "user" as const,
      content: input,
      created_at: new Date().toISOString(),
    }

    setMessages([...messages, userMessage])
    setInput("")
    scrollToBottom()

    // Simular resposta da IA
    setLoading(true)
    setTimeout(() => {
      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant" as const,
        content:
          "Estou analisando sua mensagem. Em um ambiente de produção, eu enviaria esta mensagem para uma API de IA como OpenAI ou Anthropic para gerar uma resposta contextual.",
        created_at: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setLoading(false)
      scrollToBottom()
    }, 1500)
  }

  // Rolar para o final das mensagens
  function scrollToBottom() {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-[#0B0E12]">
      <Sidebar />

      <div className="md:ml-64 flex flex-col h-screen">
        {/* Header */}
        <header className="p-4 border-b border-gray-800 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">
            {currentConversation
              ? conversations.find((c) => c.id === currentConversation)?.title || "Chat IA"
              : "Chat IA"}
          </h1>
          <Button
            onClick={createNewConversation}
            variant="ghost"
            size="sm"
            className="text-cyan-400 hover:text-cyan-300"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nova Conversa
          </Button>
        </header>

        {/* Chat Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-[#00FFFF]/20 to-[#0080FF]/20 text-white"
                    : "bg-[#181B22] text-gray-200"
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
                <div className="mt-2 text-xs text-gray-400">{new Date(message.created_at).toLocaleTimeString()}</div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-4 bg-[#181B22]">
                <div className="flex items-center">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  <p className="text-gray-400">IA está digitando...</p>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <div className="p-4 border-t border-gray-800">
          <form onSubmit={sendMessage} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-[#181B22] border-gray-700 focus:border-cyan-500"
              disabled={loading}
            />
            <Button
              type="submit"
              disabled={!input.trim() || loading}
              className="bg-gradient-to-r from-[#00FFFF] to-[#0080FF] hover:opacity-90 text-black"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
