import React from "react";

export interface IInstructionStep {
  title: string,
  description: string,
  icon: React.ReactNode
}

const InstructionStepCard: React.FC<IInstructionStep> = ({title, description, icon}) => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-2 items-center">
        {icon}
        <p>{title}</p>
      </div>
      <p className="opacity-65">{description}</p>
    </div>
  );
}

export default InstructionStepCard;