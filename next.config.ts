/** @type {import('next').NextConfig} */
const nextConfig = {

  experimental: { esmExternals: true },

  images: {
    unoptimized: true, // Nodig voor 'export' mode
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
}

module.exports = nextConfig

