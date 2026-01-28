'use client'
import React, { useState } from 'react'
import Image from 'next/image'

type InvestmentRow = {
    id: number
    company: {
        name: string
        email: string
        logo?: string
    }
    status: 'Active' | 'Closed' | 'Open' | string
    description: string
    amount: string
}

const sampleData: InvestmentRow[] = [
    {
        id: 1,
        company: { name: 'Acme Corp', email: 'hello@acme.com', logo: '/images/avatar.png' },
        status: 'Active',
        description: 'Series A investor focusing on infrastructure.',
        amount: '$2,500'
    },
    {
        id: 2,
        company: { name: 'Beta Labs', email: 'contact@betalabs.com', logo: '/images/avatar.png' },
        status: 'Open',
        description: 'Seed stage, consumer apps.',
        amount: '$750'
    }
]

export default function InvestmentSection() {
    const [open, setOpen] = useState<boolean>(true)
    return (
        <section className=" bg-white rounded-xl">
            <section
                className=' flex w-full justify-between items-center border-b border-[#E9EAEB] h-fit px-6 py-6'>
                <section
                    onClick={() => setOpen(!open)}
                    className='flex gap-3 items-start cursor-pointer'>
                    <Image
                        src='/icons/down.svg'
                        alt='nav'
                        width={20}
                        height={20}
                        className='mt-1'
                    // style={{
                    //     filter: activeNav === nav.id
                    //         ? `brightness(0) saturate(100%) invert(33%) sepia(93%) saturate(1300%) hue-rotate(228deg) brightness(104%) contrast(104%)`
                    //         : `brightness(0) saturate(100%) invert(49%) sepia(11%) saturate(381%) hue-rotate(179deg) brightness(97%) contrast(92%)`
                    // }}
                    />
                    <div className='space-y-3'>
                        <div className='text-lg text-[#181D27] font-semibold'>Investments</div>
                        <div className='text-sm text-[#535862] font-normal'>Companies that this fund has invested in</div>
                    </div>
                </section>
                <div className='flex gap-2 items-center rounded-2xl bg-[#2D60FF] w-fit  px-3 py-2'>
                    <Image
                        src='/icons/create.svg'
                        alt='nav'
                        width={20}
                        height={20}
                        className=''
                    // style={{
                    //     filter: activeNav === nav.id
                    //         ? `brightness(0) saturate(100%) invert(33%) sepia(93%) saturate(1300%) hue-rotate(228deg) brightness(104%) contrast(104%)`
                    //         : `brightness(0) saturate(100%) invert(49%) sepia(11%) saturate(381%) hue-rotate(179deg) brightness(97%) contrast(92%)`
                    // }}
                    />
                    <span className=" text-sm text-white font-semibold leading-[100%] tracking-[-0.04em] text-brand-blue-darker">
                        New Portfolio Company
                    </span>
                </div>
            </section>
            {open && (
                <section>
                    <section className='w-full border-b border-[#E9EAEB] h-fit px-6 py-4'>

                        <div className='flex items-center gap-2 border-2 w-full rounded-md border-[#E9EAEB] p-3'>
                            <Image
                                src='/icons/search.svg'
                                alt='nav'
                                width={16}
                                height={16}
                                className=''
                            // style={{
                            //     filter: activeNav === nav.id
                            //         ? `brightness(0) saturate(100%) invert(33%) sepia(93%) saturate(1300%) hue-rotate(228deg) brightness(104%) contrast(104%)`
                            //         : `brightness(0) saturate(100%) invert(49%) sepia(11%) saturate(381%) hue-rotate(179deg) brightness(97%) contrast(92%)`
                            // }}
                            />
                            <input
                                type="text"
                                placeholder='Filter investments'
                                className='w-full text-[#949EA9] text-sm appearance-none outline-none'
                            />
                        </div>
                    </section>
                    <section className="overflow-x-auto">
                        <table className="min-w-full bg-white rounded-lg shadow-sm overflow-hidden">
                            <thead className="bg-white">
                                <tr className="border-b border-[#E9EAEB]">
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#535862] leading-4.5">Company</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#535862] leading-4.5">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#535862] leading-4.5">Description</th>
                                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#535862] leading-4.5">Documents</th>
                                    <th className="px-6 py-3 text-right text-xs font-semibold text-[#535862] leading-4.5">Investment Amount</th>
                                </tr>
                            </thead>

                            <tbody>
                                {sampleData.map((row) => (
                                    <tr key={row.id} className="border-b last:border-b-0 border-[#E9EAEB] hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="shrink-0 w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                                                    <Image src={row.company.logo || '/images/company-placeholder.png'} alt={`${row.company.name} logo`} width={40} height={40} className="object-cover" />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-sm font-medium text-[#181D27] leading-5">{row.company.name}</div>
                                                    <div className="text-sm text-[#6B7280] truncate">{row.company.email}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className={
                                                `inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${row.status === 'Active' ? 'bg-green-100 text-green-800' : row.status === 'Open' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`
                                            }>{row.status}</span>
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="text-sm text-[#181D27] leading-5">{row.description}</div>
                                        </td>

                                        <td className="px-6 py-4">
                                            <Image src='/icons/documents_inactive.svg' alt='documents' width={20} height={20} className="object-cover" />
                                        </td>

                                        <td className="px-6 py-4 text-right">
                                            <div className="text-sm font-medium text-[#181D27] leading-5">{row.amount}</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </section>)}
        </section>
    )
}
