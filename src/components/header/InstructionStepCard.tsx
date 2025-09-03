import React from 'react';
import { getTranslations } from 'next-intl/server';

export interface IInstructionStep {
  titleIntlCode: string;
  descriptionIntlCode: string;
  icon: React.ReactNode;
}

const InstructionStepCard: React.FC<IInstructionStep> = async ({ titleIntlCode, descriptionIntlCode, icon }) => {
  const t = await getTranslations('Header.instructions');

  return (
    <div className="w-full">
      <div className="flex flex-row items-center gap-2">
        {icon}
        <p>{t(titleIntlCode)}</p>
      </div>
      <p className="opacity-65">{t(descriptionIntlCode)}</p>
    </div>
  );
};

export default InstructionStepCard;
