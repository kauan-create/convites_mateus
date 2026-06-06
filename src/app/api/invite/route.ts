import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.type === 'individual') {
       let familiaId: string | null = null;
       if (body.family && body.family !== "Sem tribo / família" && body.family !== "Sem família (pode ser adicionado futuramente)") {
         let fam = await prisma.familia.findFirst({ where: { nome_familia: body.family } });
         if (!fam) {
           fam = await prisma.familia.create({ data: { nome_familia: body.family } });
         }
         familiaId = fam.id;
       }

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
       // Cria uma nova família para isolar os membros corretamente
       const fam = await prisma.familia.create({ data: { nome_familia: body.familyName } });
       
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

       if (principalId) {
         await prisma.convite.deleteMany({ where: { convidadoId: principalId } });
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
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erro POST Invite:", error);
    return NextResponse.json({ error: error.message || 'Erro ao criar convite' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, title, code, status } = await request.json();
    await prisma.convite.update({
      where: { id },
      data: { title, codigo: code, status } as any
    });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erro PUT Invite:", error);
    return NextResponse.json({ error: error.message || 'Erro ao atualizar convite' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const convite = await prisma.convite.findUnique({ where: { id } });
    if (convite) {
      await prisma.convite.delete({ where: { id } });
      if (convite.type === 'individual' && convite.convidadoId) {
        await prisma.convidado.deleteMany({ where: { id: convite.convidadoId, familiaId: null } });
      }
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erro DELETE Invite:", error);
    return NextResponse.json({ error: error.message || 'Erro ao excluir convite' }, { status: 500 });
  }
}