import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.ok) {
      window.location.href = "/dashboard";
    } else {
      setError("Usuário ou senha inválidos");
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 32 }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" type="email" required />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password" required />
        <button type="submit">Entrar</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
}