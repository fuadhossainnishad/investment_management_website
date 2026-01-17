import { SignInFormData, SignUpFormData, VerifyOtpFormData, AuthResponse } from '@/lib/types/auth.types';

/**
 * Auth Service
 * Handles all authentication API calls
 * Uses modern fetch with proper error handling
 */
export class AuthService {
  private static baseUrl = process.env.NEXT_PUBLIC_API_URL || '/api';

  /**
   * Generic request handler with error handling
   */
  private static async request<T>(
    endpoint: string,
    options: RequestInit
  ): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Network error occurred');
    }
  }

  /**
   * Sign In
   * @param data - User credentials
   * @returns Auth response with token
   */
  static async signIn(data: SignInFormData): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/signin', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Sign Up
   * @param data - User registration data
   * @returns Auth response
   */
  static async signUp(data: Omit<SignUpFormData, 'confirmPassword'>): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Verify OTP
   * @param data - OTP code
   * @returns Verification response
   */
  static async verifyOtp(data: VerifyOtpFormData): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/verify-otp', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Resend OTP
   * @param email - User email
   */
  static async resendOtp(email: string): Promise<AuthResponse> {
    return this.request<AuthResponse>('/auth/resend-otp', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
  }
}