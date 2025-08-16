import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { resolve } from 'path'
import { readdirSync, statSync } from 'fs'

// Auto-discover assets function
function getAssetFiles(dir: string, extensions: string[]): string[] {
  const files: string[] = [];
  
  try {
    const items = readdirSync(dir);
    
    for (const item of items) {
      const fullPath = resolve(dir, item);
      const stat = statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...getAssetFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.toLowerCase().endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Directory doesn't exist, skip
  }
  
  return files;
}

// Plugin to inject preload links
function preloadAssetsPlugin() {
  return {
    name: 'preload-assets',
    transformIndexHtml(html: string) {
      const assetsDir = resolve(__dirname, 'src/assets');
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp'];
      const imageFiles = getAssetFiles(assetsDir, imageExtensions);
      
      // Convert to relative paths for preload
      const preloadLinks = imageFiles.map(file => {
        const relativePath = file.replace(resolve(__dirname), '').replace(/\\/g, '/');
        return `<link rel="preload" href="${relativePath}" as="image">`;
      }).join('\n    ');
      
      // Inject preload links into head
      return html.replace(
        '<title>',
        `${preloadLinks}\n    <title>`
      );
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    preloadAssetsPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "AlphaCupcake10",
        short_name: "Create",
        theme_color: "#0d64c1",
        background_color: "#0a1015",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/128.png",
            sizes: "128x128",
            type: "image/png",
            purpose: "any maskable"
          },
          {
            src: "/256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "any maskable"
          },
        ],
        shortcuts:[
          {
            name: "Abyssal Descent",
            short_name: "Descent",
            url: "/game",
            icons: [
              {
                src: "/128.png",
                sizes: "128x128",
                type: "image/png",
                purpose: "any maskable"
              },
              {
                src: "/256.png",
                sizes: "256x256",
                type: "image/png",
                purpose: "any maskable"
              },
            ]
          }
        ]
      },
      // add this to cache all the imports
      workbox: {
        globPatterns: ["**/*"],
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "CacheFirst",
            options: {
              cacheName: "offlineCache",
              expiration: {
                maxEntries: 200,
              },
            },
          },
        ],
      },
      // add this to cache all the
      // static assets in the public folder
      includeAssets: [
        "**/*",
      ],
    })
  ],
})
