import { title } from 'process'
import React from 'react'
import { clsx } from 'clsx';

export interface InvestmentsSimulationCardProps {
    title: string,
    desc: string,
    scenario: number
}
export default function InvestmentsSimulationCard({ title, desc, scenario }: InvestmentsSimulationCardProps) {
    return (
        <main className='space-y-4 p-4 bg-white rounded-xl hover:shadow hover:shodow-md'>
            <div className='text-[#113264] text-sm font-bold text-wrap'>{title}</div>
            <div className='text-xs text-[#8899B2] font-normal text-wrap'>{desc}</div>
            <div className='bg-[#B2DDFF] w-fit px-2 py-1 rounded-full text-xs text-[#6941C6] font-medium '>{scenario} scenario</div>
        </main>
    )
}
