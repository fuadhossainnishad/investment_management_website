import React from 'react'

export interface FundCardProps {
    id: number
    fund: string
    title: string
}

export default function FundCard({ id, fund, title }: FundCardProps) {
    const showDollar = !(id === 3 || id === 4)

    return (
        <main className="space-y-4 p-4 bg-white rounded-xl hover:shadow-md transition">
            <div className="bg-[#F9F5FF] w-fit px-3 py-1 rounded-full border border-[#E9D7FE] text-xs text-[#6941C6] font-medium">
                Label
            </div>

            <div className="text-5xl text-black font-normal wrap-break-words mt-10">
                {showDollar ? `$${fund}` : fund}
            </div>

            <div className="text-xs text-[#8899B2] font-medium">
                {title}
            </div>
        </main>
    )
}
