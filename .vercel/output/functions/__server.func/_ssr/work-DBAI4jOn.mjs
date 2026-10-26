import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { g as proofs, l as gallery, t as Kicker } from "./shell-DC8Ic95J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-DBAI4jOn.js
var import_jsx_runtime = require_jsx_runtime();
function WorkPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pt-28 md:pt-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "wrap pb-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						index: "04",
						label: "The work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl mt-4",
						children: [
							"Lines you",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"can see."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl text-muted",
						children: "Photographs from the properties — striping, mulch, hedges, leaves, and the plow. The comparisons are the job, not a filter."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "wrap grid gap-4 pb-16 md:grid-cols-2",
				children: proofs.map((proof) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "media-frame aspect-[3/2]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: proof.src,
							alt: proof.alt
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-3 flex items-baseline justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display-md",
							children: proof.caption
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "max-w-xs text-right text-sm text-muted",
							children: proof.note
						})]
					})]
				}, proof.src))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
							index: "+",
							label: "On the ground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3",
							children: gallery.filter((shot) => !shot.src.includes("/ba-")).map((shot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
								className: "mb-4 break-inside-avoid",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: shot.src,
									alt: shot.alt,
									className: "w-full rounded-card"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
									className: "mt-2 font-display text-xs tracking-[0.16em] text-muted uppercase",
									children: shot.label
								})]
							}, shot.src + shot.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "btn btn-gold mt-6",
							children: ["Get this finish", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})
					]
				})
			})
		]
	});
}
//#endregion
export { WorkPage as component };
