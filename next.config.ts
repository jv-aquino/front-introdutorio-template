import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['app', 'components', 'pages', 'types', 'utils']
  }
};

export default nextConfig;
