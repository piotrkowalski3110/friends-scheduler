import { Clock, Trash2 } from 'lucide-react';
import React from 'react';
import { ITimeSlot } from '@/types/dates';

const TimeSlotCard: React.FC<ITimeSlot> = ({ id, weekDay, startTime, endTime }) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="rounded-xl border bg-white p-4 dark:bg-[#1c1c1c]">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-semibold">Monday</p>
          <span className="rounded-full border bg-white px-2 py-0.5 text-xs text-gray-600 dark:border-neutral-700 dark:bg-[#151515] dark:text-gray-300">
            2 slots
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {['09:00 - 17:00', '20:00 - 21:00'].map((range) => (
            <div
              key={range}
              className="flex items-center justify-between rounded-md bg-neutral-100 px-3 py-2 dark:bg-neutral-800"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <Clock size={16} className="text-gray-500" />
                <span className="text-sm">{range}</span>
              </div>
              <div>
                <Trash2 size={16} className="text-gray-500 duration-200 hover:text-[#d4183d]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSlotCard;
