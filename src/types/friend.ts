export interface IFriend {
  id: string,
  name: string,
  workingHours: Date[] | null,
  onRemove: (id: string) => void
}