import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.type === 'individual') {
       let familiaId: string | null = null;
       if (body.family && body.family !== "Sem tribo / família") {
         const fam = await prisma.familia.findFirst({ where: { nome_familia: body.family } });
         if (fam) familiaId = fam.id;
       }

       const convidado = await prisma.convidado.create({
         data: { nome: body.name, telefone: body.phone, observacoes: body.message, ...(familiaId ? { familiaId } : {}) }
       });

       await prisma.convite.create({
         data: { codigo: body.code, type: 'individual', title: body.title, link: body.link, convidadoId: convidado.id }
       });
       
    } else if (body.type === 'family') {
       const fam = await prisma.familia.create({
         data: { nome_familia: body.familyName }
       });
       
       let principalId: string | null = null;
       for (const memberName of body.members) {
         const conv = await prisma.convidado.create({
           data: { nome: memberName, observacoes: body.message, familiaId: fam.id }
         });
         if (!principalId) principalId = conv.id;
       }

       await prisma.convite.create({
         data: { codigo: body.code, type: 'family', title: body.title, link: body.link, convidadoId: principalId }
       });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao criar convite' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, code, status } = await request.json();
    await prisma.convite.update({
      where: { id },
      data: { title, codigo: code, status }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao atualizar convite' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await prisma.convite.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao excluir convite' }, { status: 500 });
  }
}