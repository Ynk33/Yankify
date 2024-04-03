/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "",
        pathname: "/**",
      },
    ],
  },
  sassOptions: {
    includePaths: ['./src/app'],
    prependData: `@import "~@/styles/_variables.scss"; @import "~@/styles/_mixins.scss"; @import "~@/styles/main.scss";`
  }
};

export default nextConfig;
