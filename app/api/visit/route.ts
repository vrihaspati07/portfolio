import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      // Skip silently in local development if environment variables are not set
      return NextResponse.json({ status: "skipped", message: "Webhook not configured." });
    }

    // Get Vercel-injected geo headers and standard request headers
    const ip = req.headers.get("x-forwarded-for") || "Unknown IP";
    const city = req.headers.get("x-vercel-ip-city") || "Local/Unknown City";
    const region = req.headers.get("x-vercel-ip-country-region") || "Local/Unknown Region";
    const country = req.headers.get("x-vercel-ip-country") || "Local/Unknown Country";
    const userAgent = req.headers.get("user-agent") || "Unknown Browser";

    const timestamp = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

    // Format rich embed card for Discord notification
    const embed = {
      title: "New Visitor Alert 🌐",
      description: "Someone just landed on your portfolio website.",
      color: 6512369, // Decimal value for Indigo #6366f1
      fields: [
        {
          name: "Location",
          value: `📍 ${city}, ${region}, ${country}`,
          inline: true,
        },
        {
          name: "IP Address",
          value: `🔌 ${ip}`,
          inline: true,
        },
        {
          name: "Browser & Device (User-Agent)",
          value: `💻 ${userAgent.substring(0, 250)}${userAgent.length > 250 ? "..." : ""}`,
          inline: false,
        },
        {
          name: "Timestamp (India Standard Time)",
          value: `⏰ ${timestamp}`,
          inline: false,
        },
      ],
      footer: {
        text: "Portfolio Traffic Tracker · Live Monitoring",
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
    console.error("Traffic tracker error:", err);
    return NextResponse.json({ error: "Failed to log visit" }, { status: 500 });
  }
}
