import Link from "next/link";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = { title: "Portfolio — ZeeWeb Agency" };

const projects = [
    { category: "Web Development", title: "Al Ahmed Agro Website", desc: "Multilingual website for Al Ahmed Rice & Agro Exports — responsive, SEO-optimized, and globally accessible.", stack: ["Node.js", "EJS"], live: "https://alahmedriceagroexports.com", caseStudy: "/portfolio/alahmed", gradient: "linear-gradient(135deg,#0a1628,#0d2347)", svgStroke: "#3B82F6", type: "web" },
    { category: "App Development", title: "Finly Mobile Banking", desc: "Fintech app with biometric auth, smart spending insights, and instant P2P transfers.", stack: ["React Native", "Stripe", "Firebase"], live: "#", caseStudy: "#", gradient: "linear-gradient(135deg,#0f1f45,#1a3a6b)", svgStroke: "#60A5FA", type: "app" },
    { category: "App Development", title: "Viva Fitness Tracker", desc: "iOS-exclusive fitness app with AI workout coach and Apple Health integration.", stack: ["Swift", "Core ML", "HealthKit"], live: "#", caseStudy: "#", gradient: "linear-gradient(135deg,#1a2a4a,#0a1628)", svgStroke: "#93C5FD", type: "app" },
    { category: "Brand Identity", title: "Bloom Co. Brand System", desc: "Full brand identity for an organic beauty brand — logo, color system, typography, and packaging.", stack: ["Brand Identity", "Packaging", "Print"], live: "#", caseStudy: "#", gradient: "linear-gradient(135deg,#1a1a2e,#2d2d4a)", svgStroke: "#3B82F6", type: "design" },
    { category: "Brand Identity", title: "Surge Energy Brand", desc: "Bold brand identity for a sports energy drink targeting Gen Z athletes.", stack: ["Logo Design", "Can Design", "Social Kit"], live: "#", caseStudy: "#", gradient: "linear-gradient(135deg,#1a0a0a,#3a0a0a)", svgStroke: "#EF4444", type: "design" },
    { category: "UI/UX Design", title: "EcoMarket App UI", desc: "Complete UI/UX design for a sustainable marketplace — 60+ Figma screens and design system.", stack: ["Figma", "UI Design", "Prototyping"], live: "#", caseStudy: "#", gradient: "linear-gradient(135deg,#0a1a14,#1a3a28)", svgStroke: "#22c55e", type: "design" },
];

export default function Portfolio() {
    return (
        <>
            <Cursor /><Nav /><RevealOnScroll />
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-tag reveal">Our Work</div>
                        <h1 className="page-hero-title reveal" data-delay="100">Projects we're<br /><em>proud of.</em></h1>
                        <p className="page-hero-sub reveal" data-delay="200">A curated selection of our best work across web, mobile, and brand design.</p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="portfolio-grid">
                        {projects.map((p, i) => (
                            <div key={i} className="portfolio-item reveal" data-delay={String((i % 3) * 100)}>
                                <div className="portfolio-img" style={{ background: p.gradient }}>
                                    <div className="portfolio-overlay">
                                        <div className="portfolio-links">
                                            {p.live !== "#" && <a href={p.live} target="_blank" rel="noopener" className="p-link">View Live</a>}
                                            {p.caseStudy !== "#" && <Link href={p.caseStudy} className="p-link p-link--ghost">Case Study</Link>}
                                            {p.live === "#" && p.caseStudy === "#" && <span className="p-link" style={{ opacity: 0.5, cursor: "default" }}>Coming Soon</span>}
                                        </div>
                                    </div>
                                    <svg viewBox="0 0 120 80" fill="none" className="p-svg">
                                        <rect x="8" y="8" width="104" height="64" rx="4" stroke={p.svgStroke} strokeWidth="1" strokeDasharray="4 3" />
                                        <path d="M20 36h80M20 44h60M20 52h70M20 60h40" stroke={p.svgStroke} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
                                    </svg>
                                </div>
                                <div className="portfolio-info">
                                    <span className="work-cat">{p.category}</span>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                    <div className="portfolio-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-bg" />
                <div className="container">
                    <div className="cta-content reveal">
                        <h2>Let's add your<br /><em>project here.</em></h2>
                        <p>Ready to create something you'll be proud of?</p>
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