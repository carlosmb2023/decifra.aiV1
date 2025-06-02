import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "@/lib/prisma";
import formidable from "formidable";
import fs from "fs";
import path from "path";

export const config = { api: { bodyParser: false } };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  if (!session) return res.status(401).json({ error: "Não autenticado" });

  if (req.method === "POST") {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), "/public/uploads");
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ error: "Erro no upload" });
      const file = files.file as formidable.File;
      const filename = file.newFilename;
      const url = `/uploads/${filename}`;
      await prisma.upload.create({
        data: {
          filename,
          url,
          user: { connect: { email: session.user.email } },
        },
      });
      return res.status(200).json({ filename, url });
    });
  } else {
    res.status(405).end();
  }
}