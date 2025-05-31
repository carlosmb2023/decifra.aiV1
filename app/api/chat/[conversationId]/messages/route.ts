import { type NextRequest, NextResponse } from "next/server"
import { getConversationMessages, addMessageToConversation } from "@/lib/db"

// Obter mensagens de uma conversa
export async function GET(request: NextRequest, { params }: { params: { conversationId: string } }) {
  try {
    const conversationId = Number.parseInt(params.conversationId)

    const messages = await getConversationMessages(conversationId)

    return NextResponse.json({ success: true, data: messages })
  } catch (error) {
    console.error("Erro ao obter mensagens:", error)
    return NextResponse.json({ success: false, message: "Falha ao obter mensagens" }, { status: 500 })
  }
}

// Adicionar mensagem a uma conversa
export async function POST(request: NextRequest, { params }: { params: { conversationId: string } }) {
  try {
    const conversationId = Number.parseInt(params.conversationId)
    const { role, content } = await request.json()

    const message = await addMessageToConversation(conversationId, role, content)

    return NextResponse.json({ success: true, data: message })
  } catch (error) {
    console.error("Erro ao adicionar mensagem:", error)
    return NextResponse.json({ success: false, message: "Falha ao adicionar mensagem" }, { status: 500 })
  }
}
