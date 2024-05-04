/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    loader: 'default',
    path: isProd
      ? 'https://nouranalalalmi.github.io/real-time-price-tracker'
      : 'http://localhost:3000',
  },
  //   basePath: isProd ? '/real-time-price-tracker' : '',
  //   assetPrefix: isProd ? '/real-time-price-tracker/' : '/',
};

export default nextConfig;
