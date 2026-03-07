/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    experimental: {
        optimizePackageImports: ['react-icons'],
    },
}

module.exports = nextConfig
