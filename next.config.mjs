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
        source: '/pinatacloud',
        destination: 'https://bangcode.vercel.app',
        permanent: false
      }
    ]
  }
};

export default nextConfig;
