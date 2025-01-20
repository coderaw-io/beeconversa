"use client"

import { motion, useAnimation } from "framer-motion"
import { UploadIcon } from "lucide-react"
import { useRef, useState } from "react"

export function UploadArea() {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const controls = useAnimation()

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
    controls.start({ scale: 1.05 })
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    controls.start({ scale: 1 })
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    controls.start({ scale: 1 })

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (files: FileList) => {
    console.log("Uploaded files:", files)
  }

  return (
    <motion.div
      className={`bg-zinc-100/70 border-2 border-dashed rounded-[0.75rem] p-12 text-center dark:bg-zinc-900 dark:border-zinc-500 cursor-pointer ${isDragging ? "border-primary" : ""
        }`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
      animate={controls}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <input type="file" ref={fileInputRef} onChange={handleFileInput} className="hidden" />
      <div className="flex flex-col items-center gap-2">
        <motion.div animate={{ rotate: isDragging ? 360 : 0 }} transition={{ duration: 0.5 }}>
          <UploadIcon className="size-8 text-muted-foreground" />
        </motion.div>
        <p className="text-sm text-muted-foreground">
          Clique para importar seu arquivo ou arraste e solte o arquivo aqui.
        </p>
      </div>
    </motion.div>
  )
}

