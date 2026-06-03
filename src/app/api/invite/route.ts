import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, family, phone, message, code, link } = data;

    let familiaRecord = null;
    if (family && family !== "Sem família (pode ser adicionado futuramente)") {
      familiaRecord = await prisma.familia.findFirst({ where: { nome_familia: family } });
      if (!familiaRecord) {
        familiaRecord = await prisma.familia.create({ data: { nome_familia: family } });
      }
    }

    const guest = await prisma.convidado.create({
      data: {
        nome: name,
        telefone: phone,
        observacoes: message,
        familiaId: familiaRecord?.id,
      },
      include: { familia: true }
    });

    const invite = await prisma.convite.create({
      data: {
        codigo: code,
        type: "individual",
        title: `Convite de ${name}`,
        link,
        convidadoId: guest.id,
      },
      include: { convidado: true }
    });

    return NextResponse.json({ guest, invite });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar convite" }, { status: 500 });
  }
}