import React, { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { House, Star, UserCircle, Rainbow, Image as ImageIcon, Tag, Smiley, Cursor, PaintBrush, BookOpen } from '@snowui-design-system/resource-react';
import { useTheme } from '../context/ThemeContext';
import { t } from '../i18n/locales';

/**
 * 侧边栏组件
 * 
 * 页面位置：页面左侧，固定宽度 256px，不随页面滚动，有独立滚动条
 * 
 * 布局结构：
 * ┌──────────────────┐
 * │ 🏠 首页          │
 * ├──────────────────┤
 * │ 📦 素材分类       │
 * │  ⭐ 图标         │
 * │  👤 头像         │
 * │  🌈 背景         │
 * │  🖼️ 图片         │
 * │  🏷️ Logo        │
 * │  😊 表情         │
 * │  🖱️ 光标         │
 * │  🎨 插画         │
 * ├──────────────────┤
 * │ 📖 使用说明      │
 * ├──────────────────┤
 * │ 版权信息         │
 * └──────────────────┘
 */
const Sidebar: React.FC = () => {
  const location = useLocation();
  const { language } = useTheme();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const isActive = (path: string) => location.pathname === path;

  // 处理滚动事件，在滚动时显示滚动条
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleScroll = () => {
      setIsScrolling(true);
      
      // 清除之前的定时器
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      
      // 滚动停止后 1 秒隐藏滚动条
      scrollTimeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    sidebar.addEventListener('scroll', handleScroll);
    
    return () => {
      sidebar.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // 主导航菜单项（首页）
  const primaryNav = [
    { to: '/', label: t('nav.home', language), Icon: House },
  ];

  // 素材分类导航菜单项
  const assetNav = [
    { to: '/assets/icons', label: t('nav.icons', language), Icon: Star },
    { to: '/assets/avatars', label: t('nav.avatars', language), Icon: UserCircle },
    { to: '/assets/backgrounds', label: t('nav.backgrounds', language), Icon: Rainbow },
    { to: '/assets/images', label: t('nav.images', language), Icon: ImageIcon },
    { to: '/assets/logos', label: t('nav.logos', language), Icon: Tag },
    { to: '/assets/emoji', label: t('nav.emoji', language), Icon: Smiley },
    { to: '/assets/cursors', label: t('nav.cursors', language), Icon: Cursor },
    { to: '/assets/illustrations', label: t('nav.illustrations', language), Icon: PaintBrush },
  ];

  // 支持导航菜单项（使用说明）
  const supportNav = [
    { to: '/usage', label: t('nav.usage', language), Icon: BookOpen },
  ];

  return (
    // ========== 侧边栏容器 ==========
    // 位置：页面左侧，固定宽度 256px，全高度，右侧边框分隔
    // 布局：垂直布局，可滚动，固定定位不随页面滚动
    <div 
      ref={sidebarRef}
      className={`w-48 h-full bg-background-1 flex flex-col overflow-y-auto sidebar-scroll ${isScrolling ? 'sidebar-scrolling' : ''}`}
    >
      {/* ========== 导航菜单内容区 ========== */}
      {/* 位置：侧边栏顶部，占据主要空间 */}
      <div className="flex flex-col gap-1 px-3 py-4">
        {/* ========== 主导航区块 ========== */}
        {/* 位置：侧边栏最顶部 */}
        {/* 包含：首页链接 */}
        <nav className="flex flex-col gap-0.5">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm leading-5 p-1 transition-all ${
                isActive(item.to)
                  ? 'bg-black-4 text-foreground font-semibold'
                  : 'text-black-80 hover:bg-[var(--background-2)] hover:text-[var(--foreground)]'
              }`}
            >
              <item.Icon size={20} weight={isActive(item.to) ? 'bold' : 'regular'} className="flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* ========== 素材分类区块 ========== */}
        {/* 位置：主导航下方，有分隔线 */}
        {/* 包含：分类标题 + 所有素材分类链接（图标、头像、背景等） */}
        <div>
          {/* 素材分类导航菜单 */}
          <nav className="flex flex-col gap-1">
            {assetNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm leading-5 p-1 transition-all ${
                  isActive(item.to)
                    ? 'bg-black-4 text-foreground font-semibold'
                    : 'text-black-80 hover:bg-[var(--background-2)] hover:text-[var(--foreground)]'
                }`}
              >
                <item.Icon size={20} weight={isActive(item.to) ? 'bold' : 'regular'} className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* ========== 支持导航区块 ========== */}
        {/* 位置：素材分类下方，有分隔线 */}
        {/* 包含：使用说明链接 */}
        <div className="pt-4 mt-2 border-t border-black-10">
          <nav className="flex flex-col gap-0.5">
            {supportNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-lg p-1 text-sm leading-5 transition-all ${
                  isActive(item.to)
                    ? 'bg-black-4 text-foreground font-semibold'
                    : 'text-black-80 hover:bg-[var(--background-2)] hover:text-[var(--foreground)]'
                }`}
              >
                <item.Icon size={20} weight={isActive(item.to) ? 'bold' : 'regular'} className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* ========== 底部版权信息区块 ========== */}
      {/* 位置：侧边栏底部，自动推到底部（mt-auto） */}
      {/* 包含：版权信息文字 */}
      <div className="mt-auto px-5 py-2">
        <p className="text-xs leading-4 text-black-40 text-left">{t('copyright', language)}</p>
      </div>
    </div>
  );
};

export default Sidebar;

