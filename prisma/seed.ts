import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("Roberta@102030", 10);
  await prisma.user.upsert({
    where: { email: "carlosvieiramb2@gmail.com" },
    update: {},
    create: {
      email: "carlosvieiramb2@gmail.com",
      password,
      name: "Carlos Vieira",
    },
  });
  console.log("Usuário seed criado: carlosvieiramb2@gmail.com");
}

main().finally(() => prisma.$disconnect());