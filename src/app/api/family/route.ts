import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id') || body.id;

    if (!id) return NextResponse.json({ error: 'ID ausente' }, { status: 400 });

    try {
      await prisma.familia.update({
        where: { id },
        data: { nome_familia: body.name } as any
      });
    } catch (e) {
      const numId = parseInt(id.toString(), 10);
      if (!isNaN(numId)) {
        await prisma.familia.update({
          where: { id: numId } as any,
          data: { nome_familia: body.name } as any
        });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao atualizar família' }, { status: 500 });
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

    try {
      const guests = await prisma.convidado.findMany({ where: { familiaId: id } });
      const guestIds = guests.map((g: any) => g.id);

      if (guestIds.length > 0) {
        await prisma.convite.deleteMany({ where: { convidadoId: { in: guestIds } } });
      }
      
      await prisma.convidado.deleteMany({ where: { familiaId: id } });
      await prisma.familia.delete({ where: { id } });
    } catch (e) {
      const numId = parseInt(id.toString(), 10);
      if (!isNaN(numId)) {
        const guests = await prisma.convidado.findMany({ where: { familiaId: numId } as any });
        const guestIds = guests.map((g: any) => g.id);

        if (guestIds.length > 0) {
          await prisma.convite.deleteMany({ where: { convidadoId: { in: guestIds } } });
        }
        
        await prisma.convidado.deleteMany({ where: { familiaId: numId } as any });
        await prisma.familia.delete({ where: { id: numId } as any });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao excluir família: ' + error.message }, { status: 500 });
  }
}