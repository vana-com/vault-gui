/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  // The pre-commit hook takes care of linting
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
