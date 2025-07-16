import ModeToggle from "@/components/themes/ModeToggle";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className="bg-background">
      <Header/>
      <ModeToggle/>
    </div>
  );
}
