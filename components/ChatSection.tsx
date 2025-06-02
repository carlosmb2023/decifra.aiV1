import { useState } from "react";
import Button from "@/components/ui/button";

export default function ChatSection() {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Olá! Eu sou o Dr. Decifra, sua IA parceira. Pergunte qualquer coisa sobre IA!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    const contextMsgs = messages.map(m => ({
      role: m.role === "bot" ? "assistant" : m.role,
      content: m.text
    })).concat(userMsg);

    setMessages(prev => [...prev, { role: "user", text: input }]);
    setLoading(true);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: contextMsgs })
    });
    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || data.text || "Sem resposta da IA.";
    setMessages(prev => [...prev, { role: "bot", text }]);
    setLoading(false);
  }

  return (
    <section>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Chat com Dr. Decifra</h2>
      <div style={{ border: "1px solid #3971FF", borderRadius: 8, padding: 16, minHeight: 120, marginBottom: 12, background: "#f6f8ff" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            marginBottom: 8,
            textAlign: msg.role === "user" ? "right" : "left",
            color: msg.role === "user" ? "#101A30" : "#3971FF"
          }}>
            <b>{msg.role === "user" ? "Você" : "Dr. Decifra"}:</b> {msg.text}
          </div>
        ))}
        {loading && <div style={{ color: "#aaa" }}>Dr. Decifra está digitando...</div>}
      </div>
      <form onSubmit={sendMessage} style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Pergunte sobre IA..."
          style={{
            flex: 1,
            border: "1px solid #cbd5e1",
            borderRadius: 8,
            padding: "10px 12px",
            fontSize: 16
          }}
          disabled={loading}
        />
        <Button type="submit" loading={loading}>Enviar</Button>
      </form>
    </section>
  );
}