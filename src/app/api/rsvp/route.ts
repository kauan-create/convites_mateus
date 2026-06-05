import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Recebe o código do convite e a lista de convidados com seus novos status
    const { codigo, status_convite, convidados, observacoes, familia } = data;

    // 1. Atualiza o status geral do Link/Convite
    await prisma.convite.update({
      where: { codigo },
      data: { status: status_convite },
    });

    // 2. Atualiza cada membro da família (Marcado = Confirmado, Desmarcado = Recusado)
    if (convidados && Array.isArray(convidados)) {
      for (const convidado of convidados) {
        // Busca o convidado no banco de dados pelo nome (e família, se existir)
        const convidadoDB = await prisma.convidado.findFirst({
          where: {
            nome: convidado.nome,
            ...(familia ? { familia: { nome_familia: familia } } : {})
          }
        });

        if (convidadoDB) {
          await prisma.convidado.update({
            where: { id: convidadoDB.id },
            data: { 
              status_confirmacao: convidado.status,
              observacoes: observacoes || convidadoDB.observacoes
            },
          });
        }
      }
    }

    return NextResponse.json({ success: true, message: "RSVP salvo com sucesso!" });
  } catch (error) {
    console.error("Erro ao salvar RSVP:", error);
    return NextResponse.json({ success: false, message: "Erro ao salvar os dados." }, { status: 500 });
  }
}
