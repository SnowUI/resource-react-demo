import React from 'react';
import { SnowIcon as SnowIconLogo, Apple, Sun, Moon, Globe } from '@snowui-design-system/resource-react';
import { useTheme } from '../context/ThemeContext';
import { languages, t } from '../i18n/locales';

const TopBar: React.FC = () => {
  const {
    themeMode,
    themeSystem,
    language,
    toggleThemeMode,
    toggleThemeSystem,
    setLanguage,
  } = useTheme();

  const isLightMode = themeMode === 'light';
  const isSnowUITheme = themeSystem === 'snowui';

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between px-32px py-16px border-b border-[var(--black-10)] bg-[var(--background-1)]">
      <div className="flex items-center gap-16px">
        <div className="flex-shrink-0 w-40px h-40px flex items-center justify-center">
          <SnowIconLogo size={40} />
        </div>
        <div className="flex flex-col">
          <span className="font-24 font-semibold text-[var(--foreground)]">SnowUI</span>
          <span className="font-14 text-[var(--black-40)]">SnowUI Design Resource</span>
        </div>
      </div>

      <div className="flex items-center gap-16px">
        <button
          onClick={toggleThemeMode}
          className="flex items-center gap-8px px-16px py-10px rounded-12px bg-[var(--background-2)] border border-[var(--black-10)] text-[var(--foreground)] transition-colors hover:border-[var(--primary)]"
          aria-label={isLightMode ? t('theme.dark', language) : t('theme.light', language)}
        >
          {isLightMode ? <Sun size={20} weight="bold" /> : <Moon size={20} weight="bold" />}
          <span className="font-12">{isLightMode ? t('theme.light', language) : t('theme.dark', language)}</span>
        </button>

        <button
          onClick={toggleThemeSystem}
          className="flex items-center gap-8px px-16px py-10px rounded-12px bg-[var(--background-2)] border border-[var(--black-10)] text-[var(--foreground)] transition-colors hover:border-[var(--primary)]"
          aria-label={isSnowUITheme ? t('theme.ios', language) : t('theme.snowui', language)}
        >
          <div className="w-20px h-20px flex items-center justify-center">
            {isSnowUITheme ? <SnowIconLogo size={20} /> : <Apple size={20} />}
          </div>
          <span className="font-12">{isSnowUITheme ? t('theme.snowui', language) : t('theme.ios', language)}</span>
        </button>

        <div className="flex items-center gap-8px px-16px py-10px rounded-12px bg-[var(--background-2)] border border-[var(--black-10)]">
          <Globe size={20} weight="bold" className="text-[var(--foreground)]" />
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value as typeof language)}
            className="bg-transparent border-none outline-none font-12 text-[var(--foreground)]"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.abbreviation}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
};

export default TopBar;

