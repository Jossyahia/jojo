/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudinary.com",
        pathname: "/fastfastng/**",
      },
    ],
  },
};

module.exports = nextConfig;

