/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "www.contrib.com",
      "vnocimages.s3.amazonaws.com",
      "cdn.vnoc.com",
      "vnoclogos.s3-us-west-1.amazonaws.com",
      "tools.contrib.com",
      "contrib.com",
      "vnoclogos.s3-us-west-1.amazonaws.com",
      "projectcafe.com",
      "vbot-images.s3.us-east-1.amazonaws.com",
    ],
  },
  env: {
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
