'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales } from '@/i18n/routing';

const LanguageToggle = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const currentIndex = locales.indexOf(locale);
    const nextIndex = (currentIndex + 1) % locales.length;
    router.replace(pathname, { locale: locales[nextIndex] });
  };

  return (
    <Button variant="outline" size="icon" onClick={toggleLanguage} aria-label="Toggle language">
      <Languages className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
};

export default LanguageToggle;
