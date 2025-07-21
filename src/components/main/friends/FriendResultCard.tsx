import React from "react";
import { Trash2, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface IFriendResultCard {
  id: string,
  name: string,
  configuredDays: number,
  onRemove: (id: string) => void
}

const FriendResultCard: React.FC<IFriendResultCard> = ({id, name, configuredDays, onRemove}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row p-4 border rounded-2xl items-center bg-white dark:bg-[#1c1c1c] justify-between">
        <div className="flex flex-row gap-4">
          <Avatar className="size-8">
            <AvatarFallback className="bg-[#f3f3f3] dark:bg-[#151515] border">
              <User size={16}/>
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-xs">
            <p className="font-semibold">{name}</p>
            <p>{configuredDays} days configured</p>
          </div>
        </div>
        <div
          className="flex flex-row justify-center items-center size-8 bg-[#f3f3f3] dark:bg-[#151515] border rounded-2xl hover:text-[#d4183d]"
          onClick={() => onRemove(id)}>
          <Trash2 size={16}/>
        </div>
      </div>
    </div>
  );
}

export default FriendResultCard;