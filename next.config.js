// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration options here
  basePath: '/iamtechsavvy.github.io',  // Replace with your repo name
  assetPrefix: '/iamtechsavvy.github.io/',
  trailingSlash: true, // Ensure trailing slashes for static HTML export
  output: 'export',
}

export default nextConfig;
