import { NextResponse } from "next/server";

// Mailchimp configuration (server-only; never exposed to the browser).
const API_KEY = process.env.MAILCHIMP_API_KEY;
const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g. "us21"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: unknown;
  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json(
      { status: "error", message: "Something went wrong. Please try again." },
      { status: 400 },
    );
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    return NextResponse.json(
      {
        status: "error",
        message: "Please enter a valid email address.",
      },
      { status: 400 },
    );
  }

  if (!API_KEY || !AUDIENCE_ID || !SERVER_PREFIX) {
    console.error("Mailchimp environment variables are not configured.");
    return NextResponse.json(
      {
        status: "error",
        message: "The newsletter isn't available right now. Please try again later.",
      },
      { status: 500 },
    );
  }

  // POST to the members collection (create-only) so Mailchimp reports when the
  // address already exists, letting us tell first-time signups from duplicates.
  const endpoint = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Mailchimp accepts HTTP Basic auth with any username and the API key.
        Authorization: `Basic ${Buffer.from(`anystring:${API_KEY}`).toString("base64")}`,
      },
      body: JSON.stringify({
        email_address: email,
        // "subscribed" opts them in directly; use "pending" for double opt-in.
        status: "subscribed",
      }),
    });

    if (res.ok) {
      return NextResponse.json({
        status: "success",
        message: "Thanks for subscribing! Check your inbox soon.",
      });
    }

    const data = (await res.json().catch(() => null)) as
      | { title?: string; detail?: string }
      | null;

    // Mailchimp returns 400 with title "Member Exists" for a duplicate.
    if (res.status === 400 && data?.title === "Member Exists") {
      return NextResponse.json(
        {
          status: "duplicate",
          message: "You're already subscribed — thanks for being with us!",
        },
        { status: 200 },
      );
    }

    // A previously unsubscribed / cleaned address can't be re-added this way.
    if (
      res.status === 400 &&
      typeof data?.title === "string" &&
      /compliance|forgotten|cleaned/i.test(data.title)
    ) {
      return NextResponse.json(
        {
          status: "error",
          message:
            "We can't subscribe this address. Please try a different email.",
        },
        { status: 200 },
      );
    }

    console.error("Mailchimp error:", res.status, data);
    return NextResponse.json(
      {
        status: "error",
        message: "Couldn't subscribe right now. Please try again in a moment.",
      },
      { status: 502 },
    );
  } catch (err) {
    console.error("Mailchimp request failed:", err);
    return NextResponse.json(
      {
        status: "error",
        message: "Couldn't subscribe right now. Please try again in a moment.",
      },
      { status: 502 },
    );
  }
}
