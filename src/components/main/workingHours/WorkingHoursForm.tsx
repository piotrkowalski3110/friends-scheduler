import { Clock } from 'lucide-react';

const WorkingHoursForm = () => {
  return (
    <div className="flex w-full flex-col gap-8 rounded-2xl border bg-[#f3f3f3] px-4 py-6 dark:bg-[#151515]">
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Working Hours</p>
        <p className="opacity-65">Add your friends and click on their names to manage their working hours</p>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <div className="center flex flex-col items-center justify-center gap-1">
          <Clock size={32} />
          <p className="text-center opacity-65">Select a friend to manage their working hours</p>
        </div>
      </div>
    </div>
  );
};

export default WorkingHoursForm;
