// API helper functions with authentication
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

interface ApiOptions extends RequestInit {
  requireAuth?: boolean;
}

export async function apiRequest<T>(
  endpoint: string,
  options: ApiOptions = {}
): Promise<T> {
  const { requireAuth = true, ...fetchOptions } = options;
  
  const url = `${API_BASE_URL}${endpoint}`;
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  };

  // Add auth token if required
  if (requireAuth) {
    const token = getAuthToken();
    if (token) {
      headers.Authorization = `Bearer ${token}`;
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
    apiRequest<{ token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      requireAuth: false,
    }),

  // Appointments
  getAppointments: () =>
    apiRequest<any[]>('/appointments'),
  
  getAppointment: (id: string) =>
    apiRequest<any>(`/appointments/${id}`),

  // Patients
  getPatients: () =>
    apiRequest<any[]>('/patients'),
  
  getPatient: (id: string) =>
    apiRequest<any>(`/patients/${id}`),

  // Doctors
  getDoctors: () =>
    apiRequest<any[]>('/doctors'),
  
  getDoctor: (id: string) =>
    apiRequest<any>(`/doctors/${id}`),

  // Dashboard stats
  getDashboardStats: () =>
    apiRequest<{
      todayAppointments: number;
      pendingCallbacks: number;
      totalPatients: number;
      totalDoctors: number;
    }>('/dashboard/stats'),
};
