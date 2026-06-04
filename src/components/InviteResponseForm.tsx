"use client";

import { FormEvent, useEffect, useState } from "react";

type InviteResponseFormProps = {
  inviteCode: string;
  guestName: string;
  familyName: string;
  members: string;
  note: string | null;
};

const MickeySilhouette = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`fill-current ${className}`}>
    <circle cx="27" cy="27" r="22" />
    <circle cx="73" cy="27" r="22" />
    <circle cx="50" cy="65" r="35" />
  </svg>
);

export default function InviteResponseForm({
  inviteCode,
  guestName,
  familyName,
  members,
  note,
}: InviteResponseFormProps) {
  const [status, setStatus] = useState("CONFIRMADO");
  const [confirmedMembers, setConfirmedMembers] = useState<string[]>([]);
  const [observations, setObservations] = useState("");
  const [saving, setSaving] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [rsvpTimeLeft, setRsvpTimeLeft] = useState("");

  useEffect(() => {
    // Prazo configurado para confirmar presença (15/06/2026)
    const target = new Date("2026-06-15T23:59:59-03:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        setRsvpTimeLeft("Encerrado");
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setRsvpTimeLeft(`${d}d ${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const memberNames = members && typeof members === 'string' ? members
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean) : [];

  // Verifica se a pessoa já confirmou antes e pula direto para a tela de resposta salva
  useEffect(() => {
    try {
      const savedInvites = localStorage.getItem("safari_invites");
      if (savedInvites) {
        const invitesList = JSON.parse(savedInvites);
        const invite = invitesList.find((i: any) => String(i.code).toUpperCase() === String(inviteCode).toUpperCase());
        if (invite && (invite.status === "Confirmado" || invite.status === "Recusado")) {
          setStatus(invite.status === "Confirmado" ? "CONFIRMADO" : "RECUSADO");
          setSubmitted(true);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [inviteCode]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);
    setError(null);

    try {
        const savedInvites = localStorage.getItem("safari_invites");
        if (savedInvites) {
          let invites = JSON.parse(savedInvites);
          invites = invites.map((i: any) => {
            if (String(i.code).toUpperCase() === String(inviteCode).toUpperCase()) {
              return { ...i, status: status === "CONFIRMADO" ? "Confirmado" : "Recusado" };
            }
            return i;
          });
          localStorage.setItem("safari_invites", JSON.stringify(invites));
        }

        const savedGuests = localStorage.getItem("safari_guests");
        if (savedGuests) {
          let guests = JSON.parse(savedGuests);
          guests = guests.map((g: any) => {
            const isFamilyInvite = guestName ? String(guestName).toLowerCase().startsWith("família") : false;
            const isExactName = g.name === guestName;
            const isFamilyMatch = isFamilyInvite && familyName && g.family === familyName;
            
            if (isExactName || isFamilyMatch) {
              return { ...g, status: status === "CONFIRMADO" ? "Confirmado" : "Recusado", companions: isExactName ? confirmedMembers.length : g.companions };
            }
            return g;
          });
          localStorage.setItem("safari_guests", JSON.stringify(guests));
        }

        const savedFamilies = localStorage.getItem("safari_families");
        if (savedFamilies) {
          let families = JSON.parse(savedFamilies);
          families = families.map((f: any) => {
            const cleanGuestName = guestName ? String(guestName).replace(/^Família\s+/i, "").trim() : "";
            if (f.name === familyName || (cleanGuestName && f.name === cleanGuestName)) {
              return { ...f, inviteStatus: status === "CONFIRMADO" ? "Confirmado" : "Recusado" };
            }
            return f;
          });
          localStorage.setItem("safari_families", JSON.stringify(families));
        }

        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("local-storage-update"));
        }
      } catch (e) {
        console.error("Erro ao salvar no localStorage", e);
      }

    setSubmitted(true);
    setSaving(false);
  };

  if (submitted) {
    const isConfirmed = status === "CONFIRMADO";
    return (
      <>
      <div className="relative mt-8 rounded-[24px] border border-white/50 bg-white/40 backdrop-blur-xl p-8 text-center shadow-[0_8px_32px_0_rgba(139,90,43,0.15)]">
        <div className="relative z-10">
          <div className={`mx-auto flex h-20 w-20 items-center justify-center rounded-[20px] ${isConfirmed ? 'bg-[#2E6B4E]/10 text-[#2E6B4E]' : 'bg-[#8B5A2B]/10 text-[#8B5A2B]'} text-4xl mb-4 shadow-sm border border-white`}>
            {isConfirmed ? '✅' : '❌'}
          </div>
          <h2 className="text-2xl font-extrabold text-[#8B5A2B]">
            {isConfirmed ? 'A presença está garantida!' : 'Que pena!'}
          </h2>
          <p className="mt-4 text-lg font-medium text-[#8B5A2B]/90 bg-white/50 p-4 rounded-[16px] border border-white/60">
            {isConfirmed 
              ? 'Sua vaga no Safari do Mateus foi confirmada. Prepare-se para muita diversão!' 
              : 'Sentiremos sua falta no Safari do Mateus, mas agradecemos por nos avisar!'}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a href="https://www.google.com/maps/search/?api=1&query=15°48'24.6%22S+48°08'23.1%22W" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center rounded-full bg-[#2E6B4E] px-6 py-3 text-xs font-black uppercase tracking-widest text-[#F5E6C8] shadow-lg shadow-[#2E6B4E]/30 transition hover:scale-105 hover:bg-[#1c4532]">
              📍 Localização
            </a>
            <button type="button" onClick={() => setShowGiftModal(true)} className="inline-flex justify-center rounded-full bg-[#D4A55A] px-6 py-3 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-[#D4A55A]/30 transition hover:scale-105 hover:bg-[#b58742]">
              🎁 Presentes
            </button>
            <button onClick={() => setSubmitted(false)} className="inline-flex justify-center rounded-full bg-white/60 border border-white px-6 py-3 text-xs font-black uppercase tracking-widest text-[#8B5A2B] shadow-sm transition hover:scale-105 hover:bg-white">
              Alterar Resposta
            </button>
          </div>
        </div>
      </div>
      {showGiftModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-[24px] border border-white/50 bg-[#F5E6C8] p-4 sm:p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
            <button 
              onClick={() => setShowGiftModal(false)} 
              className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A55A] text-white font-bold hover:bg-[#b58742] transition shadow-lg border-2 border-white"
            >
              X
            </button>
            <div className="text-center space-y-2 mb-4 shrink-0">
              <h3 className="text-2xl font-black text-[#8B5A2B]">🎁 Sugestões de Presentes</h3>
            </div>
            <div className="flex-1 w-full rounded-[16px] overflow-hidden border-4 border-white bg-white shadow-inner">
            <iframe loading="lazy" src="https://www.canva.com/design/DAHHrKoAZ-0/jrto3mym7NX5A3Io6nzfeQ/view?embed" className="w-full h-full border-none" allowFullScreen={true} allow="fullscreen" title="Sugestões de Presentes"></iframe>
            </div>
            <div className="mt-4 shrink-0">
              <button onClick={() => setShowGiftModal(false)} className="w-full rounded-[16px] bg-[#2E6B4E] py-4 font-black uppercase tracking-widest text-[#F5E6C8] shadow-lg hover:bg-[#1c4532] transition">Entendido!</button>
            </div>
          </div>
        </div>
      )}
      </>
    );
  }

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-6 rounded-[2.5rem] border-4 border-dashed border-[#FF9800] bg-[#FAFAFA] p-8 shadow-xl relative"
    >
      {/* Contador de Tempo Restante */}
      <div className="absolute -top-5 -right-2 sm:-right-4 bg-white/90 backdrop-blur-sm border-2 border-[#D4A55A] px-3 py-2 rounded-[16px] shadow-md transform rotate-3 z-20">
        <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#D4A55A] text-center">Prazo de Confirmação</p>
        <p className="text-xs sm:text-sm font-black text-[#8B5A2B] text-center tabular-nums mt-0.5">{rsvpTimeLeft || "Calculando..."}</p>
      </div>

      <div className="absolute -top-4 -left-4 text-4xl opacity-50">🌿</div>
      
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF9800]/20 text-[#FF9800]">
          <MickeySilhouette className="w-8 h-8" />
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[#FF9800]">Confirmar Presença</p>
          <h2 className="mt-1 text-2xl font-extrabold text-[#5D4037]">{guestName}</h2>
          {familyName ? <p className="mt-1 text-sm font-bold text-[#5D4037]">Tribo: {familyName}</p> : null}
        </div>
      </div>

      {members ? (
        <div className="rounded-2xl bg-[#FFF8E1] border-2 border-[#FF9800] p-4 text-[#5D4037]">
          <p className="text-xs font-black uppercase text-[#FF9800]">Membros da Tribo</p>
          <p className="mt-1 text-sm font-bold">{members}</p>
        </div>
      ) : null}

      {note ? (
        <div className="rounded-2xl bg-[#FFF8E1] border-2 border-[#FF9800] p-4 text-[#5D4037]">
          <p className="text-xs font-black uppercase text-[#FF9800]">Mensagem do Mateus</p>
          <p className="mt-1 text-sm font-bold">{note}</p>
        </div>
      ) : null}

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8B5A2B] ml-1">Vai participar?</span>
          <div className="flex gap-2">
            <button type="button" onClick={() => setStatus("CONFIRMADO")} className={`flex-1 rounded-[16px] py-4 px-2 text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${status === "CONFIRMADO" ? "bg-[#2E6B4E] border-[#2E6B4E] text-[#F5E6C8] shadow-md scale-[1.02]" : "bg-white/50 border-white text-[#8B5A2B] hover:bg-white"}`}>
              ✅ Sim, eu vou!
            </button>
            <button type="button" onClick={() => setStatus("RECUSADO")} className={`flex-1 rounded-[16px] py-4 px-2 text-xs font-black uppercase tracking-widest transition-all duration-300 border-2 ${status === "RECUSADO" ? "bg-[#8B5A2B] border-[#8B5A2B] text-[#F5E6C8] shadow-md scale-[1.02]" : "bg-white/50 border-white text-[#8B5A2B] hover:bg-white"}`}>
              ❌ Não poderei
            </button>
          </div>
        </div>

        {memberNames.length > 0 && (
          <div className="rounded-[16px] border border-white/60 bg-white/50 backdrop-blur-sm p-5 text-[#8B5A2B] shadow-sm">
            <p className="mb-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#8B5A2B]">Confirmar acompanhantes</p>
            <div className="space-y-3">
              {memberNames.map((member) => (
                <label key={member} className="flex items-center gap-3 rounded-[12px] border border-white bg-white/80 px-4 py-3 text-sm font-bold text-[#8B5A2B] hover:bg-white transition-all cursor-pointer shadow-sm">
                  <input
                    type="checkbox"
                    checked={confirmedMembers.includes(member)}
                    onChange={() => {
                      setConfirmedMembers((current) =>
                        current.includes(member)
                          ? current.filter((name) => name !== member)
                          : [...current, member]
                      );
                    }}
                    className="h-5 w-5 rounded-md border-[#D4A55A] text-[#2E6B4E] focus:ring-[#2E6B4E]/50"
                  />
                  <span>{member}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>

      <label className="block flex flex-col gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#8B5A2B] ml-1">
        Observações / Restrições Alimentares
        <textarea
          value={observations}
          onChange={(event) => setObservations(event.target.value)}
          className="mt-1 min-h-[100px] w-full resize-none rounded-[16px] border border-white/60 bg-white/60 px-4 py-3 text-sm font-medium text-[#8B5A2B] outline-none transition-all focus:border-[#2E6B4E] focus:bg-white focus:ring-4 focus:ring-[#2E6B4E]/10 placeholder:text-[#8B5A2B]/40 shadow-sm"
          placeholder="Precisa de algo especial ou restrição alimentar? Nos conte aqui!"
        />
      </label>

      {error ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600">{error}</p>
      ) : null}

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a href="https://www.google.com/maps/search/?api=1&query=15°48'24.6%22S+48°08'23.1%22W" target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-[16px] bg-white/60 border border-white px-4 py-4 text-xs font-black uppercase tracking-widest text-[#2E6B4E] shadow-sm transition hover:scale-105 hover:bg-white">
          📍 Localização
        </a>
        <button type="button" onClick={() => setShowGiftModal(true)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-[16px] bg-[#D4A55A] px-4 py-4 text-xs font-black uppercase tracking-widest text-white shadow-md shadow-[#D4A55A]/20 transition hover:scale-105 hover:bg-[#b58742]">
          🎁 Presentes
        </button>
      </div>
      <div className="mt-4 pt-4 border-t border-white/40">
        <button type="submit" disabled={saving} className="inline-flex w-full justify-center items-center rounded-[24px] bg-[#2E6B4E] px-6 py-5 text-base font-black uppercase tracking-[0.2em] text-[#F5E6C8] shadow-xl shadow-[#2E6B4E]/30 transition-all duration-300 hover:bg-[#1c4532] hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60">
          {saving ? "Processando..." : "Confirmar Embarque"}
        </button>
      </div>
    </form>
    {showGiftModal && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
        <div className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-[24px] border border-white/50 bg-[#F5E6C8] p-4 sm:p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
          <button 
            onClick={() => setShowGiftModal(false)} 
            className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#D4A55A] text-white font-bold hover:bg-[#b58742] transition shadow-lg border-2 border-white"
          >
            X
          </button>
          <div className="text-center space-y-2 mb-4 shrink-0">
            <h3 className="text-2xl font-black text-[#8B5A2B]">🎁 Sugestões de Presentes</h3>
          </div>
          <div className="flex-1 w-full rounded-[16px] overflow-hidden border-4 border-white bg-white shadow-inner">
            <iframe loading="lazy" src="https://www.canva.com/design/DAHHrKoAZ-0/jrto3mym7NX5A3Io6nzfeQ/view?embed" className="w-full h-full border-none" allowFullScreen={true} allow="fullscreen" title="Sugestões de Presentes"></iframe>
          </div>
          <div className="mt-4 shrink-0">
            <button type="button" onClick={() => setShowGiftModal(false)} className="w-full rounded-[16px] bg-[#2E6B4E] py-4 font-black uppercase tracking-widest text-[#F5E6C8] shadow-lg hover:bg-[#1c4532] transition">Entendido!</button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
