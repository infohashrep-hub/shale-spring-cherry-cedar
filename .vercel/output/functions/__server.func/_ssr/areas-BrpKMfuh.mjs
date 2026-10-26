import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as areas, i as address, m as phoneHref, p as phoneDisplay, t as Kicker } from "./shell-DC8Ic95J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/areas-BrpKMfuh.js
var import_jsx_runtime = require_jsx_runtime();
function AreasPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "pt-28 md:pt-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
					index: "06",
					label: "Service area"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display-xl mt-4",
					children: [
						"Buffalo",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"& the streets",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"around it."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-muted",
					children: "Home base is Buffalo. Surrounding communities are on the route when the schedule allows. If you’re close and don’t see your town, ask — the estimate confirms the street."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted",
					children: address
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "border-t border-line",
				children: areas.map((area, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-4 border-b border-line py-5 md:py-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-gold",
							children: String(index + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display-lg flex-1",
							children: area.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-muted",
							children: area.note
						})
					]
				}, area.name))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: phoneHref,
					className: "btn btn-gold",
					children: ["Call ", phoneDisplay]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "btn btn-ghost",
					children: ["Check my address", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
				})]
			})]
		})]
	});
}
//#endregion
export { AreasPage as component };
