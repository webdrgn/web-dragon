import type { NextConfig } from 'next';
const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  distDir: 'dist',
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";`, // автоматический импорт в каждый SCSS файл
  },
  output: 'export', // Генерация статических файлов
  assetPrefix: isProd ? `/web-dragon/` : '', // Для корректных путей
  basePath: isProd ? `/web-dragon` : '',
  images: {
    unoptimized: true, // Отключает оптимизацию (обязательно для статики)
  },
  trailingSlash: true, // Добавляет / к URL (рекомендуется для GitHub Pages)
};

export default nextConfig;
