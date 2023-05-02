const withPWA = require("next-pwa")({
  dest: "public",
  disable: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
    plugins: ["web-manifest"],
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.ContextReplacementPlugin(/.*$/, false));
    config.performance = {
      hints: false,
    };

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
