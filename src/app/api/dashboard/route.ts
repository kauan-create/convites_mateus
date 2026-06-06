import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const familiasDB = await prisma.familia.findMany({ include: { convidados: true } });
    const convidadosDB = await prisma.convidado.findMany({ include: { familia: true } });
    const convitesDB = await prisma.convite.findMany();

    const families = familiasDB.map(f => {
      const statuses = f.convidados.map(c => c.status_confirmacao);
      const inviteStatus = statuses.includes("Confirmado") ? "Confirmado" : (statuses.length > 0 && statuses.every(s => s === "Recusado") ? "Recusado" : "Pendente");
      return {
        id: f.id,
        name: f.nome_familia,
        members: f.convidados.map(c => c.nome).join(', '),
        inviteStatus,
        convidados: f.convidados.map(c => ({
          id: c.id,
          nome: c.nome,
          status: c.status_confirmacao || "Pendente"
        }))
      };
    });

    const guests = convidadosDB.map(c => ({
      id: c.id,
      name: c.nome,
      family: c.familia?.nome_familia || "Sem tribo / família",
      phone: c.telefone || "-",
      companions: c.acompanhantes || 0,
      status: c.status_confirmacao || "Pendente"
    }));

    const invites = convitesDB.map(i => ({
      id: i.id,
      type: i.type,
      title: i.title,
      code: i.codigo,
      link: i.link,
      createdAt: new Date(i.createdAt).toLocaleDateString("pt-BR"),
      status: i.status
    }));

    return NextResponse.json({ families, guests, invites });
  } catch (error) {
    console.error("Erro no dashboard:", error);
    return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 });
  }
}
