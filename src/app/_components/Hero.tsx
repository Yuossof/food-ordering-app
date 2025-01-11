import { buttonVariants } from '@/components/ui/button'
import { Routes } from '@/constants/enums'
import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <section className='w-full flex justify-center section-gap'>
            <div className='container grid grid-cols-1 md:grid-cols-2'>
                <div className='md:py-12'>
                    <h1 className='text-4xl font-semibold'>Slice into Happiness</h1>
                    <p className='text-accent my-4'>
                        Craving pizza? We&apos;ve got you covered with fresh ingredients, endless falvors, and the fastest delivery.
                        Your perfect slice is just a tap away!
                    </p>
                    <div className='flex items-center gap-4'>
                        <Link
                            className={`${buttonVariants({ size: 'lg' })} space-x-2 !px-4 !rounded-full uppercase`}
                            href={`/${Routes.MENU}`}>
                            Order Now
                            <ArrowRightCircle className={`!h-5 !w-5`} />
                        </Link>
                        <Link
                            className={`flex gap-2 items-center text-black hover:text-primary transition-colors duration-200 font-semibold`}
                            href={`/${Routes.ABOUT}`}>
                            Order Now
                            <ArrowRightCircle className={`!h-5 !w-5`} />
                        </Link>
                    </div>
                </div>
                <div className='relative hidden md:block'>
                    <Image src='/assets/images/pizza.png' fill loading='eager' alt='Pizza' priority className='object-contain' />
                </div>
            </div>
        </section>
    )
}

export default Hero