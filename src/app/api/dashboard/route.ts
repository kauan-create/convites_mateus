import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const guests = await prisma.convidado.findMany({ include: { familia: true }, orderBy: { nome: 'asc' } });
    const families = await prisma.familia.findMany({ include: { convidados: true }, orderBy: { nome_familia: 'asc' } });
    const invites = await prisma.convite.findMany({ include: { convidado: { include: { familia: true } } }, orderBy: { createdAt: 'desc' } });

    return NextResponse.json({ guests, families, invites });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar dashboard" }, { status: 500 });
  }
}