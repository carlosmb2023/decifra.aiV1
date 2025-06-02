import ChatSection from "./ChatSection";
export default function DashboardPage() {
  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 32 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#3971FF", marginBottom: 24 }}>
        Bem-vindo ao seu Dashboard, Lenda!
      </h1>
      <ChatSection />
    </div>
  );
}