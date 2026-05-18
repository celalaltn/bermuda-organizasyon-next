import { createFileRoute } from "@tanstack/react-router";
import ironman from "@/assets/pdf/ref-ironman.jpg";
import kackar from "@/assets/pdf/ref-kackar.jpg";
import thy from "@/assets/pdf/ref-thy.jpg";
import runtalya from "@/assets/pdf/ref-runtalya.jpg";
import akdu from "@/assets/pdf/ref-akdu.jpg";
import tehiz from "@/assets/pdf/ref-tehiz.jpg";

export const Route = createFileRoute("/referanslar")({
  component: ReferanslarPage,
  head: () => ({
    meta: [
      { title: "Referanslar — Bermuda Organizasyon" },
      { name: "description", content: "Birlikte çalıştığımız uluslararası etkinlikler ve markalar." },
    ],
  }),
});

const refs = [
  { name: "Ironman 70.3 Türkiye", logo: ironman, desc: "Uluslararası triatlon organizasyonu — saha ve personel operasyonu." },
  { name: "Kaçkar by UTMB", logo: kackar, desc: "Dünya çapındaki ultra trail serisinin Türkiye etabı." },
  { name: "Turkish Airlines Open", logo: thy, desc: "European Tour golf turnuvası — host & sahne operasyonu." },
  { name: "Runtalya Maraton", logo: runtalya, desc: "Antalya'nın uluslararası maratonu — saha ekibi." },
  { name: "AKDÜ Voleybol Turnuvası", logo: akdu, desc: "Üniversiteler arası voleybol turnuvası organizasyonu." },
  { name: "Türkiye'nin En Hızlısı", logo: tehiz, desc: "Ulusal hız yarışması — operasyon desteği." },
];

function ReferanslarPage() {
  return (
    <div>
      <section className="relative bg-hero grain border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Referanslar</span>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Uluslararası <br /> <span className="text-coral">organizasyonların</span> arkasındayız.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Ironman'den UTMB'ye, Turkish Airlines Open'dan Runtalya Maratonu'na — markaların güvendiği saha ekibi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {refs.map((r) => (
            <article
              key={r.name}
              className="group rounded-3xl border border-border bg-card p-8 shadow-soft hover:border-coral/40 transition"
            >
              <div className="flex h-32 items-center justify-center rounded-2xl bg-background border border-border p-4">
                <img src={r.logo} alt={`${r.name} logo`} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold">{r.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-10 md:grid-cols-3 text-center">
          <div>
            <div className="font-display text-5xl font-bold text-coral">4+</div>
            <div className="mt-2 text-sm text-muted-foreground">Yıllık deneyim</div>
          </div>
          <div>
            <div className="font-display text-5xl font-bold text-gold">500+</div>
            <div className="mt-2 text-sm text-muted-foreground">Host, hostes & part-time portföy</div>
          </div>
          <div>
            <div className="font-display text-5xl font-bold text-coral">Uluslararası</div>
            <div className="mt-2 text-sm text-muted-foreground">Mega etkinlik tecrübesi</div>
          </div>
        </div>
      </section>
    </div>
  );
}
