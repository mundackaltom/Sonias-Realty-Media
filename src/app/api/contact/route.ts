import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    // For local development we log the submission. Replace this with an email/db integration later.
    console.log("Contact submission:", data);

    return NextResponse.json({ ok: true, message: "Received" }, { status: 200 });
  } catch (err) {
    console.error("Contact error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
