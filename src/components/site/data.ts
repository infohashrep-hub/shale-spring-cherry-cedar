export const phoneDisplay = "(716) 319-7431";
export const phoneHref = "tel:+17163197431";
export const email = "nickrizzo.71@icloud.com";
export const emailHref = "mailto:nickrizzo.71@icloud.com";
export const googleReviews = "https://share.google/QcjRJZPE7KwTJGfPt";
export const address = "2400 Seneca Street, Buffalo, NY 14210";

export const hours = [
  { day: "Monday – Friday", time: "8:00 am – 4:00 pm" },
  { day: "Saturday", time: "9:00 am – 2:00 pm" },
  { day: "Sunday", time: "9:00 am – 2:00 pm" },
];

export type Service = {
  slug: string;
  index: string;
  title: string;
  nav: string;
  lede: string;
  body: string;
  points: string[];
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    slug: "lawn-mowing",
    index: "01",
    title: "Lawn Mowing & Maintenance",
    nav: "Mowing",
    lede: "Thick turf. Sharp stripes. On the day we said.",
    body: "Professional lawn mowing and precision edging in Buffalo, NY. We keep your grass thick, healthy, and perfectly striped all season long with reliable, on-time service. One-time cuts, weekly routes, and biweekly routes — we don’t rush a lawn just to get to the next driveway.",
    points: [
      "Weekly, biweekly, and one-time cuts",
      "Striping that reads from the street",
      "Clippings cleared off walks and drives",
      "The same crew, the same standard, every visit",
    ],
    image: "/media/lawn-wide.jpg",
    alt: "A freshly striped Buffalo lawn with crisp edges along the sidewalk",
  },
  {
    slug: "mulching",
    index: "02",
    title: "Mulching & Bed Redefining",
    nav: "Mulch",
    lede: "Beds with a finished edge, not a leftover ring of dirt.",
    body: "Enhance curb appeal and protect your plants with premium mulch installation and expert bed-edge redefining. We cut the line, pull the weeds back, and lay mulch so the bed looks intentional — not dumped.",
    points: [
      "Bed edges cut clean against turf",
      "Mulch installed, not piled on the plants",
      "A finished look that holds through the season",
      "Pairs with spring and fall cleanups",
    ],
    image: "/media/mulch.jpg",
    alt: "Fresh mulch against yellow and purple flowers in a garden bed",
  },
  {
    slug: "edging",
    index: "03",
    title: "Professional Edging & Trimming",
    nav: "Edging",
    lede: "Definition is everything.",
    body: "We provide sharp, clean edges along walkways and drives for a crisp, high-end landscape appearance. The mow is only half the job — the line where grass meets concrete is what makes a property look finished.",
    points: [
      "Walkways, drives, and curb lines",
      "String trimming that doesn’t scalp the lawn",
      "Before-and-after edges you can see from the porch",
      "Detail work on every maintenance visit",
    ],
    image: "/media/lawn-edge.jpg",
    alt: "Tightly striped lawn meeting a clean concrete walk",
  },
  {
    slug: "trimming",
    index: "04",
    title: "Bush & Tree Trimming",
    nav: "Shrubs",
    lede: "Shape, health, and a line you meant to cut.",
    body: "Artistic and functional pruning. We maintain the health and aesthetic structure of your ornamental shrubs and trees, and we handle bush and shrub removal when a bed has gone past a trim. Heights stay where you want them — not where last year’s growth left them.",
    points: [
      "Ornamental shrubs and small trees",
      "Structural pruning, not a flat buzz",
      "Bush and shrub removal when it’s time",
      "Cleanup hauled off, not left in the bed",
    ],
    image: "/media/shrubs.jpg",
    alt: "Gloved hands trimming a dense green hedge with shears",
  },
  {
    slug: "cleanups",
    index: "05",
    title: "Spring & Fall Clean-ups",
    nav: "Cleanups",
    lede: "The property, ready for the next season.",
    body: "Seasonal debris removal and preparation. We make sure the property is ready for Buffalo winter and brought back to life in spring — leaves, beds, edges, and the corners other crews skip. Overgrown yards and post-trip cleanups are welcome.",
    points: [
      "Leaf and debris removal",
      "Bed cleanup and first cut of the year",
      "Overgrown yards brought back",
      "Fall prep before the snow sets in",
    ],
    image: "/media/leaves.jpg",
    alt: "A lawn buried in autumn leaves beside a work truck",
  },
  {
    slug: "snow-removal",
    index: "06",
    title: "Reliable Snow Removal",
    nav: "Snow",
    lede: "Don’t get snowed in.",
    body: "Prompt plowing and de-icing for Buffalo residential and commercial properties. Driveways opened, walks cleared, and ice treated so the house is usable before the day starts. We treat every driveway like our family has to walk on it.",
    points: [
      "Residential and commercial plowing",
      "Walks, steps, and de-icing",
      "Storm response, not a maybe-tomorrow",
      "The same phone number all winter",
    ],
    image: "/media/snow-rig.jpg",
    alt: "A snowblower clearing a Buffalo driveway after a storm",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const pillars = [
  {
    index: "01",
    title: "Reliable & on time",
    body: "We show up when we say we will. No missed appointments. No excuses.",
  },
  {
    index: "02",
    title: "Attention to detail",
    body: "Clean edges. Sharp lines. A professional finish every time.",
  },
  {
    index: "03",
    title: "Fair & honest pricing",
    body: "Upfront pricing with no surprises. Quality work at a fair rate.",
  },
];

export const reviews = [
  {
    name: "Hedy R.",
    source: "Google review",
    quote:
      "Nick and Nick Jr. took extra care like my lawn was theirs. Prices are reasonable, great clean up, and super reliable.",
  },
  {
    name: "Hannah L.",
    source: "Google review",
    quote:
      "My lawn looks great. Very professional, easy to work with, and excellent communication. I would absolutely recommend Razor Sharp Rizzo’s & Sons to anyone looking for quality lawn care.",
  },
  {
    name: "Joanne B.",
    source: "Google review",
    quote:
      "Nick Rizzo did a great job on my place. He cut the lawn beautifully and cleaned up a backyard that was badly overgrown while I was away. Very reliable, great pricing, and excellent attention to detail.",
  },
  {
    name: "Elisia R.",
    source: "Thumbtack",
    quote:
      "We agreed to mowing twice a month plus some extra work on landscaping. They really took extra care to do a nice job with edging and cleanup.",
  },
  {
    name: "Kristen M.",
    source: "Thumbtack",
    quote:
      "Every place I called wanted way too much money and someone told me to give Nick a call. I wasn’t disappointed. Amazing job, a great price, very professional, and the work was done with quality.",
  },
];

export const proofs = [
  {
    src: "/media/ba-walk.jpg",
    alt: "Before and after of a sidewalk edge, from ragged grass to a razor line",
    caption: "Walk edges",
    note: "The line against concrete is the whole impression.",
  },
  {
    src: "/media/ba-corner.jpg",
    alt: "Before and after of a corner lawn cleaned and edged to the sidewalk",
    caption: "Corner cuts",
    note: "Where two walks meet, the turf should stop on purpose.",
  },
  {
    src: "/media/ba-fence.jpg",
    alt: "Before and after of tall grass along a fence cut down to a clean strip",
    caption: "Fence lines",
    note: "Overgrowth along the fence, brought back to a maintained strip.",
  },
  {
    src: "/media/ba-overgrown.jpg",
    alt: "Before and after of an overgrown side yard restored to mowed lawn",
    caption: "Overgrown yards",
    note: "A side lot that had gone wild, cut back and finished.",
  },
  {
    src: "/media/ba-leaves.jpg",
    alt: "Before and after of a leaf-covered front lawn restored for fall",
    caption: "Fall cleanups",
    note: "Leaves off the lawn, beds redefined, walks clear.",
  },
  {
    src: "/media/ba-snow.jpg",
    alt: "Before and after of a snow-covered driveway plowed open",
    caption: "Snow routes",
    note: "A buried drive opened so the day can start.",
  },
];

export const gallery = [
  { src: "/media/lawn-wide.jpg", alt: "Wide striped residential lawn in Buffalo", label: "Season striping" },
  { src: "/media/lawn-edge.jpg", alt: "Diagonal mow stripes beside a brick house", label: "Curb finish" },
  { src: "/media/mulch.jpg", alt: "Mulched bed with pansies", label: "Mulch & color" },
  { src: "/media/shrubs.jpg", alt: "Hedge being shaped with hand shears", label: "Shrub work" },
  { src: "/media/leaves.jpg", alt: "Autumn leaves covering a lawn before cleanup", label: "Before the rake" },
  { src: "/media/snow-rig.jpg", alt: "Snow removal equipment on a cleared Buffalo street", label: "Winter crew" },
  ...proofs.map((proof) => ({ src: proof.src, alt: proof.alt, label: proof.caption })),
];

export const areas = [
  { name: "Buffalo", note: "Home routes" },
  { name: "West Seneca", note: "Surrounding" },
  { name: "South Buffalo", note: "Surrounding" },
  { name: "Lackawanna", note: "Surrounding" },
  { name: "Cheektowaga", note: "Surrounding" },
  { name: "Sloan", note: "Surrounding" },
  { name: "Blasdell", note: "Surrounding" },
  { name: "Hamburg", note: "Surrounding" },
  { name: "Orchard Park", note: "Surrounding" },
  { name: "Lancaster", note: "Surrounding" },
  { name: "Depew", note: "Surrounding" },
  { name: "Kaisertown", note: "Surrounding" },
];

export const marqueeServices = [
  "Lawn mowing",
  "Mulching",
  "Bed redefining",
  "Edging",
  "Shrub trimming",
  "Spring cleanup",
  "Fall cleanup",
  "Snow removal",
  "Buffalo, NY",
];

export const marqueePlaces = areas.map((area) => area.name);

export const faqs = [
  {
    q: "How do I get a price?",
    a: "Call, text, or send the estimate form. You’ll get a fast, honest quote — upfront, with no surprises and no obligation.",
  },
  {
    q: "Do you take one-time jobs or only routes?",
    a: "Both. One-time cuts and cleanups, plus weekly and biweekly maintenance through the season.",
  },
  {
    q: "Do you plow in the winter?",
    a: "Yes. Prompt plowing and de-icing for Buffalo residential and commercial properties, so you are not snowed in.",
  },
  {
    q: "Who actually does the work?",
    a: "Razor Sharp Rizzo & Sons is a family business. Nick and Nick Jr. treat every property like it is their own, and they don’t rush a job to get off the lawn.",
  },
  {
    q: "When can I reach you?",
    a: "Monday through Friday, 8:00 am to 4:00 pm. Saturday and Sunday, 9:00 am to 2:00 pm. Call or text (716) 319-7431.",
  },
];
