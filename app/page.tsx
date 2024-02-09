import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Start Task!"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTwZxvMmcEyhFHxis9SZC2E33jsA5M7fZU5nf28o3mXWP/0.png`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'BANGCODE',
  description: 'BANGCODE ($BCD) AIRDROPS!',
  openGraph: {
    title: 'BANGCODE',
    description: 'BANGCODE ($BCD) AIRDROPS!',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmTwZxvMmcEyhFHxis9SZC2E33jsA5M7fZU5nf28o3mXWP/0.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>BANGCODE ($BCD) AIRDROPS!</h1>
    </>
  );
}
