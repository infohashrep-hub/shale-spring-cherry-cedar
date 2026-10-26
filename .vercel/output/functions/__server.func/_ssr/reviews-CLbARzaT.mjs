import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Star } from "../_libs/lucide-react.mjs";
import { _ as reviews, d as googleReviews, t as Kicker } from "./shell-DC8Ic95J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reviews-CLbARzaT.js
var import_jsx_runtime = require_jsx_runtime();
function ReviewsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pt-28 md:pt-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap pb-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
					index: "05",
					label: "Verified reviews"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display-xl mt-4",
					children: [
						"5.0",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"on Google."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-muted",
					children: "Neighbors talking about Nick, Nick Jr., the cleanup, and the price. The rating on the original site is five stars. The sentences are theirs."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: googleReviews,
					target: "_blank",
					rel: "noreferrer",
					className: "btn btn-gold mt-8",
					children: "Read them on Google"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "wrap grid gap-4 pb-24 md:grid-cols-2",
			children: reviews.map((review, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "glass reveal rounded-card p-6 md:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 text-gold",
							"aria-label": "5 stars",
							children: Array.from({ length: 5 }).map((_, star) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-gold" }, star))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-gold",
							children: ["0", index + 1]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "serif mt-6 text-2xl md:text-3xl",
						children: [
							"“",
							review.quote,
							"”"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "mt-8 font-display tracking-[0.16em] text-muted uppercase",
						children: [
							review.name,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: " · "
							}),
							review.source
						]
					})
				]
			}, review.name))
		})]
	});
}
//#endregion
export { ReviewsPage as component };
