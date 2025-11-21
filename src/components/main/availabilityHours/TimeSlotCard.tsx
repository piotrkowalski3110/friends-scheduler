import { Clock, Trash2 } from 'lucide-react';
import React from 'react';
import { useFriendsStore } from '@/stores';
import { ITimeSlotCardProps } from '@/types/friend';
import { useTranslations } from 'next-intl';

const TimeSlotCard: React.FC<ITimeSlotCardProps> = ({ weekDay, timeSlots }) => {
  const { removeTimeSlot } = useFriendsStore();
  const t = useTranslations('dates.weekdays');

  return (
    <div className="rounded-xl border bg-white p-4 dark:bg-[#1c1c1c]">
      <div className="mb-3 flex items-center justify-between">
        <p className="font-semibold">{t(weekDay)}</p>
        <span className="rounded-full border bg-white px-2 py-0.5 text-xs text-gray-600 dark:border-neutral-700 dark:bg-[#151515] dark:text-gray-300">
          {timeSlots.length}
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
            <div>
              <div
                className="flex size-8 flex-row items-center justify-center rounded-2xl border bg-[#f3f3f3] duration-200 hover:text-[#d4183d] dark:bg-[#151515]"
                onClick={() => removeTimeSlot(timeSlot.id)}
              >
                <Trash2 size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotCard;
