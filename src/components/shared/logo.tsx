"use client"

import logoDarkImg from "@/assets/images/logo-dark.png"
import logoLightImg from "@/assets/images/logo-light.png"
import Image from "next/image"

import { useTheme } from "next-themes"
import { useLayoutEffect, useState } from "react"

export function Logo() {
  const { theme } = useTheme()
  const [logoSrc, setLogoSrc] = useState(logoDarkImg)

  useLayoutEffect(() => {
    setLogoSrc(theme === "light" ? logoDarkImg : logoLightImg)
  }, [theme])

  return (
    <Image
      src={logoSrc || "/placeholder.svg"}
      width={280}
      height={40}
      alt="Logo da botcolmeia"
    />
  )
}

