'use client'
import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import RoleSelectionCard, { IRoleSelectionProps } from './_components/RoleSelectionCard';
import { useRouter } from 'next/navigation';

interface RoleFormData {
    role: string;
}

interface RoleData extends IRoleSelectionProps {
    id: string;
}

const RoleSelectionData: RoleData[] = [
    {
        id: 'investor',
        icon: '/icons/investor.svg',
        title: 'As an Investor',
        desc: 'Manage all your investments in one place. From detailed deal by deal analysis, to full fund and cross-fund metrics.'
    },
    {
        id: 'entrepreneur',
        icon: '/icons/entrepreneur.svg',
        title: 'As an Entrepreneur',
        desc: 'Manage all your investments in one place. From detailed deal by deal analysis, to full fund and cross-fund metrics.'
    },
    {
        id: 'student',
        icon: '/icons/student.svg',
        title: 'As a Student',
        desc: 'Manage all your investments in one place. From detailed deal by deal analysis, to full fund and cross-fund metrics.'
    }
]

export default function Page() {
    const [selectedRole, setSelectedRole] = useState<string>('');
    const router = useRouter()
    const { setValue } = useForm<RoleFormData>({
        defaultValues: {
            role: '',
        },
    });

    const handleRoleSelect = useCallback((roleName: string) => {
        setSelectedRole(roleName);
        setValue('role', roleName);
    }, [setValue]);

    const handlesubmit = (e: React.FormEvent) => {
        e.preventDefault()
        router.push('/additionalInfo')
    }

    return (

        <form
            onSubmit={handlesubmit}
            className='flex-1 h-full w-full flex flex-col justify-center items-center'
        >
            <section className='w-1/6 space-y-3 '>
                <div className='font-semibold w-full text-center'>Select how you want to use Term Sheet Genie</div>
                <section className='space-y-6 w-full'>
                    {RoleSelectionData.map((role) => (
                        <div key={role.id} onClick={() => handleRoleSelect(role.id)}>
                            <RoleSelectionCard
                                icon={role.icon}
                                title={role.title}
                                desc={role.desc}
                                isSelected={selectedRole === role.id}
                            />
                        </div>
                    ))}
                </section>
                <button
                    type='submit'
                    className='bg-[#2D60FF] rounded-full w-full text-white font-semibold text-sm py-2'
                >Continue</button>
            </section>
        </form>
    )
}
