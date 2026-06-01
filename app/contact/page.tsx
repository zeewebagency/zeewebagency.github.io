"use client";
import { useState } from "react";
import Link from "next/link";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", company: "", budget: "", services: [] as string[], timeline: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const toggle = (val: string) => setForm(f => ({ ...f, services: f.services.includes(val) ? f.services.filter(s => s !== val) : [...f.services, val] }));

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        setStatus(res.ok ? "success" : "error");
    };

    return (
        <>
            <Cursor /><Nav /><RevealOnScroll />
            <section className="page-hero" style={{ minHeight: "40vh" }}>
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-tag reveal">Contact</div>
                        <h1 className="page-hero-title reveal" data-delay="100">Let's build<br /><em>something great.</em></h1>
                        <p className="page-hero-sub reveal" data-delay="200">Tell us about your project and we'll get back to you within 24 hours.</p>
                    </div>
                </div>
            </section>

            <section className="contact-section section-padding">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-form-wrap reveal">
                            {status === "success" ? (
                                <div className="form-success show">
                                    <div className="success-icon">✓</div>
                                    <h3>Message received!</h3>
                                    <p>We'll review your project and get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={submit} data-netlify="true" name="contact">
                                    <div className="form-row">
                                        <div className="form-group"><label>Your Name *</label><input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Doe" /></div>
                                        <div className="form-group"><label>Email Address *</label><input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} placeholder="john@company.com" /></div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group"><label>Company</label><input value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} placeholder="Acme Corp" /></div>
                                        <div className="form-group">
                                            <label>Estimated Budget</label>
                                            <select value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))}>
                                                <option value="">Select a range</option>
                                                <option value="<1k">Under $1,000</option>
                                                <option value="1k-5k">$1,000 – $5,000</option>
                                                <option value="5k-15k">$5,000 – $15,000</option>
                                                <option value="15k+">$15,000+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Services Needed *</label>
                                        <div className="service-checkboxes">
                                            {["Web Development", "App Development", "Graphic Design", "SEO & Growth", "Automation"].map(s => (
                                                <label key={s} className="checkbox-label">
                                                    <input type="checkbox" checked={form.services.includes(s)} onChange={() => toggle(s)} />
                                                    <span className="checkbox-custom" />
                                                    {s}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Timeline</label>
                                        <select value={form.timeline} onChange={e => setForm(f => ({ ...f, timeline: e.target.value }))}>
                                            <option value="">When do you need this?</option>
                                            <option value="asap">ASAP (within 2 weeks)</option>
                                            <option value="1month">Within 1 month</option>
                                            <option value="3months">1–3 months</option>
                                            <option value="flexible">Flexible</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Tell Us About Your Project *</label>
                                        <textarea required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} rows={6} placeholder="What are you building? What problems are you trying to solve?" />
                                        <span className="char-count">{form.message.length} / 1000</span>
                                    </div>
                                    {status === "error" && <p style={{ color: "var(--color-red)", marginBottom: 12, fontSize: 14 }}>Something went wrong. Please try again.</p>}
                                    <button type="submit" className="btn-primary btn-large btn-submit" disabled={status === "loading"}>
                                        <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </button>
                                </form>
                            )}
                        </div>

                        <div className="contact-sidebar">
                            <div className="contact-info reveal" data-delay="100">
                                <h3>Other ways<br />to reach us</h3>
                                {[{ icon: "📧", label: "Email", val: <a href="mailto:hello@ZeeWeb.io">hello@ZeeWeb.io</a> }, { icon: "📞", label: "Phone", val: <a href="tel:+15551234567">+1 (555) 123-4567</a> }, { icon: "🕐", label: "Response Time", val: <span>Within 24 hours, guaranteed</span> }, { icon: "🌍", label: "Based In", val: <span>Remote-first, global clients</span> }].map(m => (
                                    <div key={m.label} className="contact-method">
                                        <div className="cm-icon">{m.icon}</div>
                                        <div><span className="cm-label">{m.label}</span>{m.val}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="contact-guarantee reveal" data-delay="200">
                                <div className="guarantee-icon">🛡️</div>
                                <h4>Our Promise</h4>
                                <p>Every project comes with a 100% satisfaction guarantee. If you're not happy with the initial concepts, we'll revise until you are — at no extra cost.</p>
                            </div>
                            <div className="contact-social reveal" data-delay="300">
                                <h4>Follow Our Work</h4>
                                <div className="social-links">
                                    <a href="#" className="social-link"><span>𝕏</span> Twitter</a>
                                    <a href="#" className="social-link"><span>in</span> LinkedIn</a>
                                    <a href="#" className="social-link"><span>⬤</span> Dribbble</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}