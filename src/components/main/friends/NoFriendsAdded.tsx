import { User } from 'lucide-react';

const NoFriendsAdded = () => {
  return (
    <div className="center flex flex-col items-center justify-center gap-1">
      <User size={32} />
      <p className="text-center opacity-65">No friends added yet!</p>
      <p className="text-center opacity-65">Add your first friend to get started</p>
    </div>
  );
};

export default NoFriendsAdded;
