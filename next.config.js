/** @type {import('next').NextConfig} */


// const nextConfig = { 
  
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.(mp4|webm|ogg|swf|ogv)$/,
      
//       use: {
//         loader: "file-loader",
//         options: {
//           publicPath: "/_next/static/videos/",
//           outputPath: "static/videos/",
//           name: "[name].[hash].[ext]",
//         },
//       },
//     });

//     return config;
//   },
  
  
// };

const nextConfig = {
  typescript: {ignoreBuildErrors: true},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/**',
      },
      {protocol: 'https', 
        hostname: 'cdn.dribbble.com',
        pathname: "/**"
      }
    ],
  }
}

module.exports = nextConfig

