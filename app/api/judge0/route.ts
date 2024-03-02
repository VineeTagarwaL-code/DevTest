import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  try {
    const res = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
          "X-RapidAPI-Key": process.env.RAPID_API_KEY!,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        body: JSON.stringify({
          language_id: 63,
          source_code: btoa(code),
        }),
        next: {
          revalidate: 0,
        },
      },
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log("POST ERROR: ", error);
    return NextResponse.json({ error: error });
  }
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  try {
    const res = await fetch(
      `https://judge0-ce.p.rapidapi.com/submissions/${token}/?base64_encoded=true`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY!,
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        next: {
          revalidate: 0,
        },
      },
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log("GET ERROR: ", error);
    return NextResponse.json({
      error: error,
    });
  }
}
