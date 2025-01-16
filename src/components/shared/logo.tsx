"use client"

import logoDarkImg from "@/assets/images/logo-black.png";
import logoLightImg from "@/assets/images/logo-white.png";
import Image from "next/image";

import { useTheme } from "next-themes";

export function Logo() {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "light" ? logoDarkImg : logoLightImg}
      width={240}
      height={40}
      alt="Logo da botcolmeia"
    />
  )
}