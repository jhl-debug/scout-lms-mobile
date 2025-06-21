// src/types/index.ts

// Navigation types for React Navigation
export type RootStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Courses: undefined;
  Progress: undefined;
  Profile: undefined;
};

// User and Authentication types
export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface UserProfile {
  id: string;
  email?: string;
  full_name?: string;
  child_name?: string;
  child_grade?: string;
  primary_concerns?: string[];
  onboarding_completed?: boolean;
  created_at: string;
  updated_at: string;
}

// Auth context type
export interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (email: string, password: string, childName: string) => Promise<boolean>;
  signOut: () => void;
}