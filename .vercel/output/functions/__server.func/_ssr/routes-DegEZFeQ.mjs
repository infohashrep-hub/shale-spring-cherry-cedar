import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { o as ArrowUpRight, r as Star } from "../_libs/lucide-react.mjs";
import { _ as reviews, d as googleReviews, g as proofs, h as pillars, m as phoneHref, n as SiteMarquee, p as phoneDisplay, t as Kicker, v as services } from "./shell-DC8Ic95J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DegEZFeQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [active, setActive] = (0, import_react.useState)(0);
	const featured = services[active] ?? services[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative flex min-h-svh items-end overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/lawn-wide.jpg",
					alt: "Freshly striped lawn on a Buffalo residential street",
					className: "ken absolute inset-0 h-full w-full object-cover",
					fetchPriority: "high"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative z-10 pb-28 pt-32 md:pb-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "kicker",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule" }),
								"Buffalo, NY"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display-hero mt-4 max-w-5xl",
							children: [
								"Sharp",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"results.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Every",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"season."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base text-bone md:text-lg",
							children: "Fast, reliable service you can count on. Lawn care and snow removal for Buffalo — call or text for a free quote."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "btn btn-gold",
								children: ["Get a free estimate", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#services",
								className: "btn btn-ghost glass",
								children: "Our services"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: googleReviews,
									className: "glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm no-underline",
									target: "_blank",
									rel: "noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-gold text-gold" }), "5.0 rated on Google"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "glass inline-flex items-center rounded-full px-4 py-2 text-sm",
									children: "Locally owned"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: phoneHref,
									className: "glass inline-flex items-center rounded-full px-4 py-2 text-sm no-underline",
									children: phoneDisplay
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteMarquee, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ghost-word top-6 right-0",
					children: "Rizzo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative grid items-end gap-10 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal md:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
							index: "02",
							label: "The standard"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "serif mt-6 text-4xl text-bone md:text-6xl",
							children: "“If it ain’t razor sharp, it ain’t Rizzo’s.”"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal md:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "Razor Sharp Rizzo is a Buffalo lawn care and snow removal company built on reliability, clean work, and honest pricing. We treat every property like it’s our own and take pride in delivering professional results all year long."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "btn btn-ghost mt-6",
							children: ["The family", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap mt-14 grid gap-px bg-line md:grid-cols-3",
					children: pillars.map((pillar) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "reveal bg-bg p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-gold tracking-[0.2em]",
								children: pillar.index
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-md mt-6",
								children: pillar.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted",
								children: pillar.body
							})
						]
					}, pillar.index))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "border-t border-line py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						index: "03",
						label: "Our services"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-xl mt-4",
						children: [
							"Six crafts.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"One finish."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "btn btn-ghost",
						children: ["All services", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid items-start gap-8 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "lg:col-span-7",
						children: services.map((service, index) => {
							const on = index === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-t border-line",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/services/$slug",
									params: { slug: service.slug },
									className: "group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 no-underline md:py-6",
									onMouseEnter: () => setActive(index),
									onFocus: () => setActive(index),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-display text-gold tracking-[0.18em]",
											children: service.index
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: on ? "display-md block text-bone" : "display-md block text-muted transition-colors group-hover:text-bone",
											children: service.title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 block text-sm text-muted lg:hidden",
											children: service.lede
										})] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5 text-gold" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/services/$slug",
									params: { slug: service.slug },
									className: "media-frame mb-5 block aspect-[4/3] lg:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: service.image,
										alt: service.alt
									})
								})]
							}, service.slug);
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "sticky top-28 hidden lg:col-span-5 lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "media-frame aspect-[4/5]",
							children: [services.map((service, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.image,
								alt: index === active ? service.alt : "",
								className: index === active ? "absolute inset-0 h-full w-full object-cover opacity-100" : "absolute inset-0 h-full w-full object-cover opacity-0"
							}, service.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/90 to-transparent p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display tracking-[0.22em] text-gold uppercase",
									children: featured.index
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "serif mt-2 text-2xl",
									children: featured.lede
								})]
							})]
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "border-t border-line py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						index: "04",
						label: "Proof, not promises"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col justify-between gap-4 md:flex-row md:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-xl",
							children: [
								"Before.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Then razor."
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-sm text-muted",
							children: "Real properties. Drag sideways — edges, overgrowth, leaves, and Buffalo snow."
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "snap-row mt-10 pl-5 md:pl-10",
					children: proofs.map((proof) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "snap-item",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "media-frame aspect-[3/2]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: proof.src,
								alt: proof.alt
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-4 flex items-baseline justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display-md",
								children: proof.caption
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden max-w-xs text-right text-sm text-muted sm:block",
								children: proof.note
							})]
						})]
					}, proof.src))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wrap mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/work",
						className: "btn btn-ghost",
						children: ["Full gallery", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						index: "05",
						label: "Verified reviews"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-xl mt-4",
						children: [
							"5.0.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Said out loud."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: googleReviews,
						className: "btn btn-ghost",
						target: "_blank",
						rel: "noreferrer",
						children: ["Google reviews", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-4 md:grid-cols-3",
					children: reviews.slice(0, 3).map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "glass reveal rounded-card p-6 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-gold",
								"aria-hidden": "true",
								children: Array.from({ length: 5 }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-gold" }, index))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "serif mt-6 text-2xl",
								children: [
									"“",
									review.quote,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
								className: "mt-6 font-display tracking-[0.16em] text-muted uppercase",
								children: [
									review.name,
									" · ",
									review.source
								]
							})
						]
					}, review.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-t border-line",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/media/lawn-edge.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover opacity-40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-bg/75" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "wrap relative grid gap-8 py-24 md:grid-cols-12 md:py-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
								index: "06",
								label: "Start your estimate"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "display-xl mt-4",
								children: [
									"Call us",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"today."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-lg text-muted",
								children: "No pressure. No obligation. Tell us the property and the season — we’ll come back with a fast, honest number."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start justify-end gap-3 md:col-span-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: phoneHref,
								className: "btn btn-gold",
								children: phoneDisplay
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/contact",
								className: "btn btn-ghost glass",
								children: ["Request a quote", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: "Buffalo, NY & surrounding areas"
							})
						]
					})]
				})
			]
		})
	] });
}
//#endregion
export { Home as component };
