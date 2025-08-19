import { Trash2 } from 'lucide-react';
import React from 'react';
import { ITimeSlot } from '@/types/dates';
import { useFriendsStore } from '@/stores';

export const TimeSlotCard: React.FC<ITimeSlot> = ({ id, weekDay, startTime, endTime }) => {
  const { removeTimeSlot } = useFriendsStore();

  return (
    <div className="flex flex-row justify-between rounded-2xl border bg-white p-4 dark:bg-[#1c1c1c]">
      <div className="flex flex-row items-center justify-center gap-4">
        <p className="font-semibold">{weekDay}</p>
        <p>
          {startTime} - {endTime}
        </p>
      </div>
      <div
        onClick={() => removeTimeSlot(id)}
        className="flex size-8 flex-row items-center justify-center rounded-2xl border bg-[#f3f3f3] duration-200 hover:text-[#d4183d] dark:bg-[#151515]"
      >
        <Trash2 size={16} />
      </div>
    </div>
  );
};
