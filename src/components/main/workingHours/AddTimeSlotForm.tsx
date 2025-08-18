import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { WeekDaysDropdown } from '@/components/main/workingHours/WeekDaysDropdown';
import React from 'react';

export const AddTimeSlotForm = () => {
  const [weekDay, setWeekDay] = React.useState('Monday');
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-4 dark:bg-[#1c1c1c]">
      <p>Add Time Slot</p>
      <div className="flex flex-row gap-2 max-[380px]:flex-col">
        <WeekDaysDropdown weekDay={weekDay} setWeekDay={setWeekDay} />
        <Input
          type="time"
          id="time-picker"
          defaultValue="08:00"
          className="bg-background hover:bg-accent dark:hover:bg-input/50 focus-visible:border-input text-center focus-visible:ring-0"
        />
        <Input
          type="time"
          id="time-picker"
          defaultValue="16:00"
          className="bg-background hover:bg-accent dark:hover:bg-input/50 focus-visible:border-input text-center focus-visible:ring-0"
        />
      </div>
      <Button>Add Time Slot</Button>
    </div>
  );
};
