import React from 'react'
import KeyFeatureCard, { IKeyFeatureProps } from './FeatureCard'

const KeyFeatureData: IKeyFeatureProps[] = [
    {
        icon: '/icons/investor.svg',
        title: 'Advanced Simulations',
        desc: 'Model multiple investment scenarios and understand the impact on ownership, dilution, and returns.'
    },
    {
        icon: '/icons/entrepreneur.svg',
        title: 'Clear Projections',
        desc: 'Visualize future funding rounds and their effects on your cap table with precision and clarity.'
    },
    {
        icon: '/icons/student.svg',
        title: 'Efficient Management',
        desc: 'Manage your portfolio and term sheets in one place, built for the venture capital ecosystem.'
    }
]

export default function KeyFeature() {
    return (
        <section id="features" className="w-full  ">
            <div className="container ">
                <h2 className="mb-8 text-center text-base font-semibold leading-tight tracking-tight text-neutral-text md:mb-12 md:text-xl lg:text-4xl">
                    Key Features
                </h2>

                <section className='flex gap-5 w-full'>
                    {KeyFeatureData.map((feat, i) => (
                        <div key={i} >
                            <KeyFeatureCard
                                icon={feat.icon}
                                title={feat.title}
                                desc={feat.desc}
                            />
                        </div>
                    ))}
                </section>
            </div>
        </section>
    )
}
