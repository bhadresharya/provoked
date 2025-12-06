const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // If deploying to a project page (not user/organization page), uncomment and set your repo name:
  // basePath: '/provoked',
  // trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'node_modules')],
  },
  images: {
    unoptimized: true, // Required for static export
  },
}

module.exports = nextConfig

