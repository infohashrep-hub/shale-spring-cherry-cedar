import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Kicker, u as getService, v as services } from "./shell-DC8Ic95J.mjs";
import { n as Route } from "./router-PukKoq0s.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-CbDfgqHK.js
var import_jsx_runtime = require_jsx_runtime();
function ServiceDetail() {
	const { slug } = Route.useParams();
	const service = getService(slug);
	if (!service) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "wrap pt-36 pb-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
				index: "00",
				label: "Missing"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-xl mt-4",
				children: "That service isn’t on the route."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/services",
				className: "btn btn-gold mt-8",
				children: "All services"
			})
		]
	});
	const others = services.filter((item) => item.slug !== service.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-[78svh] items-end overflow-hidden pt-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: service.image,
					alt: service.alt,
					className: "ken absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative pb-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
							index: service.index,
							label: "Service"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-xl mt-4 max-w-4xl",
							children: service.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif mt-4 max-w-xl text-2xl md:text-3xl",
							children: service.lede
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap grid gap-12 py-16 md:grid-cols-12 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-bone",
					children: service.body
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 divide-y divide-line border-y border-line",
					children: service.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-gold",
							children: "/"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
					}, point))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass sticky top-28 rounded-card p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "kicker",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule" }), "Book this"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif mt-4 text-3xl",
							children: "A free estimate. No pressure. No obligation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: "Weekly, biweekly, or a single visit. Pricing is upfront before the first cut, cleanup, or plow."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "btn btn-gold mt-6 w-full",
							children: ["Start your estimate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							className: "btn btn-ghost mt-3 w-full",
							children: "See the work"
						})
					]
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
					index: "+",
					label: "Also on the route"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: others.slice(0, 3).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: item.slug },
						className: "group no-underline",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "media-frame aspect-[4/3]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: item.image,
									alt: item.alt
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-gold",
								children: item.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "display-md text-bone transition-colors group-hover:text-gold",
								children: item.nav
							})
						]
					}, item.slug))
				})]
			})
		})
	] });
}
//#endregion
export { ServiceDetail as component };
