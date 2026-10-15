"use client";
import { useState } from "react";
import { site } from "@/lib/site";
const nav = [["#about", "About"], ["#services", "Services"], ["#equipment", "Plant Hire"], ["#gallery", "Gallery"], ["#contact", "Contact"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b-4 border-hazard bg-steel-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-display text-xl uppercase leading-none tracking-tight">
          <span className="text-hazard">Leroy&apos;s</span> Backhoe<span className="block text-xs tracking-widest text-zinc-400">&amp; Plant Hire · Heathcote</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map(([h, l]) => <a key={h} href={h} className="font-display uppercase tracking-wide hover:text-hazard">{l}</a>)}
          <a href={`tel:${site.phones[0].tel}`} className="btn-hazard !min-h-10 !py-2">Call {site.phones[0].display}</a>
        </nav>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-12 w-12 items-center justify-center rounded border-2 border-steel-700 md:hidden">
          <span className="font-display text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>
      {open && (
        <nav className="border-t border-steel-800 md:hidden">
          {nav.map(([h, l]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block border-b border-steel-800 px-4 py-4 font-display text-lg uppercase">{l}</a>)}
        </nav>
      )}
    </header>
  );
}
