/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["utfs.io", "subdomain"],
  },
  reactStrictMode: false,
  rewrites: async () => [
    {
      source: "/:path*",
      destination: "/:path*",
    },
    // Static files of the App
    {
      source: "/icons/favicon.ico",
      destination: `https://chat-bot-landing.vercel.app/icons/favicon.ico`,
    },
    {
      source: "/icons/:path*",
      destination: `https://chat-bot-landing.vercel.app/icons/:path*`,
    },
  ]
};

export default nextConfig;
