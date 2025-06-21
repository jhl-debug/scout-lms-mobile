// src/hooks/useAuth.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  childName?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string, childName: string) => Promise<boolean>;
  signOut: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check for existing session on app start
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        // Simulate restoring session (e.g., AsyncStorage or API call)
        await new Promise(resolve => setTimeout(resolve, 1000));
        // If session exists, setUser(...)
      } catch {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newUser: User = {
        id: '1',
        email,
        childName: 'Your Child',
      };
      setUser(newUser);
      return true;
    } catch {
      setError('Sign in failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (
    email: string,
    password: string,
    childName: string
  ): Promise<boolean> => {
    setLoading(true);
    setError(null);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newUser: User = {
        id: '1',
        email,
        childName,
      };
      setUser(newUser);
      return true;
    } catch {
      setError('Sign up failed. Please try again.');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signOut = () => {
    setUser(null);
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    clearError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}