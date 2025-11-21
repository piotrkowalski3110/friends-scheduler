export interface ITimeSlot {
  id: string;
  weekDay: string;
  startTime: string;
  endTime: string;
}

export const WeekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export type Interval = {
  start: number;
  end: number;
};
