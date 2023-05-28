const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
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
