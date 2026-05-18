import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/bermuda-logo.png";

const links = [
  { to: "/", label: "Ana Sayfa" },
  { to: "/hizmetler", label: "Hizmetler" },
  { to: "/hakkimizda", label: "Hakkımızda" },
  { to: "/galeri", label: "Galeri" },
  { to: "/referanslar", label: "Referanslar" },
  { to: "/iletisim", label: "İletişim" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Bermuda Organizasyon logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-wave/40 bg-card p-1 drop-shadow-[0_4px_18px_rgba(120,180,255,0.35)]"
          />
          <span className="font-display text-lg font-bold tracking-tight">
            Bermuda <span className="text-wave">Organizasyon</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 rounded-full bg-coral-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
          >
            Teklif Al →
          </Link>
        </div>

        <button
          aria-label="Menü"
          onClick={() => setOpen((s) => !s)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
                activeProps={{ className: "text-foreground bg-secondary" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/iletisim"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-coral-gradient px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Teklif Al
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}