import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Kicker } from "@/components/site/shell";
import { googleReviews, reviews } from "@/components/site/data";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Razor Sharp Rizzo" },
      {
        name: "description",
        content:
          "5.0 rated lawn care in Buffalo. Google and Thumbtack reviews for Razor Sharp Rizzo & Sons.",
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <main className="pt-28 md:pt-36">
      <section className="wrap pb-12">
        <Kicker index="05" label="Verified reviews" />
        <h1 className="display-xl mt-4">
          5.0
          <br />
          on Google.
        </h1>
        <p className="mt-6 max-w-xl text-muted">
          Neighbors talking about Nick, Nick Jr., the cleanup, and the price.
          The rating on the original site is five stars. The sentences are
          theirs.
        </p>
        <a
          href={googleReviews}
          target="_blank"
          rel="noreferrer"
          className="btn btn-gold mt-8"
        >
          Read them on Google
        </a>
      </section>

      <section className="wrap grid gap-4 pb-24 md:grid-cols-2">
        {reviews.map((review, index) => (
          <blockquote
            key={review.name}
            className="glass reveal rounded-card p-6 md:p-10"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-1 text-gold" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="size-4 fill-gold" />
                ))}
              </div>
              <span className="font-display text-gold">
                0{index + 1}
              </span>
            </div>
            <p className="serif mt-6 text-2xl md:text-3xl">“{review.quote}”</p>
            <footer className="mt-8 font-display tracking-[0.16em] text-muted uppercase">
              {review.name}
              <span className="text-gold"> · </span>
              {review.source}
            </footer>
          </blockquote>
        ))}
      </section>
    </main>
  );
}
