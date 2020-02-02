const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withMDX = require('@next/mdx')();
const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');

const nextConfig = {
  target: 'serverless',
  env: {
    SANITY_TOKEN: '',
  },
  pageExtensions: ['mdx', 'jsx', 'js'],
  devIndicators: {
    autoPrerender: false,
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};

module.exports = withPlugins(
  [withOptimizedImages, withImages, withMDX, withCSS],
  nextConfig,
);
