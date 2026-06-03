import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { inviteCode, resposta, acompanhantes, observacoes } = data;

    const invite = await prisma.convite.findUnique({
      where: { codigo: inviteCode },
      include: { convidado: true }
    });

    if (!invite) return NextResponse.json({ error: "Convite não encontrado" }, { status: 404 });

    await prisma.convite.update({
      where: { codigo: inviteCode },
      data: { status: resposta === "CONFIRMADO" ? "Confirmado" : "Recusado" }
    });

    await prisma.convidado.update({
      where: { id: invite.convidadoId },
      data: {
        status_confirmacao: resposta === "CONFIRMADO" ? "Confirmado" : "Recusado",
        acompanhantes: Number(acompanhantes) || 0,
        observacoes: observacoes ? `${invite.convidado.observacoes || ''}\n[RSVP]: ${observacoes}` : invite.convidado.observacoes
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar RSVP" }, { status: 500 });
  }
}