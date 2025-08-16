import { create } from 'zustand';
import { IFriend } from '@/types/friend';

type FriendStore = {
  friends: IFriend[];
  selectedFriend: IFriend | null;
  addFriend: (friend: IFriend) => void;
  removeFriend: (id: string) => void;
  selectFriend: (id: string) => void;
};

export const useFriendsStore = create<FriendStore>((set) => ({
  friends: [],
  selectedFriend: null,
  addFriend: (friend) => set((state) => ({ friends: [...state.friends, friend] })),
  removeFriend: (id) => set((state) => ({ friends: state.friends.filter((friend) => friend.id !== id) })),
  selectFriend: (id) => set((state) => ({ selectedFriend: state.friends.find((friend) => friend.id === id) })),
}));
