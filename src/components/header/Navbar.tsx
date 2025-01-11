"use client"
import { Pages, Routes } from '@/constants/enums'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import { Menu, XIcon } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const links = [
        { id: crypto.randomUUID(), title: "Menu", href: Routes.MENU },
        { id: crypto.randomUUID(), title: "About", href: Routes.ABOUT },
        { id: crypto.randomUUID(), title: "Contact", href: Routes.CONTACT },
        { id: crypto.randomUUID(), title: "Login", href: `${Routes.AUTH}/${Pages.LOGIN}` },
    ]

    return (
        <nav className='flex-1 justify-end flex'>
            <Button
                variant="secondary"
                size="sm"
                className='lg:hidden mr-4'
                onClick={() => setOpenMenu(!openMenu)}
            >
                {openMenu ? <XIcon className='!w-6 !h-6' /> : <Menu className='!w-6 !h-6' />}
            </Button>
            <ul className={`px-10 ${openMenu ? 'left-0 z-50' : '-left-full'} lg:flex-row flex-col py-20 fixed top-0 lg:static flex items-start lg:items-center gap-5 lg:p-0 bg-background transition-all`}>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link
                            className={
                                `${link.href === `${Routes.AUTH}/${Pages.LOGIN}` ? `${buttonVariants({ size: "lg" })} rounded-3xl`
                                    :
                                    'hover:text-primary px-3  py-2 transition cursor-pointer'}`} href={`/${link.href}`}>{link.title}</Link>
                    </li>
                ))}
                <li>
                    <Link className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                        className: "hover:bg-slate-100 rounded-3xl"
                    })} href="/register">Register</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar