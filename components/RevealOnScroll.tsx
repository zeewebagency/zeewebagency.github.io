"use client";

import { useEffect } from "react";

export default function RevealOnScroll() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.getAttribute("data-delay") || "0");
                    setTimeout(() => entry.target.classList.add("visible"), delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -60px 0px" });
        document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);
    return null;
}