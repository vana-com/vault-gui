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
  images: {
    domains: ["storage.googleapis.com"],
  },
  webpack: (config, { isServer: _isServer }) => {
    if (!_isServer) {
      // Required to run sql.js in the browser (used by @corsali/userdata-extractor)
      // eslint-disable-next-line
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

module.exports = nextConfig;
