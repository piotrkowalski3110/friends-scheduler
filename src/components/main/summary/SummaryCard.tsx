'use client';

import { useFriendsStore } from '@/stores';
import SummaryTimeSlotCard from '@/components/main/summary/SummaryTimeSlotCard';
import { Interval, ITimeSlot, WeekDays } from '@/types/dates';
import { minutesToTime, timeToMinutes } from '@/lib/datesUtils';

//TODO: analyze this code and try to understand it
//TODO: try to make it more readable and split it into smaller files

const toIntervals = (slots: ITimeSlot[]): Interval[] =>
  slots
    .map((s) => ({ start: timeToMinutes(s.startTime), end: timeToMinutes(s.endTime) }))
    .filter((i) => i.start < i.end)
    .sort((a, b) => a.start - b.start);

const intersectTwoLists = (a: Interval[], b: Interval[]): Interval[] => {
  const res: Interval[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    const start = Math.max(a[i].start, b[j].start);
    const end = Math.min(a[i].end, b[j].end);
    if (start < end) res.push({ start, end });
    if (a[i].end < b[j].end) i++;
    else j++;
  }
  return res;
};

const intersectAll = (lists: Interval[][]): Interval[] => {
  if (lists.length === 0) return [];
  let acc = lists[0];
  for (let k = 1; k < lists.length; k++) {
    acc = intersectTwoLists(acc, lists[k]);
    if (acc.length === 0) break;
  }
  return acc;
};

const SummaryCard = () => {
  const { friends } = useFriendsStore();

  const commonByDay = WeekDays.map((day) => {
    const perFriendIntervals = friends.map((f) => toIntervals(f.availabilityHours.filter((s) => s.weekDay === day)));
    const commonIntervals = intersectAll(perFriendIntervals);
    const timeSlots: ITimeSlot[] = commonIntervals.map((iv) => ({
      id: `${day}-${minutesToTime(iv.start)}-${minutesToTime(iv.end)}`,
      weekDay: day,
      startTime: minutesToTime(iv.start),
      endTime: minutesToTime(iv.end),
    }));
    return { weekDay: day, timeSlots };
  }).filter((x) => x.timeSlots.length > 0);

  const totalCommonSlots = commonByDay.reduce((sum, d) => sum + d.timeSlots.length, 0);

  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl border bg-[#f3f3f3] px-4 py-6 dark:bg-[#151515]">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Available Meeting Times</p>
        <p className="opacity-65">
          {friends.length} friend{friends.length !== 1 ? 's' : ''} are available in {totalCommonSlots} time slot
          {totalCommonSlots !== 1 ? 's' : ''}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {commonByDay.map(({ weekDay, timeSlots }) => (
          <SummaryTimeSlotCard key={weekDay} weekDay={weekDay} timeSlots={timeSlots} />
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
