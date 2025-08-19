import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { WeekDaysDropdown } from '@/components/main/availabilityHours/WeekDaysDropdown';
import React from 'react';
import { useFriendsStore } from '@/stores';

export const AddTimeSlotForm = () => {
  const [weekDay, setWeekDay] = React.useState('Monday');
  const [startTime, setStartTime] = React.useState('08:00');
  const [endTime, setEndTime] = React.useState('16:00');
  const { addTimeSlot } = useFriendsStore();

  const createTimeSlot = () => {
    addTimeSlot({
      id: crypto.randomUUID(),
      weekDay,
      startTime,
      endTime,
    });
    console.log('Friends:', useFriendsStore.getState().friends);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-4 dark:bg-[#1c1c1c]">
      <p>Add Time Slot</p>
      <div className="flex flex-row gap-2 max-[380px]:flex-col">
        <WeekDaysDropdown weekDay={weekDay} setWeekDay={setWeekDay} />
        <Input
          type="time"
          id="time-picker"
          defaultValue="08:00"
          onChange={(e) => setStartTime(e.target.value)}
          className="bg-background hover:bg-accent dark:hover:bg-input/50 focus-visible:border-input text-center focus-visible:ring-0"
        />
        <Input
          type="time"
          id="time-picker"
          defaultValue="16:00"
          onChange={(e) => setEndTime(e.target.value)}
          className="bg-background hover:bg-accent dark:hover:bg-input/50 focus-visible:border-input text-center focus-visible:ring-0"
        />
      </div>
      <Button onClick={createTimeSlot}>Add Time Slot</Button>
    </div>
  );
};
