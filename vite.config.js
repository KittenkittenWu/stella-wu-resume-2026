import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 為了讓 GitHub Pages 正確讀取打包後的資源（如網址下的 CSS、圖片等），必須設定 base 為專案儲存庫名稱
  base: '/stella-wu-resume-2026/',
});
