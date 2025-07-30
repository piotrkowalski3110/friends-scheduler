import { Trash2, User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import React from 'react';
import { IFriend } from '@/types/friend';

const FriendResultCard: React.FC<IFriend> = ({ id, name, workingHours, onRemove }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-between rounded-2xl border bg-white p-4 dark:bg-[#1c1c1c]">
        <div className="flex flex-row gap-4">
          <Avatar className="size-8">
            <AvatarFallback className="border bg-[#f3f3f3] dark:bg-[#151515]">
              <User size={16} />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-xs">
            <p className="font-semibold">{name}</p>
            <p>{workingHours?.length} days configured</p>
          </div>
        </div>
        <div
          className="flex size-8 flex-row items-center justify-center rounded-2xl border bg-[#f3f3f3] hover:text-[#d4183d] dark:bg-[#151515]"
          onClick={() => onRemove?.(id)}
        >
          <Trash2 size={16} />
        </div>
      </div>
    </div>
  );
};

export default FriendResultCard;
