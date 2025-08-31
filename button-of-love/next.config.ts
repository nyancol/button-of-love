import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: 'yaml-loader',
    });
    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.yaml': {
          loaders: ['yaml-loader'],
          as: '*.js'
        },
        '*.yml': {
          loaders: ['yaml-loader'],
          as: '*.js'
        }
      }
    }
  }
};

export default nextConfig;
