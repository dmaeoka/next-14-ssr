/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '**',
            },
        ],
    }
}

module.exports = nextConfig
