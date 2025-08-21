import { ITimeSlot } from '@/types/dates';

export interface IFriend {
  id: string;
  name: string;
  availabilityHours: ITimeSlot[];
}

export interface ITimeSlotCardProps {
  weekDay: string;
  timeSlots: ITimeSlot[];
}
