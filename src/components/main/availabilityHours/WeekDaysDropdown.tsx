import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React from 'react';
import { WeekDays } from '@/types/dates';
import { useTranslations } from 'next-intl';

interface IWeekDayDropdown {
  weekDay: string;
  setWeekDay: (value: string) => void;
}

export const WeekDaysDropdown: React.FC<IWeekDayDropdown> = ({ weekDay, setWeekDay }) => {
  const t = useTranslations('dates.weekdays');
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-28 max-[380px]:w-full" variant="outline">
          {weekDay ? t(weekDay) : 'Week Day'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={weekDay} onValueChange={setWeekDay}>
          {WeekDays.map((day) => (
            <DropdownMenuRadioItem key={day} value={day}>
              {t(day)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WeekDaysDropdown;
