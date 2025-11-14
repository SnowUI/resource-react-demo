import React from 'react';
import { AvatarByewind, FourLeafClover, Gradient01, Image01, SnowIcon, WinkingFace } from '@snowui-design-system/resource-react';
import { useTheme } from '../context/ThemeContext';
import { t } from '../i18n/locales';

const Home: React.FC = () => {
  const { language } = useTheme();

  return (
    <div className="flex-1 p-40px">
      <div className="max-w-1200px mx-auto">
        <div className="mb-40px">
          <h1 className="font-48 font-semibold text-[var(--foreground)] mb-16px">
            {t('home.title', language)}
          </h1>
          <p className="font-18 text-[var(--black-40)]">
            {t('home.subtitle', language)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24px">
          {/* Icons */}
          <div className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.icons', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px">
              <FourLeafClover size={64} weight="regular" className="text-[var(--primary)]" />
            </div>
          </div>

          {/* Avatars */}
          <div className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.avatars', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px">
              <AvatarByewind size={64} className="rounded-full" />
            </div>
          </div>

          {/* Backgrounds */}
          <div className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.backgrounds', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px overflow-hidden">
              <Gradient01 width={200} height={120} className="object-cover rounded-8px" />
            </div>
          </div>

          {/* Images */}
          <div className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.images', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px overflow-hidden">
              <Image01 width={200} height={120} className="object-cover rounded-8px" />
            </div>
          </div>

          {/* Logos */}
          <div className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.logos', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px">
              <SnowIcon size={64} />
            </div>
          </div>

          {/* Emoji */}
          <div className="p-24px rounded-16px bg-[var(--background-2)] border border-[var(--black-10)]">
            <h2 className="font-24 font-semibold text-[var(--foreground)] mb-16px">
              {t('home.emoji', language)}
            </h2>
            <div className="flex items-center justify-center p-24px bg-[var(--background-1)] rounded-12px">
              <WinkingFace size={64} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

