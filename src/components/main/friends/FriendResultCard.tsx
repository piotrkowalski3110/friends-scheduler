import { Trash2, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';
import { IFriend } from '@/types/friend';
import { cn } from '@/lib/utils';
import { useFriendsStore } from '@/stores';

const FriendResultCard: React.FC<IFriend> = ({ id, name, workingHours }) => {
  const { removeFriend, selectFriend, selectedFriend } = useFriendsStore();

  return (
    <div className="flex flex-col gap-2" onClick={() => selectFriend(id)}>
      <div
        className={cn(
          'flex flex-row items-center justify-between rounded-2xl border bg-white p-4 dark:bg-[#1c1c1c]',
          selectedFriend?.id === id && 'border-white',
        )}
      >
        <div className="flex flex-row gap-4">
          <Avatar className="size-8">
            <AvatarFallback className="border bg-[#f3f3f3] dark:bg-[#151515]">
              <User size={16} />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-xs">
            <p className="font-semibold">{name}</p>
            <p>{workingHours.length} days configured</p>
          </div>
        </div>
        <div
          className="flex size-8 flex-row items-center justify-center rounded-2xl border bg-[#f3f3f3] duration-200 hover:text-[#d4183d] dark:bg-[#151515]"
          onClick={() => removeFriend(id)}
        >
          <Trash2 size={16} />
        </div>
      </div>
    </div>
  );
};

export default FriendResultCard;
