import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Kicker, v as services } from "./shell-DC8Ic95J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CeHHQWRb.js
var import_jsx_runtime = require_jsx_runtime();
function ServicesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pt-28 md:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "wrap pb-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						index: "03",
						label: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl mt-4 max-w-4xl",
						children: [
							"The work,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"season by season."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-muted",
						children: "Six services. Same crew. Buffalo lawns in the warm months, Buffalo drives when the lake-effect hits. Every visit is priced up front."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: services.map((service, index) => {
				const flip = index % 2 === 1;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "border-t border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: flip ? "wrap grid items-center gap-8 py-12 md:grid-cols-2 md:py-20" : "wrap grid items-center gap-8 py-12 md:grid-cols-2 md:py-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: service.slug },
							className: flip ? "media-frame order-1 aspect-[4/5] md:order-2" : "media-frame order-1 aspect-[4/5]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.image,
								alt: service.alt
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: flip ? "order-2 md:order-1" : "order-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display tracking-[0.22em] text-gold",
									children: service.index
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "display-lg mt-3",
									children: service.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "serif mt-4 text-2xl text-bone",
									children: service.lede
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-muted",
									children: service.body
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/$slug",
									params: { slug: service.slug },
									className: "btn btn-gold mt-8",
									children: ["View details", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
								})
							]
						})]
					})
				}, service.slug);
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "wrap py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass rounded-card flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "kicker",
							children: "Next"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-3",
							children: "Not sure which service?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-lg text-muted",
							children: "Tell us what the property looks like. We’ll tell you what it needs — and what it costs — before anyone starts a mower."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "btn btn-gold",
						children: ["Free estimate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})]
				})
			})
		]
	});
}
//#endregion
export { ServicesPage as component };
