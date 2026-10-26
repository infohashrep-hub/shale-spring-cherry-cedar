import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import {
  address,
  email,
  emailHref,
  hours,
  marqueePlaces,
  marqueeServices,
  phoneDisplay,
  phoneHref,
} from "./data";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "The Work" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/areas", label: "Areas" },
] as const;

function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        d="M20 54C8 40 8 18 30 8c-2 16-6 28-10 46Z"
        fill="currentColor"
      />
      <path
        d="M32 56C24 38 32 16 54 10c-4 20-12 34-22 46Z"
        fill="currentColor"
        opacity="0.72"
      />
    </svg>
  );
}

function Marquee({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="marquee-mask">
      <div className={reverse ? "marquee-track reverse" : "marquee-track"}>
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-6 px-4 py-3 font-display text-sm tracking-[0.22em] text-bone uppercase"
          >
            {item}
            <span className="text-gold" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SiteMarquee({
  items = marqueeServices,
  reverse = false,
}: {
  items?: string[];
  reverse?: boolean;
}) {
  return <Marquee items={items} reverse={reverse} />;
}

export function SitePlacesMarquee() {
  return <Marquee items={marqueePlaces} reverse />;
}

function Header() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className={scrolled || open ? "glass" : "bg-transparent"}>
        <div className="wrap flex h-16 items-center justify-between gap-4 md:h-20">
          <Link to="/" className="flex items-center gap-2 text-bone no-underline">
            <Mark className="size-8 text-gold" />
            <span className="leading-none">
              <span className="block font-display text-lg tracking-wide uppercase">
                Razor Sharp
              </span>
              <span className="block font-display text-xs tracking-[0.28em] text-muted uppercase">
                Rizzo & Sons
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {links.map((link) => {
              const active =
                pathname === link.to || pathname.startsWith(`${link.to}/`);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={
                    active
                      ? "font-display text-sm tracking-[0.18em] text-gold uppercase no-underline"
                      : "font-display text-sm tracking-[0.18em] text-bone uppercase no-underline transition-colors hover:text-gold"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a href={phoneHref} className="btn btn-ghost hidden md:inline-flex">
              <Phone className="size-4" aria-hidden="true" />
              {phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn-gold hidden sm:inline-flex">
              Estimate
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              className="inline-flex size-12 items-center justify-center rounded-full border border-line text-bone lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="glass fixed inset-0 z-50 flex flex-col px-6 pt-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-display tracking-[0.22em] text-gold uppercase">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex size-12 items-center justify-center rounded-full border border-line"
              onClick={() => setOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="size-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile">
            <Link to="/" className="display-lg text-bone no-underline">
              Home
            </Link>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="display-lg text-bone no-underline"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="display-lg text-gold no-underline">
              Estimate
            </Link>
          </nav>
          <a href={phoneHref} className="btn btn-gold mt-auto mb-8">
            <Phone className="size-4" />
            Call {phoneDisplay}
          </a>
        </div>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line pb-28 md:pb-0">
      <SitePlacesMarquee />
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Mark className="size-10 text-gold" />
            <p className="font-display text-3xl leading-none tracking-wide uppercase">
              Razor Sharp
              <br />
              Rizzo
            </p>
          </div>
          <p className="mt-6 max-w-sm text-muted">
            Razor Sharp Rizzo & Sons LLC. Professional lawn and snow services in
            Buffalo, NY. Locally owned and operated.
          </p>
          <p className="serif mt-6 text-2xl text-bone">
            If it ain’t razor sharp, it ain’t Rizzo’s.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="kicker">
            <span className="rule" />
            Visit
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-bone no-underline hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-bone no-underline hover:text-gold">
                Free estimate
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="kicker">
            <span className="rule" />
            Studio hours
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {hours.map((slot) => (
              <li key={slot.day} className="flex justify-between gap-6 border-b border-line py-2">
                <span>{slot.day}</span>
                <span className="text-muted">{slot.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">{address}</p>
          <p className="mt-2 text-sm">
            <a href={phoneHref} className="text-bone no-underline hover:text-gold">
              {phoneDisplay}
            </a>
            <span className="text-muted"> · </span>
            <a href={emailHref} className="text-bone no-underline hover:text-gold">
              {email}
            </a>
          </p>
        </div>
      </div>
      <div className="wrap flex flex-col gap-2 border-t border-line py-6 text-xs tracking-wide text-muted uppercase md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Razor Sharp Rizzo & Sons LLC</p>
        <p>Buffalo, NY & surrounding areas</p>
      </div>
    </footer>
  );
}

function MobileDock() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  if (pathname === "/contact") return null;
  return (
    <div className="fixed inset-x-3 bottom-3 z-30 flex gap-2 md:hidden">
      <a href={phoneHref} className="btn btn-ghost glass flex-1">
        <Phone className="size-4" />
        Call
      </a>
      <Link to="/contact" className="btn btn-gold flex-1">
        Free estimate
      </Link>
    </div>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-svh bg-bg text-bone">
      <Header />
      <div key={pathname} className="page-enter">
        {children}
      </div>
      <Footer />
      <MobileDock />
    </div>
  );
}

export function Kicker({ index, label }: { index: string; label: string }) {
  return (
    <p className="kicker">
      <span>{index}</span>
      <span className="rule" />
      <span className="text-muted">{label}</span>
    </p>
  );
}
