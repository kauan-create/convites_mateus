import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { familyName, members, message, code, link } = data;

    const familiaRecord = await prisma.familia.create({
      data: { nome_familia: familyName }
    });

    const guest = await prisma.convidado.create({
      data: {
        nome: `Família ${familyName}`,
        observacoes: `Membros: ${members.join(", ")}\n${message || ""}`,
        familiaId: familiaRecord.id,
      },
      include: { familia: true }
    });

    const invite = await prisma.convite.create({
      data: {
        codigo: code,
        type: "family",
        title: `Convite ${familyName}`,
        link,
        convidadoId: guest.id,
      },
      include: { convidado: { include: { familia: true } } }
    });
    return NextResponse.json({ family: { ...familiaRecord, convidados: [guest] }, guest, invite });
  } catch (error) { return NextResponse.json({ error: "Erro" }, { status: 500 }); }
}