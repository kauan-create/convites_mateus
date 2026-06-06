import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id') || body.id;

    if (!id) return NextResponse.json({ error: 'ID ausente' }, { status: 400 });

    let familiaId = null;
    if (body.family && body.family !== "Sem tribo / família" && !body.family.includes("Sem família")) {
      let fam = await prisma.familia.findFirst({ where: { nome_familia: body.family } });
      if (!fam) {
        fam = await prisma.familia.create({ data: { nome_familia: body.family } });
      }
      familiaId = fam.id;
    }

    const statusMapReverse: Record<string, string> = {
      "Pendente": "PENDENTE",
      "Confirmado": "CONFIRMADO",
      "Recusado": "RECUSADO",
      "Comprometido": "COMPROMETIDO",
      "Não vai": "NAO_VAI"
    };
    const dbStatus = statusMapReverse[body.status] || "PENDENTE";

    await prisma.convidado.update({
      where: { id },
      data: {
        nome: body.name,
        familiaId: familiaId,
        status_confirmacao: dbStatus
      } as any
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao atualizar convidado' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let id = searchParams.get('id');

    if (!id) {
      const body = await request.json().catch(() => ({}));
      id = body.id;
    }
    if (!id) return NextResponse.json({ error: 'ID não fornecido' }, { status: 400 });

    await prisma.convite.deleteMany({ where: { convidadoId: id } });
    await prisma.convidado.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao excluir convidado: ' + error.message }, { status: 500 });
  }
}