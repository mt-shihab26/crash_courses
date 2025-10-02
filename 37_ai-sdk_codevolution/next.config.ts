import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    devIndicators: { position: 'bottom-left' },
    serverExternalPackages: ['pdf-parse'],
};

export default nextConfig;
