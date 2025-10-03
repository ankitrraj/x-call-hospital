"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface Hospital {
  id: number;
  name: string;
  code: string;
  city: string;
  theme_color?: string;
  logo_url?: string;
}

interface HospitalContextType {
  hospital: Hospital | null;
  setHospital: (hospital: Hospital | null) => void;
  isLoading: boolean;
}

const HospitalContext = createContext<HospitalContextType | undefined>(undefined);

export function HospitalProvider({ children }: { children: ReactNode }) {
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in and has hospital data
    const hospitalData = localStorage.getItem('hospital');
    if (hospitalData) {
      try {
        setHospital(JSON.parse(hospitalData));
      } catch (error) {
        console.error('Error parsing hospital data:', error);
      }
    }
    setIsLoading(false);
  }, []);

  return (
    <HospitalContext.Provider value={{ hospital, setHospital, isLoading }}>
      {children}
    </HospitalContext.Provider>
  );
}

export function useHospital() {
  const context = useContext(HospitalContext);
  if (context === undefined) {
    throw new Error('useHospital must be used within a HospitalProvider');
  }
  return context;
}
