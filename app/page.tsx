"use clients";
import Link from "next/link";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import Marquee from "react-fast-marquee";

const items = [
  "Web Development",
  "Mobile Apps",
  "Graphic Design",
  "UI/UX Design",
  "Brand Identity",
  "E-Commerce",
];

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <RevealOnScroll />

      {/* HERO */}
      <section className="hero">
        <div className="hero-noise" />
        <div className="hero-grid" id="heroGrid" />
        <div className="hero-content">
          <div className="hero-badge reveal">
            <span className="badge-dot" />
            Available for new projects
          </div>
          <h1 className="hero-title">
            <span className="title-line reveal" data-delay="0">We Build</span>
            <span className="title-line italic reveal" data-delay="100">Digital</span>
            <span className="title-line reveal" data-delay="200">Experiences</span>
          </h1>
          <p className="hero-sub reveal" data-delay="350">
            Web development · App development · Graphic design<br />
            Crafted to convert. Built to last.
          </p>
          <div className="hero-actions reveal" data-delay="450">
            <Link href="/portfolio" className="btn-primary">
              <span>View Our Work</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/contact" className="btn-ghost">Start a Project</Link>
          </div>
          <div className="hero-stats reveal" data-delay="100">
            <div className="stat"><span className="stat-num">1</span><span className="stat-plus">+</span><span className="stat-label">Projects Done</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">95</span><span className="stat-plus">%</span><span className="stat-label">Client Satisfaction</span></div>
            <div className="stat-divider" />
            <div className="stat"><span className="stat-num">4</span><span className="stat-plus">+</span><span className="stat-label">Years Experience</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card card-1"><div className="card-icon">🌐</div><div className="card-label">Web Dev</div></div>
          <div className="hero-card card-2"><div className="card-icon">📱</div><div className="card-label">App Dev</div></div>
          <div className="hero-card card-3"><div className="card-icon">🎨</div><div className="card-label">Design</div></div>
          <div className="hero-orb" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <Marquee speed={50} gradient={false}>
          {[...items, ...items].map((t, i) => (
            <span key={i} className="marquee-item">
              {t} <span className="dot">◆</span>
            </span>
          ))}
        </Marquee>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="services-preview section-padding">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-tag reveal">What We Do</div>
              <h2 className="section-title reveal">Six pillars.<br /><em>Infinite possibilities.</em></h2>
            </div>
          </div>
          <div className="services-grid">
            {[
              { num: "01", icon: <><rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" /><path d="M16 44h16M24 36v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M14 20l4 4-4 4M22 28h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>, title: "Web Development", desc: "Blazing-fast, pixel-perfect websites. From landing pages to SaaS platforms — responsive, accessible, SEO-ready.", tags: ["React", "Next.js", "Node", "WordPress"], href: "/services#web", accent: false },
              { num: "02", icon: <><rect x="14" y="2" width="20" height="44" rx="4" stroke="currentColor" strokeWidth="2" /><circle cx="24" cy="40" r="2" fill="currentColor" /><path d="M20 8h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>, title: "App Development", desc: "Flutter-based mobile experiences with clean UI, usability-first design, and real-world functionality.", tags: ["React Native", "Flutter"], href: "/services#app", accent: true },
              { num: "03", icon: <><circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" /><path d="M24 4v4M24 40v4M4 24h4M40 24h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M10 10l3 3M35 35l3 3M10 38l3-3M35 13l3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>, title: "Graphic Design", desc: "Identities that command attention. Logos, brand systems, social kits, and packaging — crafted with intention.", tags: ["Branding", "UI/UX", "Print", "Motion"], href: "/services#design", accent: false },
              { num: "04", icon: <><polyline points="6,38 16,26 24,32 38,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M34 14h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><line x1="6" y1="42" x2="42" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><line x1="6" y1="10" x2="6" y2="42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>, title: "SEO & Digital Growth", desc: "Technical SEO, on-page optimization, and content strategy to push your rankings and keep them there.", tags: ["SEO", "Analytics", "Optimization"], href: "/services#seo", accent: false },
              { num: "05", icon: <><circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2" /><path d="M24 6v4M24 38v4M6 24h4M38 24h4M10.1 10.1l2.8 2.8M35.1 35.1l2.8 2.8M10.1 37.9l2.8-2.8M35.1 12.9l2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>, title: "Automation & Scripting", desc: "Python scripts, API integrations, and data pipelines that eliminate repetitive work and scale your output.", tags: ["Python", "Bash", "Cron"], href: "/services#automation", accent: true },
              { num: "06", icon: <><path d="M24 40V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M24 20c0-4-3-7-7-7a7 7 0 0 0-7 7c0 2.5 1.2 4.7 3 6.1C11.2 34 14 37 14 40h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M24 20c0-4 3-7 7-7a7 7 0 0 1 7 7c0 2.5-1.2 4.7-3 6.1C37 34 34 37 34 40H24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></>, title: "Business Automation", desc: "Zapier, Make, n8n workflows that connect your CRM, email, and Slack — no developers required after handoff.", tags: ["Python", "APIs", "Workflows"], href: "/services#biz-automation", accent: false },
            ].map((s, i) => (
              <div key={i} className={`service-card reveal${s.accent ? " service-card--accent" : ""}`} data-delay={String(i * 100)}>
                <div className="service-num">{s.num}</div>
                <div className="service-icon-wrap"><svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">{s.icon}</svg></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="service-tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div>
                <Link href={s.href} className="service-link">
                  Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="featured-work section-padding" style={{ background: "var(--color-bg-2)" }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-tag reveal">Selected Work</div>
              <h2 className="section-title reveal">Work that<br /><em>speaks volumes.</em></h2>
            </div>
            <Link href="/portfolio" className="view-all reveal">View All Projects →</Link>
          </div>
          <div className="work-grid">
            <div className="work-item work-item--large reveal">
              <div className="work-img" style={{ background: "linear-gradient(135deg,#0a1628,#0d2347)" }}>
                <div className="work-placeholder">
                  <svg viewBox="0 0 80 60" fill="none" width="120">
                    <rect x="5" y="5" width="70" height="45" rx="4" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 2" />
                    <circle cx="20" cy="20" r="6" stroke="#3B82F6" strokeWidth="1.5" />
                    <path d="M5 35l20-12 15 10 15-8 20 15" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
              <div className="work-info">
                <span className="work-cat">Web Development</span>
                <h3>Al Ahmed Rice Agro Website</h3>
                <p>Full-stack multilingual website for agro-export business</p>
              </div>
            </div>
            <div className="work-item reveal" data-delay="100">
              <div className="work-img" style={{ background: "linear-gradient(135deg,#0f1f45,#1a3a6b)" }}>
                <div className="work-placeholder">
                  <svg viewBox="0 0 60 80" fill="none" width="80">
                    <rect x="10" y="5" width="40" height="70" rx="6" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="4 2" />
                    <rect x="20" y="15" width="20" height="14" rx="2" stroke="#3B82F6" strokeWidth="1.5" />
                    <rect x="18" y="35" width="9" height="9" rx="1" stroke="#3B82F6" strokeWidth="1.5" />
                    <rect x="30" y="35" width="9" height="9" rx="1" stroke="#3B82F6" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>
              <div className="work-info">
                <span className="work-cat">App Development</span>
                <h3>Finly Mobile Banking</h3>
                <p>iOS & Android fintech app</p>
              </div>
            </div>
            <div className="work-item reveal" data-delay="200">
              <div className="work-img" style={{ background: "linear-gradient(135deg,#0a1628,#1e3a8a)" }}>
                <div className="work-placeholder">
                  <svg viewBox="0 0 80 80" fill="none" width="100">
                    <circle cx="40" cy="40" r="25" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="4 2" />
                    <path d="M28 40 C28 32 52 32 52 40 C52 48 28 48 28 40Z" stroke="#60A5FA" strokeWidth="1.5" />
                    <circle cx="40" cy="28" r="4" fill="#60A5FA" opacity="0.5" />
                  </svg>
                </div>
              </div>
              <div className="work-info">
                <span className="work-cat">Graphic Design</span>
                <h3>Bloom Brand Identity</h3>
                <p>Complete brand system & guidelines</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process section-padding">
        <div className="container">
          <div className="section-tag reveal">How We Work</div>
          <h2 className="section-title reveal">Our process is<br /><em>obsessively refined.</em></h2>
          <div className="process-steps">
            {[
              { num: "01", title: "Discovery", desc: "We deep-dive into your brand, goals, and audience. No guessing — just clarity." },
              { num: "02", title: "Strategy", desc: "Roadmaps, wireframes, and technical plans set before a single line of code." },
              { num: "03", title: "Build", desc: "Agile sprints, daily updates, zero surprises. You're always in the loop." },
              { num: "04", title: "Launch", desc: "QA-tested, optimized, deployed. Ongoing support so you never feel abandoned." },
            ].map((step, i) => (
              <div
                key={step.num}
                className="process-step reveal"
                data-delay={String(i * 100)}
              >
                <div className="step-num">{step.num}</div>
                <div className="step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials section-padding" style={{ background: "var(--color-bg-2)" }}>
        <div className="container">
          <div className="section-tag reveal">Client Love</div>
          <h2 className="section-title reveal">Don't take our<br /><em>word for it.</em></h2>
          <div className="testimonial-grid">
            <div className="testimonial-card reveal">
              <div className="stars">★★★★★</div>
              <p>"The website improved our online presence with a clean, responsive design. Delivery was simple and aligned with our requirements."</p>
              <div className="testimonial-author">
                <div className="author-avatar">MF</div>
                <div><strong>Muhammad Farooq</strong><span>Owner, Al Ahmed Rice Agro Exports</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg" />
        <div className="container">
          <div className="cta-content reveal">
            <h2>Ready to build<br /><em>something great?</em></h2>
            <p>Let's turn your vision into a digital product that dominates your market.</p>
            <div className="cta-actions">
              <Link href="/contact" className="btn-primary btn-large">
                <span>Start Your Project</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/about" className="btn-ghost btn-large">Meet the Team</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}