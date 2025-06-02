import SEO from "@/components/SEO";
import Loader from "@/components/Loader"; // opcional, exemplo de uso

export default function LandingPage() {
  return (
    <>
      <SEO
        title="Decifra.ai | A IA descomplicada!"
        description="Descubra como a IA pode revolucionar seu negócio. Dr. Decifra aqui, descomplicando a IA com ciência, bom humor e os códigos certos!"
        url="https://decifra.ai/"
        imageUrl="https://decifra.ai/og-image.png"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Decifra.ai",
          "url": "https://decifra.ai",
          "logo": "https://decifra.ai/og-image.png",
          "sameAs": [
            "https://www.linkedin.com/company/decifra-ai",
            "https://twitter.com/drdecifra"
          ]
        }}
      />
      <section style={{ textAlign: "center", marginTop: 60 }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, color: "#3971FF" }}>
          Dr. Decifra aqui! Descomplicando a IA com ciência, bom humor e os códigos certos!
        </h1>
        <p style={{ fontSize: 22, color: "#222", marginTop: 24 }}>
          Vem aprender IA sem enrolação. O BRABO resolve AO VIVO!
        </p>
        {/* <Loader /> Exemplo de uso, remova se não quiser loader na home */}
      </section>
    </>
  );
}