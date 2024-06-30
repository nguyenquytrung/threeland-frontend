/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
            },
            {
                protocol: 'https',
                hostname: 'test.threeland.com',
            }
        ]
    }
};

module.exports = nextConfig;