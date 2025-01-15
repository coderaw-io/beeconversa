"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from "next-themes"

interface ChangeThemeProps {
  className?: string;
}

export function ChangeTheme({ className }: ChangeThemeProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={className}
      onClick={toggleTheme}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alterar tema</span>
    </Button>
  )
}
