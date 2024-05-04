/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/real-time-price-tracker' : undefined,
  assetPrefix: isProd ? '/real-time-price-tracker/' : '/',
};

export default nextConfig;
