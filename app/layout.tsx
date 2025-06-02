import { ThemeProvider } from "@/components/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import ContactButton from "@/components/ContactButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#101A30" />
        <link rel="icon" href="/icon-192x192.png" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body>
        <ThemeProvider>
          <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "32px" }}>
            <div>
              <span style={{ fontWeight: 900, fontSize: 24, color: "#3971FF" }}>Decifra.ai</span>
            </div>
            <ThemeToggle />
          </header>
          <main>{children}</main>
          <footer style={{
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: "16px", marginTop: 40, marginBottom: 32
          }}>
            <ContactButton />
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="https://www.linkedin.com/company/decifra-ai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="28" height="28" fill="#0077B5" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76..."/></svg>
              </a>
              <a href="https://twitter.com/drdecifra" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <svg width="28" height="28" fill="#1DA1F2" viewBox="0 0 24 24"><path d="M24 4.557c-..."/></svg>
              </a>
              {/* Adicione outros ícones sociais conforme quiser */}
            </div>
            <span style={{ fontSize: 14, color: "#888" }}>© {new Date().getFullYear()} Decifra.ai</span>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}