---
title: 部署是怎么跑起来的
date: 2026-11-04
summary: 一份 GitHub Actions 配置，把 Markdown 变成网页。
tags: ["教程", "GitHub"]
---

## 整个流程

```
你写 Markdown
      ↓  git push
GitHub 收到新提交
      ↓  触发 Actions
自动安装依赖 → astro build → 产出 dist/ 静态文件
      ↓
GitHub Pages 直接托管 dist/
      ↓
任何人打开网址都能看到
```

配置在 `.github/workflows/deploy.yml`。核心只有几句：

```yaml
- run: npm ci
- run: npm run build
- uses: actions/upload-pages-artifact@v3
  with:
    path: dist
```

## 出错了怎么看

1. 打开仓库页面 → 点 **Actions** 标签
2. 找最近一次失败的那条（红色 ✗）
3. 点进去看哪一步红了，展开日志

**90% 的失败是**：frontmatter 格式写错了（比如 date 少了引号），或者 Markdown 里的某个语法让构建崩了。

## 改域名

默认地址是 `https://<用户名>.github.io/<仓库名>/`。

想用 `https://blog.你的域名.com`：

1. 在仓库 **Settings → Pages → Custom domain** 里填域名
2. 去域名服务商那里加一条 CNAME 记录指向 `<用户名>.github.io`
3. 等几分钟，它能自动签发 HTTPS 证书

"**注意：如果你以后想搬到国内服务器，域名就需要备案。用 GitHub Pages 就不需要。**"
