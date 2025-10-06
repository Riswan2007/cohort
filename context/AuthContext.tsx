
import React, { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { User, Role } from '../types';
import { users } from '../data/users';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string, role: Role) => boolean;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const initAuth = useCallback(() => {
    try {
      const storedUser = localStorage.getItem('cohert_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('cohert_user');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  const login = (email: string, pass: string, role: Role): boolean => {
    const foundUser = users.find(
      u => u.email === email && u.password === pass && u.role === role
    );

    if (foundUser) {
      const userToStore = { ...foundUser };
      delete userToStore.password;
      setUser(userToStore);
      localStorage.setItem('cohert_user', JSON.stringify(userToStore));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('cohert_user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
