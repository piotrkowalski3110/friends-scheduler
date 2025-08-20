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
    set((state) => {
      if (!state.selectedFriendId) return state;

      const friends = state.friends.map((friend) => {
        if (friend.id === state.selectedFriendId) {
          return {
            ...friend,
            availabilityHours: [...(friend.availabilityHours || []), timeSlot],
          };
        }
        return friend;
      });

      return { friends };
    }),
  removeTimeSlot: (id) =>
    set((state) => {
      if (!state.selectedFriendId) return state;

      const friends = state.friends.map((friend) => {
        if (friend.id === state.selectedFriendId) {
          return {
            ...friend,
            availabilityHours: (friend.availabilityHours || []).filter((slot) => slot.id !== id),
          };
        }
        return friend;
      });

      return { friends };
    }),
}));
