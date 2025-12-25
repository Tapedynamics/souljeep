'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

interface LanguageFlagsProps {
  variant?: 'light' | 'dark';
}

export default function LanguageFlags({ variant = 'light' }: LanguageFlagsProps) {
  const pathname = usePathname();

  const getTranslateUrl = (targetLang: string) => {
    // Spanish is the original language, no translation needed
    if (targetLang === 'es') {
      return null;
    }

    const currentUrl = typeof window !== 'undefined'
      ? window.location.href
      : `https://www.souljeep.com${pathname}`;

    return `https://translate.google.com/translate?sl=es&tl=${targetLang}&u=${encodeURIComponent(currentUrl)}`;
  };

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => {
        const translateUrl = getTranslateUrl(lang.code);
        const isOriginal = lang.code === 'es';

        if (isOriginal) {
          return (
            <span
              key={lang.code}
              className={`text-lg cursor-default opacity-100 ${
                variant === 'light' ? 'drop-shadow-md' : ''
              }`}
              title={`${lang.name} (Original)`}
            >
              {lang.flag}
            </span>
          );
        }

        return (
          <a
            key={lang.code}
            href={translateUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-lg opacity-70 hover:opacity-100 transition-opacity ${
              variant === 'light' ? 'drop-shadow-md' : ''
            }`}
            title={`Traducir a ${lang.name}`}
          >
            {lang.flag}
          </a>
        );
      })}
    </div>
  );
}
