const withPWA = require("next-pwa");

module.exports = withPWA({
  poweredByHeader: process.env.NODE_ENV === "development",
  reactStrictMode: process.env.NODE_ENV === "development",
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
