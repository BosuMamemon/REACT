import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // CORS(Cross Origin Resource Sharing) 웹단 쪽에서 서버단을 허용하는 방법
  server: {
    proxy: {
      '/api': {
        // JSON을 보내는 주소
        target: 'http://localhost:8080/',
        changeOrigin: true,
      //   /^\/api/는 정규표현식을 의미함
      //   //안에 정규표현식이 들어가야 되고
      //   정규표현식의 시작은 ^가 되어야 하고
      //   \는 이스케이프 문자임
      //   즉 걍 /api를 말하는 거임
        rewrite: (path) => path.replace(/^\/api/, ''),
        secure: false,
        ws: true
      }
    }
  }
})
