'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const sidebarNavs = [
    {
        id: 1,
        name: 'Homepage',
        activeIcon: '/icons/home_active.svg',
        inactiveIcon: '/icons/home_inactive.svg',
        href: '/home'
    },
    {
        id: 2,
        name: 'My Funds',
        activeIcon: '/icons/myfunds_active.svg',
        inactiveIcon: '/icons/myfunds_inactive.svg',
        href: '/myfunds'
    },
    {
        id: 3,
        name: 'Limited Partners',
        activeIcon: '/icons/limitedpartner_active.svg',
        inactiveIcon: '/icons/limitedpartner_inactive.svg',
        href: '/home'

    },
    {
        id: 4,
        name: 'Startups',
        activeIcon: '/icons/startups_active.svg',
        inactiveIcon: '/icons/startups_inactive.svg',
        href: '/home'

    },
    {
        id: 5,
        name: 'Investment Pipeline',
        activeIcon: '/icons/investments_active.svg',
        inactiveIcon: '/icons/investments_inactive.svg',
        href: '/home'

    },
    {
        id: 6,
        name: 'simulator',
        activeIcon: '/icons/simulator_active.svg',
        inactiveIcon: '/icons/simulator_inactive.svg',
        href: '/home'

    },
    {
        id: 7,
        name: 'Documents',
        activeIcon: '/icons/documents_active.svg',
        inactiveIcon: '/icons/documents_inactive.svg',
        href: '/home'

    }
]

export default function Sidebar() {
    const [activeNav, setActiveNav] = useState<number | null>(1)
    const [openNav, setOpenNav] = useState(true)
    const [openSettings, setOpenSettings] = useState(false)

    const activeColor = '#2D60FF'
    const inactiveColor = '#717E8C'

    return (
        <aside className='h-full bg-white left-0  flex flex-col items-center  overflow-y-auto'>
            <main className=' pt-12 space-y-12 rounded-r-xl'>
                <section className={`flex w-full px-8 items-center gap-16 ${openNav ? 'justify-between' : 'justify-end'}`}>
                    {openNav && <div className="flex items-end gap-5">
                        <Image
                            src='/icons/logo.svg'
                            alt='nav'
                            width={20}
                            height={20}
                            className=''
                            // style={{
                            //     filter: activeNav === nav.id
                            //         ? `brightness(0) saturate(100%) invert(33%) sepia(93%) saturate(1300%) hue-rotate(228deg) brightness(104%) contrast(104%)`
                            //         : `brightness(0) saturate(100%) invert(49%) sepia(11%) saturate(381%) hue-rotate(179deg) brightness(97%) contrast(92%)`
                            // }}
                            onClick={() => setOpenNav(!openNav)}
                        />
                        <span className=" text-xs text-[#0B33B1] font-semibold leading-[100%] tracking-[-0.04em] text-brand-blue-darker">
                            TermSheetGenie
                        </span>
                    </div>}

                    <Image
                        src='/icons/sidebar.svg'
                        alt='nav'
                        width={20}
                        height={20}
                        className=''
                        // style={{
                        //     filter: activeNav === nav.id
                        //         ? `brightness(0) saturate(100%) invert(33%) sepia(93%) saturate(1300%) hue-rotate(228deg) brightness(104%) contrast(104%)`
                        //         : `brightness(0) saturate(100%) invert(49%) sepia(11%) saturate(381%) hue-rotate(179deg) brightness(97%) contrast(92%)`
                        // }}
                        onClick={() => setOpenNav(!openNav)}
                    />
                </section>
                <nav className='flex flex-col gap-6 w-full '>
                    {sidebarNavs.map((nav) => (
                        <Link href={nav.href}
                            key={nav.id}
                            onClick={() => {
                                setActiveNav(nav.id)
                                setOpenSettings(false)
                            }
                            }
                            className='relative flex items-center gap-6 w-full px-8 py-3 transition-all duration-300'
                            style={{
                                color: activeNav === nav.id ? activeColor : inactiveColor
                            }}
                        >
                            {/* Left Marker */}
                            {activeNav === nav.id && (
                                <div
                                    className='absolute left-0 w-1 h-full rounded-r-md'
                                    style={{ backgroundColor: activeColor }}
                                />
                            )}

                            {/* Icon */}
                            <Image
                                src={activeNav === nav.id ? nav.activeIcon : nav.inactiveIcon}
                                alt={nav.name}
                                width={20}
                                height={20}
                                style={{
                                    filter: activeNav === nav.id
                                        ? `brightness(0) saturate(100%) invert(33%) sepia(93%) saturate(1300%) hue-rotate(228deg) brightness(104%) contrast(104%)`
                                        : `brightness(0) saturate(100%) invert(49%) sepia(11%) saturate(381%) hue-rotate(179deg) brightness(97%) contrast(92%)`
                                }}
                            />

                            {/* Text */}
                            {
                                openNav &&
                                <span className='font-medium text-xs'>{nav.name}</span>
                            }

                        </Link>
                    ))}
                </nav>
                <section>
                    <nav className='flex flex-col gap-6 w-full '>
                        <button
                            onClick={() => {
                                setOpenSettings(true)
                                setActiveNav(null)
                            }}
                            className='relative flex items-center gap-6 w-full px-8 py-3 transition-all duration-300'
                        // style={{
                        //     color: activeNav === nav.id ? activeColor : inactiveColor
                        // }}
                        >
                            {/* Left Marker */}
                            {openSettings && (
                                <div
                                    className='absolute left-0 w-1 h-full rounded-r-md'
                                    style={{ backgroundColor: activeColor }}
                                />
                            )}

                            {/* Icon */}
                            <Image
                                src='/icons/settings_inactive.svg'
                                alt=''
                                width={20}
                                height={20}
                                style={{
                                    filter: openSettings === true
                                        ? `brightness(0) saturate(100%) invert(33%) sepia(93%) saturate(1300%) hue-rotate(228deg) brightness(104%) contrast(104%)`
                                        : `brightness(0) saturate(100%) invert(49%) sepia(11%) saturate(381%) hue-rotate(179deg) brightness(97%) contrast(92%)`
                                }}
                            />

                            {/* Text */}
                            {
                                openNav &&
                                <span className='font-medium text-xs'>settings</span>
                            }

                        </button>
                    </nav>
                </section>
            </main>
        </aside >
    )
}
