import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.type === 'individual') {
       const tripulante = await prisma.tripulanteSolo.create({
         data: { nome: body.name, telefone: body.phone || null, observacoes: body.message || null }
       });

       await prisma.convite.create({
         data: { codigo: body.code, type: 'individual', title: body.title, link: body.link, tripulanteSoloId: tripulante.id }
       });
       
    } else if (body.type === 'family') {
       const fam = await prisma.familia.create({ data: { nome_familia: body.familyName } });
       
       let principalId: string | null = null;
       const membersList = (body.members && body.members.length > 0) ? body.members : [body.familyName];
       
       for (const memberName of membersList) {
         if (!memberName || memberName.trim() === '') continue;
         
         const conv = await prisma.convidado.create({
           data: { nome: memberName.trim(), observacoes: body.message || null, familiaId: fam.id }
         });
         
         if (!principalId) principalId = conv.id;
       }

       if (principalId) {
         await prisma.convite.create({
           data: { codigo: body.code, type: 'family', title: body.title, link: body.link, convidadoId: principalId }
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
      data: { title, codigo: code, status }
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro PUT Invite:", error);
    return NextResponse.json({ error: 'Erro ao atualizar convite' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    if (!id) return NextResponse.json({ error: 'ID ausente' }, { status: 400 });
    
    const convite = await prisma.convite.findUnique({ where: { id } });
    if (convite) {
      await prisma.convite.delete({ where: { id } });
      if (convite.type === 'individual' && convite.convidadoId) {
        await prisma.convidado.deleteMany({ where: { id: convite.convidadoId } });
      } else if (convite.type === 'individual' && convite.tripulanteSoloId) {
        await prisma.tripulanteSolo.deleteMany({ where: { id: convite.tripulanteSoloId } });
      }
    } else {
      await prisma.convite.deleteMany({ where: { id } });
    }
    
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Erro DELETE Invite:", error);
    return NextResponse.json({ error: 'Erro ao excluir convite' }, { status: 500 });
  }
}