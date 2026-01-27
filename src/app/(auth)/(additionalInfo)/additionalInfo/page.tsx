'use client'
import { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Image from 'next/image';

interface AdditionalInfoFormData {
    // Company Information
    companyName: string;
    companySize: string;
    companyType: string;
    companySubtype: string;
    accessType: string;
    // Personal Information
    roleInCompany: string;
    phoneNumber: string;
    position: string;
}

const companySizeOptions = ['11 - 50 employees', '51 - 200 employees', '201 - 500 employees', '500+ employees'];
const companyTypeOptions = ['Investment Firm', 'Startup', 'Educational Institution', 'Other'];
const subtypeOptions = ['VC', 'PE', 'Search Fund', 'Angel', 'Family Office', 'Other'];

export default function Page() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<AdditionalInfoFormData>({
        defaultValues: {
            companyName: '',
            companySize: '',
            companyType: '',
            companySubtype: '',
            roleInCompany: '',
            phoneNumber: '',
        },
    });

    const onSubmit = useCallback(async (data: AdditionalInfoFormData) => {
        console.log('Form Data:', data);
        // Handle form submission here
    }, []);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex-1 h-full w-full flex flex-col justify-center items-center'
        >
            <section className='w-1/3 space-y-3 '>

                <div className='font-semibold w-full text-center'>Additional Information</div>

                {/* Company Information Section */}
                <section className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-[#ECEDF3]">
                    <h2 className="text-2xl font-bold mb-6 text-[#0B33B1]">Company Information</h2>
                    <section className="grid grid-cols-2 ">
                        {/* Company Name */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-[#1A202C] mb-2">
                                Company Name
                            </label>
                            <input
                                {...register('companyName', {
                                    required: 'Company name is required',
                                })}
                                type="text"
                                placeholder="Name of the company"
                                className="w-full px-4 py-2 border border-[#ECEDF3] rounded-lg focus:outline-none focus:border-[#0B33B1] transition-colors"
                            />
                            {errors.companyName && (
                                <p className="text-red-500 text-xs mt-1">{errors.companyName.message}</p>
                            )}
                        </div>

                        {/* Company Size */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-[#1A202C] mb-2">
                                Company Size
                            </label>
                            <select
                                {...register('companySize', {
                                    required: 'Company size is required',
                                })}
                                className="w-full px-4 py-2 border border-[#ECEDF3] rounded-lg focus:outline-none focus:border-[#0B33B1] transition-colors bg-white"
                            >
                                <option value="">1 - 10 employees</option>
                                {companySizeOptions.map((size) => (
                                    <option key={size} value={size}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                            {errors.companySize && (
                                <p className="text-red-500 text-xs mt-1">{errors.companySize.message}</p>
                            )}
                        </div>

                        {/* Company Type */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-[#1A202C] mb-2">
                                Type of Company
                            </label>
                            <select
                                {...register('companyType', {
                                    required: 'Company type is required',
                                })}
                                className="w-full px-4 py-2 border border-[#ECEDF3] rounded-lg focus:outline-none focus:border-[#0B33B1] transition-colors bg-white"
                            >
                                <option value="">Select company type</option>
                                {companyTypeOptions.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.companyType && (
                                <p className="text-red-500 text-xs mt-1">{errors.companyType.message}</p>
                            )}
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-[#1A202C] mb-2">
                                Subtype
                            </label>
                            <select
                                {...register('companyType', {
                                    required: 'Company type is required',
                                })}
                                className="w-full px-4 py-2 border border-[#ECEDF3] rounded-lg focus:outline-none focus:border-[#0B33B1] transition-colors bg-white"
                            >
                                <option value="">VC, PE, Search Fund, Angel... </option>
                                {subtypeOptions.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.companyType && (
                                <p className="text-red-500 text-xs mt-1">{errors.companyType.message}</p>
                            )}
                        </div>
                    </section>

                </section>

                {/* Personal Information Section */}
                <section className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-[#ECEDF3]">
                    <h2 className="text-2xl font-bold mb-6 text-[#0B33B1]">Personal Information</h2>
                    <section className="grid grid-cols-2 gap-2 text-sm">
                        {/* Role in Company */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-[#1A202C] mb-2">
                                Role in Company
                            </label>
                            <input
                                {...register('roleInCompany', {
                                    required: 'Role in company is required',
                                })}
                                type="text"
                                placeholder="Your role/responsibility"
                                className="w-full px-4 py-2 border border-[#ECEDF3] rounded-lg focus:outline-none focus:border-[#0B33B1] transition-colors"
                            />
                            {errors.roleInCompany && (
                                <p className="text-red-500 text-xs mt-1">{errors.roleInCompany.message}</p>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-[#1A202C] mb-2">
                                Phone Number
                            </label>
                            <input
                                {...register('phoneNumber', {
                                    required: 'Phone number is required',
                                    pattern: {
                                        value: /^[0-9\-\+\s\(\)]+$/,
                                        message: 'Please enter a valid phone number',
                                    },
                                })}
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                className="w-full px-4 py-2 border border-[#ECEDF3] rounded-lg focus:outline-none focus:border-[#0B33B1] transition-colors"
                            />
                            {errors.phoneNumber && (
                                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
                            )}
                        </div>
                    </section>
                </section>

                {/* Submit Button */}
                <div className="flex gap-4 max-w-2xl mx-auto">
                    <button
                        type="submit"
                    className='bg-[#2D60FF] rounded-full w-full text-white font-semibold text-sm py-2'
                    >
                        Continue
                    </button>
                </div>
            </section>
        </form>
    );
}
