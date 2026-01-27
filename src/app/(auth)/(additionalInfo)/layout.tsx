import Image from 'next/image'
import React from 'react'

export default function AdditionalInfoLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen  p-4 flex-1 bg-[#F5F7FA]">
            <section className="flex gap-2">
                <Image
                    src='/icons/logo.svg'
                    alt='logo'
                    height={5}
                    width={10}
                    className='h-6 w-auto'
                />
                <span className='text-xl font-bold text-[#0B33B1]'>TermSheetGenie</span>
            </section>
            {children}
        </main>
    )
}
