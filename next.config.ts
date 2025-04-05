/** @type {import('next').NextConfig} */
const nextConfig = {
  // Verwijder de output configuratie
  // output: 'export', // Verwijder deze regel of zet hem in commentaar
  
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