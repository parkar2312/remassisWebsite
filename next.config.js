/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
// const { i18n } = require("./next-i18next.config");

// module.exports = {
//   i18n,
//   images: {
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     domains: [
//       "s3.ap-south-1.amazonaws.com",
//       "dev-opportunity.s3.ap-south-1.amazonaws.com",
//       "d26iwjla857pn6.cloudfront.net",
//       "upload.wikimedia.org",
//     ],
//   },
//   productionBrowserSourceMaps: true,
// };

// module.exports = nextConfig;
module.exports = {
  target: "serverless",
  webpack: (config, { isServer, webpack }) => {
    // config.plugins.push(new webpack.IgnorePlugin(/^pg-native$/));
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        tls: false,
        net: false,
        module: false,
        dns: false,
      };
    }

    return config;
  },
};
