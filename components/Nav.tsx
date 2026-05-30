"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
                <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                    <span className="logo-text">ZeeWeb</span>
                </Link>
                <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 36 }}>
                    <Link href="/services" className="nav-link">Services</Link>
                    <Link href="/portfolio" className="nav-link">Work</Link>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/contact" className="nav-link nav-cta">Let's Talk</Link>
                </div>
                <button
                    className="nav-hamburger"
                    id="hamburger"
                    style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span style={{ display: "block", width: 24, height: 1.5, background: "var(--color-text)", transition: "all var(--transition)", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "" }} />
                    <span style={{ display: "block", width: 24, height: 1.5, background: "var(--color-text)", transition: "all var(--transition)", opacity: menuOpen ? 0 : 1 }} />
                    <span style={{ display: "block", width: 24, height: 1.5, background: "var(--color-text)", transition: "all var(--transition)", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "" }} />
                </button>
            </nav>
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
                <Link href="/portfolio" onClick={() => setMenuOpen(false)}>Work</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>Let's Talk</Link>
            </div>
        </>
    );
}