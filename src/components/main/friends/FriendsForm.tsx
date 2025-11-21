'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import FriendResultCard from '@/components/main/friends/FriendResultCard';
import { Plus, User } from 'lucide-react';
import { useFriendsStore } from '@/stores';
import { useTranslations } from 'next-intl';

const FriendsForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const { friends, addFriend } = useFriendsStore();
  const isNameEmpty = !inputValue.trim();
  const t = useTranslations('MainBody.mainCards.friendsCard');

  const updateFriendsList = () => {
    if (isNameEmpty) return null;
    addFriend({
      id: crypto.randomUUID(),
      name: inputValue,
      availabilityHours: [],
    });
    setInputValue('');
  };

  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl border bg-[#f3f3f3] px-4 py-6 dark:bg-[#151515]">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{t('friendsTitle')}</p>
        <p className="opacity-65">{t('friendsDescription')}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Label className="font-semibold" htmlFor="friendName">
          {t('addFriendLabel')}
        </Label>
        <div className="flex flex-row gap-4">
          <Input
            className="bg-white dark:bg-[#1c1c1c]"
            id="friendName"
            placeholder={t('addFriendInputPlaceholder')}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={updateFriendsList} disabled={isNameEmpty}>
            <Plus size={16} />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {friends.length > 0 ? (
          friends.map((friend) => {
            return (
              <FriendResultCard key={friend.id} name={friend.name} id={friend.id} availabilityHours={friend.availabilityHours} />
            );
          })
        ) : (
          <div className="center flex flex-col items-center justify-center gap-1">
            <User size={32} />
            <p className="text-center opacity-65">{t('noFriendAddedTop')}</p>
            <p className="text-center opacity-65">{t('noFriendAddedBottom')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsForm;
