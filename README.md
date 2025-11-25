# SnowUI Resource React Demo

This project showcases the React bindings for the SnowUI Resource library. It renders a full catalog of icons, avatars, backgrounds, illustrations, and other design resources shipped inside `@snowui-design-system/resource-react`, along with usage documentation, live previews, and theme toggles.

## Tech Stack

- [React 19](https://react.dev/) with functional components and hooks.
- [React Router](https://reactrouter.com/) (HashRouter) for in-browser navigation without a backend.
- [Vite](https://vitejs.dev/) for development/build tooling (`pnpm run dev` / `pnpm run build`).
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha) layered on top of SnowUI’s design tokens.
- [SnowUI Resource React](https://www.npmjs.com/package/@snowui-design-system/resource-react) for all assets.

## Getting Started

```bash
pnpm install
pnpm run dev   # http://localhost:5173
pnpm run build # outputs to docs/ for GitHub Pages
pnpm run preview
```

The project is configured to deploy via GitHub Pages using the `docs/` directory. Running `pnpm run build` automatically copies `docs/index.html` to `docs/404.html` to support deep links when using `HashRouter`.

## SnowUI CSS

The demo imports the global token sheet from the CDN:

```css
@import 'https://cdn.jsdelivr.net/gh/SnowUI/home@main/snowui.css';
```

Include the same URL in your own apps (HTML `<link>`, CSS `@import`, or JS import) to use the design tokens and theme classes described on the Usage page.

## Project Structure

- `src/App.tsx` – application shell, routing, layout.
- `src/components/*` – layout pieces like sidebar and top bar.
- `src/pages/*` – Home, Categories, and Usage pages.
- `src/context/ThemeContext.tsx` – theme/language state + HTML class syncing.
- `src/i18n/locales.ts` – simple locale store and translation helper.

## Deployment Notes

- Vite’s `base` is set to `./` and the router uses HashRouter, so the app works under any subdirectory on GitHub Pages.
- The build step writes hashed assets into `docs/static/`; push the entire `docs/` folder to GitHub to publish updates.

## Resources

- SnowUI base assets: <https://github.com/SnowUI/resource-base>
- Live CDN tokens: <https://cdn.jsdelivr.net/gh/SnowUI/home@main/snowui.css>

Feel free to file issues or feature requests in the relevant SnowUI repositories. PRs improving the demo are always welcome!

