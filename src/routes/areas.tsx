import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Kicker } from "@/components/site/shell";
import { address, areas, phoneDisplay, phoneHref } from "@/components/site/data";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Service Area — Razor Sharp Rizzo" },
      {
        name: "description",
        content:
          "Lawn care and snow removal for Buffalo, NY and surrounding communities. Call to confirm your street.",
      },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="wrap pb-8">
        <Kicker index="06" label="Service area" />
        <h1 className="display-xl mt-4">
          Buffalo
          <br />
          & the streets
          <br />
          around it.
        </h1>
        <p className="mt-6 max-w-xl text-muted">
          Home base is Buffalo. Surrounding communities are on the route when
          the schedule allows. If you’re close and don’t see your town, ask —
          the estimate confirms the street.
        </p>
        <p className="mt-4 text-sm text-muted">{address}</p>
      </section>

      <section className="wrap pb-20">
        <ol className="border-t border-line">
          {areas.map((area, index) => (
            <li
              key={area.name}
              className="flex items-baseline justify-between gap-4 border-b border-line py-5 md:py-7"
            >
              <span className="font-display text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="display-lg flex-1">{area.name}</span>
              <span className="text-sm text-muted">{area.note}</span>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href={phoneHref} className="btn btn-gold">
            Call {phoneDisplay}
          </a>
          <Link to="/contact" className="btn btn-ghost">
            Check my address
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
