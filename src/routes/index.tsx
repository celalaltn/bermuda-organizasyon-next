import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Trophy, Users, Mic, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bermuda Organizasyon — Spor, Konferans & Personel Temin" },
      { name: "description", content: "Spor turnuvalarından kurumsal konferanslara, profesyonel personel teminine kadar uçtan uca etkinlik çözümleri." },
    ],
  }),
});

const services = [
  {
    icon: Trophy,
    title: "Spor Organizasyonları",
    desc: "Turnuvalar, kurumsal sportif etkinlikler, koşu & maraton organizasyonları.",
  },
  {
    icon: Mic,
    title: "Konferans & Kongre",
    desc: "Sahne, sunum, ses-ışık ve hibrit konferans çözümleri uçtan uca yönetim.",
  },
  {
    icon: Users,
    title: "Personel Temin",
    desc: "Hostes, host, güvenlik, teknik ekip — eğitimli ve sertifikalı kadro.",
  },
];

const stats = [
  { v: "4+", k: "Yıllık deneyim" },
  { v: "500+", k: "Host & hostes portföyü" },
  { v: "Uluslararası", k: "Mega etkinlik tecrübesi" },
  { v: "Antalya", k: "Merkez ofis" },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero grain">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-coral-gradient opacity-20 blur-3xl float-slow" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gold-gradient opacity-15 blur-3xl float-slow" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-36">
          <div className="reveal max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> Türkiye'nin yenilikçi etkinlik partneri
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              Etkinliğinizi <br />
              <span className="bg-gradient-to-r from-coral via-gold to-coral bg-clip-text text-transparent">
                unutulmaz
              </span>{" "}
              kılıyoruz.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Spor organizasyonları, kurumsal konferanslar ve profesyonel personel
              teminin de uçtan uca çözüm. Hayalini kurduğunuz etkinliği, en küçük
              detayına kadar biz planlıyoruz.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/iletisim"
                className="group inline-flex items-center gap-2 rounded-full bg-coral-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
              >
                Ücretsiz Teklif Al
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/hizmetler"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-7 py-4 text-sm font-semibold text-foreground hover:bg-secondary transition"
              >
                Hizmetlerimizi Keşfet
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="relative mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-3xl border border-border bg-border">
            {stats.map((s) => (
              <div key={s.k} className="bg-card px-6 py-8">
                <div className="font-display text-4xl lg:text-5xl font-bold text-foreground">
                  {s.v}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border bg-card overflow-hidden">
        <div className="flex marquee whitespace-nowrap py-6 gap-12">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 shrink-0 px-6">
              {["SPOR", "KONFERANS", "KONGRE", "PERSONEL", "TURNUVA", "GALA", "LANSMAN", "ROADSHOW"].map((t) => (
                <span key={t} className="font-display text-2xl lg:text-3xl font-bold text-muted-foreground">
                  {t} <span className="text-coral">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Hizmetlerimiz</span>
            <h2 className="mt-3 font-display text-4xl lg:text-6xl font-bold tracking-tight">
              Her ölçekte etkinlik için <span className="text-gold">uzman çözümler</span>
            </h2>
          </div>
          <Link to="/hizmetler" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-coral transition">
            Tüm hizmetler <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover:border-coral/40 transition-all duration-500 hover:-translate-y-1 shadow-soft"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-coral-gradient opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-coral-gradient shadow-glow">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 text-xs font-mono text-muted-foreground">0{i + 1} / 03</div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Neden Bermuda?</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Detaylar bizim için <br /> <span className="text-coral">her şeydir.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Her etkinlik kendine özgüdür. 4 yılı aşkın deneyimimizle, planlamadan
              uygulamaya kadar her adımı titizlikle yönetiyor; markanızın hikâyesini
              sahaya taşıyoruz.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Uçtan uca proje yönetimi & 7/24 destek",
                "Sertifikalı, deneyimli profesyonel personel kadrosu",
                "Şeffaf bütçeleme — sürpriz maliyet yok",
                "Tüm Türkiye'de operasyonel kapasite",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 text-gold shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-square rounded-3xl overflow-hidden border border-border bg-background shadow-soft">
            <div className="absolute inset-0 bg-gradient-to-br from-coral/30 via-transparent to-gold/30" />
            <div className="absolute inset-0 grain" />
            <div className="relative h-full flex flex-col justify-end p-10">
              <div className="font-display text-7xl lg:text-8xl font-bold leading-none">
                4<span className="text-coral">+</span>
              </div>
              <div className="mt-3 text-lg text-muted-foreground">yıllık etkinlik deneyimi</div>
            </div>
            <div className="absolute top-8 right-8 h-24 w-24 rounded-full bg-gold-gradient opacity-80 float-slow" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="relative overflow-hidden rounded-[2rem] bg-coral-gradient p-12 lg:p-20 text-primary-foreground shadow-glow">
          <div className="absolute inset-0 grain opacity-30" />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-4xl lg:text-6xl font-bold tracking-tight">
              Bir sonraki etkinliğiniz <br /> bir efsane olsun.
            </h2>
            <p className="mt-6 text-lg opacity-90 max-w-xl">
              Projelerinizi konuşmak için bize ulaşın. 24 saat içinde size özel teklifle dönüyoruz.
            </p>
            <Link
              to="/iletisim"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground hover:scale-[1.03] transition-transform"
            >
              Hadi Konuşalım <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
