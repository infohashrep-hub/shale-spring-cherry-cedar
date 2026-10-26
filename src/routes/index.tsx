import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Star } from "lucide-react";
import { Kicker, SiteMarquee } from "@/components/site/shell";
import {
  googleReviews,
  phoneDisplay,
  phoneHref,
  pillars,
  proofs,
  reviews,
  services,
} from "@/components/site/data";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Razor Sharp Rizzo — Lawn Care & Snow Removal, Buffalo NY",
      },
      {
        name: "description",
        content:
          "Fast, reliable lawn care and snow removal in Buffalo, NY. Mowing, mulch, edging, trimming, seasonal cleanups, and plowing. Call or text for a free quote.",
      },
    ],
    links: [{ rel: "preload", as: "image", href: "/media/lawn-wide.jpg" }],
  }),
  component: Home,
});

function Home() {
  const [active, setActive] = useState(0);
  const featured = services[active] ?? services[0];

  return (
    <main>
      <section className="relative flex min-h-svh items-end overflow-hidden">
        <img
          src="/media/lawn-wide.jpg"
          alt="Freshly striped lawn on a Buffalo residential street"
          className="ken absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
        <div className="wrap relative z-10 pb-28 pt-32 md:pb-16">
          <p className="kicker">
            <span>01</span>
            <span className="rule" />
            Buffalo, NY
          </p>
          <h1 className="display-hero mt-4 max-w-5xl">
            Sharp
            <br />
            results.
            <br />
            Every
            <br />
            season.
          </h1>
          <p className="mt-6 max-w-xl text-base text-bone md:text-lg">
            Fast, reliable service you can count on. Lawn care and snow removal
            for Buffalo — call or text for a free quote.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn btn-gold">
              Get a free estimate
              <ArrowUpRight className="size-4" />
            </Link>
            <a href="#services" className="btn btn-ghost glass">
              Our services
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <a
              href={googleReviews}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm no-underline"
              target="_blank"
              rel="noreferrer"
            >
              <Star className="size-4 fill-gold text-gold" />
              5.0 rated on Google
            </a>
            <span className="glass inline-flex items-center rounded-full px-4 py-2 text-sm">
              Locally owned
            </span>
            <a href={phoneHref} className="glass inline-flex items-center rounded-full px-4 py-2 text-sm no-underline">
              {phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <SiteMarquee />

      <section className="relative overflow-hidden py-20 md:py-28">
        <span className="ghost-word top-6 right-0">Rizzo</span>
        <div className="wrap relative grid items-end gap-10 md:grid-cols-12">
          <div className="reveal md:col-span-7">
            <Kicker index="02" label="The standard" />
            <p className="serif mt-6 text-4xl text-bone md:text-6xl">
              “If it ain’t razor sharp, it ain’t Rizzo’s.”
            </p>
          </div>
          <div className="reveal md:col-span-5">
            <p className="text-muted">
              Razor Sharp Rizzo is a Buffalo lawn care and snow removal company
              built on reliability, clean work, and honest pricing. We treat
              every property like it’s our own and take pride in delivering
              professional results all year long.
            </p>
            <Link to="/about" className="btn btn-ghost mt-6">
              The family
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="wrap mt-14 grid gap-px bg-line md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.index} className="reveal bg-bg p-6 md:p-8">
              <p className="font-display text-gold tracking-[0.2em]">{pillar.index}</p>
              <h2 className="display-md mt-6">{pillar.title}</h2>
              <p className="mt-4 text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="border-t border-line py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Kicker index="03" label="Our services" />
              <h2 className="display-xl mt-4">
                Six crafts.
                <br />
                One finish.
              </h2>
            </div>
            <Link to="/services" className="btn btn-ghost">
              All services
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid items-start gap-8 lg:grid-cols-12">
            <ul className="lg:col-span-7">
              {services.map((service, index) => {
                const on = index === active;
                return (
                  <li key={service.slug} className="border-t border-line">
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 no-underline md:py-6"
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                    >
                      <span className="font-display text-gold tracking-[0.18em]">
                        {service.index}
                      </span>
                      <span>
                        <span
                          className={
                            on
                              ? "display-md block text-bone"
                              : "display-md block text-muted transition-colors group-hover:text-bone"
                          }
                        >
                          {service.title}
                        </span>
                        <span className="mt-1 block text-sm text-muted lg:hidden">
                          {service.lede}
                        </span>
                      </span>
                      <ArrowUpRight className="size-5 text-gold" />
                    </Link>
                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="media-frame mb-5 block aspect-[4/3] lg:hidden"
                    >
                      <img src={service.image} alt={service.alt} />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="sticky top-28 hidden lg:col-span-5 lg:block">
              <div className="media-frame aspect-[4/5]">
                {services.map((service, index) => (
                  <img
                    key={service.slug}
                    src={service.image}
                    alt={index === active ? service.alt : ""}
                    className={
                      index === active
                        ? "absolute inset-0 h-full w-full object-cover opacity-100"
                        : "absolute inset-0 h-full w-full object-cover opacity-0"
                    }
                  />
                ))}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-6">
                  <p className="font-display tracking-[0.22em] text-gold uppercase">
                    {featured.index}
                  </p>
                  <p className="serif mt-2 text-2xl">{featured.lede}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap">
          <Kicker index="04" label="Proof, not promises" />
          <div className="mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="display-xl">
              Before.
              <br />
              Then razor.
            </h2>
            <p className="max-w-sm text-muted">
              Real properties. Drag sideways — edges, overgrowth, leaves, and
              Buffalo snow.
            </p>
          </div>
        </div>
        <div className="snap-row mt-10 pl-5 md:pl-10">
          {proofs.map((proof) => (
            <figure key={proof.src} className="snap-item">
              <div className="media-frame aspect-[3/2]">
                <img src={proof.src} alt={proof.alt} />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between gap-4">
                <span className="display-md">{proof.caption}</span>
                <span className="hidden max-w-xs text-right text-sm text-muted sm:block">
                  {proof.note}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="wrap mt-8">
          <Link to="/work" className="btn btn-ghost">
            Full gallery
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-t border-line py-20 md:py-28">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Kicker index="05" label="Verified reviews" />
              <h2 className="display-xl mt-4">
                5.0.
                <br />
                Said out loud.
              </h2>
            </div>
            <a href={googleReviews} className="btn btn-ghost" target="_blank" rel="noreferrer">
              Google reviews
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <blockquote key={review.name} className="glass reveal rounded-card p-6 md:p-8">
                <div className="flex gap-1 text-gold" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="size-4 fill-gold" />
                  ))}
                </div>
                <p className="serif mt-6 text-2xl">“{review.quote}”</p>
                <footer className="mt-6 font-display tracking-[0.16em] text-muted uppercase">
                  {review.name} · {review.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-line">
        <img
          src="/media/lawn-edge.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-bg/75" />
        <div className="wrap relative grid gap-8 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-8">
            <Kicker index="06" label="Start your estimate" />
            <h2 className="display-xl mt-4">
              Call us
              <br />
              today.
            </h2>
            <p className="mt-6 max-w-lg text-muted">
              No pressure. No obligation. Tell us the property and the season —
              we’ll come back with a fast, honest number.
            </p>
          </div>
          <div className="flex flex-col items-start justify-end gap-3 md:col-span-4">
            <a href={phoneHref} className="btn btn-gold">
              {phoneDisplay}
            </a>
            <Link to="/contact" className="btn btn-ghost glass">
              Request a quote
              <ArrowUpRight className="size-4" />
            </Link>
            <p className="text-sm text-muted">Buffalo, NY & surrounding areas</p>
          </div>
        </div>
      </section>
    </main>
  );
}
