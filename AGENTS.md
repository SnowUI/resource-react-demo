<!-- AI-CONTRACT: tier=L1 | id=snowui-resource-react-demo | scope=snowui/resource-react-demo -->
# SnowUI Resource React Demo 仓库规则（L1）

读者：在 `snowui/resource-react-demo` 工作的维护者与 AI。本内部私有仓库提供 `@snowui-design-system/resource-react` 全量资源分类浏览、主题切换与用法演示应用。

## 红线与章节索引

- `[RRD-READ-01]` 必读顺序：[Project/AGENTS.md](../../AGENTS.md) → [snowui/AGENTS.md](../AGENTS.md) → 本文件 → 命中专题 → §1
- `[RRD-DOCS-DIR]` 本仓 `docs/` 目录为静态站点构建输出目录（含 `index.html`、`manifest.json`、`static/`），严禁放入无正文文档空壳页或手改构建产物 → §2
- `[RRD-GATE-TEST]` 未收到 Owner 验收指令严禁运行测试套件；私有根 [README.md](README.md) 保持 ≤ 5 行中文指针 → §2

## 1. 启动阅读链与一跳路由

开始任何任务前，先完成 `[Project/AGENTS.md](../../AGENTS.md) → [snowui/AGENTS.md](../AGENTS.md) → 本文件`（独立检出缺少上层规则时先说明缺口，不假称已读取），再按意图一跳直达：

| 任务意图 | 本仓与共享权威落点 |
| --- | --- |
| 应用入口、主题上下文与国际化 | [src/index.tsx](src/index.tsx) · [src/App.tsx](src/App.tsx) · [src/context/ThemeContext.tsx](src/context/ThemeContext.tsx) · [src/i18n/locales.ts](src/i18n/locales.ts) |
| 首页、分类浏览与用法页面 | [src/pages/Home.tsx](src/pages/Home.tsx) · [src/pages/Categories.tsx](src/pages/Categories.tsx) · [src/pages/Usage.tsx](src/pages/Usage.tsx) |
| 导航壳层与构建配置 | [src/components/TopBar.tsx](src/components/TopBar.tsx) · [src/components/Sidebar.tsx](src/components/Sidebar.tsx) · [package.json](package.json) · [vite.config.ts](vite.config.ts) |
| 上游 React 资源包与样式规范 | [../resource-react/AGENTS.md](../resource-react/AGENTS.md) · [../resource-base/AGENTS.md](../resource-base/AGENTS.md) · [StyleSpec.md](../docs/standards/StyleSpec.md) |

## 2. 仓库职责与维护边界

1. **纯消费演示与构建目录隔离**：页面统一从 `@snowui-design-system/resource-react` 公开导出读取图标与素材；`docs/` 仅承载 `vite build` 静态预览产物，如需记录内部计划或任务日志统一归入 `../docs/`。
2. **语言与路径纪律**：源码注释统一使用英文，不写入本机私有路径；根 [README.md](README.md) 保持指向本文件的中文极简指针。
3. **开发与验收节奏**：本地预览使用 `pnpm dev`、静态构建使用 `pnpm build`；测试门禁仅在 Owner 下达验收指令后运行。
