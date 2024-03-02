/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "img.clerk.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "utfs.io",
      // },
      // {
      //   protocol: "https",
      //   hostname: "uploadthing.com",
      // },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
