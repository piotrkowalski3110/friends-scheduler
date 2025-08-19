import { create } from 'zustand';
import { IFriend } from '@/types/friend';
import { ITimeSlot } from '@/types/dates';

type FriendStore = {
  friends: IFriend[];
  selectedFriend: IFriend | null;
  addFriend: (friend: IFriend) => void;
  removeFriend: (id: string) => void;
  selectFriend: (id: string) => void;
  addTimeSlot: (timeSlot: ITimeSlot) => void;
  removeTimeSlot: (id: string) => void;
};

export const useFriendsStore = create<FriendStore>((set) => ({
  friends: [],
  selectedFriend: null,
  addFriend: (friend) => set((state) => ({ friends: [...state.friends, friend] })),
  removeFriend: (id) => set((state) => ({ friends: state.friends.filter((friend) => friend.id !== id) })),
  selectFriend: (id) => set((state) => ({ selectedFriend: state.friends.find((friend) => friend.id === id) })),
  addTimeSlot: (timeSlot) =>
    set((state) => {
      if (!state.selectedFriend) return state;

      const updatedFriend = {
        ...state.selectedFriend,
        availabilityHours: [...(state.selectedFriend.availabilityHours || []), timeSlot],
      };

      return {
        ...state,
        selectedFriend: updatedFriend,
        friends: state.friends.map((friend) => (friend.id === updatedFriend.id ? updatedFriend : friend)),
      };
    }),
  removeTimeSlot: (id) =>
    set((state) => {
      if (!state.selectedFriend) return state;

      const updatedFriend = {
        ...state.selectedFriend,
        availabilityHours: (state.selectedFriend.availabilityHours || []).filter((slot) => slot.id !== id),
      };

      return {
        ...state,
        selectedFriend: updatedFriend,
        friends: state.friends.map((friend) => (friend.id === updatedFriend.id ? updatedFriend : friend)),
      };
    }),
}));
