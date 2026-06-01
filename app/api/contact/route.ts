import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, budget, services, timeline, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Send email notification via fetch to your Gmail
        console.log("New contact form submission:", {
            name,
            email,
            company,
            budget,
            services,
            timeline,
            message,
        });

        return NextResponse.json({ ok: true });
    } catch {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}