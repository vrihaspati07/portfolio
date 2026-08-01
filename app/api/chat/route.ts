import Groq from "groq-sdk";
import { NextRequest, NextResponse } from "next/server";
import { PROFILE_CONTEXT } from "@/lib/profile-context";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Groq API key is not configured in server environment." },
        { status: 500 }
      );
    }

    const { message } = await req.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Valid message parameter is required." }, { status: 400 });
    }

    const groq = new Groq({ apiKey });

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: PROFILE_CONTEXT },
        { role: "user", content: message.trim() },
      ],
      temperature: 0.4,
      max_tokens: 400,
    });

    const reply = completion.choices[0]?.message?.content ?? "";
    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Groq API error:", err);
    return NextResponse.json(
      { error: "Failed to query AI assistant. Please try again later." },
      { status: 500 }
    );
  }
}
