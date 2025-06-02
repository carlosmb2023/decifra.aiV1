import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: "Não autenticado" });

  if (req.method === "POST") {
    const { messages } = req.body;
    const api_key = process.env.API_KEY_ALIBABA;
    const response = await fetch("https://api.drdecifra.com/v1/gerar-insight", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${api_key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: messages[messages.length - 1]?.content })
    });
    const data = await response.json();

    // Salva no banco
    await prisma.chat.create({
      data: {
        user: { connect: { email: session.user.email } },
        messages: messages.concat({ role: "assistant", content: data.result || data.response }),
      },
    });

    res.status(200).json({ result: data.result || data.response });
  } else {
    res.status(405).end();
  }
}