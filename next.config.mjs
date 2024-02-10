/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/bangcode',
        destination: 'https://codeico.id',
        permanent: false
      },
      {
        source: '/visit',
        destination: 'https://warpcast.com/~/compose?text=LFG%20$BCD!%20%F0%9F%94%A5&embeds[]=https://bangcode.vercel.app',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
