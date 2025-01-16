"use client"

import logoDarkImg from "@/assets/images/logo-dark.png";
import logoLightImg from "@/assets/images/logo-light.png";
import Image from "next/image";

import { useTheme } from "next-themes";

export function Logo() {
  const { theme } = useTheme();

  return (
    <Image
      src={theme === "light" ? logoDarkImg : logoLightImg}
      width={280}
      height={40}
      alt="Logo da botcolmeia"
    />
  )
}
