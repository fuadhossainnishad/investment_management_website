import Image from 'next/image'
import React from 'react'

export default function Ecosystem() {
    return (
        <section className=" px-6 py-12 md:py-20 md:px-12 w-full">
            <div className="container ">
                <div className="overflow-hidden rounded-3xl border border-[#D1E2F5] bg-white">
                    <div className="flex justify-evenly items-center gap-8 px-6 py-12 md:gap-12 md:flex-row md:items-start md:px-16 lg:py-20">
                        {/* Illustration */}
                        <div className="w-full max-w-xs md:max-w-sm">
                            <Image
                                height={100}
                                width={100}
                                src="/images/ecosystem.svg"
                                alt="Handshake illustration"
                                className="h-auto w-full"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex  flex-col gap-6 md:gap-10 lg:max-w-2xl">
                            <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-neutral-text md:text-4xl lg:text-5xl">
                                Built for the Venture Capital Ecosystem
                            </h2>
                            <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/80 md:text-lg">
                                Whether you are a VC fund,
                                a brand new entrepreneur or a Series C start-up,
                                Term Sheet Genie can help you negotiate smarter deals,
                                simulate exit scenarios, and manage multiple investment rounds
                                , all in one place.
                            </p>
                            <button className="bg-linear-to-l w-fit from-[#1B3A99] via-[#2D60FF] to-[#1B3A99] shadow-brand flex items-center justify-center rounded-4xl border border-[#2648B5] px-6 py-3 text-[15px] font-medium leading-5 text-[#F5F6FA] transition-transform hover:scale-105">
                                Start free trial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
