import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import InviteResponseForm from "@/components/InviteResponseForm";

type RSVPPageProps = {
  params: Promise<{ code: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

const MickeySilhouette = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`fill-current ${className}`}>
    <circle cx="27" cy="27" r="22" />
    <circle cx="73" cy="27" r="22" />
    <circle cx="50" cy="65" r="35" />
  </svg>
);

export default async function RSVPPage(props: RSVPPageProps) {
  const params = await props.params;
  const searchParams = props.searchParams ? await props.searchParams : undefined;

  let invite: any = null;
  
  try {
    invite = await prisma.convite.findUnique({
      where: { codigo: params.code },
      include: {
        convidado: {
          include: { 
            familia: {
              include: { convidados: true }
            } 
          },
        },
      },
    });
  } catch (error) {
    console.warn("Banco de dados não conectado. Usando fallback visual.");
  }

  if (!invite) {
    // Fallback local: Cria um convite genérico para visualização
    const n = (searchParams?.n as string) || "Explorador(a)";
    const f = (searchParams?.f as string) || "";
    const m = (searchParams?.m as string) || "";
    const t = (searchParams?.t as string) || "individual";

    invite = {
      codigo: params.code,
      type: t,
      convidado: {
        nome: t === "family" && !n.toLowerCase().includes("família") ? `Família ${n}` : n,
        observacoes: m ? `Membros: ${m}` : "",
        familia: f ? { nome_familia: f } : null,
      }
    };
  }

  const guest = invite?.convidado || {};
  const isFamilyInvite = invite?.type === 'family' || guest?.nome?.toLowerCase().startsWith("família") || false;
  const familyName = guest?.familia?.nome_familia ?? "";
  
  let members = "";
  if (isFamilyInvite) {
    if (guest?.familia?.convidados) {
      members = guest.familia.convidados.map((c: any) => c.nome).join(",");
    } else {
      members = guest?.observacoes?.replace(/^Membros:\s*/i, "") ?? "";
    }
  }

  const note = guest?.observacoes && !guest.observacoes.startsWith("Membros:") ? guest.observacoes : null;

  return (
    <main className="min-h-screen bg-[#F5E6C8] px-4 py-12 text-[#8B5A2B] sm:px-6 selection:bg-[#D4A55A] selection:text-[#F5E6C8] relative overflow-hidden">
      {/* Elementos da Savana Flutuantes (Folhas, Animais e Pegadas) */}
      <div className="fixed top-5 left-2 sm:left-10 text-5xl sm:text-7xl opacity-30 rotate-45 pointer-events-none">🌿</div>
      <div className="fixed bottom-10 right-2 sm:right-10 text-6xl sm:text-8xl opacity-30 -rotate-12 pointer-events-none">🦒</div>
      <div className="fixed top-40 right-4 sm:right-20 text-6xl sm:text-8xl opacity-30 rotate-12 pointer-events-none">🦁</div>
      <div className="fixed bottom-40 left-4 sm:left-10 text-5xl sm:text-7xl opacity-30 -rotate-12 pointer-events-none">🦓</div>
      <div className="fixed top-24 left-1/4 text-4xl opacity-10 rotate-45 pointer-events-none">🐾</div>
      <div className="fixed top-1/3 right-1/4 text-4xl opacity-10 -rotate-45 pointer-events-none">🐾</div>
      <div className="fixed bottom-1/4 right-1/3 text-4xl opacity-10 rotate-12 pointer-events-none">🐾</div>
      <div className="fixed bottom-20 left-1/3 text-4xl opacity-10 -rotate-12 pointer-events-none">🐾</div>

      <div className="relative mx-auto max-w-2xl space-y-8 z-10">
        <section className="relative mt-12 rounded-[24px] border border-white/50 bg-white/40 backdrop-blur-xl p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(139,90,43,0.15)] flex flex-col items-center text-center">

          <div className="relative z-10 w-full space-y-6">
            <div className="flex flex-col items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/60 px-4 py-1.5 text-xs font-black uppercase tracking-[0.28em] text-[#2E6B4E] border border-white shadow-sm">
                  <span className="text-base">🧭</span> Passaporte Safari
                </span>
                <h1 className="text-3xl font-extrabold text-[#8B5A2B] sm:text-4xl drop-shadow-sm">
                    {isFamilyInvite ? `Bem-vindos, ${familyName || 'Família'}` : `Olá, ${guest.nome}`}
                </h1>
            </div>
            
            <p className="text-lg font-medium leading-relaxed text-[#8B5A2B]/90 bg-white/50 backdrop-blur-sm p-5 rounded-[20px] border border-white/60 shadow-sm">
              Sua credencial para a expedição do Mateus está pronta! Prepare-se para a grande aventura do dia 28 de junho às 17h.
            </p>
            
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[20px] border border-white/60 bg-white/60 backdrop-blur-sm p-5 shadow-sm transition hover:shadow-md hover:scale-[1.02]">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D4A55A]">🎫 Cód. Passaporte</p>
                  <p className="mt-2 text-2xl font-black text-[#2E6B4E]">{invite.codigo}</p>
                </div>
                <div className="rounded-[20px] border border-white/60 bg-white/60 backdrop-blur-sm p-5 shadow-sm transition hover:shadow-md hover:scale-[1.02]">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#D4A55A]">⏰ Hora do Safari</p>
                  <p className="mt-2 text-2xl font-black text-[#2E6B4E]">28/06 • 17h</p>
                </div>
            </div>
          </div>
        </section>

        <InviteResponseForm
          inviteCode={invite.codigo}
          guestName={guest.nome || "Convidado"}
          familyName={familyName}
          members={members}
          note={note}
        />
      </div>
    </main>
  );
}
