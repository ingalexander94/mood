const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
    plugins: ["web-manifest"],
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public-mood.s3.amazonaws.com",
      },
    ],
  },
  webpack: (config, { webpack }) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    config.plugins.push(new webpack.ContextReplacementPlugin(/.*$/, false));
    return config;
  },
  // webpack: (config, _) => {
  //   if (process.env.NEXT_WEBPACK_USEPOLLING) {
  //     config.watchOptions = {
  //       poll: 500,
  //       aggregateTimeout: 300,
  //     };
  //   }
  //   return config;
  // },
};

module.exports = withPWA(nextConfig);
