import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  icons,
  // Avatars
  Avatar3d01,
  Avatar3d02,
  Avatar3d03,
  Avatar3d04,
  AvatarAbstract01,
  AvatarAbstract02,
  AvatarAbstract03,
  AvatarAbstract04,
  AvatarByewind,
  AvatarDefault,
  AvatarFemale01,
  AvatarFemale02,
  AvatarFemale03,
  AvatarFemale04,
  AvatarFemale05,
  AvatarFemale06,
  AvatarMale01,
  AvatarMale02,
  AvatarMale03,
  AvatarMale04,
  AvatarMale05,
  AvatarMale06,
  // Backgrounds
  Geometric01,
  Geometric02,
  Geometric03,
  Geometric04,
  Geometric05,
  Geometric06,
  Geometric07,
  Gradient01,
  Gradient02,
  Gradient03,
  Gradient04,
  Gradient05,
  Gradient06,
  Gradient07,
  Gradient08,
  Gradient09,
  Gradient10,
  Gradient11,
  Gradient12,
  Gradient13,
  Gradient14,
  Minimal01,
  Minimal02,
  Minimal03,
  // Images
  Image01,
  // Logos
  Android,
  AppStore,
  AppleIntelligence2a,
  AppleIntelligence2b,
  AppleIntelligenceA,
  AppleIntelligenceB,
  Apple,
  Arc,
  Behance,
  ChatGpt,
  Claude,
  Copilot,
  Discord,
  Dribbble,
  Dropbox,
  Excel,
  Facebook,
  FigmaA,
  FigmaB,
  Framer,
  Gemini,
  Github,
  GoogleDrive,
  GooglePlay,
  Google,
  Grok,
  Gumroad,
  ICloud,
  Instagram,
  LemonSqueezy,
  LinkedIn,
  Loop,
  Mastercard,
  Medium,
  Messenger,
  Meta,
  Microsoft,
  Midjourney,
  Nintendo,
  Notion,
  OneDrive,
  OneNote,
  PayPal,
  Perplexity,
  Pinterest,
  PowerPoint,
  Reddit,
  Slack,
  Snapchat,
  SnowIcon,
  Stripe,
  Telegram,
  Threads,
  TikTok,
  Twitch,
  Twitter,
  Visa,
  WhatsApp,
  Word,
  Xlogo,
  Youtube,
  // Emoji
  Bomb,
  FaceBlowingKiss,
  FaceSteamFromNose,
  FaceTearsJoy,
  GrinningCat,
  GrinningFaceSweat,
  HeartArrow,
  HundredPoints,
  LoudlyCryingFace,
  RedHeart,
  Robot,
  SeeMonkey,
  SkullCrossbones,
  SmilingFaceHearts,
  SmilingFaceHorns,
  SmilingFaceSunglasses,
  Snowflake,
  Snowman,
  Umbrella,
  WinkingFaceTongue,
  WinkingFace,
  // Cursors
  CursorsBeachball,
  CursorsCross,
  CursorsDefault,
  CursorsHandGrabbing,
  CursorsHandOpen,
  CursorsHandPointing,
  CursorsMenu,
  CursorsMove,
  CursorsResizeDown,
  CursorsResizeLeftRight,
  CursorsResizeLeft,
  CursorsResizeNorthEastSouthWest,
  CursorsResizeNorthSouth,
  CursorsResizeNorthWestSouthEast,
  CursorsResizeRight,
  CursorsResizeUpDown,
  CursorsResizeUp,
  CursorsResizeWestEast,
  CursorsTextCursor,
  CursorsZoomIn,
  CursorsZoomOut,
  // Illustrations
  Humanoid,
  Illustration01,
  Illustration02,
  Illustration03,
  Illustration04,
  Illustration05,
  Illustration06,
  Illustration07,
  Illustration08,
  Illustration09,
  Illustration10,
  Illustration11,
  Illustration12,
  Illustration13,
  Illustration14,
  Illustration15,
  Illustration16,
  Illustration17,
  Illustration18,
  Illustration19,
  Illustration20,
  Illustration21,
  Illustration22,
  Illustration23,
  Illustration24,
  Illustration25,
  Illustration26,
  Illustration27,
  Illustration28,
  LineDrawing01,
  LineDrawing02,
  LineDrawing03,
  QrCodeBig,
  Voice,
} from '@snowui-design-system/resource-react';
import { useTheme } from '../context/ThemeContext';
import { t } from '../i18n/locales';

type AssetComponent = React.ComponentType<any>;

interface AssetItem {
  name: string;
  Component: AssetComponent;
}

type CategoryKey = 'icons' | 'avatars' | 'backgrounds' | 'images' | 'logos' | 'emoji' | 'cursors' | 'illustrations';

// 定义所有素材组件
const avatarComponents = [
  Avatar3d01,
  Avatar3d02,
  Avatar3d03,
  Avatar3d04,
  AvatarAbstract01,
  AvatarAbstract02,
  AvatarAbstract03,
  AvatarAbstract04,
  AvatarByewind,
  AvatarDefault,
  AvatarFemale01,
  AvatarFemale02,
  AvatarFemale03,
  AvatarFemale04,
  AvatarFemale05,
  AvatarFemale06,
  AvatarMale01,
  AvatarMale02,
  AvatarMale03,
  AvatarMale04,
  AvatarMale05,
  AvatarMale06,
];

const backgroundComponents = [
  Geometric01,
  Geometric02,
  Geometric03,
  Geometric04,
  Geometric05,
  Geometric06,
  Geometric07,
  Gradient01,
  Gradient02,
  Gradient03,
  Gradient04,
  Gradient05,
  Gradient06,
  Gradient07,
  Gradient08,
  Gradient09,
  Gradient10,
  Gradient11,
  Gradient12,
  Gradient13,
  Gradient14,
  Minimal01,
  Minimal02,
  Minimal03,
];

const imageComponents = [Image01];

const logoComponents = [
  Android,
  AppStore,
  AppleIntelligence2a,
  AppleIntelligence2b,
  AppleIntelligenceA,
  AppleIntelligenceB,
  Apple,
  Arc,
  Behance,
  ChatGpt,
  Claude,
  Copilot,
  Discord,
  Dribbble,
  Dropbox,
  Excel,
  Facebook,
  FigmaA,
  FigmaB,
  Framer,
  Gemini,
  Github,
  GoogleDrive,
  GooglePlay,
  Google,
  Grok,
  Gumroad,
  ICloud,
  Instagram,
  LemonSqueezy,
  LinkedIn,
  Loop,
  Mastercard,
  Medium,
  Messenger,
  Meta,
  Microsoft,
  Midjourney,
  Nintendo,
  Notion,
  OneDrive,
  OneNote,
  PayPal,
  Perplexity,
  Pinterest,
  PowerPoint,
  Reddit,
  Slack,
  Snapchat,
  SnowIcon,
  Stripe,
  Telegram,
  Threads,
  TikTok,
  Twitch,
  Twitter,
  Visa,
  WhatsApp,
  Word,
  Xlogo,
  Youtube,
];

const emojiComponents = [
  Bomb,
  FaceBlowingKiss,
  FaceSteamFromNose,
  FaceTearsJoy,
  GrinningCat,
  GrinningFaceSweat,
  HeartArrow,
  HundredPoints,
  LoudlyCryingFace,
  RedHeart,
  Robot,
  SeeMonkey,
  SkullCrossbones,
  SmilingFaceHearts,
  SmilingFaceHorns,
  SmilingFaceSunglasses,
  Snowflake,
  Snowman,
  Umbrella,
  WinkingFaceTongue,
  WinkingFace,
];

const cursorComponents = [
  CursorsBeachball,
  CursorsCross,
  CursorsDefault,
  CursorsHandGrabbing,
  CursorsHandOpen,
  CursorsHandPointing,
  CursorsMenu,
  CursorsMove,
  CursorsResizeDown,
  CursorsResizeLeftRight,
  CursorsResizeLeft,
  CursorsResizeNorthEastSouthWest,
  CursorsResizeNorthSouth,
  CursorsResizeNorthWestSouthEast,
  CursorsResizeRight,
  CursorsResizeUpDown,
  CursorsResizeUp,
  CursorsResizeWestEast,
  CursorsTextCursor,
  CursorsZoomIn,
  CursorsZoomOut,
];

const illustrationComponents = [
  Humanoid,
  Illustration01,
  Illustration02,
  Illustration03,
  Illustration04,
  Illustration05,
  Illustration06,
  Illustration07,
  Illustration08,
  Illustration09,
  Illustration10,
  Illustration11,
  Illustration12,
  Illustration13,
  Illustration14,
  Illustration15,
  Illustration16,
  Illustration17,
  Illustration18,
  Illustration19,
  Illustration20,
  Illustration21,
  Illustration22,
  Illustration23,
  Illustration24,
  Illustration25,
  Illustration26,
  Illustration27,
  Illustration28,
  LineDrawing01,
  LineDrawing02,
  LineDrawing03,
  QrCodeBig,
  Voice,
];

const createAssetItems = (components: AssetComponent[]): AssetItem[] =>
  components
    .map((Component) => ({
      name: Component.displayName || Component.name || 'Unknown',
      Component,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

const iconItems: AssetItem[] = Object.entries(icons as Record<string, AssetComponent>)
  .map(([name, Component]) => ({ name, Component }))
  .sort((a, b) => a.name.localeCompare(b.name));

const avatarItems = createAssetItems(avatarComponents);
const backgroundItems = createAssetItems(backgroundComponents);
const imageItems = createAssetItems(imageComponents);
const logoItems = createAssetItems(logoComponents);
const emojiItems = createAssetItems(emojiComponents);
const cursorItems = createAssetItems(cursorComponents);
const illustrationItems = createAssetItems(illustrationComponents);

const CATEGORY_ITEMS: Record<CategoryKey, AssetItem[]> = {
  icons: iconItems,
  avatars: avatarItems,
  backgrounds: backgroundItems,
  images: imageItems,
  logos: logoItems,
  emoji: emojiItems,
  cursors: cursorItems,
  illustrations: illustrationItems,
};

const gridClassByCategory: Record<CategoryKey, string> = {
  icons: 'grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10',
  avatars: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  backgrounds: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  images: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
  logos: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  emoji: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  cursors: 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8',
  illustrations: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
};

const sizeNoticeCategories: CategoryKey[] = ['icons', 'avatars', 'logos', 'emoji', 'cursors'];

const isValidCategory = (value: string): value is CategoryKey =>
  ['icons', 'avatars', 'backgrounds', 'images', 'logos', 'emoji', 'cursors', 'illustrations'].includes(value);

const Categories: React.FC = () => {
  const { language } = useTheme();
  const params = useParams<{ category: string }>();
  const categoryKey: CategoryKey = isValidCategory(params.category ?? '') ? (params.category as CategoryKey) : 'icons';

  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [categoryKey]);

  const items = CATEGORY_ITEMS[categoryKey] || [];
  const itemsPerPage = categoryKey === 'icons' ? 60 : items.length;
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  const paginatedItems = useMemo(
    () => items.slice((page - 1) * itemsPerPage, page * itemsPerPage),
    [items, page, itemsPerPage]
  );

  const infoText = useMemo(() => {
    const parts = [`${t('categories.showing', language)} ${items.length}`];
    if (categoryKey === 'icons') {
      parts.push(`${t('categories.regular', language)}, ${t('categories.size', language)}`);
    } else if (sizeNoticeCategories.includes(categoryKey)) {
      parts.push(t('categories.size', language));
    }
    return parts.join(' · ');
  }, [categoryKey, items.length, language]);

  const renderAsset = (item: AssetItem) => {
    switch (categoryKey) {
      case 'icons':
        return React.createElement(item.Component, {
          size: 32,
          weight: 'regular',
          className: 'text-[var(--foreground)]',
        });
      case 'avatars':
        return <item.Component size={32} className="rounded-full" />;
      case 'backgrounds':
        return (
          <div className="w-full aspect-video rounded-8px overflow-hidden">
            <item.Component width={320} height={200} className="object-cover w-full h-full" />
          </div>
        );
      case 'images':
        return (
          <div className="w-full aspect-video rounded-8px overflow-hidden">
            <item.Component width={320} height={200} className="object-cover w-full h-full" />
          </div>
        );
      case 'logos':
        return <item.Component size={32} />;
      case 'emoji':
        return <item.Component size={32} />;
      case 'cursors':
        return <item.Component size={32} />;
      case 'illustrations':
        return (
          <div className="w-full aspect-video rounded-8px overflow-hidden bg-[var(--background-2)] flex items-center justify-center">
            <item.Component width={320} height={200} className="object-contain w-full h-full" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 p-24px md:p-32px">
      <div className="max-w-1400px mx-auto">
        <div className="mb-24px">
          <h1 className="font-32 font-semibold text-[var(--foreground)] mb-8px">
            {t(`categories.${categoryKey}`, language)}
          </h1>
          <p className="font-14 text-[var(--black-60)]">{infoText}</p>
        </div>

        <div className={`grid ${gridClassByCategory[categoryKey]} gap-24px`}>
          {paginatedItems.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-8px group cursor-pointer"
            >
              <div className="flex items-center justify-center w-full transition-transform group-hover:scale-105">
                {renderAsset(item)}
              </div>
              <span className="font-12 text-[var(--black-60)] text-center break-all group-hover:text-[var(--foreground)] transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-12px mt-32px">
            <button
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1}
              className="px-16px py-10px rounded-12px bg-[var(--background-2)] border border-[var(--black-10)] text-[var(--foreground)] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[var(--primary)] transition-colors"
            >
              Prev
            </button>
            <span className="font-14 text-[var(--black-40)]">
              {page} / {totalPages}
            </span>
            <button
              onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={page === totalPages}
              className="px-16px py-10px rounded-12px bg-[var(--background-2)] border border-[var(--black-10)] text-[var(--foreground)] disabled:opacity-50 disabled:cursor-not-allowed hover:border-[var(--primary)] transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;

