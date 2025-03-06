"use client"

import { createContext, useState } from "react";

interface OnboardingContextProps {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  verifiedName: string;
  setVerifiedName: (verifiedName: string) => void;
  numberId: string;
  setNumberId: (numberId: string) => void;
  otpCode: string;
  setOtpCode: (otpCode: string) => void;
}

export const OnboardingContext = createContext<OnboardingContextProps | undefined>(undefined);

export const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verifiedName, setVerifiedName] = useState("");
  const [numberId, setNumberId] = useState("");
  const [otpCode, setOtpCode] = useState("");

  return (
    <OnboardingContext.Provider
      value={{
        phoneNumber,
        setPhoneNumber,
        verifiedName,
        setVerifiedName,
        numberId,
        setNumberId,
        otpCode,
        setOtpCode
      }}
    >
      {children}
    </OnboardingContext.Provider>
  )
}