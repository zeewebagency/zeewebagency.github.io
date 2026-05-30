import Link from "next/link";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = { title: "Case Study — Al Ahmed Rice Agro Exports" };

export default function AlahmedCase() {
    return (
        <>
            <Cursor /><Nav /><RevealOnScroll />
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-tag reveal">Case Study</div>
                        <h1 className="page-hero-title reveal">Al Ahmed Rice<br /><em>Agro Exports</em></h1>
                        <p className="page-hero-sub reveal">Business website built to improve credibility, structure product presentation, and enable global client access.</p>
                    </div>
                </div>
            </section>

            {[
                { tag: "Overview", title: "Project context", content: <p style={{ color: "var(--color-text-muted)", maxWidth: 850 }}>The client required a professional digital presence to represent rice export services. The goal was to build a structured website that communicates trust and supports international buyers.</p> },
                { tag: "Problem", title: "No structured online presence", content: <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.9, maxWidth: 850 }}><li>No centralized platform for product showcase</li><li>Weak digital credibility for export clients</li><li>No clear inquiry or contact flow</li></ul> },
                {
                    tag: "Solution", title: "Clean export-focused web system", content:
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20, marginTop: 40 }}>
                            {[{ t: "Product System", d: "Structured rice product categories for clarity." }, { t: "Responsive UI", d: "Mobile-first layout for global accessibility." }, { t: "Contact Flow", d: "Direct inquiry system for business leads." }].map(s => (
                                <div key={s.t} style={{ border: "1px solid var(--color-border)", padding: 20, borderRadius: 8 }}>
                                    <h3 style={{ color: "var(--color-accent)", marginBottom: 8 }}>{s.t}</h3>
                                    <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>{s.d}</p>
                                </div>
                            ))}
                        </div>
                },
                {
                    tag: "Result", title: "Production deployment", content:
                        <><ul style={{ color: "var(--color-text-muted)", lineHeight: 1.9, maxWidth: 850 }}><li>Live website deployed on custom domain</li><li>Improved business credibility</li><li>Clear product presentation for export market</li><li>Professional brand positioning</li></ul>
                            <div style={{ marginTop: 30 }}><a href="https://alahmedriceagroexports.com" target="_blank" rel="noopener" className="btn-primary btn-large">Visit Live Project →</a></div></>
                },
            ].map((s, i) => (
                <section key={i} className="portfolio-section section-padding" style={i % 2 === 1 ? { background: "var(--color-bg-2)" } : {}}>
                    <div className="container">
                        <div className="reveal">
                            <div className="section-tag">{s.tag}</div>
                            <h2 className="section-title" style={{ marginBottom: 24 }}>{s.title}</h2>
                            {s.content}
                        </div>
                    </div>
                </section>
            ))}

            <Footer />
        </>
    );
}