/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    domains: ['nouranalalalmi.github.io'],
    unoptimized: true,
  },
  basePath: isProd ? '/real-time-price-tracker' : '',
  assetPrefix: isProd ? '/real-time-price-tracker/' : undefined,
};

export default nextConfig;
