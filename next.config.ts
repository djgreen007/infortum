import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep old WordPress/Elementor URLs working
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
