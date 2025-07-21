'use client'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import { useState } from "react";
import FriendResultCard from "@/components/main/friends/FriendResultCard";

interface IFriend {
  id: string,
  name: string,
  workingHours: Date[] | null
}

const FriendsForm = () => {

  const [friends, setFriends] = useState<IFriend[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const updateFriendsList = () => {
    if (!inputValue.trim()) return null;
    setFriends((prevFriends) => [...prevFriends, {id: crypto.randomUUID(), name: inputValue, workingHours: null}]);
    setInputValue('');
  }

  const removeFriend = (id: string) => {
    setFriends((prevFriends) => prevFriends.filter(friend => friend.id !== id));
  }

  return (
    <div className="flex flex-col w-full rounded-2xl border bg-[#f3f3f3] dark:bg-[#151515] gap-8 p-4">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Friends</p>
        <p className="opacity-65">Add your friends and click on their names to manage their working hours</p>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="font-semibold" htmlFor="friendName">Add Friend</Label>
        <div className="flex flex-row gap-4">
          <Input className="bg-white dark:bg-[#1c1c1c]"
                 id="friendName"
                 placeholder="Enter friend's name"
                 type="text"
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={updateFriendsList}>
            <Plus size={16}/>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {friends.map((friend, index) => {
          return <FriendResultCard key={index}
                                   name={friend.name}
                                   id={friend.id}
                                   configuredDays={0}
                                   onRemove={removeFriend}
          />;
        })}
      </div>
    </div>
  );
}

export default FriendsForm;