import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { c as faqs, h as pillars, t as Kicker } from "./shell-DC8Ic95J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DoImurmM.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pt-28 md:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "wrap grid items-end gap-10 pb-16 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						index: "01",
						label: "Ownership"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl mt-4",
						children: [
							"Locally",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"owned.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Actually."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted md:col-span-5",
					children: "Razor Sharp Rizzo & Sons LLC is a Buffalo family business. Nick and Nick Jr. run the routes. What sets the work apart is attention to detail and pride in every property — they don’t rush jobs."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "wrap grid gap-4 pb-16 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "media-frame aspect-[4/5] md:col-span-7 md:aspect-[16/11]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/lawn-edge.jpg",
						alt: "A finished, striped lawn beside a Buffalo home"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "media-frame aspect-[4/5] md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/snow-rig.jpg",
						alt: "Snow equipment clearing a winter property"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap grid gap-12 py-16 md:grid-cols-2 md:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						index: "02",
						label: "How the work feels"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "serif mt-6 text-3xl md:text-5xl",
						children: "Every lawn like it’s ours. Every driveway like the family has to walk it."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "We specialize in recurring lawn maintenance, spring cleanups, edging, sharp striping, bush and shrub work, bed redefining, fall cleanups, and dependable snow removal through Buffalo’s toughest winters." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "One-time, weekly, and biweekly service. We show up when we say we will. Clean edges. Sharp lines. Upfront pricing with no surprises." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Razor Sharp Rizzo is built on reliability, clean work, and honest pricing. Professional results, all year long." })
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap grid gap-px bg-line md:grid-cols-3",
					children: pillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-bg p-6 md:p-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-gold",
								children: pillar.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-md mt-4",
								children: pillar.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted",
								children: pillar.body
							})
						]
					}, pillar.index))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "wrap py-16 md:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						index: "03",
						label: "Questions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-4",
						children: "Straight answers."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 border-t border-line",
						children: faqs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
							className: "faq",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", { children: item.q }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.a })]
						}, item.q))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "btn btn-gold mt-10",
						children: ["Talk to Nick", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})
				]
			})
		]
	});
}
//#endregion
export { AboutPage as component };
