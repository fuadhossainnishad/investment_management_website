'use client';

import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { VerifyOtpFormData } from '@/lib/types/auth.types';
import { useAuth } from '@/hooks/useAuth';
import { otpSchema } from '@/lib/validaations/auth.validation';

export default function VerifyOtpPage() {
    const { verifyOtp, resendOtp, isLoading, error } = useAuth();
    const searchParams = useSearchParams();
    const email = searchParams.get('email') || '';
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<VerifyOtpFormData>({
        resolver: zodResolver(otpSchema),
        defaultValues: { otp: '' },
    });

    const otpValue = watch('otp');

    // Auto-focus first input on mount
    useEffect(() => {
        inputRefs.current[0]?.focus();
    }, []);

    const onSubmit = async (data: VerifyOtpFormData) => {
        try {
            await verifyOtp(data);
        } catch (err) {
            console.error('Verification error:', err);
        }
    };

    const handleResendOtp = async () => {
        try {
            await resendOtp(email);
            // Show success message (you could use a toast notification)
            alert('OTP resent successfully!');
        } catch (err) {
            console.error('Resend error:', err);
        }
    };

    // Handle OTP input change with auto-focus
    const handleOtpChange = (index: number, value: string) => {
        const newOtp = otpValue.split('');
        newOtp[index] = value;
        const otpString = newOtp.join('');

        setValue('otp', otpString);

        // Auto-focus next input
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otpValue[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Verify your email</h1>
                <p className="text-gray-600 mt-2">
                    We&apos;ve sent a 6-digit code to <span className="font-medium">{email}</span>
                </p>
            </div>

            {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                    <p className="text-sm text-red-800">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                        Enter verification code
                    </label>

                    <div className="flex gap-2 justify-center">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={otpValue[index] || ''}
                                onChange={(e) => handleOtpChange(index, e.target.value.replace(/\D/g, ''))}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className={`
                  w-12 h-14 text-center text-2xl font-semibold
                  border-2 rounded-lg
                  focus:outline-none focus:ring-2 focus:ring-blue-500
                  transition-colors
                  ${errors.otp ? 'border-red-500' : 'border-gray-300'}
                `}
                                aria-label={`Digit ${index + 1}`}
                            />
                        ))}
                    </div>

                    {errors.otp && (
                        <p className="text-sm text-red-600 mt-2 text-center" role="alert">
                            {errors.otp.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isLoading || otpValue.length !== 6}
                    className="
            w-full bg-blue-600 text-white py-2.5 rounded-lg 
            font-medium hover:bg-blue-700 
            transition-colors duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          "
                >
                    {isLoading ? 'Verifying...' : 'Verify'}
                </button>

                <p className="text-center text-sm text-gray-600">
                    Didn&apos;t receive the code?
                    <button
                        type="button"
                        onClick={handleResendOtp}
                        disabled={isLoading}
                        className="text-blue-600 font-medium hover:text-blue-500 disabled:opacity-50"
                    >
                        Resend
                    </button>
                </p>
            </form>
        </div>
    );
}
