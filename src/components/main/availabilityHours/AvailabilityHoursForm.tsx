'use client';

import { Clock } from 'lucide-react';
import { useFriendsStore } from '@/stores';
import { AddTimeSlotForm } from '@/components/main/availabilityHours/AddTimeSlotForm';
import { TimeSlotCard } from '@/components/main/availabilityHours/TimeSlotCard';

const AvailabilityHoursForm = () => {
  const { friends, selectedFriendId } = useFriendsStore();
  const selectedFriend = friends.find((friend) => friend.id === selectedFriendId);

  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl border bg-[#f3f3f3] px-4 py-6 dark:bg-[#151515]">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Availability Hours</p>
        <p className="opacity-65">Add available time slots for each day</p>
      </div>
      {!selectedFriend && (
        <div className="flex h-full flex-col items-center justify-center">
          <div className="center flex flex-col items-center justify-center gap-1">
            <Clock size={32} />
            <p className="text-center opacity-65">Select a friend to manage their availability hours</p>
          </div>
        </div>
      )}
      {selectedFriend && (
        <>
          <AddTimeSlotForm />
          <div className="flex flex-col gap-2">
            {selectedFriend.availabilityHours?.map((timeSlot) => {
              return <TimeSlotCard key={timeSlot.id} {...timeSlot} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default AvailabilityHoursForm;
