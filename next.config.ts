import type { NextConfig } from 'next';
const path = require('path');

const repoName = 'web-dragon';
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

  // Настройки изображений
  images: {
    unoptimized: true, // Включаем оптимизацию
  },
};

export default nextConfig;
