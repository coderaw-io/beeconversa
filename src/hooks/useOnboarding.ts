import { OnboardingContext } from "@/context/onboarding-context";
import { useContext } from "react";

export const useOnboardingContext = () => {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }

  return context;
}
