import { NextApiRequest, NextApiResponse } from 'next';

const staticPages = [
  "",
  "contato",
  "blog",
  // Adicione outras rotas principais conforme o crescimento do projeto
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const baseUrl = "https://decifra.ai";
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`
  )
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(sitemap);
}