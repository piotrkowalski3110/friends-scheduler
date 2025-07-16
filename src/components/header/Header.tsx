import { Info } from 'lucide-react';
import InstructionStepCard from "@/components/header/InstructionStepCard";
import { InstructionSteps } from "@/components/header/InstructionSteps";

const Header = () => {
  return (
    <>
      <div className="w-full bg-[#f3f3f3] dark:bg-[#151515]">
        <div className="flex flex-col items-center max-w-3xl px-4 py-6 mx-auto gap-4">
          <p className="text-2xl font-bold">Meeting Scheduler</p>
          <p className="opacity-65">Coordinate schedules with your friends to find the perfect meeting
            time</p>
          <div className="flex flex-col w-full gap-4 p-3 rounded-2xl border bg-white dark:bg-[#1c1c1c]">
            <div className="flex flex-row items-center gap-2">
              <Info size={16}/>
              <p className="font-semibold">How to use:</p>
            </div>
            <div className="flex flex-row gap-4 max-sm:flex-col">
              {InstructionSteps.map((step, index) => {
                return <InstructionStepCard title={step.title}
                                            description={step.description}
                                            icon={step.icon}
                                            key={index}/>
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;