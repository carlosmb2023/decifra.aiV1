import { getSession, useSession, signOut } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import { useEffect, useState } from "react";

export default function DashboardPage({ uploads, chats }) {
  const { data: session } = useSession();
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(chats[0]?.messages || []);

  async function sendMessage(e) {
    e.preventDefault();
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: chat.concat({ role: "user", content: message }) })
    });
    const data = await res.json();
    setChat(chat.concat({ role: "user", content: message }, { role: "assistant", content: data.result }));
    setMessage("");
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 32 }}>
      <h1>Bem-vindo ao seu Dashboard, {session?.user?.email}</h1>
      <button onClick={() => signOut()}>Sair</button>
      <h2>Uploads</h2>
      <ul>
        {uploads.map(u => (
          <li key={u.id}><a href={u.url} target="_blank">{u.filename}</a></li>
        ))}
      </ul>
      <h2>Chat IA</h2>
      <div style={{ minHeight: 150, border: "1px solid #3971FF", borderRadius: 8, padding: 16, marginBottom: 12 }}>
        {chat.map((m, i) => (
          <div key={i} style={{ textAlign: m.role === "user" ? "right" : "left", color: m.role === "user" ? "#101A30" : "#3971FF" }}>
            <b>{m.role === "user" ? "Você" : "Decifra"}:</b> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={{ display: "flex", gap: 8 }}>
        <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Pergunte..." style={{ flex: 1 }} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: { uploads: true, chats: { orderBy: { createdAt: "desc" }, take: 1 } },
  });
  return {
    props: {
      uploads: user.uploads || [],
      chats: user.chats || [],
    },
  };
}