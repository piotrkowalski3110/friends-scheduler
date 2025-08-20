import { Info } from 'lucide-react';
import InstructionStepCard from '@/components/header/InstructionStepCard';
import { InstructionSteps } from '@/components/header/InstructionSteps';

const Header = async () => {
  return (
    <>
      <div className="w-full bg-[#f3f3f3] dark:bg-[#151515]">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-6">
          <p className="text-2xl font-bold">Meeting Scheduler</p>
          <p className="opacity-65">Coordinate schedules with your friends to find the perfect meeting time</p>
          <div className="flex w-full flex-col gap-4 rounded-2xl border bg-white p-3 dark:bg-[#1c1c1c]">
            <div className="flex flex-row items-center gap-2">
              <Info size={16} />
              <p className="font-semibold">How to use:</p>
            </div>
            <div className="flex flex-row gap-4 max-sm:flex-col">
              {InstructionSteps.map((step, index) => {
                return <InstructionStepCard title={step.title} description={step.description} icon={step.icon} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
