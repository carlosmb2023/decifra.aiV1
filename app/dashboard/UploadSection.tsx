import { useState } from "react";
import Loader from "@/components/Loader";

export default function UploadSection() {
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files ? Array.from(e.target.files) : [];
    setLoading(true);
    setTimeout(() => {
      setFiles((prev) => [...prev, ...selected]);
      setLoading(false);
    }, 1200); // Simula upload
  }

  return (
    <section>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Upload de Arquivos</h2>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        style={{ marginBottom: 16 }}
      />
      {loading && <Loader />}
      <ul>
        {files.map((file, i) => (
          <li key={i} style={{ marginTop: 4, color: "#3971FF" }}>
            {file.name}
          </li>
        ))}
      </ul>
    </section>
  );
}