import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.type === 'individual') {
       let familiaId: string | null = null;
       if (body.family && body.family !== "Sem tribo / família") {
         let fam = await prisma.familia.findFirst({ where: { nome_familia: body.family } });
         if (!fam) {
           fam = await prisma.familia.create({ data: { nome_familia: body.family } });
         }
         familiaId = fam.id;
       }

       const convidado = await prisma.convidado.create({
         data: {
           nome: body.name,
           telefone: body.phone || null,
           observacoes: body.message || null,
           familiaId: familiaId
         } as any
       });

       await prisma.convite.create({
         data: { 
           codigo: body.code, 
           type: 'individual', 
           title: body.title, 
           link: body.link, 
           convidadoId: convidado.id
         } as any
       });
       
    } else if (body.type === 'family') {
       let fam = await prisma.familia.findFirst({ where: { nome_familia: body.familyName } });
       if (!fam) {
         fam = await prisma.familia.create({ data: { nome_familia: body.familyName } });
       }
       
       let principalId: string | null = null;
       for (const memberName of (body.members || [])) {
         if (!memberName || memberName.trim() === '') continue;
         const conv = await prisma.convidado.create({
           data: {
             nome: memberName.trim(),
             observacoes: body.message || null,
             familiaId: fam.id
           } as any
         });
         if (!principalId) principalId = conv.id;
       }

       await prisma.convite.create({
         data: { 
           codigo: body.code, 
           type: 'family', 
           title: body.title, 
           link: body.link, 
           convidadoId: principalId
         } as any
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