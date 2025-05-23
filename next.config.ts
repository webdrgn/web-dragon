import type { NextConfig } from "next";
const path = require('path')

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
   sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "variables.scss";` // автоматический импорт в каждый SCSS файл
  }
};

export default nextConfig;
