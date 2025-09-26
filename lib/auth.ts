// Authentication utilities
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'receptionist' | 'doctor';
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('auth_token');
  return !!token;
}

export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('current_user');
  return userStr ? JSON.parse(userStr) : null;
}

export function setCurrentUser(user: User): void {
  localStorage.setItem('current_user', JSON.stringify(user));
}

export function logout(): void {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('current_user');
  window.location.href = '/login';
}

export function hasRole(requiredRole: User['role']): boolean {
  const user = getCurrentUser();
  if (!user) return false;
  
  // Admin has access to everything
  if (user.role === 'admin') return true;
  
  return user.role === requiredRole;
}

export function canAccess(allowedRoles: User['role'][]): boolean {
  const user = getCurrentUser();
  if (!user) return false;
  
  // Admin has access to everything
  if (user.role === 'admin') return true;
  
  return allowedRoles.includes(user.role);
}
