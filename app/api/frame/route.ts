import { NextRequest, NextResponse } from 'next/server';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const searchParams = req.nextUrl.searchParams
  const id:any = searchParams.get("id")
  const idAsNumber = parseInt(id)

  const nextId = idAsNumber + 1
  const firstId = 0

  if(idAsNumber === 7){
      return new NextResponse(`<!DOCTYPE html><html><head>
    <title>Claim More!</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://codeico.id/nft/7.png" />
    <meta property="fc:frame:button:1" content="Claim More!" />
    <meta property="fc:frame:button:1:action" content="post_redirect" />
    <meta property="fc:frame:button:2" content="Visit Website" />
    <meta property="fc:frame:button:2:action" content="post_redirect" />
    <meta property="fc:frame:button:3" content="Claim More!!" />
    <meta property="fc:frame:post_url" content="https://bangcode.vercel.app/api/end" />
  </head></html>`); 
  } else if(idAsNumber === 1){
    return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://codeico.id/nft/${id}.png" />
    <meta property="fc:frame:button:1" content="Already Follow!!" />
    <meta property="fc:frame:post_url" content="https://bangcode.vercel.app/api/frame?id=${nextId}" />
  </head></html>`);
} else if(idAsNumber === 5){
  return new NextResponse(`<!DOCTYPE html><html><head>
  <title>This is frame ${id}</title>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://codeico.id/nft/${id}.png" />
  <meta property="fc:frame:button:1" content="SUBMIT WALLET" />
  <meta property="fc:frame:post_url" content="https://bangcode.vercel.app/api/frame?id=${nextId}" />
  <meta property="fc:frame:input:text" content="0x...." />
</head></html>`);
} else if(idAsNumber === 6){
  return new NextResponse(`<!DOCTYPE html><html><head>
  <title>This is frame ${id}</title>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="https://codeico.id/nft/${id}.png" />
  <meta property="fc:frame:button:1" content="Need More $BCD?" />
  <meta property="fc:frame:post_url" content="https://bangcode.vercel.app/api/frame?id=${nextId}" />
</head></html>`);
} else {
  return new NextResponse(`<!DOCTYPE html><html><head>
    <title>This is frame ${id}</title>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="https://codeico.id/nft/${id}.png" />
    <meta property="fc:frame:button:1" content="DONE!!" />
    <meta property="fc:frame:button:2" content="Recast!!" />
    <meta property="fc:frame:button:1:action" link="https://bangcode.vercel.app/api/frame?id=${nextId}" />
    <meta property="fc:frame:button:2:action" link="https://warpcast.com/~/compose?text=LFG%20$BCD!&embeds[]=https://bangcode.vercel.app" />
  </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
