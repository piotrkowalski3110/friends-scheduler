'use client'

import * as React from "react"
import { Moon, Sun, LaptopMinimal } from "lucide-react"
import { useEffect, useState } from "react";
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

const ModeToggle = () => {

  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const selectTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('system');
    } else {
      setTheme('dark');
    }
  }

  if (!mounted) return null;

  return (
    <Button variant="outline" size="icon" onClick={selectTheme}>
      {theme === 'light' && <Sun className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"/>}
      {theme === 'dark' && <Moon className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"/>}
      {theme === 'system' && <LaptopMinimal className="h-[1.2rem] w-[1.2rem] scale-100 transition-all"/>}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default ModeToggle;
