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
      }
    );

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.log("POST ERROR: ", error);
    return NextResponse.json({ error: error });
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET(req: NextRequest) {
  console.log("hi");
  const token = req.nextUrl.searchParams.get("token");

  console.log(token);
  if (!token) {
    return NextResponse.json({ error: "Token is required" }, { status: 400 });
  }

  try {
    let statusDescription = "processing";
    let data;

    // Keep polling until the status is "Accepted" or "Runtime Error (NZEC)"
    while (
      statusDescription.toLowerCase() === "processing" ||
      statusDescription.toLowerCase() === "in queue"
    ) {
      console.log("GET REQUEST: ", token);
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
        }
      );

      data = await res.json();
      statusDescription = data?.status?.description;

      console.log(statusDescription);
      // If status is still "Processing" or "In queue", wait for 1 second
      if (
        statusDescription.toLowerCase() === "processing" ||
        statusDescription.toLowerCase() === "in queue"
      ) {
        await sleep(1000);
      }
    }

    // Return the final response once the status is "Accepted" or "Runtime Error (NZEC)"
    return NextResponse.json(data);
  } catch (error) {
    console.log("GET ERROR: ", error);
    return NextResponse.json(
      {
        error: "Failed to fetch submission status",
      },
      { status: 500 }
    );
  }
}
