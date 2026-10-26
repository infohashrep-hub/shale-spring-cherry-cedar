import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Kicker } from "@/components/site/shell";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Razor Sharp Rizzo" },
      {
        name: "description",
        content:
          "Lawn mowing, mulching, edging, shrub trimming, spring and fall cleanups, and snow removal in Buffalo, NY.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="wrap pb-12">
        <Kicker index="03" label="Services" />
        <h1 className="display-xl mt-4 max-w-4xl">
          The work,
          <br />
          season by season.
        </h1>
        <p className="mt-6 max-w-xl text-muted">
          Six services. Same crew. Buffalo lawns in the warm months, Buffalo
          drives when the lake-effect hits. Every visit is priced up front.
        </p>
      </section>

      <div>
        {services.map((service, index) => {
          const flip = index % 2 === 1;
          return (
            <article
              key={service.slug}
              className="border-t border-line"
            >
              <div
                className={
                  flip
                    ? "wrap grid items-center gap-8 py-12 md:grid-cols-2 md:py-20"
                    : "wrap grid items-center gap-8 py-12 md:grid-cols-2 md:py-20"
                }
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className={
                    flip
                      ? "media-frame order-1 aspect-[4/5] md:order-2"
                      : "media-frame order-1 aspect-[4/5]"
                  }
                >
                  <img src={service.image} alt={service.alt} />
                </Link>
                <div className={flip ? "order-2 md:order-1" : "order-2"}>
                  <p className="font-display tracking-[0.22em] text-gold">
                    {service.index}
                  </p>
                  <h2 className="display-lg mt-3">{service.title}</h2>
                  <p className="serif mt-4 text-2xl text-bone">{service.lede}</p>
                  <p className="mt-4 text-muted">{service.body}</p>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="btn btn-gold mt-8"
                  >
                    View details
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section className="wrap py-20">
        <div className="glass rounded-card flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center">
          <div>
            <p className="kicker">Next</p>
            <h2 className="display-lg mt-3">Not sure which service?</h2>
            <p className="mt-3 max-w-lg text-muted">
              Tell us what the property looks like. We’ll tell you what it
              needs — and what it costs — before anyone starts a mower.
            </p>
          </div>
          <Link to="/contact" className="btn btn-gold">
            Free estimate
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
