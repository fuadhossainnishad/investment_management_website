'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SignInFormData } from '@/lib/types/auth.types';
import { useAuth } from '@/hooks/useAuth';
import { FormInput } from '@/components/auth/FormInput';
import { FormCheckbox } from '@/components/auth/FormCheckbox';
import { signInSchema } from '@/lib/validaations/auth.validation';

export default function SignInPage() {
  const { signIn, isLoading, error } = useAuth();

  // Initialize React Hook Form with Zod validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onBlur', // Validate on blur for better UX
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  /**
   * Form submission handler
   * - Validates form data
   * - Calls auth service
   * - Handles errors
   */
  const onSubmit = async (data: SignInFormData) => {
    try {
      await signIn(data);
      // Navigation handled by useAuth hook
    } catch (err) {
      // Error is handled by useAuth hook
      console.error('Sign in error:', err);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Sign in</h1>
        <p className="text-gray-600 mt-2">Welcome back! Please enter your details.</p>
      </div>

      {/* Global Error Message */}
      {error && (
        <div 
          className="p-4 bg-red-50 border border-red-200 rounded-lg"
          role="alert"
        >
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <FormInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          autoComplete="email"
          error={errors.email}
          {...register('email')}
        />

        <FormInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          error={errors.password}
          {...register('password')}
        />

        <div className="flex items-center justify-between">
          <FormCheckbox
            label="Remember me"
            {...register('rememberMe')}
          />
          
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:text-blue-500 font-medium"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isLoading || isSubmitting}
          className="
            w-full bg-blue-600 text-white py-2.5 rounded-lg 
            font-medium hover:bg-blue-700 
            transition-colors duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          "
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle 
                  className="opacity-25" 
                  cx="12" 
                  cy="12" 
                  r="10" 
                  stroke="currentColor" 
                  strokeWidth="4"
                  fill="none"
                />
                <path 
                  className="opacity-75" 
                  fill="currentColor" 
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Signing in...
            </span>
          ) : (
            'Sign in'
          )}
        </button>
      </form>
    </div>
  );
}