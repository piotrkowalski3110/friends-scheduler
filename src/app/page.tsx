import ModeToggle from "@/components/themes/ModeToggle";
import Header from "@/components/header/Header";
import FriendsForm from "@/components/main/FriendsForm";

export default function Home() {
  return (
    <div className="bg-background">
      <Header/>
      <div className="flex flex-col max-w-7xl gap-2 mx-auto">
        <div className="flex flex-row justify-between w-full px-4 py-6">
          <p className="text-2xl font-bold">Meeting Scheduler</p>
          <ModeToggle/>
        </div>
        <div className="flex flex-row max-sm:flex-col justify-between w-full px-4 py-6 gap-6">
          <FriendsForm/>
          <FriendsForm/>
          <FriendsForm/>
        </div>
      </div>
    </div>
  );
}
