"use client";
import { useState } from "react";
import { site } from "@/lib/site";
const jobs = ["Foundations / footings", "Driveway", "Septic system", "Land clearing", "House site", "Shed site", "Subdivision", "Tank site", "Trenching", "Levelling", "Stormwater", "Plant hire", "Other"];
const field = "mt-1 w-full min-h-12 rounded border-2 border-steel-700 bg-steel-950 px-3 py-2 text-white focus:border-hazard focus:outline-none";
export default function QuoteForm() {
  const [sent, setSent] = useState(false);
  // TODO: wire to a backend (see README). Currently client-side only — nothing is sent.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  if (sent) return (
    <div role="status" className="border-t-4 border-hazard bg-steel-900 p-8">
      <h3 className="text-3xl text-hazard">Thanks — request received</h3>
      <p className="mt-3 text-zinc-300">We&apos;ll be in touch soon. Need it sooner? Call Leroy on <a className="underline" href={`tel:${site.phones[0].tel}`}>{site.phones[0].display}</a>.</p>
      <button onClick={() => setSent(false)} className="btn-ghost mt-6">Send another</button>
    </div>
  );
  return (
    <form onSubmit={onSubmit} className="grid gap-4 bg-steel-900 p-6 sm:grid-cols-2">
      <h3 className="text-3xl sm:col-span-2">Request a quote</h3>
      <label className="block">Name<input required name="name" autoComplete="name" className={field} /></label>
      <label className="block">Phone<input required name="phone" type="tel" autoComplete="tel" className={field} /></label>
      <label className="block">Email<input name="email" type="email" autoComplete="email" className={field} /></label>
      <label className="block">Suburb / town<input required name="suburb" placeholder="e.g. Heathcote" className={field} /></label>
      <label className="block sm:col-span-2">Job type<select required name="jobType" defaultValue="" className={field}><option value="" disabled>Select…</option>{jobs.map(j => <option key={j}>{j}</option>)}</select></label>
      <label className="block sm:col-span-2">Job details<textarea required name="details" rows={5} className={field} placeholder="Size of the job, access, timing…" /></label>
      <button type="submit" className="btn-hazard sm:col-span-2">Send quote request</button>
    </form>
  );
}
