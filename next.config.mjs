/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/real-time-price-tracker' : undefined,
};

export default nextConfig;
