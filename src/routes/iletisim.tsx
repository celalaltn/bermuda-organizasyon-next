import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/iletisim")({
  component: IletisimPage,
  head: () => ({
    meta: [
      { title: "İletişim — Bermuda Organizasyon" },
      { name: "description", content: "Bermuda Organizasyon ile iletişime geçin. Etkinlik teklifi alın, projelerinizi konuşalım." },
    ],
  }),
});

function IletisimPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="relative bg-hero grain border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">İletişim</span>
          <h1 className="mt-4 font-display text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl">
            Hadi <span className="text-gold">konuşalım.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Projeniz hakkında bilgi alın, ücretsiz teklif isteyin. 24 saat içinde size dönüyoruz.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {[
            { icon: Mail, label: "E-posta", value: "info@bermudaorganization.com" },
            { icon: MapPin, label: "Adres", value: "Çağlayan Mahallesi 2043 Sokak No:1 Kat:3 Daire:6, Muratpaşa / Antalya" },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl border border-border bg-card p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-coral-gradient">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </span>
              <div className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="mt-1 font-semibold">{c.value}</div>
            </div>
          ))}

          <div className="relative overflow-hidden rounded-2xl bg-coral-gradient p-6 text-primary-foreground shadow-glow">
            <div className="absolute inset-0 grain opacity-30" />
            <div className="relative">
              <div className="font-display text-2xl font-bold">Hızlı yanıt</div>
              <p className="mt-2 text-sm opacity-90">Mesajınıza 24 saat içinde döneriz.</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-soft space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Ad Soyad" name="name" required />
            <Field label="E-posta" name="email" type="email" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Telefon" name="phone" />
            <Field label="Şirket" name="company" />
          </div>
          <Field label="Etkinlik türü" name="type" placeholder="Spor / Konferans / Personel temin" />

          <div>
            <label className="text-sm font-medium text-muted-foreground">Mesajınız</label>
            <textarea
              required
              rows={5}
              className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-coral transition"
              placeholder="Etkinliğiniz hakkında kısa bilgi verin..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-coral-gradient px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
          >
            {sent ? "Teşekkürler! 🎉" : "Mesajı Gönder"}
            <Send className="h-4 w-4" />
          </button>

          {sent && (
            <p className="text-sm text-gold">Mesajınız alındı, en kısa sürede dönüş yapacağız.</p>
          )}
        </form>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-coral transition"
      />
    </div>
  );
}