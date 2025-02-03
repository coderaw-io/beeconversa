'use client'

import { DecodeTokenResponse } from "@/@types/auth/decode-token";
import React, { createContext, useCallback, useContext, useState } from 'react';

interface AuthContextType {
  user: DecodeTokenResponse | null;
  setUser: (user: DecodeTokenResponse | null) => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<DecodeTokenResponse | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setUserAndAuth = useCallback((newUser: DecodeTokenResponse | null) => {
    setUser(newUser);
    setIsAuthenticated(!!newUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser: setUserAndAuth, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}