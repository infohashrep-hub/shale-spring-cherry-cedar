import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Kicker } from "@/components/site/shell";
import { gallery, proofs } from "@/components/site/data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "The Work — Razor Sharp Rizzo" },
      {
        name: "description",
        content:
          "Before-and-after lawn edges, cleanups, and snow removal from Razor Sharp Rizzo in Buffalo, NY.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="wrap pb-10">
        <Kicker index="04" label="The work" />
        <h1 className="display-xl mt-4">
          Lines you
          <br />
          can see.
        </h1>
        <p className="mt-6 max-w-xl text-muted">
          Photographs from the properties — striping, mulch, hedges, leaves,
          and the plow. The comparisons are the job, not a filter.
        </p>
      </section>

      <section className="wrap grid gap-4 pb-16 md:grid-cols-2">
        {proofs.map((proof) => (
          <figure key={proof.src} className="reveal">
            <div className="media-frame aspect-[3/2]">
              <img src={proof.src} alt={proof.alt} />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4">
              <span className="display-md">{proof.caption}</span>
              <span className="max-w-xs text-right text-sm text-muted">{proof.note}</span>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="border-t border-line">
        <div className="wrap py-16">
          <Kicker index="+" label="On the ground" />
          <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {gallery
              .filter((shot) => !shot.src.includes("/ba-"))
              .map((shot) => (
              <figure key={shot.src + shot.label} className="mb-4 break-inside-avoid">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full rounded-card"
                />
                <figcaption className="mt-2 font-display text-xs tracking-[0.16em] text-muted uppercase">
                  {shot.label}
                </figcaption>
              </figure>
            ))}
          </div>
          <Link to="/contact" className="btn btn-gold mt-6">
            Get this finish
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
