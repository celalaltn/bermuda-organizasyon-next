import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Wrench, Shirt, Trophy, Briefcase, Sparkles } from "lucide-react";

export const Route = createFileRoute("/hizmetler")({
  component: HizmetlerPage,
  head: () => ({
    meta: [
      { title: "Hizmetler — Bermuda Organizasyon" },
      { name: "description", content: "İnsan kaynakları, operasyonel destek, tekstil & transfer. Spor, fuar, kongre, gala ve lansman organizasyonları." },
    ],
  }),
});

const services = [
  {
    icon: Users,
    title: "İnsan Kaynakları & Danışmanlık",
    desc: "Organizasyon boyunca personel, host, hostes ve model temini ile etkinliğin kusursuz olmasını hedefliyoruz. Uzman ve tecrübeli ekibimizi sahanın her alanında görevlendirerek etkinlikleri unutulmaz kılıyoruz.",
    items: ["Host & hostes temini", "Model & tanıtım kadrosu", "Part-time saha personeli", "Danışmanlık & koordinasyon"],
  },
  {
    icon: Wrench,
    title: "Operasyonel İhtiyaçlar & Destek",
    desc: "Operasyon öncesi ve sonrası saha, konum ve zaman analizleri ile potansiyel problemleri erken farkedip etkinliğin sorunsuz tamamlanmasını sağlıyoruz. Kurulum ve tüm ihtiyaçlar için destek veriyoruz.",
    items: ["Saha & konum analizi", "Zaman planlaması", "Kurulum desteği", "Operasyonel koordinasyon"],
  },
  {
    icon: Shirt,
    title: "Tekstil, Stil & Transfer",
    desc: "Etkinliğinizde katılımcı ve personel için tekstil ürünlerini minimum maliyetle hizmetinize sunarız. Tasarım ve revizyonlar tamamen iş ortaklarımızın istekleri üzerine; tüm ulaşım ve transfer ihtiyaçları minimum maliyetle.",
    items: ["Özel tasarım tekstil", "Üniformalı kadro", "Ulaşım & transfer", "Lojistik destek"],
  },
];

const orgTypes = [
  {
    icon: Trophy,
    title: "Spor Organizasyonları",
    desc: "Deneyimli kadromuzla sportif tüm branşlarda görevlendirme. Ekibimiz büyük spor organizasyonlarında tecrübe edinmiştir.",
  },
  {
    icon: Briefcase,
    title: "Fuar & Kongreler",
    desc: "Markanızı temsil etmek için en uygun host ve hostes temini ile stantlarınızın görünürlüğüne değer katıyoruz.",
  },
  {
    icon: Sparkles,
    title: "Gala & Lansmanlar",
    desc: "Ürün tanıtımı, dekor & dizayn, yönlendirme ve karşılama hizmetlerini markanızın ruhunu yansıtacak şekilde hayata geçiriyoruz.",
  },
];

function HizmetlerPage() {
  return (
    <div>
      <section className="relative bg-hero grain border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Hizmetlerimiz</span>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Sahanın her alanında <br /> <span className="text-gold">profesyonel destek.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            İnsan kaynağından operasyonel desteğe, tekstilden transfere — etkinliğinizin her aşamasında yanınızdayız.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10 hover:border-coral/40 transition-all duration-500 shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-coral-gradient shadow-glow">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              <ul className="mt-6 grid grid-cols-1 gap-2 text-sm">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral" /> {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Organizasyon Tipleri</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Her tür etkinlikte <span className="text-gold">tecrübe</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {orgTypes.map((o) => (
              <div key={o.title} className="rounded-3xl border border-border bg-background p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient">
                  <o.icon className="h-6 w-6 text-accent-foreground" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{o.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 text-center">
        <Link
          to="/iletisim"
          className="inline-flex items-center gap-2 rounded-full bg-coral-gradient px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
        >
          Projenizi konuşalım <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
