import React from 'react'
import InvestmentsSimulationCard from './_components/FundCard';
import InvestmentSection from './_components/InvestmentSection';

const SavedsimulationData = [
    {
        id: 1,
        title: "Committed Capital",
        fund: "50000",
    },
    {
        id: 2,
        title: "Invested Capital",
        fund: "50000",
    },
    {
        id: 3,
        title: "AUM Excluding Dry Powder",
        fund: "50000",
    },
    {
        id: 4,
        title: "TSG NPV",
        fund: "50000",
    }
]

export default function MyfundsPage() {
    return (
        <main className='space-y-10'>
            <section className='space-y-4'>
                <section className='flex w-full justify-between items-center h-fit '>
                    <div className='text-2xl font-normal'>TSG Seed</div>

                </section>
                <section className='grid grid-cols-4 grid-rows-1 gap-6'>
                    {SavedsimulationData.map((sim) => (
                        <InvestmentsSimulationCard
                            key={sim.id}
                            id={sim.id}
                            title={sim.title}
                            fund={sim.fund}
                        />
                    ))}
                </section>
            </section>
            <InvestmentSection />
            {/* <section className='space-y-4'>
                <section className='flex w-full justify-between items-center h-fit '>
                    <div className='text-lg font-semibold'>My Funds</div>
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
                            Add New Fund
                        </span>
                    </div>
                </section>
                <div className='overflow-x-auto rounded-lg shadow-sm'>
                    <table className='w-full bg-white'>
                        <thead>
                            <tr className='bg-white border-b border-[#E9EAEB]'>
                                <th className='px-6 py-4 text-left text-xs font-semibold text-[#535862] leading-4.5'>Fund Name</th>
                                <th className='px-6 py-4 text-left text-xs font-semibold text-[#535862] leading-4.5'>Initiation Date</th>
                                <th className='px-6 py-4 text-left text-xs font-semibold text-[#535862] leading-4.5'>Committed Capital</th>
                                <th className='px-6 py-4 text-left text-xs font-semibold text-[#535862] leading-4.5'>Invested Capital</th>
                                <th className='px-6 py-4 text-left text-xs font-semibold text-[#535862] leading-4.5'># of Investments</th>
                                <th className='px-6 py-4 text-left text-xs font-semibold text-[#535862] leading-4.5'>Status</th>
                                <th className='px-6 py-4 text-left text-xs font-semibold text-[#535862] leading-4.5'>Lead Partner</th>
                                <th className='px-6 py-4 text-left text-xs font-semibold text-[#535862] leading-4.5'>Current AUM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-[#E9EAEB] hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4 text-sm font-semibold text-[#181D27] leading-5'>Technology Fund I</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>2/1/2025</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>$50M</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>$35M</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>8</td>
                                <td className='px-6 py-4 text-sm'>
                                    <span className='inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold'>Active</span>
                                </td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>Venture Partners</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>$42M</td>
                            </tr>
                            <tr className='border-b border-[#E9EAEB] hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4 text-sm font-semibold text-[#181D27] leading-5'>Growth Fund II</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>2/1/2025</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>$75M</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>$28M</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>5</td>
                                <td className='px-6 py-4 text-sm'>
                                    <span className='inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold'>Active</span>
                                </td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>Capital Ventures</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>$68M</td>
                            </tr>
                            <tr className='border-b border-[#E9EAEB] hover:bg-gray-50 transition-colors'>
                                <td className='px-6 py-4 text-sm font-semibold text-[#181D27] leading-5'>Seed Fund III</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>2/1/2025</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>$25M</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>$12M</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>3</td>
                                <td className='px-6 py-4 text-sm'>
                                    <span className='inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold'>Open</span>
                                </td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>Seed Partners</td>
                                <td className='px-6 py-4 text-sm font-medium text-[#181D27] leading-5'>$15M</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section> */}

        </main>
    )
}
