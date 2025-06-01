import SEO from "@/components/SEO";

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
      {/* ...resto da página... */}
    </>
  );
}