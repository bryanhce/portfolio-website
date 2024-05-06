/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.codingcucumbers.com"],
  },
};

module.exports = nextConfig;
