import { site } from "@/lib/site";
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t-4 border-hazard bg-steel-950 md:hidden">
      {site.phones.map(p => (
        <a key={p.tel} href={`tel:${p.tel}`} className="flex min-h-16 flex-col items-center justify-center bg-hazard font-display uppercase text-steel-950 active:bg-hazard-dark">
          <span className="text-lg leading-none">📞 Call {p.name}</span><span className="text-sm">{p.display}</span>
        </a>
      ))}
    </div>
  );
}
