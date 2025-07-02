import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },

  // Disable source maps in production to reduce size
  productionBrowserSourceMaps: false,

  // Optimize images
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  experimental: {
    optimizePackageImports: ["@once-ui-system/core"],
  },

  // Optimize build for smaller bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Optimize chunk splitting
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        ...config.optimization.splitChunks,
        maxSize: 250000, // Limit chunk size to 250KB
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            priority: -10,
            chunks: "all",
            maxSize: 250000,
          },
        },
      },
    };

    return config;
  },
};

export default withMDX(nextConfig);
