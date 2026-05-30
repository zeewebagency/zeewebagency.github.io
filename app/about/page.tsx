import Link from "next/link";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = { title: "About — ZeeWeb Agency" };

export default function About() {
    return (
        <>
            <Cursor /><Nav /><RevealOnScroll />
            <section className="page-hero">
                <div className="page-hero-bg" />
                <div className="container">
                    <div className="page-hero-content">
                        <div className="section-tag reveal">About Us</div>
                        <h1 className="page-hero-title reveal" data-delay="100">We're the team<br /><em>behind the pixels.</em></h1>
                        <p className="page-hero-sub reveal" data-delay="200">Founded in 2026, ZeeWeb is a boutique digital agency obsessed with craft, performance, and results.</p>
                    </div>
                </div>
            </section>

            <section className="mission-section section-padding">
                <div className="container">
                    <div className="mission-grid">
                        <div className="mission-text">
                            <div className="section-tag reveal">Our Mission</div>
                            <h2 className="section-title reveal">We believe great<br /><em>design is strategy.</em></h2>
                            <p className="reveal" data-delay="100" style={{ color: "var(--color-text-muted)", marginBottom: 16 }}>Every line of code we write, every pixel we place — it's in service of a single goal: making our clients' businesses stronger. We don't chase awards. We chase results.</p>
                            <p className="reveal" data-delay="150" style={{ color: "var(--color-text-muted)", marginBottom: 32 }}>We're a small, senior team. Every project gets our best talent, not junior developers learning on your dime.</p>
                            <div className="mission-values reveal" data-delay="200">
                                {[{ icon: "⚡", title: "Speed", desc: "We ship fast without sacrificing quality. Agile, iterative, always moving." }, { icon: "🎯", title: "Precision", desc: "Every detail matters. We sweat the small stuff so you don't have to." }, { icon: "🤝", title: "Partnership", desc: "We're not vendors. We're partners invested in your outcomes." }].map(v => (
                                    <div key={v.title} className="value-item">
                                        <span className="v-icon">{v.icon}</span>
                                        <div><strong>{v.title}</strong><p>{v.desc}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mission-visual reveal" data-delay="100">
                            <div className="mission-card">
                                {[{ num: "2026", label: "Founded" }, { num: "3", label: "Team Members" }, { num: "100+", label: "Countries Served" }, { num: "$0", label: "Wasted on Ads" }].map((s, i) => (
                                    <div key={i}>{i > 0 && <div className="mc-divider" />}<div className="mc-stat"><span className="mc-num">{s.num}</span><span className="mc-label">{s.label}</span></div></div>
                                ))}
                            </div>
                            <p className="mc-note">100% of our clients come from referrals or our portfolio. Our work speaks for itself.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="team-section section-padding alt-bg">
                <div className="container">
                    <div className="section-tag reveal">The Team</div>
                    <h2 className="section-title reveal">Senior talent.<br /><em>No juniors on your project.</em></h2>
                    <div className="team-grid">
                        {[
                            { initials: "UA", name: "Uzair Arain", role: "Lead Developer & Operations", desc: "Handles project execution, website and application development, and day-to-day agency operations.", skills: ["Node", "React", "Flutter/Dart", "Python"], gradient: "linear-gradient(135deg,#1d4ed8,#3b82f6)" },
                            { initials: "MW", name: "Muhammad Wahib", role: "Founder", desc: "Founder of the agency. Provides overall direction and initial client acquisition.", skills: ["Communication", "Strategy"], gradient: "linear-gradient(135deg,#1e40af,#2563eb)" },
                            { initials: "YA", name: "Yazaan Arain", role: "Designer & Marketing", desc: "Responsible for UI/UX design, branding, graphics, and digital marketing campaigns.", skills: ["Illustrator", "Figma", "Photoshop"], gradient: "linear-gradient(135deg,#1e3a8a,#1d4ed8)" },
                        ].map((m, i) => (
                            <div key={i} className="team-card reveal" data-delay={String(i * 100)}>
                                <div className="team-avatar" style={{ background: m.gradient }}><span>{m.initials}</span></div>
                                <div className="team-info">
                                    <h4>{m.name}</h4>
                                    <span className="team-role">{m.role}</span>
                                    <p>{m.desc}</p>
                                </div>
                                <div className="team-skills">{m.skills.map(s => <span key={s}>{s}</span>)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="stack-section section-padding">
                <div className="container">
                    <div className="section-tag reveal">Tech Stack</div>
                    <h2 className="section-title reveal">Tools we<br /><em>trust.</em></h2>
                    <div className="stack-grid">
                        {[
                            { title: "Frontend", items: ["React", "Next.js", "EJS", "HTML", "JavaScript", "CSS"] },
                            { title: "Backend", items: ["Node.js", "Python", "GraphQL", "REST APIs", "PostgreSQL", "MongoDB"] },
                            { title: "Mobile", items: ["Flutter", "Swift", "Kotlin", "Expo", "Firebase"] },
                            { title: "Designing", items: ["Figma", "Photoshop", "Illustrator"] },
                        ].map((cat, i) => (
                            <div key={i} className="stack-category reveal" data-delay={String(i * 100)}>
                                <h4>{cat.title}</h4>
                                <div className="stack-items">{cat.items.map(item => <div key={item} className="stack-item">{item}</div>)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-bg" />
                <div className="container">
                    <div className="cta-content reveal">
                        <h2>Join the brands<br /><em>we've helped grow.</em></h2>
                        <p>We're selective about who we work with — because your success is our reputation.</p>
                        <div className="cta-actions">
                            <Link href="/contact" className="btn-primary btn-large"><span>Work With Us</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                            <Link href="/portfolio" className="btn-ghost btn-large">See Our Work</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}