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

interface IWeekDayDropdown {
  weekDay: string;
  setWeekDay: (value: string) => void;
}

export const WeekDaysDropdown: React.FC<IWeekDayDropdown> = ({ weekDay, setWeekDay }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-28 max-[380px]:w-full" variant="outline">
          {weekDay || 'Week Day'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={weekDay} onValueChange={setWeekDay}>
          {WeekDays.map((day) => (
            <DropdownMenuRadioItem key={day} value={day}>
              {day}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WeekDaysDropdown;
