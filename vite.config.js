import react from '@vitejs/plugin-react-swc'
import path from "path"
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "HKL_VebVersion",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
      '@publick': path.resolve(__dirname, "./public"),
    }
  }
})
