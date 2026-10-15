import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { site } from "@/lib/site";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", weight: ["500", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Leroy's Backhoe & Plant Hire | Earthmoving Heathcote & Bendigo",
  keywords: ["earthmoving Heathcote", "Bendigo earthmoving", "backhoe hire Heathcote", "plant hire Bendigo", "excavation Heathcote VIC", "septic systems Heathcote", "driveways Bendigo", "land clearing Heathcote"],
  description: "Family owned earthmoving and plant hire in Heathcote VIC since 1988. Foundations, driveways, septic, land clearing, house & shed sites, tank sites and trenching across Heathcote and the Bendigo region.",
  openGraph: { type: "website", locale: "en_AU", siteName: site.name, images: ["/images/shed-site-concrete-slab.png"] },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.legalName,
  url: site.url,
  image: `${site.url}/images/shed-site-concrete-slab.png`,
  email: site.email,
  telephone: site.phones[0].tel,
  contactPoint: site.phones.map(p => ({ "@type": "ContactPoint", telephone: p.tel, name: p.name, contactType: "sales", areaServed: "AU" })),
  address: { "@type": "PostalAddress", postOfficeBoxNumber: "118", addressLocality: "Heathcote", addressRegion: "VIC", postalCode: "3523", addressCountry: "AU" },
  areaServed: [{ "@type": "City", name: "Heathcote" }, { "@type": "City", name: "Bendigo" }, { "@type": "AdministrativeArea", name: "Bendigo region, Victoria" }],
  foundingDate: "1988",
  founder: [{ "@type": "Person", name: "Leroy Troy" }, { "@type": "Person", name: "Marlene Troy" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${oswald.variable} ${inter.variable}`}>
      <body id="top" className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
