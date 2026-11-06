import { defineConfig } from 'astro/config';

// 部署到 GitHub Pages 项目站：地址是 https://<用户>.github.io/<仓库名>/
// 如果以后换成自定义域名或用户站，把 base 删掉即可
export default defineConfig({
  site: 'https://powerbladegold604-cpu.github.io',
  base: '/my-blog',
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});
