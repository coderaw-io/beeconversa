"use client"

import type React from "react"

import { Separator } from "@/components/ui/separator"
import { StepperContext } from "@/context/stepper-context"
import { Check } from "lucide-react"
import { useCallback } from "react"

export interface StepperProps {
  currentStep: number
  onStepChange?: (step: number) => void
  steps: {
    step: number
    title: string
    description: string
    content: React.ReactNode
  }[]
}

export function Stepper({ steps, currentStep, onStepChange }: StepperProps) {
  const previousStep = useCallback(() => {
    const newStep = Math.max(0, currentStep - 1)
    onStepChange?.(newStep)
  }, [currentStep, onStepChange])

  const nextStep = useCallback(() => {
    const newStep = Math.min(steps.length - 1, currentStep + 1)
    onStepChange?.(newStep)
  }, [currentStep, steps.length, onStepChange])

  return (
    <StepperContext.Provider value={{ previousStep, nextStep }}>
      <div className="max-w-7xl w-full grid grid-cols-[1fr_320px] gap-6">
        <div className="w-full border-r h-screen">
          {steps[currentStep]?.content}
        </div>

        <div className="space-y-4 pt-8 pl-6 md:pt-12">
          <h5 className="text-2xl font-semibold tracking-tight pb-2">
            Passo a passo para concluir o cadastro do seu número
          </h5>

          {steps.map((step, index) => {
            const isCompleted = currentStep > index;
            const isCurrent = currentStep === index;

            return (
              <div key={step.step} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <div
                      className={`size-8 rounded-full flex items-center justify-center border-2 transition-colors ${isCompleted ? "bg-emerald-500 dark:bg-emerald-700 border-none" : isCurrent ? "bg-foreground border-none" : "border-zinc-200 dark:border-muted"
                        }`}
                    >
                      {isCompleted ? (
                        <Check className="size-4 text-emerald-100" />
                      ) : (
                        <span className={`text-sm font-semibold ${isCurrent ? "text-background" : "text-muted-foreground"}`}>
                          {step.step}
                        </span>
                      )}
                    </div>

                    {index !== steps.length - 1 && (
                      <Separator orientation="vertical" className="absolute h-12 left-1/2 -translate-x-1/2 top-8" />
                    )}
                  </div>

                  <div className="flex flex-col pt-1">
                    <h4 className={`font-medium ${isCurrent ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </StepperContext.Provider>
  )
}

