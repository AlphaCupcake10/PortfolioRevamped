import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
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
