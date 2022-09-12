/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['res.cloudinary.com','scontent.fsgn4-1.fna.fbcdn.net']
  }
}

module.exports = nextConfig
