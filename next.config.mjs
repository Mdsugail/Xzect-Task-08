/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
module.exports = {
    basePath: process.env.NODE_ENV === 'production' ? '/{Xzect-Task-08}' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/{Xzect-Task-08}/' : '',
  }
  