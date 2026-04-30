import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-03-31.basil" });

export async function POST(req: NextRequest) {
  try {
    const { items } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    const origin = req.headers.get("origin") || "https://kessef-art.vercel.app";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: items.map((item: { product: { name: string; coloris: string; price: number; images: string[] }; quantity: number }) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: `${item.product.name} — ${item.product.coloris}`,
            images: item.product.images[0]?.startsWith("/")
              ? [`${origin}${item.product.images[0]}`]
              : [item.product.images[0]],
          },
          unit_amount: Math.round(item.product.price * 100),
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `${origin}/panier/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/panier`,
      locale: "fr",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
