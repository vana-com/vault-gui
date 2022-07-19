/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer: _isServer }) => {
    config.resolve.symlinks = false; // Ignores scripts/ symlink
    return config;
  }
}

module.exports = nextConfig
