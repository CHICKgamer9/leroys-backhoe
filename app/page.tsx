import Image from "next/image";
import QuoteForm from "@/components/QuoteForm";
import { site, services, gallery, equipment } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <Image src="/images/shed-site-concrete-slab.png" alt="Shed site cut into a rocky hillside with a new concrete slab" fill priority className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/60 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
          <p className="inline-block bg-hazard px-3 py-1 font-display uppercase tracking-widest text-steel-950">Heathcote VIC · Since 1988</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-[0.95] md:text-7xl">Earthmoving &amp; plant hire for Heathcote &amp; surrounds</h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-200">Family owned and operated by Leroy &amp; Marlene Troy. Foundations, driveways, septic systems, land clearing, house &amp; shed sites and more — whatever your earthmoving needs.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`tel:${site.phones[0].tel}`} className="btn-hazard">Call Leroy {site.phones[0].display}</a>
            <a href={`tel:${site.phones[1].tel}`} className="btn-hazard">Call Daniel {site.phones[1].display}</a>
            <a href="#contact" className="btn-ghost">Get a free quote</a>
          </div>
        </div>
      </section>
      <div className="stripes h-3" />

      <section id="about" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-display uppercase tracking-widest text-hazard">About Leroy&apos;s</p>
          <h2 className="mt-2 text-4xl">From one backhoe to a full fleet</h2>
          <p className="mt-4 text-zinc-300">Leroy&apos;s Backhoe and Plant Hire (or Leroy&apos;s as it has come to be known) has been serving the Heathcote community since 1988. Proudly owned and operated by Leroy &amp; Marlene Troy and family, the business has come a long way since its humble beginnings with just a single backhoe.</p>
          <p className="mt-4 text-zinc-300">Today Leroy&apos;s runs a range of earthmoving machinery and specialises in foundations, driveways, septic systems, land clearing, house &amp; shed sites and subdivisions. Whatever the job, Leroy&apos;s can take care of it.</p>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[["1988", "Serving Heathcote since"], ["30+", "Years in the community"], ["Family", "Owned & operated"]].map(([a, b]) => (
            <div key={b} className="rounded border-t-4 border-hazard bg-steel-900 p-4"><p className="font-display text-3xl text-hazard">{a}</p><p className="mt-1 text-sm text-zinc-400">{b}</p></div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-steel-900 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-4xl">What we do</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(s => (
              <div key={s.title} className="border-l-4 border-hazard bg-steel-800 p-5"><h3 className="text-xl">{s.title}</h3><p className="mt-2 text-sm text-zinc-400">{s.body}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-4xl">Equipment &amp; plant hire</h2>
        <p className="mt-4 max-w-2xl text-zinc-300">From a single backhoe in 1988 to a range of earthmoving machinery today. Machines come with an experienced operator who knows local ground.</p>
        <div className="mt-8 grid gap-10 md:grid-cols-2 md:items-center">
          <ul className="grid grid-cols-2 gap-3">
            {equipment.map(e => <li key={e} className="flex min-h-20 items-center border-l-4 border-hazard bg-steel-900 px-4 font-display text-xl uppercase">{e}</li>)}
          </ul>
          <div className="rounded bg-white p-4">
            <Image src="/images/backhoe-loader.jpg" alt="Backhoe loader with front bucket and rear digging arm" width={377} height={212} className="h-auto w-full" />
          </div>
        </div>
        {/* PLACEHOLDER: machine sizes/models, wet vs dry hire, attachments and rates to be confirmed with Leroy */}
        <p className="mt-6 text-zinc-400">Call for machine availability, sizes and hire rates.</p>
      </section>

      <section id="gallery" className="bg-steel-900 py-16">
        <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-4xl">Our work</h2>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map(g => (
            <figure key={g.src} className="relative aspect-[4/3] overflow-hidden rounded">
              <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
              <figcaption className="absolute bottom-0 left-0 bg-hazard px-2 py-1 font-display text-sm uppercase text-steel-950">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-4xl">Contact us</h2>
          <p className="mt-4 text-zinc-300">Servicing {site.area}, including the Bendigo region. Call for a free quote.</p>
          <div className="mt-6 flex flex-col gap-3">
            {site.phones.map(p => <a key={p.tel} href={`tel:${p.tel}`} className="btn-hazard">Call {p.name} {p.display}</a>)}
            <a href={`mailto:${site.email}`} className="btn-ghost break-all">{site.email}</a>
          </div>
          <p className="mt-6 text-zinc-400">{site.postal}</p>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
