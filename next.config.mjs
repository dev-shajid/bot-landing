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
      destination: `${destinationHost}/icons/favicon.ico`,
    },
    {
      source: "/icons/:path*",
      destination: `${destinationHost}/icons/:path*`,
    },
  ]
};

export default nextConfig;
