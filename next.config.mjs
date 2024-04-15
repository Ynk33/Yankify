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
    prependData: (content, loaderContext) => {
      // Check if the file being compiled is not within the node_modules directory
      if (!loaderContext.resourcePath.includes('node_modules')) {
        return `@import "~@/styles/_variables.scss";\n@import "~@/styles/_mixins.scss";\n@import "~@/styles/main.scss";\n${content}`;
      }
      return content;
    },
  }
};

export default nextConfig;
