import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

export interface IRoleSelectionProps {
    icon: string | StaticImport
    title: string
    desc: string
    isSelected?: boolean
}

export default function RoleSelectionCard({ icon, title, desc, isSelected = false }: IRoleSelectionProps) {

    return (
        <main
            className={`w-full space-y-4 bg-[#FFFFFF] p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                isSelected
                    ? 'border-[3px] border-[#2D60FF]'
                    : 'border border-[#ECEDF3]'
            }`}
        >
            <Image
                src={icon}
                alt={title}
                height={20}
                width={20}
                className=''
            />
            <div className='font-bold text-[#113264]'>{title}</div>
            <div className='text-xs text-[#8899B2]'>{desc}</div>
        </main>
    )
}
