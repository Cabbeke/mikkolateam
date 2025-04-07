/** @type {import('next').NextConfig} */
const nextConfig = {
  // Voor Cloudflare Pages zonder Functions, gebruik 'export'
  output: "export",

  // Als je Cloudflare Pages Functions wilt gebruiken, verwijder de output optie
  // en voeg deze regel toe:
  // experimental: { esmExternals: true },

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

