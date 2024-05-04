/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "avatars.githubusercontent.com", "lh3.googleusercontent.com", "firestore.googleapis.com"]
  },
}

module.exports = nextConfig
