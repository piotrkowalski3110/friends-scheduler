'use client';

import { useFriendsStore } from '@/stores';

const SummaryCard = () => {
  const { friends } = useFriendsStore();
  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl border bg-[#f3f3f3] px-4 py-6 dark:bg-[#151515]">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Available Meeting Times</p>
        <p className="opacity-65">{friends.length} friends are available in 0 time slots</p>
      </div>
      <div className="flex flex-col gap-2"></div>
    </div>
  );
};

export default SummaryCard;
