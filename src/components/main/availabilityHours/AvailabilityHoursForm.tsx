'use client';

import { Clock } from 'lucide-react';
import { useFriendsStore } from '@/stores';
import { AddTimeSlotForm } from '@/components/main/availabilityHours/AddTimeSlotForm';
import TimeSlotCardNew from '@/components/main/availabilityHours/TimeSlotCard';
import { ITimeSlot, WeekDays } from '@/types/dates';
import { useTranslations } from 'next-intl';

const AvailabilityHoursForm = () => {
  const { friends, selectedFriendId } = useFriendsStore();
  const selectedFriend = friends.find((friend) => friend.id === selectedFriendId);
  const t = useTranslations('MainBody.mainCards.availabilityCard');

  const groupedTimeSlots =
    selectedFriend?.availabilityHours?.reduce<Record<string, ITimeSlot[]>>((acc, timeSlot) => {
      if (!acc[timeSlot.weekDay]) {
        acc[timeSlot.weekDay] = [];
      }
      acc[timeSlot.weekDay].push(timeSlot);
      return acc;
    }, {}) || {};

  Object.keys(groupedTimeSlots).forEach((day) => {
    groupedTimeSlots[day].sort((a, b) => a.startTime.localeCompare(b.startTime));
  });

  const sortedDays = Object.keys(groupedTimeSlots).sort((a, b) => {
    const aIndex = WeekDays.indexOf(a);
    const bIndex = WeekDays.indexOf(b);
    return aIndex - bIndex;
  });

  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl border bg-[#f3f3f3] px-4 py-6 dark:bg-[#151515]">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{t('availabilityTitle')}</p>
        <p className="opacity-65">{t('availabilityDescription')}</p>
      </div>
      {!selectedFriend && (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="center flex flex-col items-center justify-center gap-1">
            <Clock size={32} />
            <p className="text-center opacity-65">{t('availabilitySelect')}</p>
          </div>
        </div>
      )}
      {selectedFriend && (
        <>
          <AddTimeSlotForm />
          <div className="flex flex-col gap-4">
            {sortedDays.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8">
                <Clock size={24} className="mb-2 text-gray-400" />
                <p className="text-center text-gray-500 dark:text-gray-400">{t('availabilitySlotForm.noTimeSlots')}</p>
              </div>
            ) : (
              sortedDays.map((weekDay, index) => (
                <TimeSlotCardNew key={index} weekDay={weekDay} timeSlots={groupedTimeSlots[weekDay]} />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AvailabilityHoursForm;
