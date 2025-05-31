import { type NextRequest, NextResponse } from "next/server"
import { getUserConversations, createConversation } from "@/lib/db"

// Obter conversas do usuário
export async function GET(request: NextRequest) {
  try {
    // Em um ambiente real, você obteria o ID do usuário da sessão autenticada
    const userId = 1 // Mock user ID

    const conversations = await getUserConversations(userId)

    return NextResponse.json({ success: true, data: conversations })
  } catch (error) {
    console.error("Erro ao obter conversas:", error)
    return NextResponse.json({ success: false, message: "Falha ao obter conversas" }, { status: 500 })
  }
}

// Criar nova conversa
export async function POST(request: NextRequest) {
  try {
    const { userId, title } = await request.json()

    const conversation = await createConversation(userId, title)

    return NextResponse.json({ success: true, data: conversation })
  } catch (error) {
    console.error("Erro ao criar conversa:", error)
    return NextResponse.json({ success: false, message: "Falha ao criar conversa" }, { status: 500 })
  }
}
