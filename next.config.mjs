/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/test-preparation/tef',
        destination: '/test-preparation/tef-canada',
        permanent: true,
      },
      {
        source: '/test-preparation/tcf',
        destination: '/test-preparation/tcf-canada',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
