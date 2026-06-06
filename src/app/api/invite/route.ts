import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, name, family, status } = data;
    
    let familiaId: string | null = null;
    if (family && family !== "Sem tribo / família" && family !== "Sem família (pode ser adicionado futuramente)") {
        let fam = await prisma.familia.findFirst({ where: { nome_familia: family } });
        if (!fam) {
            fam = await prisma.familia.create({ data: { nome_familia: family } });
        }
        familiaId = fam.id;
    }

    await prisma.convidado.update({
      where: { id },
      data: {
        nome: name,
        status_confirmacao: status,
        familiaId: familiaId
      } as any
    });
    try {
      await prisma.convidado.update({
        where: { id },
        data: {
          nome: name,
          status_confirmacao: status,
          familiaId: familiaId
        } as any
      });
    } catch(e) {
      const numId = parseInt(id.toString(), 10);
      if (!isNaN(numId)) {
        await prisma.convidado.update({
          where: { id: numId } as any,
          data: { nome: name, status_confirmacao: status, familiaId: familiaId } as any
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao atualizar convidado' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) return NextResponse.json({ error: 'ID ausente' }, { status: 400 });
    
    try {
      await prisma.convite.deleteMany({ where: { convidadoId: id } });
      await prisma.convidado.deleteMany({ where: { id } });
    } catch (e) {
      const numId = parseInt(id.toString(), 10);
      if (!isNaN(numId)) {
        await prisma.convite.deleteMany({ where: { convidadoId: numId } as any });
        await prisma.convidado.deleteMany({ where: { id: numId } as any });
      }
    }
    await prisma.convite.deleteMany({ where: { convidadoId: id } });
    await prisma.convidado.deleteMany({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erro DELETE Guest:", error);
    return NextResponse.json({ error: error.message || 'Erro ao excluir convidado' }, { status: 500 });
  }
}