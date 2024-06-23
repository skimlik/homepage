import { InjectionToken } from '@angular/core';

export const BACKEND_URL = new InjectionToken<string>('BackendUrl');
export const AuthTokenAudience = new InjectionToken<string>('AuthTokenAudience');