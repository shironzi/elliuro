import React, { createContext } from 'react'

interface AuthContextProps {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined,
)
