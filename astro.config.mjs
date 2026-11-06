import { defineConfig } from 'astro/config';

// 站点配置：部署到 GitHub Pages 时把 base 改成 '/<仓库名>'
export default defineConfig({
  site: 'https://powerbladegold604-cpu.github.io',
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
