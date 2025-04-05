/** @type {import('next').NextConfig} */
const nextConfig = {
  // Verwijder de output configuratie
  output: 'export',
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
}

module.exports = nextConfig