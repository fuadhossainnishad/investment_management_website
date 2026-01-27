import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (
        <main className='bg-[#F5F6FA] space-y-8 mt-16'>
            <section className='flex flex-col items-center  space-y-8'>
                <div className="container max-w-[80%]  leading-[120%] text-wrap text-center  text-[#1B1E28] text-[54px] font-bold  px-6  ">
                    Simulate and manage investment rounds with precision and ease
                </div>
                <div className="container max-w-[70%] leading-[150%] text-wrap text-center  text-[#6b7280] text-xl font-bold mx-10  px-6">
                    TermSheetGenie helps venture capital firms and startups model investment scenarios, manage cap tables, and understand the real impact of term sheet decisions.
                </div>
            </section>
            <section className='flex gap-2 w-full justify-center'>
                <button className="bg-[#1B3A99] shadow-brand flex items-center justify-center rounded-4xl border border-[#2648B5] px-6 py-3 text-[15px] font-medium leading-5 text-[#F5F6FA] transition-transform hover:scale-105">
                    Request a Demo
                </button>
                <Link href='/signUp' className="bg-[#ffffff] shadow-brand flex items-center justify-center rounded-4xl border border-[#2648B5] px-6 py-3 text-[15px] font-medium leading-5 text-[#1B3A99] transition-transform hover:scale-105">
                    Get Started Now                </Link>
            </section>

        </main>
    )
}
