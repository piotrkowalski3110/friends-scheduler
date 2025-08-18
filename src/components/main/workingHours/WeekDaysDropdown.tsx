import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import React from 'react';

interface IWeekDayDropdown {
  weekDay: string;
  setWeekDay: (value: string) => void;
}

export const WeekDaysDropdown: React.FC<IWeekDayDropdown> = ({ weekDay, setWeekDay }) => {
  const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-28 max-[380px]:w-full" variant="outline">
          {weekDay || 'Week Day'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={weekDay} onValueChange={setWeekDay}>
          {WEEKDAYS.map((day) => (
            <DropdownMenuRadioItem key={day} value={day}>
              {day}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
