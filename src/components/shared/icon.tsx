"use client"

import iconDarkImg from "@/assets/images/icon-dark.png"
import iconLightImg from "@/assets/images/icon-light.png"
import Image from "next/image"

import { useTheme } from "next-themes"

export function Icon() {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "light" ? iconDarkImg : iconLightImg}
      width={420}
      height={400}
      className="w-10 rounded-md"
      alt="Ícone da botcolmeia"
    />
  )
}
