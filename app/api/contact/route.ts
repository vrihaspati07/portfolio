import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      // Mock success if webhook not set up in local dev
      return NextResponse.json({ status: "skipped", message: "Discord Webhook not configured in environment." });
    }

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const ip = req.headers.get("x-forwarded-for") || "Unknown IP";
    const city = req.headers.get("x-vercel-ip-city") || "Local/Unknown City";
    const country = req.headers.get("x-vercel-ip-country") || "Local/Unknown Country";
    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

    // Format rich embed card for Discord contact form alert
    const embed = {
      title: "New Contact Message 📩",
      description: "Someone submitted the contact form on your portfolio website.",
      color: 6512369, // Decimal value for Indigo #6366F1
      fields: [
        {
          name: "Name",
          value: `👤 ${name}`,
          inline: true,
        },
        {
          name: "Email",
          value: `📧 ${email}`,
          inline: true,
        },
        {
          name: "Message",
          value: `\`\`\`\n${message}\n\`\`\``,
          inline: false,
        },
        {
          name: "Details",
          value: `📍 Location: ${city}, ${country}\n🔌 IP: ${ip}\n⏰ Time: ${timestamp}`,
          inline: false,
        },
      ],
      footer: {
        text: "Portfolio Contact Form Alerts",
      },
    };

    // Forward payload to Discord Webhook
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [embed],
      }),
    });

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("Discord contact webhook error:", err);
    return NextResponse.json({ error: "Failed to forward contact message" }, { status: 500 });
  }
}
