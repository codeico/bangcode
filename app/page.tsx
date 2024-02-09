import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Start Task!"
    }
  ],
  image: `https://codeico.id/nft/0.png`,
  post_url: `https://bangcode.vercel.app/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'BANGCODE',
  description: 'BANGCODE ($BCD) AIRDROPS!',
  openGraph: {
    title: 'BANGCODE',
    description: 'BANGCODE ($BCD) AIRDROPS!',
    images: [`https://codeico.id/nft/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <meta property="fc:frame:image" content="https://codeico.id/nft/0.png" />
      <h1>BANGCODE ($BCD) AIRDROPS!</h1>
    </>
  );
}
