import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="nav-logo" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
                            <span className="logo-text">ZeeWeb</span>
                        </Link>
                        <p>We craft digital experiences that drive real results. Your success is our portfolio.</p>
                        <div className="footer-social">
                            <a href="#">𝕏</a><a href="#">in</a><a href="#">⬤</a><a href="#">⌥</a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h5>Services</h5>
                        <Link href="/services#web">Web Development</Link>
                        <Link href="/services#app">App Development</Link>
                        <Link href="/services#design">Graphic Design</Link>
                        <Link href="/services#seo">SEO & Growth</Link>
                    </div>
                    <div className="footer-links">
                        <h5>Company</h5>
                        <Link href="/about">About Us</Link>
                        <Link href="/portfolio">Our Work</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    <div className="footer-links">
                        <h5>Contact</h5>
                        <a href="mailto:hello@ZeeWeb.io">zeewebagency@gmail.com</a>
                        <a href="tel:+15551234567">+92 301 3360912</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2026 ZeeWeb Agency. All rights reserved.</span>
                    <span>Privacy Policy · Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}