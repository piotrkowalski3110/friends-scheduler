export interface IFriend {
  id: string;
  name: string;
  workingHours: Date[];
  onRemove: (id: string) => void;
}
