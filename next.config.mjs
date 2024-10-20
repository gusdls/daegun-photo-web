/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "njsbftuzvmqfrvqlzaug.supabase.co",
      },
    ],
  },
};

export default nextConfig;
