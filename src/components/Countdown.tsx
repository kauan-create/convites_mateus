"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

function formatValue(value: number) {
  return String(value).padStart(2, "0");
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const update = () => {
      const now = Date.now();
      const diff = Math.max(target - now, 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: formatValue(hours),
        minutes: formatValue(minutes),
        seconds: formatValue(seconds),
      });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid gap-3 sm:grid-cols-4">
      <div className="rounded-3xl bg-slate-950/90 p-4 text-center ring-1 ring-white/10">
        <span className="block text-4xl font-semibold text-white">{timeLeft.days}</span>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Dias</span>
      </div>
      <div className="rounded-3xl bg-slate-950/90 p-4 text-center ring-1 ring-white/10">
        <span className="block text-4xl font-semibold text-white">{timeLeft.hours}</span>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Horas</span>
      </div>
      <div className="rounded-3xl bg-slate-950/90 p-4 text-center ring-1 ring-white/10">
        <span className="block text-4xl font-semibold text-white">{timeLeft.minutes}</span>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Minutos</span>
      </div>
      <div className="rounded-3xl bg-slate-950/90 p-4 text-center ring-1 ring-white/10">
        <span className="block text-4xl font-semibold text-white">{timeLeft.seconds}</span>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">Segundos</span>
      </div>
    </div>
  );
}
