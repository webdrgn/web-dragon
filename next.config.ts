import type { NextConfig } from 'next';
const path = require('path');

const repoName = 'web-dragon'; // Ваше имя репозитория
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`, // автоматический импорт в каждый SCSS файл
  },
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    urlImports: ['https://github.com/grmnche/web-dragon/raw/gh-pages/'],
  },
};

export default nextConfig;
