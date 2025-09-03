import { Info } from 'lucide-react';
import InstructionStepCard from '@/components/header/InstructionStepCard';
import { InstructionSteps } from '@/components/header/InstructionSteps';
import { getTranslations } from 'next-intl/server';

const Header = async () => {
  const t = await getTranslations('Header');
  return (
    <>
      <div className="w-full bg-[#f3f3f3] dark:bg-[#151515]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-6">
          <p className="text-2xl font-bold">{t('title')}</p>
          <p className="opacity-65">{t('description')}</p>
          <div className="flex w-full flex-col gap-4 rounded-2xl border bg-white p-3 dark:bg-[#1c1c1c]">
            <div className="flex flex-row items-center gap-2">
              <Info size={16} />
              <p className="font-semibold">{t('instructions.howToUse')}</p>
            </div>
            <div className="flex flex-row gap-4 max-[791px]:flex-col">
              {InstructionSteps.map((step, index) => {
                return (
                  <InstructionStepCard
                    titleIntlCode={step.titleIntlCode}
                    descriptionIntlCode={step.descriptionIntlCode}
                    icon={step.icon}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
