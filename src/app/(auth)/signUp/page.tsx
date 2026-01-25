
import React from 'react'

export default function page() {
  return (
    <div>
      this is auth
    </div>
  )
}

// 'use client';

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import Link from 'next/link';
// import { SignUpFormData } from '@/lib/types/auth.types';
// import { useAuth } from '@/hooks/useAuth';
// import { FormInput } from '@/components/auth/FormInput';
// import { FormCheckbox } from '@/components/auth/FormCheckbox';
// import { signUpSchema } from '@/lib/validaations/auth.validation';
// import { PasswordRequirement } from '@/utils/PasswordRequirement';

// export default function SignUpPage() {
//     const { signUp, isLoading, error } = useAuth();

//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//         watch,
//     } = useForm<SignUpFormData>({
//         resolver: zodResolver(signUpSchema),
//         mode: 'onBlur',
//         defaultValues: {
//             fullName: '',
//             email: '',
//             password: '',
//             confirmPassword: '',
//             agreeToTerms: false,
//         },
//     });

//     // Watch password for real-time validation feedback
//     const password = watch('password');

//     const onSubmit = async (data: SignUpFormData) => {
//         try {
//             await signUp(data);
//         } catch (err) {
//             console.error('Sign up error:', err);
//         }
//     };

//     return (
//         <div className="space-y-6">
//             <div>
//                 <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
//                 <p className="text-gray-600 mt-2">Get started with your free account today.</p>
//             </div>

//             {error && (
//                 <div className="p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
//                     <p className="text-sm text-red-800">{error}</p>
//                 </div>
//             )}

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
//                 <FormInput
//                     label="Full Name"
//                     type="text"
//                     placeholder="Enter your full name"
//                     autoComplete="name"
//                     error={errors.fullName}
//                     {...register('fullName')}
//                 />

//                 <FormInput
//                     label="Email"
//                     type="email"
//                     placeholder="Enter your email"
//                     autoComplete="email"
//                     error={errors.email}
//                     {...register('email')}
//                 />

//                 <FormInput
//                     label="Password"
//                     type="password"
//                     placeholder="Create a password"
//                     autoComplete="new-password"
//                     error={errors.password}
//                     {...register('password')}
//                 />

//                 {/* Password strength indicator */}
//                 {password && (
//                     <div className="space-y-2">
//                         <p className="text-xs font-medium text-gray-700">Password strength:</p>
//                         <div className="space-y-1">
//                             <PasswordRequirement
//                                 met={password.length >= 8}
//                                 text="At least 8 characters"
//                             />
//                             <PasswordRequirement
//                                 met={/[A-Z]/.test(password)}
//                                 text="One uppercase letter"
//                             />
//                             <PasswordRequirement
//                                 met={/[a-z]/.test(password)}
//                                 text="One lowercase letter"
//                             />
//                             <PasswordRequirement
//                                 met={/[0-9]/.test(password)}
//                                 text="One number"
//                             />
//                             <PasswordRequirement
//                                 met={/[^A-Za-z0-9]/.test(password)}
//                                 text="One special character"
//                             />
//                         </div>
//                     </div>
//                 )}

//                 <FormInput
//                     label="Confirm Password"
//                     type="password"
//                     placeholder="Confirm your password"
//                     autoComplete="new-password"
//                     error={errors.confirmPassword}
//                     {...register('confirmPassword')}
//                 />

//                 <FormCheckbox
//                     label={
//                         <>
//                             I agree to the{' '}
//                             <Link href="/terms" className="text-blue-600 hover:text-blue-500">
//                                 Terms of Service
//                             </Link>{' '}
//                             and{' '}
//                             <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
//                                 Privacy Policy
//                             </Link>
//                         </>
//                     }
//                     error={errors.agreeToTerms}
//                     {...register('agreeToTerms')}
//                 />

//                 <button
//                     type="submit"
//                     disabled={isLoading || isSubmitting}
//                     className="
//             w-full bg-blue-600 text-white py-2.5 rounded-lg 
//             font-medium hover:bg-blue-700 
//             transition-colors duration-200
//             disabled:opacity-50 disabled:cursor-not-allowed
//             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
//           "
//                 >
//                     {isLoading ? (
//                         <span className="flex items-center justify-center gap-2">
//                             <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
//                                 <circle
//                                     className="opacity-25"
//                                     cx="12"
//                                     cy="12"
//                                     r="10"
//                                     stroke="currentColor"
//                                     strokeWidth="4"
//                                     fill="none"
//                                 />
//                                 <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                 />
//                             </svg>
//                             Creating account...
//                         </span>
//                     ) : (
//                         'Create account'
//                     )}
//                 </button>
//             </form>
//         </div>
//     );
// }