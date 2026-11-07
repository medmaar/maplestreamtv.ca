"use client";
import { useEffect } from "react";

/* Full-screen celebration after a free-trial request or a plan order.
   Preview without submitting: add ?celebrate=trial or ?celebrate=order to any page URL. */

type Kind = "trial" | "order";

const CELEBRATE: Record<Kind, { title: string; lines: string[]; btn: string }> = {
  trial: {
    title: "Your free trial is on its way, eh!",
    lines: [
      "A very polite moose is carrying your login to <b data-c-email></b> right now. He said sorry twice before leaving. 🫎",
      "It usually lands in under 2 minutes. Check your <b>inbox</b> AND your <b>spam</b> folder, because our emails sometimes duck into the wrong igloo to warm up.",
      "Your only job for the next 24 hours: grab the remote and some ketchup chips. 🍿",
    ],
    btn: "Beauty! Back to the homepage",
  },
  order: {
    title: "You did it! Order placed. 🎉",
    lines: [
      "Absolute top-shelf move. Somewhere a hockey announcer just yelled your name. 🏒",
      "Your invoice is skating over to <b data-c-email></b> as we speak. Check your <b>inbox</b> AND your <b>spam</b> folder (it may have stopped for a double-double on the way).",
      "Pay the invoice and your channels fire up faster than poutine disappears at 2 a.m. 🍟",
    ],
    btn: "Let’s go! Back to the homepage",
  },
};

export function celebrate(kind: Kind, email?: string) {
  const c = CELEBRATE[kind];
  if (!c || typeof document === "undefined") return;
  document.querySelector(".celebrate")?.remove();
  const el = document.createElement("div");
  el.className = "celebrate";
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-modal", "true");
  el.setAttribute("aria-labelledby", "celebrate-title");
  const bits = Array.from({ length: 28 }, (_, i) =>
    `<i style="--x:${(i * 37) % 100}%;--d:${(i % 7) * 0.35}s;--t:${3.2 + (i % 5) * 0.5}s;--r:${(i * 53) % 360}deg">${i % 3 ? "" : "🍁"}</i>`).join("");
  el.innerHTML = `<div class="celebrate-bits" aria-hidden="true">${bits}</div>
<div class="celebrate-box">
  <svg class="celebrate-mark" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="54"/><path d="M36 62 53 79 86 44"/></svg>
  <h2 id="celebrate-title">${c.title}</h2>
  ${c.lines.map((l) => `<p>${l}</p>`).join("")}
  <a class="celebrate-go" href="/ca">${c.btn}</a>
</div>`;
  el.querySelectorAll("[data-c-email]").forEach((b) => { b.textContent = email || "your email address"; });
  // No way to dismiss: the only exit is the button, which goes to the homepage.
  const go = el.querySelector<HTMLAnchorElement>(".celebrate-go")!;
  el.addEventListener("keydown", (e) => { if (e.key === "Tab") { e.preventDefault(); go.focus(); } });
  document.body.append(el);
  document.documentElement.classList.add("celebrating");
  go.focus({ preventScroll: true });
}

/* Mounted once in the root layout: opens the preview for ?celebrate=trial / ?celebrate=order. */
export default function CelebratePreview() {
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("celebrate");
    if (q) celebrate(q === "order" ? "order" : "trial", "you@example.com");
  }, []);
  return null;
}
