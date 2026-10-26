import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Kicker } from "@/components/site/shell";
import { faqs, pillars } from "@/components/site/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Razor Sharp Rizzo & Sons" },
      {
        name: "description",
        content:
          "Family-owned lawn and snow service in Buffalo. Nick and Nick Jr. Razor Sharp Rizzo & Sons LLC.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="wrap grid items-end gap-10 pb-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <Kicker index="01" label="Ownership" />
          <h1 className="display-xl mt-4">
            Locally
            <br />
            owned.
            <br />
            Actually.
          </h1>
        </div>
        <p className="text-muted md:col-span-5">
          Razor Sharp Rizzo & Sons LLC is a Buffalo family business. Nick and
          Nick Jr. run the routes. What sets the work apart is attention to
          detail and pride in every property — they don’t rush jobs.
        </p>
      </section>

      <section className="wrap grid gap-4 pb-16 md:grid-cols-12">
        <div className="media-frame aspect-[4/5] md:col-span-7 md:aspect-[16/11]">
          <img
            src="/media/lawn-edge.jpg"
            alt="A finished, striped lawn beside a Buffalo home"
          />
        </div>
        <div className="media-frame aspect-[4/5] md:col-span-5">
          <img
            src="/media/snow-rig.jpg"
            alt="Snow equipment clearing a winter property"
          />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="wrap grid gap-12 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Kicker index="02" label="How the work feels" />
            <p className="serif mt-6 text-3xl md:text-5xl">
              Every lawn like it’s ours. Every driveway like the family has to
              walk it.
            </p>
          </div>
          <div className="space-y-6 text-muted">
            <p>
              We specialize in recurring lawn maintenance, spring cleanups,
              edging, sharp striping, bush and shrub work, bed redefining, fall
              cleanups, and dependable snow removal through Buffalo’s toughest
              winters.
            </p>
            <p>
              One-time, weekly, and biweekly service. We show up when we say we
              will. Clean edges. Sharp lines. Upfront pricing with no
              surprises.
            </p>
            <p>
              Razor Sharp Rizzo is built on reliability, clean work, and honest
              pricing. Professional results, all year long.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="wrap grid gap-px bg-line md:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.index} className="bg-bg p-6 md:p-10">
              <p className="font-display text-gold">{pillar.index}</p>
              <h2 className="display-md mt-4">{pillar.title}</h2>
              <p className="mt-3 text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap py-16 md:py-24">
        <Kicker index="03" label="Questions" />
        <h2 className="display-lg mt-4">Straight answers.</h2>
        <div className="mt-8 border-t border-line">
          {faqs.map((item) => (
            <details key={item.q} className="faq">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <Link to="/contact" className="btn btn-gold mt-10">
          Talk to Nick
          <ArrowUpRight className="size-4" />
        </Link>
      </section>
    </main>
  );
}
