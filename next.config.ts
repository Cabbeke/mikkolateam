/** @type {import('next').NextConfig} */
const nextConfig = {
  // Voor Cloudflare Pages is 'export' vaak de beste optie
  output: "export",

  // Maar als je API routes of server components nodig hebt, verwijder dan de output optie
  // en gebruik de Cloudflare Pages Functions integratie

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

