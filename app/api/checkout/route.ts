import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST() {
  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const priceId = process.env.STRIPE_PRICE_ID;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  if (!stripeSecret || !priceId) {
    return NextResponse.json(
      { error: "Missing STRIPE_SECRET_KEY or STRIPE_PRICE_ID" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(stripeSecret, { apiVersion: "2024-06-20" });

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${siteUrl}/thank-you`,
    cancel_url: `${siteUrl}/pricing`,
    // You can collect customer email
    // customer_email: "auto",
  });

  return NextResponse.json({ url: session.url });
}
