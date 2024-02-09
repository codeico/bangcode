import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Start Task!"
    }
  ],
  image: `https://amethyst-dear-zebra-9.mypinata.cloud/ipfs/QmfZFeAQgjgzxoS44DxjppKn1E1wSQnGAbjbFRTQ6uxFBC/0.png`,
  post_url: `https://bangcode.vercel.app/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'BANGCODE',
  description: 'BANGCODE ($BCD) AIRDROPS!',
  openGraph: {
    title: 'BANGCODE',
    description: 'BANGCODE ($BCD) AIRDROPS!',
    images: [`https://amethyst-dear-zebra-9.mypinata.cloud/ipfs/QmfZFeAQgjgzxoS44DxjppKn1E1wSQnGAbjbFRTQ6uxFBC/0.png`],
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
