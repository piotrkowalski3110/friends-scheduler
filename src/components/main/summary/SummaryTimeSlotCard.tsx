import { Clock } from 'lucide-react';

const SummaryTimeSlotCard = () => {
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
            <div key={range} className="flex items-center gap-2 rounded-md bg-neutral-100 px-3 py-2 dark:bg-neutral-800">
              <Clock size={16} className="text-gray-500" />
              <span className="text-sm">{range}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SummaryTimeSlotCard;
