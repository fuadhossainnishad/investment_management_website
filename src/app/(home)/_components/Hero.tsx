import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <main className='bg-linear-to-b from-[#F5F6FA] to-[#D8DEF3] h-screen '>
            <section className='flex flex-col items-center space-y-8 '>
                <div className="container max-w-1/2 leading-[120%] text-wrap text-center  text-[#1B1E28] text-5xl font-bold mx-auto  px-6  md:py-20">
                    Simulate and manage investment rounds with precision and ease
                </div>
                <button className="bg-linear-to-l from-[#1B3A99] via-[#2D60FF] to-[#1B3A99] shadow-brand flex items-center justify-center rounded-4xl border border-[#2648B5] px-6 py-3 text-[15px] font-medium leading-5 text-[#F5F6FA] transition-transform hover:scale-105">
                    Calculate your series now
                </button>
            </section>
            <section className='mt-[6%] flex justify-center'>
                <Image
                    src="/images/hero_image.svg"
                    alt="Hero Image"
                    width={1200}
                    height={600}
                />
            </section>
        </main>
    )
}
