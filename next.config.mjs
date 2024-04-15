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
    prependData: '@import "@/styles/_variables.scss";\n@import "@/styles/_mixins.scss";\n@import "@/styles/main.scss";\n'
  }
};

export default nextConfig;
