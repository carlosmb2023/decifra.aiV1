import { useTheme } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="Alternar tema"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        background: "none", border: "none", fontSize: 28, cursor: "pointer", marginLeft: 16
      }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}