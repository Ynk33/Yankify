import env from "@next/env";
env.loadEnvConfig(".");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.WORDPRESS_API_PROTOCOL,
        hostname: process.env.WORDPRESS_API_HOST,
        port: process.env.WORDPRESS_API_PORT,
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    includePaths: ['./app'],
    prependData: '@import "@/styles/_variables.scss";\n@import "@/styles/_mixins.scss";\n@import "@/styles/main.scss";\n'
  }
};

console.log(nextConfig.images.remotePatterns);

export default nextConfig;
