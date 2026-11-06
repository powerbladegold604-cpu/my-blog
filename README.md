# 我的博客

一个用 Astro 搭建的静态博客。零服务器、零数据库、零备案。

## 本地跑起来

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 产出 dist/，部署用这个
```

## 写一篇新文章

在 `src/content/posts/` 下新建 `.md` 文件：

```markdown
---
title: 文章标题
date: 2026-11-06
summary: 一句话摘要
tags: ["标签"]
---

正文写在这里。
```

然后 `git add . && git commit -m "新文章" && git push`，30 秒后自动上线。

## 结构

```
src/
├── content/posts/   文章（Markdown）
├── layouts/         页面骨架
├── pages/           路由
│   ├── index.astro      首页
│   ├── about.astro      关于
│   └── posts/[slug].astro 文章详情
└── styles/global.css 样式（含深色模式）
```

## 改样式

全部在 `src/styles/global.css`，顶部有一组 CSS 变量，改颜色只改那几行。
