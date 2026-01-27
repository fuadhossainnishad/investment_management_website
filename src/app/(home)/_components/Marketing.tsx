import React from 'react'

export default function Marketing() {
    return (
        <main className='bg-[#1B3A99] rounded-3xl text-white w-full space-y-8 py-16'>
            <section className='flex flex-col items-center  space-y-8'>
                <div className="container w-full leading-[120%] text-wrap text-center text-4xl font-bold mx-10  px-6  ">
                    Ready to streamline your investment process?
                </div>
                <div className="container w-1/2 leading-[150%] text-wrap text-center text-lg font-normal px-6">
                    Join leading venture capital firms using TermSheetGenie to make better investment decisions.                </div>
            </section>
            <section className='flex gap-2 w-full justify-center font-bold'>
                <button className="bg-[#ffffff] shadow-brand flex items-center justify-center rounded-4xl border border-[#2648B5] px-6 py-3 text-[15px] leading-5 text-[#1B3A99] transition-transform hover:scale-105">

                    Request a Demo
                </button>
                <button className="bg-[#1B3A99] shadow-brand flex items-center justify-center rounded-4xl border-2 border-[#ffffff] px-6 py-3 text-[15px] leading-5 text-[#F5F6FA] transition-transform hover:scale-105">
                    Sign Up Free
                </button>
            </section>

        </main>
    )
}
