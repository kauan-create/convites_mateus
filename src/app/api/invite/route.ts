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

       // Busca o convidado para não duplicar caso já exista com esse nome na família
       let convidado = await prisma.convidado.findFirst({
         where: { nome: body.name, familiaId: familiaId }
       });

       if (!convidado) {
         convidado = await prisma.convidado.create({
           data: {
             nome: body.name,
             telefone: body.phone || null,
             observacoes: body.message || null,
             familiaId: familiaId
           } as any
         });
       } else {
         convidado = await prisma.convidado.update({
           where: { id: convidado.id },
           data: { telefone: body.phone || convidado.telefone, observacoes: body.message || convidado.observacoes } as any
         });
       }

       // Remove convite antigo se houver, para evitar erro de Unique constraint
       await prisma.convite.deleteMany({ where: { convidadoId: convidado.id } });

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
         
         let conv = await prisma.convidado.findFirst({
           where: { nome: memberName.trim(), familiaId: fam.id }
         });

         if (!conv) {
           conv = await prisma.convidado.create({
             data: {
               nome: memberName.trim(),
               observacoes: body.message || null,
               familiaId: fam.id
             } as any
           });
         }
         if (!principalId) principalId = conv.id;
       }

       if (principalId) await prisma.convite.deleteMany({ where: { convidadoId: principalId } });

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
    const convite = await prisma.convite.findUnique({ where: { id } });
    
    if (convite) {
      await prisma.convite.delete({ where: { id } });
      
      // Se for convite individual e o convidado não tiver família, apaga o convidado também para limpar o painel
      if (convite.type === 'individual' && convite.convidadoId) {
        await prisma.convidado.deleteMany({ where: { id: convite.convidadoId, familiaId: null } });
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao excluir convite' }, { status: 500 });
  }
}