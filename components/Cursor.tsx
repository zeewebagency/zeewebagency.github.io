'use client'
import { useEffect } from "react";

export default function Cursor() {
    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const follower = document.getElementById("cursor-follower");
        if (!cursor || !follower) return;
        let mouseX = 0, mouseY = 0, fx = 0, fy = 0;

        const move = (e: MouseEvent) => {
            mouseX = e.clientX; mouseY = e.clientY;
            cursor.style.left = mouseX - 4 + "px";
            cursor.style.top = mouseY - 4 + "px";
        };
        const animate = () => {
            fx += (mouseX - fx - 18) * 0.12;
            fy += (mouseY - fy - 18) * 0.12;
            follower.style.left = fx + "px";
            follower.style.top = fy + "px";
            requestAnimationFrame(animate);
        };
        document.addEventListener("mousemove", move);
        animate();

        const targets = document.querySelectorAll("a,button,[role=button],.service-card,.work-item,.portfolio-item");
        targets.forEach(el => {
            el.addEventListener("mouseenter", () => { cursor.classList.add("hovered"); follower.classList.add("hovered"); });
            el.addEventListener("mouseleave", () => { cursor.classList.remove("hovered"); follower.classList.remove("hovered"); });
        });
        return () => document.removeEventListener("mousemove", move);
    }, []);

    return (
        <>
            <div className="cursor" id="cursor" />
            <div className="cursor-follower" id="cursor-follower" />
        </>
    );
}