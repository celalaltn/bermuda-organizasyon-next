import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Heart, Zap, Eye, Compass, MapPin, Mail, Instagram } from "lucide-react";
import teamRamazan from "@/assets/pdf/team-ramazan.jpg";
import teamCelil from "@/assets/pdf/team-celil.jpg";
import teamAytug from "@/assets/pdf/team-aytug.jpg";

export const Route = createFileRoute("/hakkimizda")({
  component: HakkimizdaPage,
  head: () => ({
    meta: [
      { title: "Hakkımızda — Bermuda Organizasyon" },
      { name: "description", content: "4 yılı aşkın deneyimimizle Türkiye'nin önde gelen etkinlik organizasyonu firmasıyız. Hikayemizi keşfedin." },
    ],
  }),
});

const values = [
  { icon: Target, title: "Hassasiyet", desc: "En küçük detay bile bizim için kritiktir. Mükemmellik standardımızdır." },
  { icon: Heart, title: "Tutku", desc: "Her etkinliğe, sanki ilk etkinliğimizmiş gibi heyecanla yaklaşırız." },
  { icon: Zap, title: "Hız", desc: "Hızlı karar, hızlı uygulama. Değişen ihtiyaçlara anında yanıt veriyoruz." },
];

const team = [
  { name: "Ramazan ATA", role: "Ekip Sorumlusu", img: teamRamazan },
  { name: "Celil TÜRK", role: "Finans Uzmanı", img: teamCelil },
  { name: "Aytuğ TENEKECİ", role: "Operasyon Sorumlusu", img: teamAytug },
];

function HakkimizdaPage() {
  return (
    <div>
      <section className="relative bg-hero grain border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Hakkımızda</span>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Etkinliklerin <br /> <span className="text-coral">arkasındaki</span> ekip.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">Hikayemiz</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              2020 yılında küçük bir hayalle yola çıktık: Türkiye'de etkinlik
              organizasyonu sektörüne yenilik, profesyonellik ve yaratıcılık
              getirmek.
            </p>
            <p>
              Bugün 133+ tamamlanmış etkinlik, yüzlerce mutlu müşteri ve 300 kişilik
              uzman kadromuzla; spor organizasyonlarından kurumsal konferanslara,
              personel teminden sahne prodüksiyonuna kadar geniş bir hizmet
              yelpazesinde lider firmalardan biriyiz.
            </p>
            <p>
              Her projede aynı tutkuyla çalışıyor, müşterilerimizin başarı
              hikâyesinin bir parçası olmaktan gurur duyuyoruz.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-card shadow-soft">
          <div className="absolute inset-0 bg-gradient-to-br from-coral/20 via-background to-gold/20" />
          <div className="absolute inset-0 grain" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="font-display text-6xl lg:text-7xl font-bold leading-none">
              2020
            </div>
            <div className="mt-2 text-muted-foreground">Kuruluş yılımız</div>
          </div>
          <div className="absolute top-8 right-8 h-24 w-24 rounded-full bg-coral-gradient opacity-70 float-slow" />
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Değerlerimiz</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Bizi biz yapan <span className="text-gold">prensipler</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-3xl border border-border bg-background p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient">
                  <v.icon className="h-6 w-6 text-accent-foreground" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Takımımız</span>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
            Sahanın <span className="text-gold">arkasındaki</span> isimler
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group rounded-3xl border border-border bg-card overflow-hidden shadow-soft">
              <div className="aspect-[4/5] overflow-hidden bg-background">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold">{m.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-wider text-coral">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-border bg-card p-10 shadow-soft">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-gradient">
            <Eye className="h-6 w-6 text-primary-foreground" />
          </span>
          <h2 className="mt-6 font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Vizyonumuz
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Antalya merkezli başlayarak, Türkiye'nin etkinlik ve saha yönetimi
            denilince akla gelen ilk <span className="text-foreground font-semibold">"Event Staffing &amp; Management"</span> ajansı olmak.
            Sektördeki dijitalleşmeyi ve operasyonel disiplini standart hale getirerek,
            uluslararası mega etkinliklerin vazgeçilmez operasyonel motor gücü haline gelmek.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-10 shadow-soft">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient">
            <Compass className="h-6 w-6 text-accent-foreground" />
          </span>
          <h2 className="mt-6 font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Misyonumuz
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Etkinlik ve organizasyon sektöründe; saha operasyonlarını, yenilikçi yönetim
            modelleri ve profesyonel ekip koordinasyonuyla birleştirerek müşterilerimize
            sorunsuz, güvenilir ve yüksek kaliteli hizmet sunmak. Genç ve dinamik kadromuzla,
            her projenin operasyonel yükünü üstlenerek çözüm ortaklarımızın vizyonlarını
            gerçeğe dönüştürmek için varız.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">İletişim</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold tracking-tight">
              Bize <span className="text-coral">ulaşın</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <a
              href="https://maps.google.com/?q=Çağlayan+Mahallesi+2043+Sokak+No+1+Muratpaşa+Antalya"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-border bg-background p-8 hover:border-coral transition-colors"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-gradient">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">Adres</h3>
              <p className="mt-2 text-muted-foreground">
                Çağlayan Mahallesi 2043 Sokak No:1 Kat:3 Daire:6<br />
                Muratpaşa / Antalya
              </p>
            </a>

            <a
              href="mailto:info@bermudaorganization.com"
              className="rounded-3xl border border-border bg-background p-8 hover:border-coral transition-colors"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-gradient">
                <Mail className="h-6 w-6 text-accent-foreground" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">E-posta</h3>
              <p className="mt-2 text-muted-foreground break-all">
                info@bermudaorganization.com
              </p>
            </a>

            <a
              href="https://instagram.com/bermuda.organizasyon"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-border bg-background p-8 hover:border-coral transition-colors"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-coral-gradient">
                <Instagram className="h-6 w-6 text-primary-foreground" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">Instagram</h3>
              <p className="mt-2 text-muted-foreground">@bermuda.organizasyon</p>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl lg:text-5xl font-bold">Birlikte çalışalım mı?</h2>
          <Link
            to="/iletisim"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral-gradient px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
          >
            İletişime Geç <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}