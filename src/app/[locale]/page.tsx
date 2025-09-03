import ModeToggle from '@/components/themes/ModeToggle';
import Header from '@/components/header/Header';
import FriendsForm from '@/components/main/friends/FriendsForm';
import AvailabilityHoursForm from '@/components/main/availabilityHours/AvailabilityHoursForm';
import SummaryCard from '@/components/main/summary/SummaryCard';
import CustomFooter from '@/components/footer/CustomFooter';
import LanguageToggle from '@/components/language/LanguageToggle';
import { getTranslations } from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('MainBody');
  return (
    <div className="bg-background">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col gap-2">
        <div className="flex w-full flex-row justify-between px-4 py-6">
          <p className="text-2xl font-bold">{t('title')}</p>
          <div className="flex flex-row items-center justify-center gap-2">
            <ModeToggle />
            <LanguageToggle />
          </div>
        </div>
        <div className="flex w-full flex-row justify-between gap-6 px-4 py-6 max-lg:flex-col">
          <FriendsForm />
          <AvailabilityHoursForm />
          <SummaryCard />
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}
