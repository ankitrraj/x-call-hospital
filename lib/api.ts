// API helper functions with authentication
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface ApiOptions extends RequestInit {
  requireAuth?: boolean;
}

// Type definitions
interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  hospital_id: number;
}

interface Appointment {
  id: string;
  patient_id: string;
  doctor_id: string;
  date: string;
  status: string;
  notes?: string;
}

interface Patient {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  hospital_id: number;
}

interface Doctor {
  id: string;
  name: string;
  specialization: string;
  phone: string;
  email?: string;
  hospital_id: number;
}

export async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { requireAuth = true, ...fetchOptions } = options;
  
  const url = `${API_BASE_URL}${endpoint}`;
  
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(fetchOptions.headers as Record<string, string>),
  };

  // Add auth token if required
  if (requireAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const response = await fetch(url, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      // Handle unauthorized - redirect to login
      window.location.href = '/login';
      throw new Error('Unauthorized');
    }
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

// Auth token management
export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
}

export function setAuthToken(token: string): void {
  localStorage.setItem('auth_token', token);
}

export function removeAuthToken(): void {
  localStorage.removeItem('auth_token');
}

// API endpoints
export const api = {
  // Auth
  login: (credentials: { email: string; password: string }) =>
    apiRequest<{ token: string; user: User }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      requireAuth: false,
    }),

  // Appointments
  getAppointments: () =>
    apiRequest<Appointment[]>('/appointments'),
  
  getAppointment: (id: string) =>
    apiRequest<Appointment>(`/appointments/${id}`),

  // Patients
  getPatients: () =>
    apiRequest<Patient[]>('/patients'),
  
  getPatient: (id: string) =>
    apiRequest<Patient>(`/patients/${id}`),

  // Doctors
  getDoctors: () =>
    apiRequest<Doctor[]>('/doctors'),
  
  getDoctor: (id: string) =>
    apiRequest<Doctor>(`/doctors/${id}`),

  // Dashboard stats
  getDashboardStats: () =>
    apiRequest<{
      todayAppointments: number;
      pendingCallbacks: number;
      totalPatients: number;
      totalDoctors: number;
    }>('/dashboard/stats'),
};
