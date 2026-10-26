import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Kicker } from "@/components/site/shell";
import { getService, services } from "@/components/site/data";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = getService(params.slug);
    return {
      meta: [
        {
          title: service
            ? `${service.title} — Razor Sharp Rizzo`
            : "Service — Razor Sharp Rizzo",
        },
        {
          name: "description",
          content: service?.body ?? "Lawn and snow services in Buffalo, NY.",
        },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <main className="wrap pt-36 pb-24">
        <Kicker index="00" label="Missing" />
        <h1 className="display-xl mt-4">That service isn’t on the route.</h1>
        <Link to="/services" className="btn btn-gold mt-8">
          All services
        </Link>
      </main>
    );
  }

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <main>
      <section className="relative flex min-h-[78svh] items-end overflow-hidden pt-24">
        <img
          src={service.image}
          alt={service.alt}
          className="ken absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/20" />
        <div className="wrap relative pb-12">
          <Kicker index={service.index} label="Service" />
          <h1 className="display-xl mt-4 max-w-4xl">{service.title}</h1>
          <p className="serif mt-4 max-w-xl text-2xl md:text-3xl">{service.lede}</p>
        </div>
      </section>

      <section className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="text-lg text-bone">{service.body}</p>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {service.points.map((point) => (
              <li key={point} className="flex gap-4 py-4">
                <span className="font-display text-gold">/</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="md:col-span-5">
          <div className="glass sticky top-28 rounded-card p-6 md:p-8">
            <p className="kicker">
              <span className="rule" />
              Book this
            </p>
            <p className="serif mt-4 text-3xl">
              A free estimate. No pressure. No obligation.
            </p>
            <p className="mt-4 text-sm text-muted">
              Weekly, biweekly, or a single visit. Pricing is upfront before
              the first cut, cleanup, or plow.
            </p>
            <Link to="/contact" className="btn btn-gold mt-6 w-full">
              Start your estimate
              <ArrowUpRight className="size-4" />
            </Link>
            <Link to="/work" className="btn btn-ghost mt-3 w-full">
              See the work
            </Link>
          </div>
        </aside>
      </section>

      <section className="border-t border-line py-16">
        <div className="wrap">
          <Kicker index="+" label="Also on the route" />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                to="/services/$slug"
                params={{ slug: item.slug }}
                className="group no-underline"
              >
                <div className="media-frame aspect-[4/3]">
                  <img src={item.image} alt={item.alt} />
                </div>
                <p className="mt-3 font-display text-gold">{item.index}</p>
                <p className="display-md text-bone transition-colors group-hover:text-gold">
                  {item.nav}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
