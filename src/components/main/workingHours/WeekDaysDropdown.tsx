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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-28" variant="outline">
          {weekDay || 'Week Day'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={weekDay} onValueChange={setWeekDay}>
          <DropdownMenuRadioItem value="Monday">Monday</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Tuesday">Tuesday</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Wednesday">Wednesday</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Thursday">Thursday</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Friday">Friday</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Saturday">Saturday</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Sunday">Sunday</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
