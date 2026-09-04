"use client";

import React, { createContext, useContext, useState } from "react";
import { UserProfile } from "@/types/user";

interface AuthContextType {
  user: UserProfile | null;
  isAuthModalOpen: boolean;
  authMode: "login" | "register";
  openAuthModal: (mode?: "login" | "register") => void;
  closeAuthModal: () => void;
  loginMock: (email: string) => void;
  logoutMock: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const openAuthModal = (mode: "login" | "register" = "login") => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => setIsAuthModalOpen(false);

  const loginMock = (email: string) => {
    setUser({
      uid: "mock-user-123",
      email,
      displayName: email.split("@")[0],
      createdAt: new Date().toISOString(),
    });
    closeAuthModal();
  };

  const logoutMock = () => setUser(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthModalOpen,
        authMode,
        openAuthModal,
        closeAuthModal,
        loginMock,
        logoutMock,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
