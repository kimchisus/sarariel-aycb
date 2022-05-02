
const BASE_PATH = '/sarariel-aycb';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: BASE_PATH,
  env: {
    BASE_PATH
  }
}

module.exports = nextConfig
