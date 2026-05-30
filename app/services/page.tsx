import Link from "next/link";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = { title: "Services — ZeeWeb Agency" };

export default function Services() {
    return (
        <>
            <Cursor /><Nav /><RevealOnScroll />
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-tag reveal">Our Services</div>
                        <h1 className="page-hero-title reveal" data-delay="100">Everything you need.<br /><em>Nothing you don't.</em></h1>
                        <p className="page-hero-sub reveal" data-delay="200">From concept to launch and beyond — we cover the full digital spectrum.</p>
                    </div>
                </div>
            </section>

            {/* WEB DEVELOPMENT */}
            <section className="service-section section-padding" id="web">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-detail-info">
                            <div className="service-detail-num">01</div>
                            <div className="section-tag reveal">Web Development</div>
                            <h2 className="section-title reveal">Fast, scalable,<br /><em>pixel-perfect.</em></h2>
                            <p className="service-detail-desc reveal" data-delay="100">We build websites and web applications that don't just look great — they perform. From static marketing sites to complex SaaS platforms.</p>
                            <ul className="service-features reveal" data-delay="200">
                                <li><span>✦</span> Custom website design & development</li>
                                <li><span>✦</span> React, Next.js, Vue.js applications</li>
                                <li><span>✦</span> E-commerce (Shopify, WooCommerce)</li>
                                <li><span>✦</span> Performance optimization & SEO</li>
                                <li><span>✦</span> Cloud deployment (AWS, Vercel, GCP)</li>
                            </ul>
                            <Link href="/contact" className="btn-primary reveal" data-delay="300"><span>Get a Web Quote</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                        </div>
                        <div className="service-detail-visual reveal" data-delay="150">
                            <div className="service-visual-card">
                                <div className="visual-header">
                                    <div className="browser-dots"><span style={{ background: "#ff5f57" }} /><span style={{ background: "#febc2e" }} /><span style={{ background: "#28c840" }} /></div>
                                    <div className="browser-url">ZeeWeb.io/client-project</div>
                                </div>
                                <div className="visual-body"><div className="v-block tall accent" /><div className="v-col"><div className="v-block" /><div className="v-block short" /><div className="v-block short dim" /></div></div>
                                <div className="visual-footer"><div className="v-tag">React</div><div className="v-tag">Next.js</div><div className="v-tag">TailwindCSS</div></div>
                            </div>
                            <div className="service-price-badge"><span className="price-from">Starting from</span><span className="price-val">$1,000</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* APP */}
            <section className="service-section section-padding alt-bg" id="app">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-detail-visual reveal">
                            <div className="service-visual-card">
                                <div className="visual-header">
                                    <div className="browser-dots"><span style={{ background: "#ff5f57" }} /><span style={{ background: "#febc2e" }} /><span style={{ background: "#28c840" }} /></div>
                                    <div className="browser-url">Flutter App Preview</div>
                                </div>
                                <div className="visual-body" style={{ justifyContent: "center", alignItems: "center" }}>
                                    <div style={{ width: 80, background: "var(--color-bg-4)", borderRadius: 12, border: "1px solid var(--color-border)", padding: "12px 8px", display: "flex", flexDirection: "column", gap: 6 }}>
                                        <div style={{ height: 8, background: "var(--color-accent-dim)", borderRadius: 4, width: "70%" }} />
                                        <div style={{ height: 6, background: "var(--color-border)", borderRadius: 4 }} />
                                        <div style={{ height: 6, background: "var(--color-border)", borderRadius: 4, width: "80%" }} />
                                        <div style={{ height: 20, background: "var(--color-accent)", borderRadius: 4, marginTop: 6, opacity: 0.8 }} />
                                    </div>
                                </div>
                                <div className="visual-footer"><div className="v-tag">Flutter</div><div className="v-tag">Firebase</div><div className="v-tag">iOS/Android</div></div>
                            </div>
                            <div className="service-price-badge"><span className="price-from">Starting from</span><span className="price-val">$2,000</span></div>
                        </div>
                        <div className="service-detail-info">
                            <div className="service-detail-num">02</div>
                            <div className="section-tag reveal">App Development</div>
                            <h2 className="section-title reveal">Apps users<br /><em>can't put down.</em></h2>
                            <p className="service-detail-desc reveal" data-delay="100">We design and build mobile experiences that feel native, load fast, and keep users coming back.</p>
                            <ul className="service-features reveal" data-delay="200">
                                <li><span>✦</span> Flutter iOS & Android development</li>
                                <li><span>✦</span> App Store & Google Play submission</li>
                                <li><span>✦</span> Push notifications, auth & payments</li>
                            </ul>
                            <Link href="/contact" className="btn-primary reveal" data-delay="300"><span>Get an App Quote</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* DESIGN */}
            <section className="service-section section-padding" id="design">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-detail-info">
                            <div className="service-detail-num">03</div>
                            <div className="section-tag reveal">Graphic Design</div>
                            <h2 className="section-title reveal">Identities that<br /><em>command rooms.</em></h2>
                            <p className="service-detail-desc reveal" data-delay="100">Great design isn't decoration — it's strategy made visible. Visual identities that carve a distinct space in crowded markets.</p>
                            <ul className="service-features reveal" data-delay="200">
                                <li><span>✦</span> Logo & brand identity design</li>
                                <li><span>✦</span> Brand guidelines & style systems</li>
                                <li><span>✦</span> UI/UX design & prototyping (Figma)</li>
                                <li><span>✦</span> Social media kits & templates</li>
                                <li><span>✦</span> Marketing collateral & print design</li>
                            </ul>
                            <Link href="/contact" className="btn-primary reveal" data-delay="300"><span>Get a Design Quote</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                        </div>
                        <div className="service-detail-visual reveal" data-delay="150">
                            <div className="service-visual-card">
                                <div className="visual-header"><div className="browser-dots"><span style={{ background: "#ff5f57" }} /><span style={{ background: "#febc2e" }} /><span style={{ background: "#28c840" }} /></div><div className="browser-url">Brand System</div></div>
                                <div className="visual-body" style={{ flexDirection: "column", gap: 12 }}>
                                    <div style={{ display: "flex", gap: 8 }}>
                                        {["#3B82F6", "#06090f", "#EEF2FF", "#EF4444"].map(c => <div key={c} style={{ flex: 1, height: 40, background: c, borderRadius: 4, border: "1px solid var(--color-border)" }} />)}
                                    </div>
                                    <div style={{ padding: "8px 12px", border: "1px solid var(--color-border)", borderRadius: 4, fontFamily: "var(--font-display)", fontSize: 20, letterSpacing: 3 }}>ACME BRAND</div>
                                </div>
                                <div className="visual-footer"><div className="v-tag">Figma</div><div className="v-tag">Illustrator</div></div>
                            </div>
                            <div className="service-price-badge"><span className="price-from">Starting from</span><span className="price-val">$50</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AUTOMATION */}
            <section className="service-section section-padding alt-bg" id="automation">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-detail-visual reveal">
                            <div className="service-visual-card">
                                <div className="visual-header"><div className="browser-dots"><span style={{ background: "#ff5f57" }} /><span style={{ background: "#febc2e" }} /><span style={{ background: "#28c840" }} /></div><div className="browser-url">~/scripts/run_pipeline.sh</div></div>
                                <div className="visual-body" style={{ fontFamily: "monospace", fontSize: 12, lineHeight: 1.7, padding: "1rem", display: "block" }}>
                                    <div style={{ color: "#22c55e" }}>✔ Fetching source data...</div>
                                    <div style={{ color: "#22c55e" }}>✔ Parsing 4,812 records...</div>
                                    <div style={{ color: "#eab308" }}>⟳ Transforming & cleaning...</div>
                                    <div style={{ opacity: 0.4 }}>○ Uploading to database</div>
                                    <div style={{ opacity: 0.4 }}>○ Sending summary report</div>
                                </div>
                                <div className="visual-footer"><div className="v-tag">Python</div><div className="v-tag">Bash</div><div className="v-tag">Cron</div></div>
                            </div>
                            <div className="service-price-badge"><span className="price-from">Starting from</span><span className="price-val">$300</span></div>
                        </div>
                        <div className="service-detail-info">
                            <div className="service-detail-num">04</div>
                            <div className="section-tag reveal">Automation & Scripting</div>
                            <h2 className="section-title reveal">Build it once,<br /><em>run it forever.</em></h2>
                            <p className="service-detail-desc reveal" data-delay="100">Stop wasting hours on repetitive tasks. We write scripts and workflows that handle the grunt work.</p>
                            <ul className="service-features reveal" data-delay="200">
                                <li><span>✦</span> Python & Bash scripting</li>
                                <li><span>✦</span> Task scheduling & cron jobs</li>
                                <li><span>✦</span> File & data pipeline automation</li>
                                <li><span>✦</span> REST API & webhook integrations</li>
                            </ul>
                            <Link href="/contact" className="btn-primary reveal" data-delay="300"><span>Automate My Workflow</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* BIZ AUTOMATION */}
            <section className="service-section section-padding" id="biz-automation">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-detail-info">
                            <div className="service-detail-num">05</div>
                            <div className="section-tag reveal">Business Automation</div>
                            <h2 className="section-title reveal">Less clicking,<br /><em>more closing.</em></h2>
                            <p className="service-detail-desc reveal" data-delay="100">We connect the tools your team uses — CRMs, spreadsheets, email, Slack — and wire them into smooth workflows.</p>
                            <ul className="service-features reveal" data-delay="200">
                                <li><span>✦</span> Zapier, Make & n8n workflows</li>
                                <li><span>✦</span> CRM automation (HubSpot, Notion)</li>
                                <li><span>✦</span> Email sequence automation</li>
                                <li><span>✦</span> Slack & Teams bot integrations</li>
                            </ul>
                            <Link href="/contact" className="btn-primary reveal" data-delay="300"><span>Automate My Business</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                        </div>
                        <div className="service-detail-visual reveal" data-delay="150">
                            <div className="service-visual-card">
                                <div className="visual-header"><div className="browser-dots"><span style={{ background: "#ff5f57" }} /><span style={{ background: "#febc2e" }} /><span style={{ background: "#28c840" }} /></div><div className="browser-url">make.com / workflow-builder</div></div>
                                <div className="visual-body" style={{ alignItems: "center", justifyContent: "center", gap: 8, flexWrap: "wrap" }}>
                                    {["Form", "CRM", "Email", "Slack"].map((label, i) => (
                                        <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                                                <div className={`v-block short${i === 0 ? " accent" : ""}`} style={{ width: 52, borderRadius: 8 }} />
                                                <div style={{ fontSize: 11, opacity: 0.6 }}>{label}</div>
                                            </div>
                                            {i < 3 && <svg viewBox="0 0 24 8" width="24" fill="none" style={{ opacity: 0.4 }}><path d="M0 4h20M17 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                                        </div>
                                    ))}
                                </div>
                                <div className="visual-footer"><div className="v-tag">Zapier</div><div className="v-tag">Make</div><div className="v-tag">n8n</div></div>
                            </div>
                            <div className="service-price-badge"><span className="price-from">Starting from</span><span className="price-val">$500</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO */}
            <section className="service-section section-padding alt-bg" id="seo">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-detail-visual reveal">
                            <div className="service-visual-card">
                                <div className="visual-header"><div className="browser-dots"><span style={{ background: "#ff5f57" }} /><span style={{ background: "#febc2e" }} /><span style={{ background: "#28c840" }} /></div><div className="browser-url">analytics.google.com</div></div>
                                <div className="visual-body"><div className="v-block tall accent" /><div className="v-col"><div className="v-block" style={{ position: "relative" }}><span style={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", fontSize: 11, fontWeight: 600, color: "#22c55e" }}>↑ 84%</span></div><div className="v-block short" /><div className="v-block short dim" /></div></div>
                                <div className="visual-footer"><div className="v-tag">On-Page SEO</div><div className="v-tag">Backlinks</div><div className="v-tag">Analytics</div></div>
                            </div>
                            <div className="service-price-badge"><span className="price-from">Starting from</span><span className="price-val">$400</span></div>
                        </div>
                        <div className="service-detail-info">
                            <div className="service-detail-num">06</div>
                            <div className="section-tag reveal">SEO & Digital Growth</div>
                            <h2 className="section-title reveal">Rank higher,<br /><em>grow faster.</em></h2>
                            <p className="service-detail-desc reveal" data-delay="100">Technical SEO, content strategy, and data-driven optimisation to push your pages up the rankings.</p>
                            <ul className="service-features reveal" data-delay="200">
                                <li><span>✦</span> Technical SEO audit & fixes</li>
                                <li><span>✦</span> Keyword research & content strategy</li>
                                <li><span>✦</span> On-page & meta optimisation</li>
                                <li><span>✦</span> Monthly analytics & ranking reports</li>
                            </ul>
                            <Link href="/contact" className="btn-primary reveal" data-delay="300"><span>Grow My Traffic</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="pricing-section section-padding">
                <div className="container">
                    <div className="section-tag reveal">Pricing</div>
                    <h2 className="section-title reveal">Transparent pricing.<br /><em>No surprises.</em></h2>
                    <div className="pricing-grid">
                        {[
                            { tier: "Starter", price: "$1,200", per: "/project", features: ["5-page responsive website", "Custom design (no templates)", "CMS integration", "Contact form & basic SEO", "30 days post-launch support"], no: ["Custom animations", "E-commerce"], featured: false },
                            { tier: "Growth", price: "$4,500", per: "/project", features: ["15-page custom website or app", "Advanced animations & interactions", "E-commerce or user dashboard", "API integrations", "Full brand identity package", "3 months post-launch support", "Analytics & performance report"], no: [], featured: true },
                            { tier: "Enterprise", price: "Custom", per: "/quote", features: ["Unlimited scope", "Dedicated project team", "Multi-platform apps", "Custom backend & infrastructure", "12 months retainer support", "SLA & uptime guarantees", "Monthly strategy calls"], no: [], featured: false },
                        ].map((p, i) => (
                            <div key={i} className={`pricing-card reveal${p.featured ? " pricing-card--featured" : ""}`} data-delay={String(i * 100)}>
                                {p.featured && <div className="pricing-popular">Most Popular</div>}
                                <div className="pricing-tier">{p.tier}</div>
                                <div className="pricing-price">{p.price}<span>{p.per}</span></div>
                                <ul className="pricing-features">
                                    {p.features.map(f => <li key={f}>✓ {f}</li>)}
                                    {p.no.map(f => <li key={f} className="dim">✗ {f}</li>)}
                                </ul>
                                <Link href="/contact" className={p.featured ? "btn-primary" : "btn-ghost"} style={{ width: "100%", textAlign: "center", justifyContent: "center" }}>
                                    {p.featured ? <><span>Get Started</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></> : p.tier === "Enterprise" ? "Let's Talk" : "Get Started"}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section section-padding alt-bg">
                <div className="container">
                    <div className="section-tag reveal">FAQ</div>
                    <h2 className="section-title reveal">Common questions.</h2>
                    <div className="faq-grid">
                        {[
                            { q: "How long does a typical project take?", a: "Timelines vary by scope. A simple website takes 2–3 weeks. A mobile app typically takes 8–14 weeks." },
                            { q: "Do you work with international clients?", a: "Absolutely. We work with clients across North America, Europe, the Middle East, and Asia." },
                            { q: "What's your payment structure?", a: "We typically work on a 50% upfront / 50% on delivery structure. For larger projects we offer milestone-based payments." },
                            { q: "Do you offer ongoing maintenance?", a: "Yes. Monthly retainer plans starting at $299/month, covering updates, security patches, and priority support." },
                            { q: "Can you redesign our existing website?", a: "We love redesigns. We start with a full audit, identify conversion bottlenecks, and rebuild with a clear strategy." },
                            { q: "What information do you need to get started?", a: "A brief about your business, what you're trying to build, your target audience, timeline, and rough budget." },
                        ].map((faq, i) => (
                            <div key={i} className="faq-item reveal" data-delay={String(i * 50)}>
                                <details>
                                    <summary>{faq.q}<span className="faq-icon">+</span></summary>
                                    <p>{faq.a}</p>
                                </details>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-bg" />
                <div className="container">
                    <div className="cta-content reveal">
                        <h2>Ready to get<br /><em>started?</em></h2>
                        <p>Tell us about your project. We'll get back to you within 24 hours.</p>
                        <div className="cta-actions">
                            <Link href="/contact" className="btn-primary btn-large"><span>Start a Project</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}