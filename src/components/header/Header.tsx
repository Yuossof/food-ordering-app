import React from 'react'
import Link from 'next/link'
import { Routes } from '@/constants/enums'
import Navbar from './Navbar'

const Header = () => {
    return (
        <header className='w-full flex justify-center'>
            <div className="container flex items-center justify-between py-4">
                <Link className='text-primary font-semibold text-2xl' href={Routes.ROOT} prefetch={false}>Pizza</Link>
                <Navbar />
            </div>
        </header>
    )
}

export default Header