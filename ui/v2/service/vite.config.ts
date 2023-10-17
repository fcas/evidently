import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000'
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let [extType] = assetInfo.name.split('.').reverse()
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img'
          }
          return `static/${extType}/[name]-[hash][extname]`
        },
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js'
      }
    }
  }
})
