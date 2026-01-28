import React from 'react'
import Sidebar from './_components/Sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='h-screen flex bg-[#B2DDFF]/20'>
            <Sidebar />
            <section className='flex-1 h-full p-12 overflow-auto'> {children}</section>
        </main>
    )
}
