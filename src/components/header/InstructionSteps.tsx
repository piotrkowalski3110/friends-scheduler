import { IInstructionStep } from "@/components/header/InstructionStepCard";
import { Calendar, Clock, Users } from "lucide-react";

export const InstructionSteps: IInstructionStep[] = [
  {
    title: "1. Add Friends",
    description: "Add your friends using the \"Add Person\" button and click on their names to select them",
    icon: <Users size={16}/>
  },
  {
    title: "2. Set Working Hours",
    description: "Select a friend and add their available hours for each day of the week",
    icon: <Clock size={16}/>
  },
  {
    title: "3. Find Available Times",
    description: "View all available meeting times when everyone is free",
    icon: <Calendar size={16}/>
  }
];