import ModeToggle from '@/components/themes/ModeToggle';
import Header from '@/components/header/Header';
import FriendsForm from '@/components/main/friends/FriendsForm';
import WorkingHoursForm from '@/components/main/workingHours/WorkingHoursForm';

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col gap-2">
        <div className="flex w-full flex-row justify-between px-4 py-6">
          <p className="text-2xl font-bold">Meeting Scheduler</p>
          <ModeToggle />
        </div>
        <div className="flex w-full flex-row justify-between gap-6 px-4 py-6 max-sm:flex-col">
          <FriendsForm />
          <WorkingHoursForm />
        </div>
      </div>
    </div>
  );
}
