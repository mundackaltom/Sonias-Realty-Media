"use client";

import Image from "next/image";
import { useState } from "react";
import { BUYER_TYPES, CONTACT_ROWS, CONTACT_STEPS, EMAIL, PHONE_DISPLAY, PHONE_TEL, SOCIALS, whatsappUrl } from "@/lib/content";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    budget: "",
    locality: "",
    notes: "",
    website: "", // honeypot
  });
  const [buyerType, setBuyerType] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) errors.name = "Please enter your full name.";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email.trim())) errors.email = "Please enter a valid email address.";
    const phoneDigits = form.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) errors.phone = "Please enter a valid phone number.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (form.website) {
      setStatus({ type: "success", message: "Thank you! Your message has been sent." });
      return;
    }

    if (!validate()) {
      setStatus({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    const composedMessage = [
      form.budget && `Budget: ${form.budget}`,
      form.locality && `Preferred locality: ${form.locality}`,
      buyerType && `I am: ${buyerType}`,
      "",
      form.notes || "No further details provided.",
    ]
      .filter((line): line is string => Boolean(line) || line === "")
      .join("\n");

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: composedMessage,
          website: form.website,
        }),
      });
      if (!res.ok) throw new Error("Failed to send message");
      setStatus({ type: "success", message: `Thank you ${form.name}! Your message has been sent.` });
      setForm({ name: "", phone: "", email: "", budget: "", locality: "", notes: "", website: "" });
      setBuyerType(null);
    } catch {
      setStatus({ type: "error", message: "Sorry, something went wrong while sending your message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full border border-black/25 bg-white px-3.5 py-3 font-lora text-[15.5px] text-[var(--ink)] outline-none";
  const labelClass = "font-archivo text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-1)]";

  return (
    <div className="bg-[var(--paper)] text-[var(--ink)]">
      <section className="border-b-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto flex max-w-[1560px] flex-wrap items-start gap-[clamp(32px,4vw,64px)] px-[clamp(16px,3vw,32px)] py-[clamp(36px,4vw,56px)] pb-[clamp(40px,4.4vw,60px)]">
          <div className="min-w-0 flex-1 basis-[520px]" style={{ flexGrow: 2 }}>
            <div className="mb-3.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">Contact</div>
            <h1 className="m-0 mb-[18px] max-w-[820px] font-playfair text-[clamp(34px,5.2vw,62px)] font-bold leading-[1.02] tracking-[-0.035em]">
              Tell us the budget and the locality. We will do the rest.
            </h1>
            <p className="m-0 mb-[26px] max-w-[600px] text-justify font-lora text-[clamp(15.5px,1.6vw,17px)] leading-[1.78] text-[var(--muted-3)]">
              Replies within one working day. You will speak to one of three people for the whole purchase &mdash; shortlist, site visits, price negotiation, loan sanction and registration &mdash; not a call centre and not a rotating desk.
            </p>
            <div className="grid max-w-[680px] border-t-2 border-[var(--ink)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,210px),1fr))]">
              <div className="border-b border-[var(--hairline)] py-4.5 pr-5">
                <div className="mb-1.5 font-archivo text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-1)]">Reply time</div>
                <div className="font-lora text-[16.5px]">Within 1 working day</div>
              </div>
              <div className="border-b border-[var(--hairline)] py-4.5 pr-5">
                <div className="mb-1.5 font-archivo text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-1)]">Hours</div>
                <div className="font-lora text-[16.5px] [font-feature-settings:'tnum']">Mon &ndash; Sat, 9:30 &ndash; 19:00</div>
              </div>
              <div className="border-b border-[var(--hairline)] py-4.5 pr-5">
                <div className="mb-1.5 font-archivo text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-1)]">Our fee to you</div>
                <div className="font-lora text-[16.5px]">Nil &mdash; paid by developer</div>
              </div>
            </div>
          </div>

          <div className="min-w-[290px] flex-1 basis-[320px] bg-[var(--ink)] text-[var(--card)]">
            <div className="flex items-center gap-4.5 px-6 pb-5 pt-6">
              <div className="relative h-[84px] w-[84px] flex-none overflow-hidden border border-white/[.28]">
                <Image
                  src="/images/sonia.jpeg"
                  alt="Sonia"
                  fill
                  style={{ objectPosition: "50% 30%", transform: "scale(1.7)", transformOrigin: "50% 30%" }}
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <div className="mb-1.5 font-archivo text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[var(--gold-warm)]">
                  Your direct line
                </div>
                <div className="font-playfair text-2xl font-bold leading-[1.1] tracking-[-0.02em]">Sonia</div>
                <div className="mt-1 font-archivo text-[10px] uppercase tracking-[0.14em] text-white/60">Founder &amp; Principal Advisor</div>
              </div>
            </div>
            <div className="border-t border-white/[.18] px-6 pb-6 pt-5.5">
              <a href={`tel:${PHONE_TEL}`} className="mb-[18px] block font-playfair text-[clamp(26px,2.6vw,32px)] font-semibold tracking-[-0.01em] text-[var(--card)] [font-feature-settings:'tnum'] hover:text-[var(--gold-warm)]">
                {PHONE_DISPLAY}
              </a>
              <div className="flex flex-col gap-2.5">
                <a href={whatsappUrl()} target="_blank" rel="noopener" className="bg-[var(--gold)] py-[15px] text-center font-archivo text-xs font-bold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-[var(--gold-hover)]">
                  WhatsApp Sonia
                </a>
                <a href={`mailto:${EMAIL}`} className="break-all border border-white/40 py-[15px] text-center font-archivo text-xs font-medium uppercase tracking-[0.14em] text-[var(--card)] transition-colors hover:bg-white/10">
                  Email us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-[1560px] flex-wrap items-start px-[clamp(16px,3vw,32px)]">
        <div className="min-w-0 flex-1 basis-[520px] border-r border-[var(--hairline)] py-[clamp(40px,5vw,60px)] pb-[clamp(48px,5vw,72px)] pr-0 lg:pr-12" style={{ flexGrow: 2 }}>
          <h2 className="m-0 mb-2 font-playfair text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.03em]">Send an enquiry</h2>
          <p className="m-0 mb-[26px] max-w-[560px] font-lora text-[15.5px] leading-[1.7] text-[var(--muted-3)]">
            The more you tell us here, the more useful the first reply is. Nothing is shared with a developer until you ask us to.
          </p>
          <form onSubmit={handleSubmit} className="border-2 border-[var(--ink)] bg-[var(--card)] p-[clamp(20px,2.6vw,34px)]">
            <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input type="text" id="website" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
            </div>

            <div className="mb-4 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Name</span>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                {fieldErrors.name && <p className="text-xs text-red-600">{fieldErrors.name}</p>}
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Phone</span>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91" className={inputClass} />
                {fieldErrors.phone && <p className="text-xs text-red-600">{fieldErrors.phone}</p>}
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Email</span>
                <input name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className={inputClass} />
                {fieldErrors.email && <p className="text-xs text-red-600">{fieldErrors.email}</p>}
              </label>
            </div>
            <div className="mb-4.5 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Budget</span>
                <input name="budget" value={form.budget} onChange={handleChange} placeholder="e.g. 1.2 – 1.8 Cr" className={inputClass} />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Preferred locality</span>
                <input name="locality" value={form.locality} onChange={handleChange} placeholder="e.g. Whitefield, Devanahalli" className={inputClass} />
              </label>
            </div>
            <div className="mb-4.5">
              <div className={`mb-2.5 ${labelClass}`}>I am</div>
              <div className="flex flex-wrap gap-2">
                {BUYER_TYPES.map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => setBuyerType((prev) => (prev === b ? null : b))}
                    className="border px-4 py-2.5 font-archivo text-[11px] font-medium uppercase tracking-[0.1em]"
                    style={{
                      borderColor: buyerType === b ? "var(--ink)" : "rgba(32,31,29,.25)",
                      background: buyerType === b ? "var(--ink)" : "transparent",
                      color: buyerType === b ? "var(--card)" : "var(--ink)",
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <label className="mb-5 flex flex-col gap-1.5">
              <span className={labelClass}>Anything else we should know?</span>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Configuration, timeline, floor preference, loan status"
                className={`${inputClass} resize-vertical`}
              />
            </label>
            <div className="flex flex-wrap items-center gap-3.5">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--gold)] px-8 py-4 font-archivo text-[12.5px] font-bold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-[var(--gold-hover)] disabled:opacity-70"
              >
                {isSubmitting ? "Sending…" : "Send enquiry"}
              </button>
              <a href={whatsappUrl()} target="_blank" rel="noopener" className="border border-[var(--ink)] px-6.5 py-4 font-archivo text-[12.5px] font-medium uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-black/[.07]">
                WhatsApp instead
              </a>
            </div>
            {status.type && (
              <div className={`mt-4 border px-4 py-3 text-sm ${status.type === "success" ? "border-green-200 bg-green-50 text-green-800" : "border-red-200 bg-red-50 text-red-800"}`}>
                {status.message}
              </div>
            )}
          </form>

          <div className="mt-8 border-t border-[var(--hairline)] pt-[22px]">
            <div className="mb-3.5 font-archivo text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted-1)]">Follow along</div>
            <div className="grid border-t-2 border-[var(--ink)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,118px),1fr))]">
              {SOCIALS.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-r border-[var(--hairline)] px-[clamp(14px,1.6vw,20px)] py-4 pb-[18px] transition-colors hover:bg-black/[.04]"
                >
                  <div className="mb-1.5 font-archivo text-[10px] font-medium uppercase tracking-[0.16em] text-[var(--muted-1)]">{s.platform}</div>
                  <div className="break-words font-lora text-[14.5px]">{s.handle}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <aside className="min-w-[280px] flex-1 basis-[300px] py-[clamp(40px,5vw,60px)] pb-[clamp(48px,5vw,72px)] lg:pl-9">
          <div className="mb-4.5 font-archivo text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--gold-text)]">The office</div>
          <div className="overflow-hidden border border-black/20 bg-[var(--placeholder-plate)]">
            <iframe
              src="https://www.google.com/maps?q=Prestige+Jindal+City,+Bengaluru,+Karnataka+560073&z=12&output=embed"
              width="100%"
              height="260"
              className="block h-[260px] w-full border-0 [filter:sepia(.12)_saturate(.9)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sonia's Realty Media office location"
            />
          </div>
          <div className="mt-5 border-t-2 border-[var(--ink)]">
            {CONTACT_ROWS.map((c) => (
              <div key={c.k} className="border-b border-[var(--hairline)] py-[15px]">
                <div className="mb-1.5 font-archivo text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-1)]">{c.k}</div>
                <div className="break-words font-lora text-base leading-[1.6] [font-feature-settings:'tnum']">{c.v}</div>
              </div>
            ))}
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Prestige+Jindal+City,+Bengaluru,+Karnataka+560073"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4.5 inline-block border-b border-[var(--gold)] pb-1 font-archivo text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gold-text)]"
          >
            Get directions
          </a>
        </aside>
      </div>

      <section className="border-b-2 border-t-2 border-[var(--ink)] bg-[var(--card)]">
        <div className="mx-auto max-w-[1560px] px-[clamp(16px,3vw,32px)] py-[clamp(40px,4.6vw,60px)] pb-[clamp(44px,5vw,68px)]">
          <div className="mb-[clamp(24px,3vw,36px)] flex flex-wrap items-baseline justify-between gap-x-[clamp(28px,4vw,64px)] gap-y-2.5">
            <h2 className="m-0 font-playfair text-[clamp(26px,3vw,38px)] font-bold tracking-[-0.03em]">What happens after you send it</h2>
            <p className="m-0 max-w-[560px] flex-1 basis-[380px] font-lora text-[15.5px] leading-[1.7] text-[var(--muted-3)]">
              No automated drip, no sales queue. Three steps, and you are talking to the person who will handle the file.
            </p>
          </div>
          <div className="grid border-t-2 border-[var(--ink)] [grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr))]">
            {CONTACT_STEPS.map((st) => (
              <div key={st.n} className="border-r border-[var(--hairline)] px-[clamp(20px,2.2vw,32px)] pb-[30px] pt-[26px]">
                <div className="mb-4 font-playfair text-[clamp(34px,3.4vw,44px)] font-bold leading-none text-[var(--gold)] [font-feature-settings:'tnum']">
                  {st.n}
                </div>
                <div className="mb-2.5 font-archivo text-[12.5px] font-semibold uppercase tracking-[0.06em]">{st.title}</div>
                <div className="font-lora text-[15.5px] leading-[1.7] text-[var(--muted-4)]">{st.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
