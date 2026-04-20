import { NextRequest, NextResponse } from "next/server";

// This route handles Stripe checkout session creation.
// To activate real Stripe payments, set STRIPE_SECRET_KEY in your .env.local
// and uncomment the Stripe code below.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { items } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    // --- STRIPE INTEGRATION ---
    // Uncomment and configure once you have a Stripe account:
    //
    // import Stripe from "stripe";
    // const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2023-10-16" });
    //
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   line_items: items.map((item: any) => ({
    //     price_data: {
    //       currency: "eur",
    //       product_data: { name: item.product.name, images: [item.product.images[0]] },
    //       unit_amount: item.product.price * 100,
    //     },
    //     quantity: item.quantity,
    //   })),
    //   mode: "payment",
    //   success_url: `${process.env.NEXT_PUBLIC_URL}/panier?success=true`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_URL}/panier`,
    // });
    //
    // return NextResponse.json({ sessionId: session.id });

    // Mock response for demo
    return NextResponse.json({ sessionId: "mock_session_" + Date.now() });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
