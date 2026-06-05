import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  return NextResponse.json({ message: "API Family funcionando!" });
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    const { id, name, inviteStatus } = data;
    
    await prisma.familia.update({
      where: { id },
      data: { nome_familia: name }
    });

    if (inviteStatus) {
       await prisma.convidado.updateMany({
           where: { familiaId: id },
           data: { status_confirmacao: inviteStatus }
       });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao atualizar família' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const convidados = await prisma.convidado.findMany({ where: { familiaId: id } });
    for (const c of convidados) {
        await prisma.convite.deleteMany({ where: { convidadoId: c.id } });
    }
    await prisma.convidado.deleteMany({ where: { familiaId: id } });
    await prisma.familia.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao excluir família' }, { status: 500 });
  }
}
