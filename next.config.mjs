/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/real-time-price-tracker' : '',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
