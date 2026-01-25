import Image from 'next/image'
import React from 'react'

export default function KeyFeature() {
    return (
        <section id="features" className="w-full px-6 py-12 md:py-20 md:px-12">
            <div className="container ">
                <h2 className="mb-8 text-center text-3xl font-bold leading-tight tracking-tight text-neutral-text md:mb-12 md:text-4xl lg:text-5xl">
                    Key Features
                </h2>

                {/* Bento Grid with Custom Width Distribution */}
                <div className="flex flex-col gap-4 md:gap-6">
                    {/* Row 1: 60% + 40% */}
                    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-5">
                        {/* Advanced Simulations - 60% width */}
                        <div className="bg-[#EBEDF2] flex min-h-80 flex-col overflow-hidden rounded-2xl bg-neutral-bg-card p-6 md:p-8 lg:col-span-3 lg:min-h-120">
                            <div className="flex flex-col gap-2 pb-6 md:pb-8">
                                <h3 className="text-2xl font-bold leading-tight tracking-tight text-neutral-text md:text-[28px]">
                                    Advanced Simulations
                                </h3>
                                <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-lg">
                                    Understand dilution and effective ownership under different
                                    exit scenarios
                                </p>
                            </div>
                            <Image
                                src='/images/simulation.svg'
                                alt='simulation'
                                height={100}
                                width={100}
                                className='w-full h-auto'
                            />
                        </div>

                        {/* Clear Projections - 40% width */}
                        <div className="bg-[#EBEDF2] flex flex-col overflow-hidden rounded-2xl bg-neutral-bg-card p-6 md:p-8 lg:col-span-2">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-bold leading-tight tracking-tight text-neutral-text md:text-[28px]">
                                    Clear Projections
                                </h3>
                                <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-lg">
                                    Estimate the value of the legal terms you are agreeing to,
                                    beyond an oversimplified percentage of a post-money
                                    valuation
                                </p>
                            </div>
                            <div className="mt-6 flex flex-1 items-center justify-center p-4 md:mt-8 md:p-8">
                                <div className="flex flex-col items-center gap-6 rounded-3xl bg-white px-6 py-8 shadow-md md:gap-8 md:px-8 md:py-10">
                                    <div className="text-center text-xl font-normal leading-[100%] text-black opacity-50">
                                        Breakeven Valution
                                    </div>
                                    <div className="text-[63px] text-[#2D60FF] font-bold leading-[100%] text-brand-blue">
                                        $50.05M
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: 40% + 60% */}
                    <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-5 h-120 overflow-hidden rounded-lg">
                        {/* Abstraction - 40% width */}
                        <div className="bg-[#EBEDF2] flex flex-col overflow-hidden rounded-2xl bg-neutral-bg-card p-6 md:p-8 lg:col-span-2 lg:min-h-96">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-bold leading-tight tracking-tight text-neutral-text md:text-[28px]">
                                    Abstraction
                                </h3>
                                <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-lg">
                                    Understand your investments from detailed term sheet to a
                                    fund of funds level
                                </p>
                            </div>
                            <div className='w-full flex flex-col items-center'>
                                <div className='w-[70%] pt-10'>
                                    <p className='text-[#2D60FF]'>Investment Type</p>

                                    <div className=" flex  flex-col gap-3 w-full">
                                        {["Common", "RP+C", "CP", "PCP", "PCPC"].map((type) => (
                                            <div
                                                key={type}
                                                className="flex items-center gap-3 rounded-2xl border border-[#2D60FF33] bg-white px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
                                            >
                                                <span className="text-center text-lg font-medium leading-snug tracking-tight text-neutral-text md:text-xl">
                                                    {type}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Efficient Management - 60% width */}
                        <div className="bg-[#EBEDF2] flex flex-col  rounded-2xl bg-neutral-bg-card pl-6 pt-6 md:pl-8 lg:col-span-3 relative">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-2xl font-bold leading-tight tracking-tight text-neutral-text md:text-[28px]">
                                    Efficient Management
                                </h3>
                                <p className="text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-lg">
                                    Manage your investments and gain insights into the value of
                                    your entire portfolio.
                                </p>
                            </div>
                            <div className="mt-8 flex flex-1 items-end justify-end overflow-hidden relative">
                                <Image
                                    height={100}
                                    width={100}
                                    src="/images/management.png"
                                    alt="Portfolio management interface"
                                    className="h-full w-full object-cover ml-[25%]"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
