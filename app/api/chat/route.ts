import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  const huggingFaceUrl = "https://router.huggingface.co/nscale/v1/chat/completions";

  const res = await fetch(huggingFaceUrl, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.HF_API_KEY!}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      messages,
      temperature: 0.9,
      top_p: 0.7,
      model: "meta-llama/Llama-3.3-70B-Instruct",
      stream: false
    })
  });

  if (!res.ok) {
    const error = await res.text();
    return NextResponse.json({ error }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}