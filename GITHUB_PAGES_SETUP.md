# GitHub Pages 部署指南

## 快速开始

### 1. 构建项目

```bash
npm run build
```

这会生成 `docs` 文件夹，包含所有构建后的文件。

### 2. 提交并推送

```bash
git add docs
git commit -m "Build for GitHub Pages"
git push
```

### 3. 配置 GitHub Pages

1. 进入 GitHub 仓库的 Settings
2. 找到 Pages 设置
3. 在 "Source" 中选择 "Deploy from a branch"
4. 选择分支（通常是 `main` 或 `master`）
5. 在 "Folder" 中选择 `/docs`
6. 点击 Save

### 4. 访问网站

- 如果仓库名是 `username.github.io`，访问：`https://username.github.io`
- 如果仓库名是其他名字（如 `snowui`），访问：`https://username.github.io/snowui`

## 重要说明

### 仓库名称配置

如果你的 GitHub 仓库名**不是** `username.github.io`，需要修改 `package.json` 中的 `homepage` 字段：

```json
{
  "homepage": "/your-repo-name"
}
```

例如，如果仓库名是 `snowui`：
```json
{
  "homepage": "/snowui"
}
```

### React Router 配置

代码已经自动检测 basename，但如果遇到路由问题，可以手动设置：

在 `src/App.tsx` 中修改：
```tsx
<Router basename="/your-repo-name">
```

## 故障排除

### 问题：页面显示空白

1. 检查浏览器控制台的错误
2. 确认 `homepage` 字段设置正确
3. 确认 `docs` 文件夹已提交到 GitHub

### 问题：路由不工作

1. 确认 `basename` 设置正确
2. 检查 GitHub Pages 是否配置为使用 `/docs` 文件夹
3. 确认 `.nojekyll` 文件已提交

### 问题：资源文件 404

1. 检查 `package.json` 中的 `homepage` 字段
2. 确认所有资源路径使用相对路径
3. 重新构建项目：`npm run build`

## 自动化部署（可选）

可以使用 GitHub Actions 自动部署，创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

