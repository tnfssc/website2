const withPWA = require("next-pwa")({ dest: "public" });
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
});
