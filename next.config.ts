import type { NextConfig } from 'next';
const path = require('path');

const repoName = 'web-dragon';
const basePath = `/${repoName}`;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`,
  },
  output: 'export',
  basePath,
  assetPrefix: `${basePath}/`,
  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: basePath,
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
