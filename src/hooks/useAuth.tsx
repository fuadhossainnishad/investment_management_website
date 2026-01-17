import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthService } from '@/lib/services/auth.service';
import { SignInFormData, SignUpFormData, VerifyOtpFormData } from '@/lib/types/auth.types';

/**
 * Custom hook for authentication operations
 * Provides loading states, error handling, and navigation
 */
export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  /**
   * Handle Sign In
   */
  const signIn = async (data: SignInFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await AuthService.signIn(data);

      if (response.success && response.data?.token) {
        // Store token in cookie (handled by API route)
        // Redirect to dashboard
        router.push('/dashboard');
        return response;
      }

      throw new Error(response.message || 'Sign in failed');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle Sign Up
   */
  const signUp = async (data: SignUpFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Remove confirmPassword before sending to API
      const { confirmPassword, ...signUpData } = data;
      const response = await AuthService.signUp(signUpData);

      if (response.success) {
        // Redirect to OTP verification
        router.push(`/verify?email=${encodeURIComponent(data.email)}`);
        return response;
      }

      throw new Error(response.message || 'Sign up failed');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Handle OTP Verification
   */
  const verifyOtp = async (data: VerifyOtpFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await AuthService.verifyOtp(data);

      if (response.success) {
        router.push('/dashboard');
        return response;
      }

      throw new Error(response.message || 'Verification failed');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Resend OTP
   */
  const resendOtp = async (email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await AuthService.resendOtp(email);
      return response;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to resend OTP';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signIn,
    signUp,
    verifyOtp,
    resendOtp,
    isLoading,
    error,
    clearError: () => setError(null),
  };
}
