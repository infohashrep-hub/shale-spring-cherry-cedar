import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as hours, i as address, m as phoneHref, o as email, p as phoneDisplay, s as emailHref, t as Kicker, v as services } from "./shell-DC8Ic95J.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CyCpOHSk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	name: "",
	phone: "",
	email: "",
	property: "",
	service: "Lawn Mowing & Maintenance",
	cadence: "Not sure yet",
	note: ""
};
function ContactPage() {
	const [fields, setFields] = (0, import_react.useState)(empty);
	const [error, setError] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	function update(key, value) {
		setFields((current) => ({
			...current,
			[key]: value
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		if (fields.name.trim().length < 2) {
			setError("Add your name so we know who to call back.");
			return;
		}
		if (fields.phone.replace(/\D/g, "").length < 10) {
			setError("Add a phone number we can text or call.");
			return;
		}
		if (!fields.property.trim()) {
			setError("Add the property address so the quote is for the right lawn.");
			return;
		}
		const existing = readSaved();
		const next = [{
			...fields,
			at: (/* @__PURE__ */ new Date()).toISOString()
		}, ...existing].slice(0, 8);
		window.localStorage.setItem("rsr-estimates", JSON.stringify(next));
		setError("");
		setSent(true);
		setFields(empty);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "pt-28 pb-16 md:pt-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "wrap grid gap-12 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, {
						index: "07",
						label: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "display-xl mt-4",
						children: [
							"Get your",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"free estimate."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted",
						children: "Fill out the form and we’ll contact you quickly with a fast, honest quote. No pressure. No obligation."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-10 space-y-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Call or text"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: phoneHref,
									className: "display-md text-bone no-underline hover:text-gold",
									children: phoneDisplay
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: emailHref,
									className: "text-bone no-underline hover:text-gold",
									children: email
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Business"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-2 text-sm text-muted",
								children: [
									"Razor Sharp Rizzo & Sons LLC",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									address,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Buffalo, NY & surrounding areas"
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-1 text-sm",
									children: hours.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex justify-between gap-6 border-b border-line py-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: slot.day }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted",
											children: slot.time
										})]
									}, slot.day))
								})
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "kicker",
								children: "Payment"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-sm text-muted",
								children: "Cash, Venmo, PayPal, and Zelle."
							})] })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "glass rounded-card p-5 md:p-8",
					children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "status",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "kicker",
								children: "Received"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg mt-4",
								children: "We’ll be in touch."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 text-muted",
								children: [
									"Your request is saved on this device and ready for the crew. If it’s urgent, call or text ",
									phoneDisplay,
									" — that’s still the fastest way onto the route."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "btn btn-gold mt-8",
								onClick: () => setSent(false),
								children: "Send another"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "grid gap-4 md:grid-cols-2",
						noValidate: true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "serif text-3xl md:col-span-2",
								children: "Start your estimate."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: fields.name,
									onChange: (event) => update("name", event.target.value),
									autoComplete: "name",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Phone" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: fields.phone,
									onChange: (event) => update("phone", event.target.value),
									autoComplete: "tel",
									inputMode: "tel",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									value: fields.email,
									onChange: (event) => update("email", event.target.value),
									autoComplete: "email"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Property address" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: fields.property,
									onChange: (event) => update("property", event.target.value),
									autoComplete: "street-address",
									required: true
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Service" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: fields.service,
									onChange: (event) => update("service", event.target.value),
									children: [services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: service.title }, service.slug)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Not sure — look at the property" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "How often" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									value: fields.cadence,
									onChange: (event) => update("cadence", event.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "One-time" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Weekly" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Biweekly" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Not sure yet" })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "field md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "What should we know" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									value: fields.note,
									onChange: (event) => update("note", event.target.value),
									placeholder: "Overgrown yard, gate code, snow contract, pets…"
								})]
							}),
							error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-gold md:col-span-2",
								role: "alert",
								children: error
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "btn btn-gold w-full sm:w-auto",
									children: "Request my quote"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm text-muted",
									children: "No pressure. No obligation. We reply by phone or text."
								})]
							})
						]
					})
				})
			})]
		})
	});
}
function readSaved() {
	try {
		const raw = window.localStorage.getItem("rsr-estimates");
		const parsed = raw ? JSON.parse(raw) : [];
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
//#endregion
export { ContactPage as component };
