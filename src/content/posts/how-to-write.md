---
title: 怎么写一篇新文章
date: 2026-11-05
summary: 三步：新建文件、写好头部、push。
tags: ["教程", "这个站"]
---

## 第一步：建文件

在 `src/content/posts/` 下新建一个 `.md` 文件，文件名就是网址：

```
src/content/posts/my-new-post.md  →  网址 /posts/my-new-post/
```

## 第二步：写头部

每篇文章开头必须有这一段（叫 frontmatter）：

```yaml
---
title: 文章标题
date: 2026-11-06
summary: 一句话摘要，会显示在首页列表里
tags: ["标签1", "标签2"]
draft: false
---
```

- `date` 决定排序，越新越靠前
- `draft: true` 的文件不会出现在网站上
- `summary` 和 `tags` 可以省略

## 第三步：写正文

下面是支持的写法，基本和 GitHub 的 Markdown 一致：

```markdown
## 二级标题
### 三级标题

**粗体**、*斜体*、`行内代码`

- 列表项
- 另一个

1. 有序列表
2. 第二条

> 引用

[链接文字](https://example.com)

| 表头 | 表头 |
|------|------|
| 内容 | 内容 |
```

代码块用三个反引号包起来，后面写上语言名就会高亮：

```bash
git add .
git commit -m "新增一篇文章"
git push
```

## 第四步：发布

```bash
git add .
git commit -m "新文章：xxx"
git push
```

等 30 秒左右，GitHub Actions 跑完，刷新网页就能看到。

## 本地预览

不想每次都 push 了才发现写错，就在本地跑：

```bash
npm run dev
```

打开 http://localhost:4321 ，改动会实时刷新。
