import { site } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="bg-steel-900 pb-24 md:pb-0">
      <div className="stripes h-3" />
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl uppercase"><span className="text-hazard">Leroy&apos;s</span> Backhoe &amp; Plant Hire</p>
          <p className="mt-2 text-zinc-400">Family owned earthmoving serving {site.area} since 1988.</p>
        </div>
        <div className="space-y-2">
          <p className="font-display uppercase text-hazard">Call</p>
          {site.phones.map(p => <a key={p.tel} href={`tel:${p.tel}`} className="block text-lg hover:text-hazard">{p.name}: {p.display}</a>)}
          <a href={`mailto:${site.email}`} className="block hover:text-hazard">{site.email}</a>
          <p className="text-zinc-400">{site.postal}</p>
        </div>
        <div className="flex flex-col gap-2">
          {[["#services","Services"],["#equipment","Plant Hire"],["#gallery","Gallery"],["#contact","Get a Quote"]].map(([h,l]) => <a key={h} href={h} className="hover:text-hazard">{l}</a>)}
        </div>
      </div>
      <p className="border-t border-steel-800 py-4 text-center text-sm text-zinc-500">© {new Date().getFullYear()} {site.legalName}</p>
    </footer>
  );
}
