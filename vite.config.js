import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://drswelfareindia-backend.onrender.com',
      '/products': 'https://drswelfareindia-backend.onrender.com',
  // Proxy only admin API endpoints, not SPA routes like /admin/login or /admin/dashboard
      '/admin/upload-images': 'https://drswelfareindia-backend.onrender.com',
      '/admin/upload-image': 'https://drswelfareindia-backend.onrender.com',
  '/admin/products': 'https://drswelfareindia-backend.onrender.com',
  '/admin/users': 'https://drswelfareindia-backend.onrender.com',
      // Other backend APIs used by the app
      '/orders': 'https://drswelfareindia-backend.onrender.com',
      '/profile': 'https://drswelfareindia-backend.onrender.com',
      '/user-orders': 'https://drswelfareindia-backend.onrender.com',
      '/wishlist': 'https://drswelfareindia-backend.onrender.com',
      '/auth': 'https://drswelfareindia-backend.onrender.com',
      '/images': 'https://drswelfareindia-backend.onrender.com',
      '/uploads': 'https://drswelfareindia-backend.onrender.com',
    },
  },
})
