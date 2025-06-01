import Link from "next/link";

export default function Custom404() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #101A30 0%, #3971FF 100%)",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{ fontSize: "6rem", fontWeight: "bold", letterSpacing: "-0.03em" }}>404</h1>
      <h2 style={{ fontSize: "2rem", marginBottom: 16 }}>Eita! Você hackeou o universo!</h2>
      <p style={{ maxWidth: 400, textAlign: "center", marginBottom: 24 }}>
        Não achei essa página, mas <strong>o Dr. Decifra</strong> tá aqui pra te guiar de volta ao caminho da IA!
      </p>
      <Link href="/" style={{
        background: "#fff",
        color: "#101A30",
        padding: "12px 28px",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: "1.1rem"
      }}>
        Voltar para o início
      </Link>
      <span style={{
        marginTop: 32,
        fontSize: "1rem",
        opacity: 0.8
      }}>
        Dr. Decifra aqui! Descomplicando a IA com ciência, bom humor e os códigos certos!
      </span>
    </div>
  );
}