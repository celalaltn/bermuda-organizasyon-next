import { createFileRoute } from "@tanstack/react-router";
import g1 from "@/assets/pdf/gallery-1.jpg";
import g2 from "@/assets/pdf/gallery-2.jpg";
import g3 from "@/assets/pdf/gallery-3.jpg";
import g4 from "@/assets/pdf/gallery-4.jpg";
import g5 from "@/assets/pdf/gallery-5.jpg";
import g6 from "@/assets/pdf/gallery-6.jpg";
import g7 from "@/assets/pdf/gallery-7.jpg";
import g8 from "@/assets/pdf/gallery-8.jpg";

export const Route = createFileRoute("/galeri")({
  component: GaleriPage,
  head: () => ({
    meta: [
      { title: "Galeri — Bermuda Organizasyon" },
      { name: "description", content: "Geçmiş etkinliklerimizden kareler. Spor, konferans ve kurumsal organizasyon projelerimiz." },
    ],
  }),
});

const items = [
  { src: g2, t: "Runtalya Maraton", c: "Antalya", h: "row-span-2" },
  { src: g1, t: "Maraton Operasyonu", c: "Antalya" },
  { src: g4, t: "Ironman 70.3", c: "Antalya" },
  { src: g3, t: "Kaçkar by UTMB", c: "Rize" },
  { src: g5, t: "Turkish Airlines Open", c: "Antalya", h: "row-span-2" },
  { src: g6, t: "TAO — Sahne & Yayın", c: "Antalya" },
  { src: g7, t: "Kaçkar Saha Ekibi", c: "Rize" },
  { src: g8, t: "Kaçkar Kayıt & Kit Dağıtımı", c: "Rize" },
];

function GaleriPage() {
  return (
    <div>
      <section className="relative bg-hero grain border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Galeri</span>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Sahne arkası ve <br /> <span className="text-gold">unutulmaz</span> anlar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Gerçekleştirdiğimiz uluslararası etkinliklerden seçmeler.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-4">
          {items.map((it) => (
            <figure
              key={it.t}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${it.h ?? ""}`}
            >
              <img src={it.src} alt={it.t} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <figcaption className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-lg font-bold text-white">{it.t}</div>
                <div className="mt-1 text-xs text-white/70">{it.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
