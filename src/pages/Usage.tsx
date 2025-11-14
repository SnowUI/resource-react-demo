import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { t } from '../i18n/locales';

const Usage: React.FC = () => {
  const { language } = useTheme();

  return (
    <div className="flex-1 p-40px">
      <div className="max-w-800px mx-auto">
        <div className="mb-40px">
          <h1 className="font-48 font-semibold text-[var(--foreground)] mb-16px">
            {t('usage.title', language)}
          </h1>
        </div>

        <div className="space-y-40px">
          {/* Installation */}
          <section className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('usage.install.title', language)}
            </h2>
            <p className="font-16 text-[var(--foreground)] mb-16px">
              {t('usage.install.description', language)}
            </p>
            <div className="p-16px rounded-12px bg-[var(--background-1)] border border-[var(--black-10)]">
              <code className="font-14 text-[var(--foreground)] font-mono">
                npm install @snowui-design-system/resource-react
              </code>
              <br />
              <code className="font-14 text-[var(--foreground)] font-mono">
                # or
              </code>
              <br />
              <code className="font-14 text-[var(--foreground)] font-mono">
                pnpm add @snowui-design-system/resource-react
              </code>
            </div>
          </section>

          {/* Import */}
          <section className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('usage.import.title', language)}
            </h2>
            <p className="font-16 text-[var(--foreground)] mb-16px">
              {t('usage.import.description', language)}
            </p>
            <div className="p-16px rounded-12px bg-[var(--background-1)] border border-[var(--black-10)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`import { 
  FourLeafClover, 
  AvatarByewind, 
  Gradient01,
  Image01,
  SnowIcon,
  WinkingFace
} from '@snowui-design-system/resource-react';`}
              </code>
            </div>
          </section>

          {/* Example */}
          <section className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('usage.example.title', language)}
            </h2>
            <p className="font-16 text-[var(--foreground)] mb-16px">
              {t('usage.example.description', language)}
            </p>
            <div className="p-16px rounded-12px bg-[var(--background-1)] border border-[var(--black-10)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`function MyComponent() {
  return (
    <div>
      <FourLeafClover size={32} weight="regular" />
      <AvatarByewind size={64} className="rounded-full" />
      <Gradient01 width={200} height={120} />
      <Image01 width={200} height={120} />
      <SnowIcon size={48} />
      <WinkingFace size={48} />
    </div>
  );
}`}
              </code>
            </div>
          </section>

          {/* Theme System */}
          <section className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('usage.theme.title', language)}
            </h2>
            <p className="font-16 text-[var(--foreground)] mb-16px">
              {t('usage.theme.description', language)}
            </p>
            <div className="p-16px rounded-12px bg-[var(--background-1)] border border-[var(--black-10)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`<!-- Light mode, SnowUI theme -->
<html class="theme-snowui-light">

<!-- Dark mode, SnowUI theme -->
<html class="theme-snowui-dark">

<!-- Light mode, iOS theme -->
<html class="theme-ios-light">

<!-- Dark mode, iOS theme -->
<html class="theme-ios-dark">`}
              </code>
            </div>
            <div className="mt-16px p-16px rounded-12px bg-[var(--background-1)] border border-[var(--black-10)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`// Import the CSS file
import '@snowui-design-system/design-system/src/snowui.css';

// Or in your main CSS file
@import '@snowui-design-system/design-system/src/snowui.css';`}
              </code>
            </div>
          </section>

          {/* CSS Variables */}
          <section className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              CSS Variables
            </h2>
            <p className="font-16 text-[var(--foreground)] mb-16px">
              All design tokens are available as CSS variables. Use them in your styles:
            </p>
            <div className="p-16px rounded-12px bg-[var(--background-1)] border border-[var(--black-10)]">
              <code className="font-14 text-[var(--foreground)] font-mono whitespace-pre">
{`.my-component {
  background-color: var(--background-1);
  color: var(--foreground);
  padding: var(--spacing-16);
  border-radius: var(--corner-radius-8);
  font-size: var(--font-size-16);
  line-height: var(--line-height-16);
}`}
              </code>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Usage;

