import { IInstructionStep } from '@/components/header/InstructionStepCard';
import { Calendar, Clock, Users } from 'lucide-react';

export const InstructionSteps: IInstructionStep[] = [
  {
    titleIntlCode: 'step1',
    descriptionIntlCode: 'step1Description',
    icon: <Users size={16} />,
  },
  {
    titleIntlCode: 'step2',
    descriptionIntlCode: 'step2Description',
    icon: <Clock size={16} />,
  },
  {
    titleIntlCode: 'step3',
    descriptionIntlCode: 'step3Description',
    icon: <Calendar size={16} />,
  },
];
