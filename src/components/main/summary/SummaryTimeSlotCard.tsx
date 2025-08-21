import { Clock } from 'lucide-react';
import React from 'react';
import { ITimeSlotCardProps } from '@/types/friend';

const SummaryTimeSlotCard: React.FC<ITimeSlotCardProps> = ({ weekDay, timeSlots }) => {
  return (
    <div className="rounded-xl border bg-white p-4 dark:bg-[#1c1c1c]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-semibold">{weekDay}</p>
        <span className="rounded-full border bg-white px-2 py-0.5 text-xs text-gray-600 dark:border-neutral-700 dark:bg-[#151515] dark:text-gray-300">
          {timeSlots.length} slot{timeSlots.length !== 1 ? 's' : ''}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        {timeSlots.map((timeSlot) => (
          <div
            key={timeSlot.id}
            className="flex items-center justify-between rounded-md bg-neutral-100 px-3 py-2 dark:bg-neutral-800"
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <Clock size={16} className="text-gray-500" />
              <span className="text-sm">
                {timeSlot.startTime} - {timeSlot.endTime}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryTimeSlotCard;
