import { create } from 'zustand';
import { IFriend } from '@/types/friend';
import { ITimeSlot } from '@/types/dates';

type FriendStore = {
  friends: IFriend[];
  selectedFriendId: string | null;
  addFriend: (friend: IFriend) => void;
  removeFriend: (id: string) => void;
  selectFriend: (id: string | null) => void;
  addTimeSlot: (timeSlot: ITimeSlot) => void;
  removeTimeSlot: (id: string) => void;
};

export const useFriendsStore = create<FriendStore>((set) => ({
  friends: [],
  selectedFriendId: null,
  addFriend: (friend) => set((state) => ({ friends: [...state.friends, friend] })),
  removeFriend: (id) =>
    set((state) => ({
      friends: state.friends.filter((friend) => friend.id !== id),
      selectedFriendId: state.selectedFriendId === id ? null : state.selectedFriendId,
    })),
  selectFriend: (id) => set({ selectedFriendId: id }),
  addTimeSlot: (timeSlot) =>
    set((state) => ({
      friends: state.friends.map((friend) =>
        friend.id === state.selectedFriendId ? { ...friend, availabilityHours: [...friend.availabilityHours, timeSlot] } : friend,
      ),
    })),
  removeTimeSlot: (id) =>
    set((state) => ({
      friends: state.friends.map((friend) =>
        friend.id === state.selectedFriendId
          ? { ...friend, availabilityHours: friend.availabilityHours.filter((timeSlot) => timeSlot.id !== id) }
          : friend,
      ),
    })),
}));
