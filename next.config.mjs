/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/nouranalalalmi.github.io/real-time-price-tracker' : undefined,
};

export default nextConfig;
