import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

export interface IKeyFeatureProps {
    icon: string | StaticImport
    title: string
    desc: string
    isSelected?: boolean
}

export default function KeyFeatureCard({ icon, title, desc, isSelected = false }: IKeyFeatureProps) {

    return (
        <main
            className={`w-full h-full shadow-xs space-y-4 bg-[#FFFFFF] p-6 rounded-xl cursor-pointer transition-all duration-200 ${isSelected
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
            <div className='font-bold text-[#113264] text-lg text-wrap'>{title}</div>
            <div className='text-base text-[#8899B2] text-wrap'>{desc}</div>
        </main>
    )
}
