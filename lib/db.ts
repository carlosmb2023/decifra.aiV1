import { neon } from "@neondatabase/serverless"

// Inicializa a conexão com o banco de dados Neon
export const sql = neon(process.env.DATABASE_URL!)

// Funções de utilidade para usuários
export async function getUserByEmail(email: string) {
  const [user] = await sql`
    SELECT * FROM users WHERE email = ${email} LIMIT 1
  `
  return user
}

export async function createUser({ email, name, passwordHash }: { email: string; name: string; passwordHash: string }) {
  const [user] = await sql`
    INSERT INTO users (email, name, password_hash)
    VALUES (${email}, ${name}, ${passwordHash})
    RETURNING id, email, name, created_at
  `
  return user
}

// Funções de utilidade para chat
export async function getUserConversations(userId: number) {
  return await sql`
    SELECT * FROM chat_conversations 
    WHERE user_id = ${userId}
    ORDER BY updated_at DESC
  `
}

export async function createConversation(userId: number, title = "Nova Conversa") {
  const [conversation] = await sql`
    INSERT INTO chat_conversations (user_id, title)
    VALUES (${userId}, ${title})
    RETURNING id, user_id, title, created_at
  `
  return conversation
}

export async function getConversationMessages(conversationId: number) {
  return await sql`
    SELECT * FROM chat_messages
    WHERE conversation_id = ${conversationId}
    ORDER BY created_at ASC
  `
}

export async function addMessageToConversation(conversationId: number, role: "user" | "assistant", content: string) {
  const [message] = await sql`
    INSERT INTO chat_messages (conversation_id, role, content)
    VALUES (${conversationId}, ${role}, ${content})
    RETURNING id, conversation_id, role, content, created_at
  `

  // Atualiza o timestamp da conversa
  await sql`
    UPDATE chat_conversations
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = ${conversationId}
  `

  return message
}
