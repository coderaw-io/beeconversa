"use client"

import { useUploadContext } from "@/hooks/use-upload"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { UploadIcon, XIcon } from "lucide-react"
import { useRef, useState } from "react"

const ALLOWED_EXTENSIONS = [".xls", ".csv", ".xlsx"]

const isValidFileType = (file: File) => {
  const extension = "." + file.name.split(".").pop()?.toLowerCase()
  return ALLOWED_EXTENSIONS.includes(extension)
}

export function UploadArea() {
  const { uploads, addUpload, removeUpload } = useUploadContext()

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

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleClick = () => fileInputRef.current?.click()

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) handleFiles(e.target.files)
  }

  const handleFiles = (files: FileList) => {
    Array.from(files).forEach((file) => {
      if (isValidFileType(file)) addUpload(file)
    })
  }

  return (
    <div className="space-y-4">
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
        whileHover={{ scale: 0.98 }}
        whileTap={{ scale: 0.98 }}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInput}
          className="hidden"
          multiple
          accept=".xls,.csv,.xlsx"
        />

        <div className="flex flex-col items-center gap-2">
          <motion.div animate={{ rotate: isDragging ? 360 : 0 }} transition={{ duration: 0.5 }}>
            <UploadIcon className="size-8 text-muted-foreground" />
          </motion.div>

          <p className="text-lg text-muted-foreground">
            Clique para importar seu arquivo ou arraste e solte o arquivo aqui.
            <br />
            <span className="text-sm font-bold italic tracking-wider">
              Tipos permitidos: .xls, .csv, .xlsx
            </span>
          </p>
        </div>
      </motion.div>

      {uploads.length > 0 && (
        <div className="space-y-2">
          {uploads.map((upload, index) => (
            <div key={index} className="bg-zinc-100 p-4 rounded-md dark:bg-zinc-900">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{upload.file.name}</span>

                <button onClick={() => removeUpload(upload.file)} className="hover:text-destructive">
                  <XIcon className="size-4" />
                </button>
              </div>

              <div className="w-full bg-background/40 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${upload.status === "completed"
                    ? "bg-success"
                    : upload.status === "error"
                      ? "bg-destructive"
                      : "bg-link"
                    }`}
                  style={{ width: `${upload.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center gap-1 text-xs mt-2">
                <span
                  className={cn("size-2 rounded-full",
                    {
                      "bg-success": upload.status === "completed",
                      "bg-link": upload.status === "uploading",
                      "bg-destructive": upload.status === "error"
                    }
                  )}
                />

                {upload.status === "uploading" && `${upload.progress}%`}
                {upload.status === "completed" && "Arquivo enviado com sucesso! A importação do seu arquivo foi iniciada."}
                {upload.status === "error" && (
                  <span className="text-destructive">
                    {`Erro ao importar arquivo. ${upload.errorMessage}` || "Error"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

