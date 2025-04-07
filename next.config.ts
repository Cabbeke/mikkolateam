/** @type {import('next').NextConfig} */
const nextConfig = {
  // Voor Cloudflare Pages is 'export' de juiste optie
  output: "export",

  // Specificeer de output directory als 'out'
  distDir: "out",

  // Sluit API routes uit van de build
  experimental: {
    excludeRoutes: ["/api/:path*"],
  },

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

