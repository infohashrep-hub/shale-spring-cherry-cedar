import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Phone, o as ArrowUpRight, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-DC8Ic95J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var phoneDisplay = "(716) 319-7431";
var phoneHref = "tel:+17163197431";
var email = "nickrizzo.71@icloud.com";
var emailHref = "mailto:nickrizzo.71@icloud.com";
var googleReviews = "https://share.google/QcjRJZPE7KwTJGfPt";
var address = "2400 Seneca Street, Buffalo, NY 14210";
var hours = [
	{
		day: "Monday – Friday",
		time: "8:00 am – 4:00 pm"
	},
	{
		day: "Saturday",
		time: "9:00 am – 2:00 pm"
	},
	{
		day: "Sunday",
		time: "9:00 am – 2:00 pm"
	}
];
var services = [
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
			"The same crew, the same standard, every visit"
		],
		image: "/media/lawn-wide.jpg",
		alt: "A freshly striped Buffalo lawn with crisp edges along the sidewalk"
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
			"Pairs with spring and fall cleanups"
		],
		image: "/media/mulch.jpg",
		alt: "Fresh mulch against yellow and purple flowers in a garden bed"
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
			"Detail work on every maintenance visit"
		],
		image: "/media/lawn-edge.jpg",
		alt: "Tightly striped lawn meeting a clean concrete walk"
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
			"Cleanup hauled off, not left in the bed"
		],
		image: "/media/shrubs.jpg",
		alt: "Gloved hands trimming a dense green hedge with shears"
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
			"Fall prep before the snow sets in"
		],
		image: "/media/leaves.jpg",
		alt: "A lawn buried in autumn leaves beside a work truck"
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
			"The same phone number all winter"
		],
		image: "/media/snow-rig.jpg",
		alt: "A snowblower clearing a Buffalo driveway after a storm"
	}
];
function getService(slug) {
	return services.find((service) => service.slug === slug);
}
var pillars = [
	{
		index: "01",
		title: "Reliable & on time",
		body: "We show up when we say we will. No missed appointments. No excuses."
	},
	{
		index: "02",
		title: "Attention to detail",
		body: "Clean edges. Sharp lines. A professional finish every time."
	},
	{
		index: "03",
		title: "Fair & honest pricing",
		body: "Upfront pricing with no surprises. Quality work at a fair rate."
	}
];
var reviews = [
	{
		name: "Hedy R.",
		source: "Google review",
		quote: "Nick and Nick Jr. took extra care like my lawn was theirs. Prices are reasonable, great clean up, and super reliable."
	},
	{
		name: "Hannah L.",
		source: "Google review",
		quote: "My lawn looks great. Very professional, easy to work with, and excellent communication. I would absolutely recommend Razor Sharp Rizzo’s & Sons to anyone looking for quality lawn care."
	},
	{
		name: "Joanne B.",
		source: "Google review",
		quote: "Nick Rizzo did a great job on my place. He cut the lawn beautifully and cleaned up a backyard that was badly overgrown while I was away. Very reliable, great pricing, and excellent attention to detail."
	},
	{
		name: "Elisia R.",
		source: "Thumbtack",
		quote: "We agreed to mowing twice a month plus some extra work on landscaping. They really took extra care to do a nice job with edging and cleanup."
	},
	{
		name: "Kristen M.",
		source: "Thumbtack",
		quote: "Every place I called wanted way too much money and someone told me to give Nick a call. I wasn’t disappointed. Amazing job, a great price, very professional, and the work was done with quality."
	}
];
var proofs = [
	{
		src: "/media/ba-walk.jpg",
		alt: "Before and after of a sidewalk edge, from ragged grass to a razor line",
		caption: "Walk edges",
		note: "The line against concrete is the whole impression."
	},
	{
		src: "/media/ba-corner.jpg",
		alt: "Before and after of a corner lawn cleaned and edged to the sidewalk",
		caption: "Corner cuts",
		note: "Where two walks meet, the turf should stop on purpose."
	},
	{
		src: "/media/ba-fence.jpg",
		alt: "Before and after of tall grass along a fence cut down to a clean strip",
		caption: "Fence lines",
		note: "Overgrowth along the fence, brought back to a maintained strip."
	},
	{
		src: "/media/ba-overgrown.jpg",
		alt: "Before and after of an overgrown side yard restored to mowed lawn",
		caption: "Overgrown yards",
		note: "A side lot that had gone wild, cut back and finished."
	},
	{
		src: "/media/ba-leaves.jpg",
		alt: "Before and after of a leaf-covered front lawn restored for fall",
		caption: "Fall cleanups",
		note: "Leaves off the lawn, beds redefined, walks clear."
	},
	{
		src: "/media/ba-snow.jpg",
		alt: "Before and after of a snow-covered driveway plowed open",
		caption: "Snow routes",
		note: "A buried drive opened so the day can start."
	}
];
var gallery = [
	{
		src: "/media/lawn-wide.jpg",
		alt: "Wide striped residential lawn in Buffalo",
		label: "Season striping"
	},
	{
		src: "/media/lawn-edge.jpg",
		alt: "Diagonal mow stripes beside a brick house",
		label: "Curb finish"
	},
	{
		src: "/media/mulch.jpg",
		alt: "Mulched bed with pansies",
		label: "Mulch & color"
	},
	{
		src: "/media/shrubs.jpg",
		alt: "Hedge being shaped with hand shears",
		label: "Shrub work"
	},
	{
		src: "/media/leaves.jpg",
		alt: "Autumn leaves covering a lawn before cleanup",
		label: "Before the rake"
	},
	{
		src: "/media/snow-rig.jpg",
		alt: "Snow removal equipment on a cleared Buffalo street",
		label: "Winter crew"
	},
	...proofs.map((proof) => ({
		src: proof.src,
		alt: proof.alt,
		label: proof.caption
	}))
];
var areas = [
	{
		name: "Buffalo",
		note: "Home routes"
	},
	{
		name: "West Seneca",
		note: "Surrounding"
	},
	{
		name: "South Buffalo",
		note: "Surrounding"
	},
	{
		name: "Lackawanna",
		note: "Surrounding"
	},
	{
		name: "Cheektowaga",
		note: "Surrounding"
	},
	{
		name: "Sloan",
		note: "Surrounding"
	},
	{
		name: "Blasdell",
		note: "Surrounding"
	},
	{
		name: "Hamburg",
		note: "Surrounding"
	},
	{
		name: "Orchard Park",
		note: "Surrounding"
	},
	{
		name: "Lancaster",
		note: "Surrounding"
	},
	{
		name: "Depew",
		note: "Surrounding"
	},
	{
		name: "Kaisertown",
		note: "Surrounding"
	}
];
var marqueeServices = [
	"Lawn mowing",
	"Mulching",
	"Bed redefining",
	"Edging",
	"Shrub trimming",
	"Spring cleanup",
	"Fall cleanup",
	"Snow removal",
	"Buffalo, NY"
];
var marqueePlaces = areas.map((area) => area.name);
var faqs = [
	{
		q: "How do I get a price?",
		a: "Call, text, or send the estimate form. You’ll get a fast, honest quote — upfront, with no surprises and no obligation."
	},
	{
		q: "Do you take one-time jobs or only routes?",
		a: "Both. One-time cuts and cleanups, plus weekly and biweekly maintenance through the season."
	},
	{
		q: "Do you plow in the winter?",
		a: "Yes. Prompt plowing and de-icing for Buffalo residential and commercial properties, so you are not snowed in."
	},
	{
		q: "Who actually does the work?",
		a: "Razor Sharp Rizzo & Sons is a family business. Nick and Nick Jr. treat every property like it is their own, and they don’t rush a job to get off the lawn."
	},
	{
		q: "When can I reach you?",
		a: "Monday through Friday, 8:00 am to 4:00 pm. Saturday and Sunday, 9:00 am to 2:00 pm. Call or text (716) 319-7431."
	}
];
var links = [
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/work",
		label: "The Work"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/reviews",
		label: "Reviews"
	},
	{
		to: "/areas",
		label: "Areas"
	}
];
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		className,
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M20 54C8 40 8 18 30 8c-2 16-6 28-10 46Z",
			fill: "currentColor"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M32 56C24 38 32 16 54 10c-4 20-12 34-22 46Z",
			fill: "currentColor",
			opacity: "0.72"
		})]
	});
}
function Marquee({ items, reverse = false }) {
	const row = [...items, ...items];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "marquee-mask",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: reverse ? "marquee-track reverse" : "marquee-track",
			children: row.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-6 px-4 py-3 font-display text-sm tracking-[0.22em] text-bone uppercase",
				children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-gold",
					"aria-hidden": "true",
					children: "/"
				})]
			}, `${item}-${index}`))
		})
	});
}
function SiteMarquee({ items = marqueeServices, reverse = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
		items,
		reverse
	});
}
function SitePlacesMarquee() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {
		items: marqueePlaces,
		reverse: true
	});
}
function Header() {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: scrolled || open ? "glass" : "bg-transparent",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap flex h-16 items-center justify-between gap-4 md:h-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex items-center gap-2 text-bone no-underline",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-8 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "leading-none",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-lg tracking-wide uppercase",
								children: "Razor Sharp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-xs tracking-[0.28em] text-muted uppercase",
								children: "Rizzo & Sons"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-7 lg:flex",
						"aria-label": "Primary",
						children: links.map((link) => {
							const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								className: active ? "font-display text-sm tracking-[0.18em] text-gold uppercase no-underline" : "font-display text-sm tracking-[0.18em] text-bone uppercase no-underline transition-colors hover:text-gold",
								children: link.label
							}, link.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: phoneHref,
								className: "btn btn-ghost hidden md:inline-flex",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "size-4",
									"aria-hidden": "true"
								}), phoneDisplay]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "btn btn-gold hidden sm:inline-flex",
								children: ["Estimate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4",
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex size-12 items-center justify-center rounded-full border border-line text-bone lg:hidden",
								"aria-expanded": open,
								"aria-controls": "mobile-nav",
								onClick: () => setOpen((value) => !value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: open ? "Close menu" : "Open menu"
								}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })]
							})
						]
					})
				]
			})
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "mobile-nav",
			className: "glass fixed inset-0 z-50 flex flex-col px-6 pt-6 lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display tracking-[0.22em] text-gold uppercase",
						children: "Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "inline-flex size-12 items-center justify-center rounded-full border border-line",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Close menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-10 flex flex-col gap-2",
					"aria-label": "Mobile",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "display-lg text-bone no-underline",
							children: "Home"
						}),
						links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: link.to,
							className: "display-lg text-bone no-underline",
							children: link.label
						}, link.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "display-lg text-gold no-underline",
							children: "Estimate"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: phoneHref,
					className: "btn btn-gold mt-auto mb-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }),
						"Call ",
						phoneDisplay
					]
				})
			]
		}) : null]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line pb-28 md:pb-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePlacesMarquee, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap grid gap-12 py-16 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-10 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-display text-3xl leading-none tracking-wide uppercase",
									children: [
										"Razor Sharp",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Rizzo"
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-sm text-muted",
								children: "Razor Sharp Rizzo & Sons LLC. Professional lawn and snow services in Buffalo, NY. Locally owned and operated."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "serif mt-6 text-2xl text-bone",
								children: "If it ain’t razor sharp, it ain’t Rizzo’s."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "kicker",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule" }), "Visit"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-5 space-y-3 text-sm",
							children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								className: "text-bone no-underline hover:text-gold",
								children: link.label
							}) }, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "text-bone no-underline hover:text-gold",
								children: "Free estimate"
							}) })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "kicker",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule" }), "Studio hours"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 space-y-2 text-sm",
								children: hours.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between gap-6 border-b border-line py-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: slot.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: slot.time
									})]
								}, slot.day))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-sm text-muted",
								children: address
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: phoneHref,
										className: "text-bone no-underline hover:text-gold",
										children: phoneDisplay
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted",
										children: " · "
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: emailHref,
										className: "text-bone no-underline hover:text-gold",
										children: email
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap flex flex-col gap-2 border-t border-line py-6 text-xs tracking-wide text-muted uppercase md:flex-row md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Razor Sharp Rizzo & Sons LLC"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Buffalo, NY & surrounding areas" })]
			})
		]
	});
}
function MobileDock() {
	if (useRouterState({ select: (state) => state.location.pathname }) === "/contact") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-x-3 bottom-3 z-30 flex gap-2 md:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: phoneHref,
			className: "btn btn-ghost glass flex-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "Call"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/contact",
			className: "btn btn-gold flex-1",
			children: "Free estimate"
		})]
	});
}
function SiteShell({ children }) {
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	(0, import_react.useEffect)(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-bg text-bone",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-enter",
				children
			}, pathname),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileDock, {})
		]
	});
}
function Kicker({ index, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "kicker",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: index }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted",
				children: label
			})
		]
	});
}
//#endregion
export { reviews as _, areas as a, faqs as c, googleReviews as d, hours as f, proofs as g, pillars as h, address as i, gallery as l, phoneHref as m, SiteMarquee as n, email as o, phoneDisplay as p, SiteShell as r, emailHref as s, Kicker as t, getService as u, services as v };
