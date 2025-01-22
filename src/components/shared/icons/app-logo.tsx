"use client"

import logoDarkImg from "@/assets/images/logo-dark.png"
import logoLightImg from "@/assets/images/logo-light.png"
import Image from "next/image"

import { useTheme } from "next-themes"
import { useLayoutEffect, useState } from "react"

export function AppLogo() {
  const { theme } = useTheme()
  const [logoSource, setLogoSource] = useState(logoDarkImg)

  useLayoutEffect(() => {
    setLogoSource(theme === "light" ? logoDarkImg : logoLightImg)
  }, [theme])

  return (
    <Image
      src={logoSource || "/placeholder.svg"}
      width={280}
      height={40}
      alt="Logo da botcolmeia"
    />
  )
}

