import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<Response> {
  const data = await req.json();
  console.log(data);
  const buttonId = data.untrustedData.buttonIndex;

  let path: string;
  if (buttonId === 1) {
    path = "bangcode";
  } else if (buttonId === 2) {
    path = "visit";
  } else {
    path = "";
  }
  const headers = new Headers();
  headers.set("Location", `https://bangcode.vercel.app/`);
  const response = NextResponse.redirect(
    `https://bangcode.vercel.app/${path}`,
    {
      headers: headers,
      status: 302,
    },
  );
  return response;
}

export const dynamic = "force-dynamic";
