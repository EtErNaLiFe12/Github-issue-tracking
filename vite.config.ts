import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(),  legacy({
      targets: ['ie >= 11'], // IE 11과 호환되도록 CommonJS 형태로 번들링
    }),],
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  build: {
    target: 'es2018', // ES 모듈 형태로 빌드
    outDir: 'dist', // 빌드된 파일 경로
  },
});
