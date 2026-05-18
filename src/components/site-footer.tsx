import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/bermuda-logo.png";

const COPYRIGHT_YEAR = 2026;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Bermuda Organizasyon logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-wave/40 bg-card p-1" />
            <span className="font-display text-lg font-bold">
              Bermuda <span className="text-wave">Organizasyon</span>
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Spor organizasyonları, kurumsal konferanslar ve profesyonel personel
            temininde Türkiye'nin yenilikçi etkinlik partneri.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://instagram.com/bermuda.organizasyon"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-secondary transition"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Sayfalar</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/hizmetler" className="hover:text-foreground">Hizmetler</Link></li>
            <li><Link to="/hakkimizda" className="hover:text-foreground">Hakkımızda</Link></li>
            <li><Link to="/galeri" className="hover:text-foreground">Galeri</Link></li>
            <li><Link to="/referanslar" className="hover:text-foreground">Referanslar</Link></li>
            <li><Link to="/iletisim" className="hover:text-foreground">İletişim</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">İletişim</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-coral" /> Çağlayan Mahallesi 2043 Sokak No:1 Kat:3 Daire:6, Muratpaşa / Antalya</li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-coral" /> info@bermudaorganization.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {COPYRIGHT_YEAR} Bermuda Organizasyon. Tüm hakları saklıdır.</p>
          <p>Tasarım & geliştirme — Lovable</p>
        </div>
      </div>
    </footer>
  );
}