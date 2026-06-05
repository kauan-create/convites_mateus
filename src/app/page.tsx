"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";

type Guest = {
  id: string;
  name: string;
  family: string;
  phone: string;
  companions: number;
  status: string;
};

type Family = {
  id: string;
  name: string;
  members: string;
  inviteStatus: string;
};

type Invite = {
  id: string;
  type: "individual" | "family";
  title: string;
  code: string;
  link: string;
  createdAt: string;
  status: string;
};

const statusMapping: Record<string, string> = {
  PENDENTE: "Pendente",
  CONFIRMADO: "Confirmado",
  RECUSADO: "Recusado",
  COMPROMETIDO: "Comprometido",
  NAO_VAI: "Não vai",
};

const generateCode = () => {
  return `INV-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
};

const buildLink = (baseOrigin: string, code: string, name: string = "", family: string = "", members: string = "", type: string = "individual") => {
  const qs = new URLSearchParams({ n: name, f: family, m: members, t: type }).toString();
  const origin = baseOrigin || (typeof window !== "undefined" ? window.location.origin : "");
  return `${origin}/rsvp/${code}?${qs}`;
};

const mapGuest = (guest: any): Guest => ({
  id: guest.id || Math.random().toString(36).substring(2, 9),
  name: guest.nome || guest.name || "Sem nome",
  family: guest.familia?.nome_familia ?? guest.family ?? "Sem família (pode ser adicionado futuramente)",
  phone: guest.telefone ?? guest.phone ?? "-",
  companions: guest.acompanhantes ?? guest.companions ?? 0,
  status: statusMapping[guest.status_confirmacao] ?? guest.status ?? "Pendente",
});

const mapFamily = (family: any): Family => ({
  id: family.id || Math.random().toString(36).substring(2, 9),
  name: family.nome_familia || family.name || "Família",
  members: Array.isArray(family.convidados)
    ? family.convidados.map((member: any) => member.nome || member.name).join(", ")
    : family.members || "Não informado",
  inviteStatus:
    family.convidados?.[0]?.status_confirmacao
      ? statusMapping[family.convidados[0].status_confirmacao]
      : family.inviteStatus || "Pendente",
});

const mapInvite = (invite: any): Invite => {
  const guestName = invite.convidado?.nome ?? invite.convidado?.name ?? "Convidado";
  const isFamilyInvite = guestName.startsWith("Família");

  return {
    id: invite.id || Math.random().toString(36).substring(2, 9),
    type: invite.type || (isFamilyInvite ? "family" : "individual"),
    title: invite.title || (isFamilyInvite ? `Convite ${guestName}` : `Convite de ${guestName}`),
    code: invite.codigo || invite.code || "",
    link: invite.link || "",
    createdAt: invite.createdAt ? new Date(invite.createdAt).toLocaleDateString("pt-BR") : new Date().toLocaleDateString("pt-BR"),
    status: statusMapping[invite.convidado?.status_confirmacao] ?? invite.status ?? "Pendente",
  };
};

const MickeySilhouette = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`fill-current ${className}`}>
    <circle cx="27" cy="27" r="22" />
    <circle cx="73" cy="27" r="22" />
    <circle cx="50" cy="65" r="35" />
  </svg>
);

export default function HomePage() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [families, setFamilies] = useState<Family[]>([]);
  const [invites, setInvites] = useState<Invite[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [eventTimeLeft, setEventTimeLeft] = useState("");

  const loadDashboard = async () => {
    try {
      const res = await fetch(`/api/dashboard?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        setGuests(data.guests);
        setFamilies(data.families);
        setInvites(data.invites);
      }
    } catch (e) { console.error(e); }
    setLoading(false);
  };

  useEffect(() => {
    // Conta regressiva para o dia do Safari (28/06/2026 às 17h)
    const target = new Date("2026-06-28T17:00:00-03:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      if (diff <= 0) {
        setEventTimeLeft("É HOJE!");
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      setEventTimeLeft(`${d}d ${String(h).padStart(2, '0')}h ${String(m).padStart(2, '0')}m`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const [appOrigin, setAppOrigin] = useState("");

  const [individualName, setIndividualName] = useState("");
  const [individualPhone, setIndividualPhone] = useState("");
  const [individualMessage, setIndividualMessage] = useState("");
  const [individualFamily, setIndividualFamily] = useState("");

  const [familyName, setFamilyName] = useState("");
  const [familyMembers, setFamilyMembers] = useState<string[]>([""]);
  const [familyMessage, setFamilyMessage] = useState("");

  const addFamilyMember = () => setFamilyMembers([...familyMembers, ""]);

  const removeFamilyMember = (index: number) => {
    const newList = [...familyMembers];
    newList.splice(index, 1);
    setFamilyMembers(newList);
  };

  const handleFamilyMemberChange = (index: number, value: string) => {
    const newList = [...familyMembers];
    newList[index] = value;
    setFamilyMembers(newList);
  };

  const [editingGuest, setEditingGuest] = useState<string | null>(null);
  const [editGuestData, setEditGuestData] = useState<Partial<Guest>>({});

  const [editingFamily, setEditingFamily] = useState<string | null>(null);
  const [editFamilyData, setEditFamilyData] = useState<Partial<Family>>({});

  const [editingInvite, setEditingInvite] = useState<string | null>(null);
  const [editInviteData, setEditInviteData] = useState<Partial<Invite>>({});

  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  // Função mágica que converte até os links antigos de "localhost" para o seu IP Real
  const getShareableLink = (link: string) => {
    if (!appOrigin || appOrigin.includes("localhost")) return link;
    return link.replace(/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?/, appOrigin);
  };

  const handleCopy = (link: string) => {
    const finalLink = getShareableLink(link);
    navigator.clipboard.writeText(finalLink);
    setCopiedLink(link);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const totalGuests = useMemo(() => guests.length, [guests]);
  const totalFamilies = useMemo(() => families.length, [families]);
  const totalPending = useMemo(
    () => guests.filter((guest) => guest.status === "Pendente").length,
    [guests]
  );

  useEffect(() => {
    // Detecta o IP local para substituir o localhost automaticamente
    if (typeof window !== "undefined") {
      setAppOrigin(window.location.origin);
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        fetch("/api/network-ip", { cache: "no-store" })
          .then((res) => res.json())
          .then((data) => {
            if (data.ip && data.ip !== "localhost") {
              const portStr = window.location.port ? `:${window.location.port}` : "";
              setAppOrigin(`http://${data.ip}${portStr}`);
            }
          })
          .catch(() => {});
      }
    }

    loadDashboard();
  }, []);

  const startEditGuest = (guest: Guest) => {
    setEditingGuest(guest.id);
    setEditGuestData(guest);
  };
  const saveGuest = async (id: string) => {
    setSaving(true);
    const res = await fetch('/api/guest', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, ...editGuestData }) });
    if (!res.ok) alert("Erro ao salvar convidado");
    setEditingGuest(null);
    await loadDashboard();
    setSaving(false);
  };
  const deleteGuest = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este convidado?")) return;
    setSaving(true);
    try {
      const res = await fetch('/api/guest', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
      if (!res.ok) throw new Error();
      await loadDashboard();
    } catch (e) { alert("Erro ao excluir"); }
    setSaving(false);
  };

  const startEditFamily = (family: Family) => {
    setEditingFamily(family.id);
    setEditFamilyData(family);
  };
  const saveFamily = async (id: string) => {
    setSaving(true);
    const res = await fetch('/api/family', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, ...editFamilyData }) });
    if (!res.ok) alert("Erro ao salvar família");
    setEditingFamily(null);
    await loadDashboard();
    setSaving(false);
  };
  const deleteFamily = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir esta família inteira?")) return;
    setSaving(true);
    try {
      const res = await fetch('/api/family', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
      if (!res.ok) throw new Error();
      await loadDashboard();
    } catch (e) { alert("Erro ao excluir"); }
    setSaving(false);
  };

  const startEditInvite = (invite: Invite) => {
    setEditingInvite(invite.id);
    setEditInviteData(invite);
  };
  const saveInvite = async (id: string) => {
    setSaving(true);
    const res = await fetch('/api/invite', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, ...editInviteData }) });
    if (!res.ok) alert("Erro ao salvar convite");
    setEditingInvite(null);
    await loadDashboard();
    setSaving(false);
  };
  const deleteInvite = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este link de convite?")) return;
    setSaving(true);
    try {
      const res = await fetch('/api/invite', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
      if (!res.ok) throw new Error();
      await loadDashboard();
    } catch (e) { alert("Erro ao excluir"); }
    setSaving(false);
  };

  const createIndividualInvite = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);

    let code = generateCode();
    let link = buildLink(appOrigin, code, individualName, "", "", "individual");

      await fetch('/api/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'individual',
          name: individualName,
          family: individualFamily,
          phone: individualPhone,
          message: individualMessage,
          code,
          title: `Convite de ${individualName}`,
          link
        })
      });

      setIndividualName("");
      setIndividualPhone("");
      setIndividualMessage("");
      setIndividualFamily("");

      await loadDashboard();
      setSaving(false);
  };

  const createFamilyInvite = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving(true);

    const code = generateCode();
    const memberNames = familyMembers
      .map((member) => member.trim())
      .filter(Boolean);
    const link = buildLink(appOrigin, code, familyName, familyName, memberNames.join(", "), "family");

      await fetch('/api/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'family',
          familyName: familyName,
          members: memberNames,
          message: familyMessage,
          code,
          title: `Convite ${familyName}`,
          link
        })
      });

      setFamilyName("");
      setFamilyMembers([""]);
      setFamilyMessage("");

      await loadDashboard();
      setSaving(false);
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      guests.map((g) => ({
        Nome: g.name,
        Família: g.family,
        Telefone: g.phone,
        Acompanhantes: g.companions,
        Status: g.status,
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Convidados");
    XLSX.writeFile(wb, "Monitoramento_Convidados.xlsx");
  };

  return (
    <main className="min-h-screen bg-[#F1F8E9] p-3 sm:p-6 font-sans text-[#5D4037] selection:bg-[#FF9800] selection:text-[#FFF8E1] overflow-hidden">
      <div className="mx-auto max-w-6xl space-y-6">
        
        {/* Cabeçalho Temático */}
        <header className="relative mt-8 rounded-[2.5rem] border-[8px] border-[#8D6E63] bg-white px-5 py-8 shadow-2xl sm:px-10 sm:py-12">
          
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(255,152,0,0.15),transparent_45%)]" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[radial-gradient(circle_at_bottom,_rgba(76,175,80,0.15),transparent_55%)]" />
          <div className="absolute -left-16 -top-16 text-[#4CAF50]/20 w-72 h-72 rotate-12">
            <MickeySilhouette className="w-full h-full" />
          </div>
          <div className="absolute -right-20 -bottom-20 text-[#FF9800]/15 w-96 h-96 -rotate-12">
            <MickeySilhouette className="w-full h-full" />
          </div>
          
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.75fr_1fr]">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#FF9800] bg-[#FFF8E1] px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#FF9800]">
                  Mateus 1 ano
                </span>
                <span className="rounded-full border border-[#4CAF50] bg-[#F1F8E9] px-4 py-2 text-xs font-black uppercase tracking-[0.35em] text-[#2E7D32]">
                  Mickey Safari
                </span>
              </div>
              <h1 className="text-5xl font-black leading-tight text-[#5D4037] sm:text-6xl lg:text-7xl">
                Aventura do Mateus!
              </h1>
              
              <p className="max-w-2xl text-lg font-medium leading-6 text-[#5D4037]/90">
                Venha celebrar no nosso Mickey Safari 🐘🦒 Um convite digital inspirado no tema com elementos da natureza e muita diversão!
              </p>
            <div className="grid gap-2 grid-cols-2 sm:grid-cols-4">
              <div className="rounded-[1.5rem] border-2 border-[#4CAF50] bg-[#F1F8E9] p-2 sm:p-3 text-center shadow-sm flex flex-col justify-center">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2E7D32]">Faltam</p>
                <p className="mt-1 text-sm sm:text-base font-black text-[#5D4037] tabular-nums">{eventTimeLeft || "..."}</p>
                </div>
              <div className="rounded-[1.5rem] border-2 border-[#FF9800] bg-[#FFF8E1] p-2 sm:p-3 text-center shadow-sm flex flex-col justify-center">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF9800]">Data</p>
                <p className="mt-1 text-sm sm:text-base font-black text-[#5D4037]">28 jun</p>
                </div>
              <div className="rounded-[1.5rem] border-2 border-[#FF9800] bg-[#FFF8E1] p-2 sm:p-3 text-center shadow-sm flex flex-col justify-center">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF9800]">Dia</p>
                <p className="mt-1 text-sm sm:text-base font-black text-[#5D4037]">Domingo</p>
              </div>
              <div className="rounded-[1.5rem] border-2 border-[#FF9800] bg-[#FFF8E1] p-2 sm:p-3 text-center shadow-sm flex flex-col justify-center">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FF9800]">Hora</p>
                <p className="mt-1 text-sm sm:text-base font-black text-[#5D4037]">17h</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <a href="https://www.google.com/maps/search/?api=1&query=15°48'24.6%22S+48°08'23.1%22W" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#4CAF50] bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#2E7D32] shadow-sm transition hover:bg-[#E8F5E9]">
                  📍 Acessar localização
                </a>
                <button onClick={() => setShowGiftModal(true)} className="inline-flex items-center gap-2 rounded-full border border-[#4CAF50] bg-white px-3 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#2E7D32] shadow-sm transition hover:bg-[#E8F5E9]">
                  🎁 Sugestões de presentes
                </button>
              </div>
            </div>
            
            <div className="hidden rounded-[2rem] border-[5px] border-dashed border-[#FF9800] bg-[#FFF8E1] p-6 shadow-xl lg:block relative">
              <div className="flex h-full flex-col justify-between gap-4 text-center">
                <div className="rounded-[2rem] border-2 border-[#FFC107] bg-white p-4">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[#FF9800]">Aniversariante</p>
                  <p className="mt-2 text-2xl font-black text-[#5D4037]">Mateus</p>
                </div>
                <div className="rounded-[2rem] border-2 border-[#FFC107] bg-white p-4">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[#FF9800]">Data</p>
                  <p className="mt-2 text-2xl font-black text-[#5D4037]">28 de junho</p>
                </div>
                <div className="rounded-[2rem] border-2 border-[#FFC107] bg-white p-4">
                  <p className="text-xs font-black uppercase tracking-[0.35em] text-[#FF9800]">Hora</p>
                  <p className="mt-2 text-2xl font-black text-[#5D4037]">17h</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Linha de Estatísticas */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-3 rounded-[2rem] border-2 border-[#e8d4bc] bg-white p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5a7a52]/10 text-[#5a7a52]">
              <MickeySilhouette className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-[#8b6f47] uppercase">Passaportes (Links)</p>
              <p className="text-2xl font-black text-[#5a7a52]">{invites.length}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[2rem] border-2 border-[#e8d4bc] bg-white p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a574]/20 text-2xl">
              🦁
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-[#d4a574]">Aventureiros</p>
              <p className="text-2xl font-black text-[#3d2817]">{totalGuests}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[2rem] border-2 border-[#e8d4bc] bg-white p-4 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a58555]/10 text-2xl">
              🧭
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest text-[#8b6f47] uppercase">Aguardando (RSVP)</p>
              <p className="text-2xl font-black text-[#a58555]">{totalPending}</p>
            </div>
          </div>
        </div>

        {/* Corpo Principal */}
        <div className="grid gap-6 lg:grid-cols-3 xl:gap-8">
          
          {/* Coluna Esquerda: Listagens */}
          <div className="space-y-6 lg:col-span-2">
            
            {/* Histórico de Convites */}
            <div className="rounded-[2rem] border-2 border-[#e8d4bc] bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#d4a574]">Malas Prontas</p>
                  <h2 className="mt-1 text-xl font-extrabold text-[#3d2817]">Histórico de Links</h2>
                  {appOrigin && !appOrigin.includes("localhost") && <p className="mt-1 text-xs font-bold text-[#5a7a52] flex items-center gap-1"><span>🌐</span> IP da Rede Ativo: {appOrigin}</p>}
                </div>
                <span className="rounded-full bg-[#e8f0ea] px-3 py-1 text-xs font-bold text-[#5a7a52] border border-[#5a7a52]/20">
                  {loading ? "Sincronizando a selva..." : "Tudo atualizado"}
                </span>
              </div>

              <div className="space-y-3">
                {invites.map((invite) => (
                  <div key={invite.id} className="rounded-[1.5rem] border-2 border-[#e8d4bc] bg-[#fef9f3] p-4 transition-all hover:shadow-md hover:border-[#d4a574]/50">
                    {editingInvite === invite.id ? (
                      <div className="space-y-3">
                        <input className="w-full rounded-xl border-2 border-[#e8d4bc] bg-white px-3 py-2 text-sm font-medium outline-none focus:border-[#5a7a52]" value={editInviteData.title || ""} onChange={e => setEditInviteData({...editInviteData, title: e.target.value})} placeholder="Título do Convite" />
                        <input className="w-full rounded-xl border-2 border-[#e8d4bc] bg-white px-3 py-2 text-sm font-medium outline-none focus:border-[#5a7a52]" value={editInviteData.code || ""} onChange={e => setEditInviteData({...editInviteData, code: e.target.value})} placeholder="Código Safari" />
                        <select className="w-full rounded-xl border-2 border-[#e8d4bc] bg-white px-3 py-2 text-sm font-medium outline-none focus:border-[#5a7a52]" value={editInviteData.status || "Pendente"} onChange={e => setEditInviteData({...editInviteData, status: e.target.value})}>
                          <option value="Pendente">Pendente</option>
                          <option value="Confirmado">Confirmado</option>
                          <option value="Recusado">Recusado</option>
                        </select>
                        <div className="flex gap-2 pt-2">
                          <button onClick={() => saveInvite(invite.id)} className="rounded-full bg-[#5a7a52] px-5 py-2 text-xs font-bold text-white transition hover:bg-[#3d5632]">Salvar Rota</button>
                          <button onClick={() => setEditingInvite(null)} className="rounded-full bg-[#e8d4bc] px-5 py-2 text-xs font-bold text-[#3d2817] transition hover:bg-[#dcc4a8]">Cancelar</button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                          <div>
                            <p className="text-lg font-extrabold text-[#3d2817]">{invite.title}</p>
                            <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[#d4a574]">🎫 CÓDIGO: {invite.code}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <button type="button" onClick={() => startEditInvite(invite)} className="rounded-full bg-[#e8d4bc]/50 px-3 py-1 text-xs font-bold text-[#3d2817] transition hover:bg-[#5a7a52] hover:text-white">Editar</button>
                            <button type="button" onClick={() => deleteInvite(invite.id)} className="rounded-full bg-[#a58555]/10 px-3 py-1 text-xs font-bold text-[#a58555] transition hover:bg-[#a58555] hover:text-white">Excluir</button>
                          </div>
                        </div>
                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#e8d4bc] border-dashed pt-4">
                          <div className="flex gap-4 text-sm font-bold text-[#7A5A46]">
                            <span className="flex items-center gap-1"><span className="text-base">🎒</span> {invite.type === 'family' ? 'Familiar' : 'Individual'}</span>
                            <span className="flex items-center gap-1"><span className="text-base">🧭</span> {invite.createdAt}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${invite.status === 'Confirmado' ? 'border-[#5a7a52]/30 bg-[#5a7a52]/10 text-[#5a7a52]' : invite.status === 'Recusado' ? 'border-[#a58555]/30 bg-[#a58555]/10 text-[#a58555]' : 'border-[#d4a574]/30 bg-[#d4a574]/20 text-[#8b6f47]'}`}>
                              {invite.status}
                            </span>
                            <button type="button" onClick={() => handleCopy(invite.link)} className="inline-flex items-center gap-1 rounded-full bg-[#d4a574] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#d4a574]/30 transition hover:bg-[#a58555]" title={getShareableLink(invite.link)}>
                              {copiedLink === invite.link ? "Copiado!" : "Copiar"}
                            </button>
                            <a href={getShareableLink(invite.link)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-[#3d2817] px-4 py-2 text-xs font-bold text-white shadow-md shadow-[#3d2817]/30 transition hover:bg-[#2a1c11]">
                              Acessar
                            </a>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Convidados Individuais e Famílias (Grid) */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2.5rem] border-2 border-[#e8d4bc] bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-extrabold text-[#3d2817]">🦓 Tripulantes (Solo)</h3>
                  <button onClick={exportToExcel} className="rounded-full bg-[#d4a574]/20 p-2 text-[#a58555] hover:bg-[#d4a574] hover:text-white transition" title="Exportar Planilha">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  </button>
                </div>
                
                <div className="space-y-4">
                  {guests.map((guest) => (
                    <div key={guest.id} className="rounded-2xl border-2 border-[#e8d4bc] bg-[#fef9f3] p-4 transition hover:border-[#5a7a52]/40">
                      {editingGuest === guest.id ? (
                        <div className="space-y-2">
                          <input className="w-full rounded-xl border-2 border-[#e8d4bc] bg-white px-3 py-1.5 text-sm font-bold outline-none focus:border-[#5a7a52]" value={editGuestData.name || ""} onChange={e => setEditGuestData({...editGuestData, name: e.target.value})} placeholder="Nome" />
                          <select className="w-full rounded-xl border-2 border-[#e8d4bc] bg-white px-3 py-1.5 text-sm font-bold outline-none focus:border-[#5a7a52]" value={editGuestData.family || ""} onChange={e => setEditGuestData({...editGuestData, family: e.target.value})}>
                            <option value="Sem família (pode ser adicionado futuramente)">Sem tribo / família</option>
                            {families.map(f => <option key={f.id} value={f.name}>{f.name}</option>)}
                          </select>
                          <select className="w-full rounded-xl border-2 border-[#e8d4bc] bg-white px-3 py-1.5 text-sm font-bold outline-none focus:border-[#5a7a52]" value={editGuestData.status || "Pendente"} onChange={e => setEditGuestData({...editGuestData, status: e.target.value})}>
                            <option value="Pendente">Pendente</option>
                            <option value="Confirmado">Confirmado</option>
                            <option value="Recusado">Recusado</option>
                          </select>
                          <div className="flex gap-2 pt-2">
                            <button onClick={() => saveGuest(guest.id)} className="flex-1 rounded-full bg-[#5a7a52] py-1.5 text-xs font-bold text-white transition hover:bg-[#1F382B]">Salvar</button>
                            <button onClick={() => setEditingGuest(null)} className="flex-1 rounded-full bg-[#e8d4bc] py-1.5 text-xs font-bold text-[#3d2817] transition hover:bg-[#dcc4a8]">Cancelar</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-extrabold text-[#3d2817]">{guest.name}</p>
                              <p className="text-[10px] font-black uppercase tracking-wider text-[#d4a574]">{guest.family}</p>
                            </div>
                            <div className="flex flex-col gap-1">
                              <button type="button" onClick={() => startEditGuest(guest)} className="text-[10px] font-black uppercase text-[#5a7a52] hover:underline">Editar</button>
                              <button type="button" onClick={() => deleteGuest(guest.id)} className="text-[10px] font-black uppercase text-[#a58555] hover:underline">Excluir</button>
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-end text-[11px] font-bold text-[#7A5A46]">
                            <span className={`font-black uppercase ${guest.status === 'Confirmado' ? 'text-[#5a7a52]' : guest.status === 'Recusado' ? 'text-[#a58555]' : 'text-[#8b6f47]'}`}>{guest.status}</span>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2.5rem] border-2 border-[#e8d4bc] bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-extrabold text-[#3d2817]">🐘 Grupos de Safari (Famílias)</h3>
                <div className="space-y-4">
                  {families.map((family) => (
                    <div key={family.id} className="rounded-2xl border-2 border-[#e8d4bc] bg-[#fef9f3] p-4 transition hover:border-[#d4a574]/40">
                      {editingFamily === family.id ? (
                        <div className="space-y-2">
                          <input className="w-full rounded-xl border-2 border-[#e8d4bc] bg-white px-3 py-1.5 text-sm font-bold outline-none focus:border-[#d4a574]" value={editFamilyData.name || ""} onChange={e => setEditFamilyData({...editFamilyData, name: e.target.value})} placeholder="Nome da Família" />
                          <textarea className="w-full rounded-xl border-2 border-[#e8d4bc] bg-white px-3 py-1.5 text-sm font-bold outline-none focus:border-[#d4a574] min-h-[60px] resize-none" value={editFamilyData.members || ""} onChange={e => setEditFamilyData({...editFamilyData, members: e.target.value})} placeholder="Membros (vírgula)"></textarea>
                          <select className="w-full rounded-xl border-2 border-[#e8d4bc] bg-white px-3 py-1.5 text-sm font-bold outline-none focus:border-[#d4a574]" value={editFamilyData.inviteStatus || "Pendente"} onChange={e => setEditFamilyData({...editFamilyData, inviteStatus: e.target.value})}>
                            <option value="Pendente">Pendente</option>
                            <option value="Confirmado">Confirmado</option>
                            <option value="Recusado">Recusado</option>
                          </select>
                          <div className="flex gap-2 pt-2">
                            <button onClick={() => saveFamily(family.id)} className="flex-1 rounded-full bg-[#d4a574] py-1.5 text-xs font-bold text-white transition hover:bg-[#a58555]">Salvar</button>
                            <button onClick={() => setEditingFamily(null)} className="flex-1 rounded-full bg-[#e8d4bc] py-1.5 text-xs font-bold text-[#3d2817] transition hover:bg-[#dcc4a8]">Cancelar</button>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="flex items-start justify-between">
                            <p className="font-extrabold text-[#3d2817]">{family.name}</p>
                            <div className="flex flex-col gap-1">
                              <button type="button" onClick={() => startEditFamily(family)} className="text-[10px] font-black uppercase text-[#d4a574] hover:underline">Editar</button>
                              <button type="button" onClick={() => deleteFamily(family.id)} className="text-[10px] font-black uppercase text-[#a58555] hover:underline">Excluir</button>
                            </div>
                          </div>
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#d4a574]">
                              <span>🐒</span>
                              <span>Membros da Tribo</span>
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs font-bold text-[#3d2817]">
                              {family.members.split(",").map((member) => (
                                <span key={member.trim()} className="rounded-full bg-[#f5ede2] px-3 py-1 text-[#3d2817]">
                                  {member.trim() || "Sem nome"}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="mt-3 border-t-2 border-[#e8d4bc] border-dashed pt-3 text-right">
                            <span className={`text-[10px] font-black uppercase ${family.inviteStatus === 'Confirmado' ? 'text-[#5a7a52]' : family.inviteStatus === 'Recusado' ? 'text-[#a58555]' : 'text-[#a58555]'}`}>{family.inviteStatus}</span>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Coluna Direita: Formulários de Criação */}
          <div className="space-y-6 lg:col-span-1">
            
            {/* Form Individual */}
            <div className="rounded-[2.5rem] border-2 border-[#e8d4bc] bg-white p-6 shadow-sm sm:p-8 relative overflow-hidden">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5a7a52]/10 text-[#5a7a52]">
                  <MickeySilhouette className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#3d2817]">Novo Convite <span className="text-[#5a7a52]">Solo</span></h2>
              </div>
              <form className="space-y-4" onSubmit={createIndividualInvite}>
                <label className="block text-xs font-black uppercase tracking-wider text-[#7A5A46]">
                  Nome do Explorador
                  <input
                    required
                    value={individualName}
                    onChange={(event) => setIndividualName(event.target.value)}
                    className="mt-2 w-full rounded-2xl border-2 border-[#e8d4bc] bg-[#fef9f3] px-4 py-3 text-[#3d2817] font-bold outline-none transition-all focus:border-[#5a7a52] focus:bg-white focus:ring-4 focus:ring-[#5a7a52]/10"
                    placeholder="Ex: Lucas Gomes"
                  />
                </label>
                <label className="block text-xs font-black uppercase tracking-wider text-[#7A5A46]">
                  Tribo (Opcional)
                  <select
                    value={individualFamily}
                    onChange={(event) => setIndividualFamily(event.target.value)}
                    className="mt-2 w-full rounded-2xl border-2 border-[#e8d4bc] bg-[#fef9f3] px-4 py-3 text-[#3d2817] font-bold outline-none transition-all focus:border-[#5a7a52] focus:bg-white focus:ring-4 focus:ring-[#5a7a52]/10"
                  >
                    <option value="">Sem tribo / família</option>
                    {families.map((f) => (
                      <option key={f.id} value={f.name}>{f.name}</option>
                    ))}
                  </select>
                </label>
                <label className="block text-xs font-black uppercase tracking-wider text-[#7A5A46]">
                  Telefone
                  <input
                    value={individualPhone}
                    onChange={(event) => setIndividualPhone(event.target.value)}
                    className="mt-2 w-full rounded-2xl border-2 border-[#e8d4bc] bg-[#fef9f3] px-4 py-3 text-[#3d2817] font-bold outline-none transition-all focus:border-[#5a7a52] focus:bg-white focus:ring-4 focus:ring-[#5a7a52]/10"
                    placeholder="(11) 9xxxx-xxxx"
                  />
                </label>
                <label className="block text-xs font-black uppercase tracking-wider text-[#7A5A46]">
                  Mensagem de Aventura
                  <textarea
                    value={individualMessage}
                    onChange={(event) => setIndividualMessage(event.target.value)}
                    className="mt-2 min-h-[100px] w-full resize-none rounded-2xl border-2 border-[#e8d4bc] bg-[#fef9f3] px-4 py-3 text-[#3d2817] font-bold outline-none transition-all focus:border-[#5a7a52] focus:bg-white focus:ring-4 focus:ring-[#5a7a52]/10"
                    placeholder="Deixe um recado especial..."
                  />
                </label>
                <button
                  type="submit"
                  disabled={saving}
                  className="mt-2 w-full rounded-2xl bg-[#5a7a52] py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-[#5a7a52]/20 transition hover:bg-[#1F382B] disabled:opacity-60"
                >
                  {saving ? "Preparando Rota..." : "Gerar Convite Único"}
                </button>
              </form>
            </div>

            {/* Form Familia */}
            <div className="rounded-[2.5rem] border-2 border-[#e8d4bc] bg-white p-6 shadow-sm sm:p-8 relative overflow-hidden">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d4a574]/20 text-[#a58555]">
                  <MickeySilhouette className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-extrabold text-[#3d2817]">Convite <span className="text-[#d4a574]">Tribo</span></h2>
              </div>
              <form className="space-y-4" onSubmit={createFamilyInvite}>
                <label className="block text-xs font-black uppercase tracking-wider text-[#7A5A46]">
                  Nome da Tribo (Família)
                  <input
                    required
                    value={familyName}
                    onChange={(event) => setFamilyName(event.target.value)}
                    className="mt-2 w-full rounded-2xl border-2 border-[#e8d4bc] bg-[#fef9f3] px-4 py-3 text-[#3d2817] font-bold outline-none transition-all focus:border-[#d4a574] focus:bg-white focus:ring-4 focus:ring-[#d4a574]/10"
                    placeholder="Ex: Família Almeida"
                  />
                </label>
                <div className="block text-xs font-black uppercase tracking-wider text-[#7A5A46]">
                  Membros da Tribo
                  <div className="mt-2 space-y-2">
                    {familyMembers.map((member, index) => (
                      <div key={index} className="flex gap-2 items-center">
                        <input
                          required
                          value={member}
                          onChange={(event) => handleFamilyMemberChange(index, event.target.value)}
                          className="flex-1 rounded-2xl border-2 border-[#e8d4bc] bg-[#fef9f3] px-4 py-3 text-[#3d2817] font-bold outline-none transition-all focus:border-[#d4a574] focus:bg-white focus:ring-4 focus:ring-[#d4a574]/10"
                          placeholder={`Nome do Membro ${index + 1}`}
                        />
                        {familyMembers.length > 1 && (
                          <button type="button" onClick={() => removeFamilyMember(index)} className="rounded-2xl border-2 border-[#e8d4bc] bg-white px-4 py-3 font-bold text-[#a58555] hover:bg-[#fef9f3] transition-all" title="Remover Membro">
                            X
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={addFamilyMember} className="mt-3 inline-flex items-center gap-1 text-[10px] font-black uppercase text-[#d4a574] hover:underline">
                    <span>+</span> Adicionar outro membro
                  </button>
                </div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#7A5A46]">
                  Diário de Bordo (Observações)
                  <textarea
                    value={familyMessage}
                    onChange={(event) => setFamilyMessage(event.target.value)}
                    className="mt-2 min-h-[100px] w-full resize-none rounded-2xl border-2 border-[#e8d4bc] bg-[#fef9f3] px-4 py-3 text-[#3d2817] font-bold outline-none transition-all focus:border-[#d4a574] focus:bg-white focus:ring-4 focus:ring-[#d4a574]/10"
                    placeholder="Detalhes para essa família..."
                  />
                </label>
                <button
                  type="submit"
                  disabled={saving}
                  className="mt-2 w-full rounded-2xl bg-[#d4a574] py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-[#d4a574]/30 transition hover:bg-[#a58555] disabled:opacity-60"
                >
                  {saving ? "Preparando Rota..." : "Gerar Convite Familiar"}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>

      {/* Modal de Presentes */}
      {showGiftModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-[2.5rem] border-[6px] border-[#FF9800] bg-[#FFF8E1] p-4 sm:p-6 shadow-2xl">
            <button 
              onClick={() => setShowGiftModal(false)} 
              className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#FF9800] text-white font-bold hover:bg-[#e68a00] transition shadow-lg border-2 border-white"
            >
              X
            </button>
            <div className="text-center space-y-2 mb-4 shrink-0">
              <h3 className="text-2xl font-black text-[#5D4037]">🎁 Sugestões de Presentes</h3>
            </div>
            <div className="flex-1 w-full rounded-2xl overflow-hidden border-2 border-[#FFC107] bg-white">
              <iframe loading="lazy" src="https://www.canva.com/design/DAHHrKoAZ-0/jrto3mym7NX5A3Io6nzfeQ/view?embed" className="w-full h-full border-none" allowFullScreen={true} allow="fullscreen" title="Sugestões de Presentes"></iframe>
            </div>
            <div className="mt-4 shrink-0">
              <button onClick={() => setShowGiftModal(false)} className="w-full rounded-full bg-[#4CAF50] py-3 font-black text-white shadow-md hover:bg-[#2E7D32] transition">Entendido!</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
