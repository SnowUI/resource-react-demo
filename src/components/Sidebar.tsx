import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { House, Star, UserCircle, Rainbow, Image as ImageIcon, Tag, Smiley, Cursor, PaintBrush, BookOpen } from '@snowui-design-system/resource-react';
import { useTheme } from '../context/ThemeContext';
import { t } from '../i18n/locales';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { language } = useTheme();

  const isActive = (path: string) => location.pathname === path;

  const primaryNav = [
    { to: '/', label: t('nav.home', language), Icon: House },
  ];

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

  const supportNav = [
    { to: '/usage', label: t('nav.usage', language), Icon: BookOpen },
  ];

  return (
    <div className="w-64 h-full bg-[var(--background-1)] border-r border-[var(--black-10)] flex flex-col overflow-y-auto">
      <div className="flex flex-col gap-4px px-12px py-16px">
        <nav className="flex flex-col gap-2px">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-12px px-12px py-10px rounded-8px font-14 transition-all ${
                isActive(item.to)
                  ? 'bg-[var(--black-4)] text-[var(--foreground)] font-semibold'
                  : 'text-[var(--black-80)] hover:bg-[var(--background-2)] hover:text-[var(--foreground)]'
              }`}
            >
              <item.Icon size={20} weight={isActive(item.to) ? 'bold' : 'regular'} className="flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="pt-16px mt-8px border-t border-[var(--black-10)]">
          <span className="px-12px font-12 font-semibold text-[var(--black-40)] uppercase tracking-wider block mb-8px">
            {t('nav.categories', language)}
          </span>
          <nav className="flex flex-col gap-2px">
            {assetNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-12px px-12px py-10px rounded-8px font-14 transition-all ${
                  isActive(item.to)
                    ? 'bg-[var(--black-4)] text-[var(--foreground)] font-semibold'
                    : 'text-[var(--black-80)] hover:bg-[var(--background-2)] hover:text-[var(--foreground)]'
                }`}
              >
                <item.Icon size={20} weight={isActive(item.to) ? 'bold' : 'regular'} className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-16px mt-8px border-t border-[var(--black-10)]">
          <nav className="flex flex-col gap-2px">
            {supportNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-12px px-12px py-10px rounded-8px font-14 transition-all ${
                  isActive(item.to)
                    ? 'bg-[var(--black-4)] text-[var(--foreground)] font-semibold'
                    : 'text-[var(--black-80)] hover:bg-[var(--background-2)] hover:text-[var(--foreground)]'
                }`}
              >
                <item.Icon size={20} weight={isActive(item.to) ? 'bold' : 'regular'} className="flex-shrink-0" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="mt-auto px-12px py-16px border-t border-[var(--black-10)]">
        <p className="font-12 text-[var(--black-40)] text-center">{t('copyright', language)}</p>
      </div>
    </div>
  );
};

export default Sidebar;

