# SnowUI Resource React Demo

SnowUI React 资源展示站，用于验证 `@snowui-design-system/resource-react` 的图标、头像、背景、插画、图片、Logo，以及图标库切换能力。

仓库：[SnowUI/resource-react-demo](https://github.com/SnowUI/resource-react-demo)

## 技术栈

- React 19
- React Router HashRouter
- Vite
- Tailwind CSS v4
- `@snowui-design-system/resource-react`
- SnowUI CSS CDN：`https://cdn.jsdelivr.net/gh/SnowUI/home@main/snowui.css`

## 开发

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run preview
```

`pnpm run build` 输出到 `docs/`，并复制 `docs/index.html` 到 `docs/404.html`，用于 GitHub Pages 的 HashRouter 访问。

## 图标库切换验证

Demo 应覆盖两类用法：

```tsx
import { FourLeafClover, Icon, IconProvider } from "@snowui-design-system/resource-react";

<FourLeafClover size={24} />

<IconProvider collection="phosphor" fallbackCollections={["snowui"]}>
  <Icon name="arrow-line-right" />
</IconProvider>
```

直接组件模式验证兼容性；`Icon + IconProvider` 验证 `usageName` 在 SnowUI / Phosphor / 未来 Iconify collection 之间切换时页面代码不变。

## 发布与同步

本项目是展示站，不发布到 npm，只构建并同步 GitHub：

```bash
/Users/yuan/Project/snowui/scripts/publish-and-sync.sh --target resource-react-demo --message "chore: update resource react demo" --yes
```

如需只看动作：

```bash
/Users/yuan/Project/snowui/scripts/publish-and-sync.sh --target resource-react-demo --dry-run
```

## 维护约定

- `package.json` 保持 `private: true`
- 依赖 `@snowui-design-system/resource-react`
- 展示站需要同步覆盖直接组件模式和通用图标模式
- GitHub Pages 产物保留在 `docs/`
