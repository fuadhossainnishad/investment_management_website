import React from 'react'

export default function GetInTouch() {
    return (
        <section id="contact" className=" px-6 py-12 md:py-20 md:px-12 w-full">
            <div className="px-20">
                <div className="overflow-hidden rounded-3xl  bg-white shadow-2xl">
                    <div className="flex flex-col items-center gap-8 px-6 py-8 md:gap-12 md:px-12 md:py-12">
                        {/* Header */}
                        <div className="flex max-w-2xl flex-col gap-3 md:gap-4">
                            <h2 className="text-center text-3xl font-bold leading-tight tracking-tight text-neutral-text md:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="text-center text[#1B1E28]/70 text-base font-normal leading-relaxed tracking-normal text-neutral-text/70 md:text-xl">
                                Please fill out the form below and we will get back to you as
                                soon as possible.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="flex w-full max-w-2xl flex-col gap-3 md:gap-4">
                            <div className="flex flex-col gap-3 md:flex-row md:gap-4">
                                <input
                                    type="text"
                                    placeholder="First name"
                                    className="bg-[#EDEFF2] flex-1 rounded-lg bg-neutral-bg-input px-4 py-3 text-sm font-normal leading-relaxed text-neutral-text placeholder:text-neutral-text/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-shadow"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name"
                                    className="bg-[#EDEFF2] flex-1 rounded-lg bg-neutral-bg-input px-4 py-3 text-sm font-normal leading-relaxed text-neutral-text placeholder:text-neutral-text/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-shadow"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-[#EDEFF2] w-full rounded-lg bg-neutral-bg-input px-4 py-3 text-sm font-normal leading-relaxed text-neutral-text placeholder:text-neutral-text/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-shadow"
                            />
                            <textarea
                                placeholder="Message"
                                rows={5}
                                className="bg-[#EDEFF2] w-full rounded-lg bg-neutral-bg-input px-4 py-3 text-sm font-normal leading-relaxed text-neutral-text placeholder:text-neutral-text/50 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 transition-shadow resize-none"
                            />
                            <button
                                type="submit"
                                className="bg-linear-to-l from-[#1B3A99] via-[#2D60FF] to-[#1B3A99] shadow-brand self-start rounded-full border border-brand-blue-border px-8 py-3 text-sm font-semibold leading-snug text-white transition-transform duration-200 hover:scale-105 active:scale-95 md:text-base"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
